import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const steps = [
  {
    num: "01",
    title: "Брифинг",
    desc: "Знакомство, обсуждение пожеланий, выезд на объект, фиксация технического задания.",
  },
  {
    num: "02",
    title: "Эргономика и планировка",
    desc: "Разработка оптимального планировочного решения с учётом зонирования и функциональности.",
  },
  {
    num: "03",
    title: "Концепция и 3D-визуализация",
    desc: "Формирование стилистической концепции, подбор материалов, фотореалистичные визуализации.",
  },
  {
    num: "04",
    title: "Рабочая документация",
    desc: "Полный комплект чертежей для строительной бригады: развёртки стен, планы потолков, электрика.",
  },
  {
    num: "05",
    title: "Реализация",
    desc: "Авторский надзор за ходом ремонта, контроль соответствия проекту, комплектация объекта.",
  },
];

const WorkflowSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="workflow" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-3xl opacity-0">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Этапы работы
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-16" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-primary bg-background flex items-center justify-center">
                  <span className="font-heading text-sm font-semibold text-primary">{step.num}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
