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
        title="Дизайнер интерьера в Крыму — Симферополь, Севастополь, Ялта"
        description="Студия дизайна интерьеров: дизайн-проекты квартир и домов, инвестиционный дизайн под сдачу, флиппинг, 3D и AI-визуализация. Симферополь, Севастополь, Ялта, Алушта, Евпатория, Саки."
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
