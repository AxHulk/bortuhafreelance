import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainGainSection from "@/components/PainGainSection";
import HomePortfolioSection from "@/components/HomePortfolioSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import HomeProcessSection from "@/components/HomeProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { localBusinessJsonLd, personJsonLd } from "@/lib/seo";
import { QuizBanner } from "@/components/quiz/QuizBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Natali Fursa — дизайнер интерьеров в Симферополе и Крыму"
        description="Авторский дизайн интерьеров жилых и коммерческих пространств в Симферополе, Ялте, Севастополе и на ЮБК. 3 года практики, 40+ реализованных объектов."
        path="/"
        jsonLd={[localBusinessJsonLd, personJsonLd]}
      />
      <Header />
      <HeroSection />
      <PainGainSection />
      <HomePortfolioSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <ReviewsSection />
      <LeadMagnetSection />
      <Footer />
      <QuizBanner />
    </div>
  );
};

export default Index;
