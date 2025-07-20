import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
