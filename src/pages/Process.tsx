import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { ChevronDown } from "lucide-react";
import iconBrief from "@/assets/process-icon-brief.png";
import iconMeasure from "@/assets/process-icon-measure.png";
import icon3d from "@/assets/process-icon-3d.png";
import iconDocs from "@/assets/process-icon-docs.png";
import iconProcurement from "@/assets/process-icon-procurement.png";
import iconSupervision from "@/assets/process-icon-supervision.png";

const steps = [
  {
    num: "01",
    icon: iconBrief,
    title: "Знакомство и бриф",
    description: "Мы встречаемся на объекте или онлайн. Я не даю вам сухую анкету на 50 вопросов — мы просто разговариваем. Я узнаю ваш образ жизни, привычки, состав семьи и ожидания от бюджета.",
    result: "Подписание договора и составление подробного Технического Задания.",
  },
  {
    num: "02",
    icon: iconMeasure,
    title: "Обмеры и планировка",
    description: "Выезд на объект для точных лазерных замеров с учётом всех инженерных коммуникаций. Разработка 3–4 вариантов планировочного решения. Это фундамент, на котором строится вся эргономика.",
    result: "Утверждённый план расстановки мебели и возведения перегородок.",
  },
  {
    num: "03",
    icon: icon3d,
    title: "Визуализация 3D",
    description: "Самый творческий этап. Я создаю фотореалистичные 3D-визуализации каждого помещения. Вы увидите свой будущий дом до того, как начнётся стройка — с реальными материалами, светом и мебелью.",
    result: "Альбом 3D-рендеров (до 2-х кругов правок).",
  },
  {
    num: "04",
    icon: iconDocs,
    title: "Рабочая документация",
    description: "Перевод красивой картинки на язык строителей. Я готовлю подробный альбом чертежей: электрика, сантехника, развёртки стен, сложные узлы примыканий.",
    result: "Альбом рабочих чертежей (40–60 листов), по которому строители дадут точную смету.",
  },
  {
    num: "05",
    icon: iconProcurement,
    title: "Комплектация",
    description: "Подбор реальных материалов, мебели и сантехники в рамках вашего бюджета. Я составляю подробную таблицу с артикулами, ценами и ссылками на магазины.",
    result: "Спецификация и график закупок.",
  },
  {
    num: "06",
    icon: iconSupervision,
    title: "Авторский надзор",
    description: "Регулярные выезды на объект. Я контролирую, чтобы строители следовали проекту, решаю возникающие вопросы на месте и слежу за соответствием результата задумке.",
    result: "Готовый интерьер, точно как на визуализации.",
  },
];

const faqs = [
  {
    q: "Сколько времени занимает разработка проекта?",
    a: "1,5–2,5 месяца в зависимости от площади и сложности объекта.",
  },
  {
    q: "Можно ли заказать проект, если я нахожусь не в Крыму?",
    a: "Да, возможна удалённая работа, если у вас есть точный обмерный план.",
  },
  {
    q: "Вы работаете со своими строителями?",
    a: "Я могу порекомендовать проверенные бригады в Симферополе и на ЮБК, но вы можете выбрать любых подрядчиков.",
  },
];

const Process = () => {
  const heroRef = useScrollFadeIn();
  const timelineRef = useScrollFadeIn();
  const faqRef = useScrollFadeIn();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2025' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-4xl text-center opacity-0">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Путь к вашему идеальному
            <br />
            <span className="text-primary">пространству</span>
          </h1>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            От первой встречи до финального декора. Прозрачно и предсказуемо.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 lg:pb-32">
        <div ref={timelineRef} className="container mx-auto px-4 lg:px-8 max-w-5xl opacity-0">
          <div className="relative">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

            <div className="space-y-16 md:space-y-0">
              {steps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={step.num} className="relative md:flex md:items-start md:min-h-[200px]">
                    {/* Desktop: alternating left/right */}
                    <div className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                      {/* Mobile icon + content */}
                      <div className={`flex items-start gap-4 md:block ${isLeft ? "" : ""}`}>
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-14 h-14 object-contain shrink-0 md:inline-block md:mb-4"
                        />
                        <div>
                          <p className="font-body text-xs tracking-[0.15em] uppercase text-primary mb-1">
                            {step.num}
                          </p>
                          <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="font-body text-sm leading-relaxed text-muted-foreground mb-2">
                            {step.description}
                          </p>
                          <p className="font-body text-xs text-foreground/70">
                            <span className="font-medium text-foreground">Результат:</span> {step.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center dot (desktop) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10" />

                    {/* Empty other side (desktop) */}
                    <div className={`hidden md:block md:w-1/2 ${isLeft ? "md:order-2" : ""}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div ref={faqRef} className="container mx-auto px-4 lg:px-8 max-w-3xl opacity-0">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-center text-foreground mb-4">
            Частые вопросы
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12" />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-sm bg-background overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-body text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Готовы сделать первый шаг?
          </h2>
          <a
            href="/contacts"
            className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Записаться на консультацию →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
