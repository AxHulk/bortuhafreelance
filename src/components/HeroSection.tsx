import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/home-hero.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-end pb-20 lg:pb-24 overflow-hidden">
      <img
        src={heroImg}
        alt="Премиальный интерьер — гостиная с панорамным остеклением"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-background leading-[1.1] mb-6 max-w-3xl">
          Интерьеры,
          <br />
          в которых
          <br />
          хочется жить.
        </h1>
        <p className="font-body text-sm sm:text-base text-background/75 max-w-xl mb-10 leading-relaxed">
          Создаём эстетичные и продуманные пространства
          <br className="hidden sm:block" /> в Симферополе и на Южном берегу Крыма
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/contacts")}
            className="h-12 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Рассчитать стоимость
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="h-12 px-8 rounded-sm border border-background/40 text-background font-body text-sm font-medium tracking-wider uppercase hover:bg-background/10 transition-colors"
          >
            Смотреть портфолио
          </button>
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("pain-gain")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 right-8 hidden lg:flex items-center gap-2 text-background/60 font-body text-xs tracking-wide hover:text-background transition-colors"
      >
        Прокрутите вниз <ChevronDown size={16} />
      </button>
    </section>
  );
};

export default HeroSection;
