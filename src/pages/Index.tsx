import Navbar from "@/components/landing/Navbar";
import ScrollHero from "@/components/landing/ScrollHero";
import AiRecipesSection from "@/components/landing/AiRecipesSection";
import ShoppingListSection from "@/components/landing/ShoppingListSection";
import NutritionSection from "@/components/landing/NutritionSection";
import ProblemSection from "@/components/landing/ProblemSection";
import PricingSection from "@/components/landing/PricingSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <ScrollHero />
    <AiRecipesSection />
    <ShoppingListSection />
    <NutritionSection />
    <ProblemSection />
    <PricingSection />
    <DownloadSection />
    <Footer />
  </div>
);

export default Index;

