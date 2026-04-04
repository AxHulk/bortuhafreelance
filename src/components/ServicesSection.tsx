import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Концептуальный",
    price: "от 2 500",
    unit: "₽/м²",
    features: [
      "Обмерный план",
      "Планировочное решение",
      "Концепция стиля",
      "3D-визуализация (2 ракурса)",
      "Подбор основных материалов",
    ],
    highlighted: false,
  },
  {
    name: "Стандартный",
    price: "от 4 000",
    unit: "₽/м²",
    features: [
      "Всё из «Концептуального»",
      "Полный комплект чертежей",
      "3D-визуализация (все помещения)",
      "Подбор мебели и материалов",
      "Ведомость отделки",
      "2 выезда на объект",
    ],
    highlighted: false,
  },
  {
    name: "Премиум",
    price: "от 7 000",
    unit: "₽/м²",
    features: [
      "Всё из «Стандартного»",
      "Авторский надзор",
      "Комплектация «под ключ»",
      "Работа с поставщиками",
      "Индивидуальные предметы декора",
      "Неограниченные выезды",
    ],
    highlighted: true,
  },
];

const ServicesSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Услуги и цены
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-8 transition-shadow duration-300 ${
                plan.highlighted
                  ? "bg-foreground text-background shadow-2xl ring-1 ring-primary"
                  : "bg-card border border-border hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-widest uppercase px-4 py-1 rounded-sm">
                  Популярный
                </span>
              )}

              <h3 className="font-heading text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-3xl font-bold">{plan.price}</span>
                <span className={`text-sm font-body ml-1 ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-primary" : "text-primary"}`} />
                    <span className={`font-body text-sm ${plan.highlighted ? "text-background/80" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full h-10 rounded-sm font-body text-sm font-medium tracking-wide transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Заказать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
