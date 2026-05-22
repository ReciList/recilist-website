import Navbar from "@/components/landing/Navbar";
import ScrollHero from "@/components/landing/ScrollHero";
import AiRecipesSection from "@/components/landing/AiRecipesSection";
import ShoppingListSection from "@/components/landing/ShoppingListSection";
import NutritionSection from "@/components/landing/NutritionSection";
import CookConfidenceSection from "@/components/landing/CookConfidenceSection";
import ProblemSection from "@/components/landing/ProblemSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <ScrollHero />
    <AiRecipesSection />
    <ShoppingListSection />
    <NutritionSection />
    <CookConfidenceSection />
    <ProblemSection />
    <PricingSection />
    <FinalCtaSection />
    <DownloadSection />
    <Footer />
  </div>
);

export default Index;
