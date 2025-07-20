import { Target, TrendingUp, Trophy } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Topic-wise Quizzes",
    description: "Practice by category like Arithmetic, Verbal, Logical, and more with curated questions."
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your quiz scores and identify areas for improvement with detailed analytics."
  },
  {
    icon: Trophy,
    title: "Compete with Others",
    description: "Climb the leaderboard and challenge friends to boost your competitive spirit."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Why Choose Our Platform?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover-scale text-center group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-feature rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;