import { Calculator, Brain, BarChart3, MessageSquare, Code, Puzzle, TrendingUp, Search } from "lucide-react";

const categories = [
  { name: "Arithmetic", icon: Calculator, color: "bg-primary/10 text-primary hover:bg-primary/20" },
  { name: "Logical Reasoning", icon: Brain, color: "bg-accent/10 text-accent hover:bg-accent/20" },
  { name: "Data Interpretation", icon: BarChart3, color: "bg-primary/10 text-primary hover:bg-primary/20" },
  { name: "Verbal Ability", icon: MessageSquare, color: "bg-accent/10 text-accent hover:bg-accent/20" },
  { name: "Coding Aptitude", icon: Code, color: "bg-primary/10 text-primary hover:bg-primary/20" },
  { name: "Puzzles", icon: Puzzle, color: "bg-accent/10 text-accent hover:bg-accent/20" },
  { name: "Series Completion", icon: TrendingUp, color: "bg-primary/10 text-primary hover:bg-primary/20" },
  { name: "Analytical Reasoning", icon: Search, color: "bg-accent/10 text-accent hover:bg-accent/20" }
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="bg-muted/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Quiz Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`${category.color} p-6 rounded-xl text-center transition-all duration-300 hover-scale cursor-pointer group shadow-soft hover:shadow-medium`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <category.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm md:text-base">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            More categories coming soon! Choose a topic above to start practicing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;