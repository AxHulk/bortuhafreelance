import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import iconBrief from "@/assets/process-icon-brief.png";
import iconMeasure from "@/assets/process-icon-measure.png";
import icon3d from "@/assets/process-icon-3d.png";
import iconDocs from "@/assets/process-icon-docs.png";

const steps = [
  { icon: iconBrief, label: "Бриф и знакомство", num: "01" },
  { icon: iconMeasure, label: "Обмеры и планировка", num: "02" },
  { icon: icon3d, label: "3D-визуализация", num: "03" },
  { icon: iconDocs, label: "Рабочая документация", num: "04" },
];

const HomeProcessSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary text-center block mb-4">
          Как мы работаем
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Работаем как часы
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center max-w-xl mx-auto mb-14 leading-relaxed">
          Вы всегда знаете, на каком этапе находится ваш проект и когда будет следующий транш оплаты. Никаких сюрпризов.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center">
              <div className="relative mb-4">
                <img src={step.icon} alt={step.label} className="w-14 h-14 mx-auto object-contain" />
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-border -translate-y-1/2" />
                )}
              </div>
              <span className="font-heading text-2xl font-bold text-primary/40 block mb-1">{step.num}</span>
              <p className="font-body text-xs text-foreground">{step.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/process"
            className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Подробнее об этапах →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProcessSection;
