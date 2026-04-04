import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import iconConcept from "@/assets/service-icon-concept.png";
import iconStandard from "@/assets/service-icon-standard.png";
import iconPremium from "@/assets/service-icon-premium.png";

const services = [
  {
    icon: iconConcept,
    name: "Инвестиционный дизайн",
    desc: "Для сдачи в аренду на ЮБК или флиппинга. Быстро, стильно, рентабельно.",
    price: "от 2 500 руб./м²",
    highlighted: false,
  },
  {
    icon: iconStandard,
    name: "Дизайн для жизни",
    desc: "Комплексный проект для вашего дома. От бетона до тапочек.",
    price: "от 4 000 руб./м²",
    highlighted: true,
  },
  {
    icon: iconPremium,
    name: "3D-Визуализация",
    desc: "Для застройщиков и коллег-дизайнеров. Фотореализм, продающий идею.",
    price: "от 3 000 руб./ракурс",
    highlighted: false,
  },
];

const HomeServicesSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary text-center block mb-4">
          Услуги
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12">
          Найдите своё решение
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.name}
              className={`relative rounded-sm p-8 text-center transition-shadow duration-300 ${
                s.highlighted
                  ? "bg-foreground text-background shadow-2xl border border-primary/30"
                  : "bg-card border border-border hover:shadow-lg"
              }`}
            >
              {s.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-widest uppercase px-4 py-1 rounded-sm">
                  Популярный выбор
                </span>
              )}
              <img src={s.icon} alt={s.name} className="w-16 h-16 mx-auto mb-6 object-contain" />
              <h3 className="font-heading text-xl font-semibold mb-3">{s.name}</h3>
              <p className={`font-body text-sm mb-4 leading-relaxed ${s.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <p className={`font-heading text-lg font-bold mb-4 ${s.highlighted ? "text-primary" : ""}`}>
                {s.price}
              </p>
              <Link
                to="/services"
                className={`font-body text-sm hover:underline ${s.highlighted ? "text-primary" : "text-primary"}`}
              >
                Подробнее →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex h-12 px-8 items-center rounded-sm border border-primary text-sm font-body font-medium tracking-wider uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Сравнить тарифы и выбрать свой →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
