import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainGainSection from "@/components/PainGainSection";
import HomePortfolioSection from "@/components/HomePortfolioSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import HomeProcessSection from "@/components/HomeProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainGainSection />
      <HomePortfolioSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <ReviewsSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default Index;
