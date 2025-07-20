import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    categoriesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-6 text-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Practice. Improve. Succeed.
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
          Sharpen your aptitude and reasoning skills with engaging quizzes designed for competitive exams.
        </p>
        <Button 
          onClick={scrollToCategories}
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-4 hover-scale shadow-medium hover:shadow-strong transition-all duration-300"
        >
          Get Started
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;