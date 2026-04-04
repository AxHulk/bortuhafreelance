import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import painImg from "@/assets/home-pain-gain.jpg";

const PainGainSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="pain-gain" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text */}
          <div>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
              Мой подход
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Ремонт не должен быть стрессом.
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Вы боитесь, что картинка не совпадёт с реальностью?
              Что бюджет вырастет в два раза? Что строители не поймут чертежи?
              Мой подход другой.
            </p>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="font-heading text-xl sm:text-2xl font-semibold leading-snug mb-6">
              Реализуемые пространства
              <br />с точно просчитанной сметой.
            </p>
            <Link
              to="/process"
              className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Узнать подробнее об этапах работы →
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="border border-border p-2 rounded-sm">
              <img
                src={painImg}
                alt="Дизайнер за работой — чертежи и материалы"
                className="w-full aspect-[4/5] object-cover object-right rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainGainSection;
