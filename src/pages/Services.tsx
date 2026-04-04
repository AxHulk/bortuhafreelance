import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Check } from "lucide-react";
import iconConcept from "@/assets/service-icon-concept.png";
import iconStandard from "@/assets/service-icon-standard.png";
import iconPremium from "@/assets/service-icon-premium.png";
import iconProcurement from "@/assets/service-icon-procurement.png";
import iconSupervision from "@/assets/service-icon-supervision.png";

const tabs = [
  { id: "design", label: "Дизайн интерьера" },
  { id: "3dviz", label: "Только 3D Визуализация" },
  { id: "extra", label: "Комплектация и Надзор" },
];

const designTariffs = [
  {
    name: "Концептуальный",
    icon: iconConcept,
    price: "от 2 500",
    unit: "руб. / м²",
    highlight: false,
    audience: "Идеально для инвестиционной недвижимости (флиппинг) или под сдачу в аренду.",
    includes: [
      "Обмерный план и 2–3 варианта планировки",
      "Стилевая концепция (коллажи / мудборды)",
      "Базовые рабочие чертежи",
      "Базовые рекомендации по материалам",
    ],
    excludes: "3D-визуализации, сложных чертежей узлов, авторского надзора.",
  },
  {
    name: "Стандартный",
    icon: iconStandard,
    price: "от 4 000",
    unit: "руб. / м²",
    highlight: true,
    badge: "Хит",
    audience: "Оптимальный выбор для ремонта бизнес-класса силами профессиональной бригады.",
    includes: [
      "Всё из тарифа «Концептуальный»",
      "3D Визуализация (3–4 ракурса на основные зоны)",
      "Сложные чертежи, развёртки стен, узлы",
      "Подробная таблица материалов с артикулами",
    ],
    excludes: "Авторского надзора (опционально).",
  },
  {
    name: "Премиум",
    icon: iconPremium,
    price: "от 7 000",
    unit: "руб. / м²",
    highlight: false,
    subtitle: "Под ключ",
    audience: "Для занятых клиентов, желающих въехать в готовый дом без стресса.",
    includes: [
      "Неограниченное количество вариантов планировки",
      "3D Визуализация всех помещений (до 5 ракурсов)",
      "Полный пакет сложной рабочей документации",
      "Ведомость материалов + поиск аналогов",
      "Безлимитные выезды в шоурумы",
      "Авторский надзор включён на весь срок",
      "Комплектация включена",
    ],
    excludes: null,
  },
];

const extraServices = [
  {
    icon: iconSupervision,
    name: "Авторский надзор",
    description: "Контроль соответствия стройки проекту.",
    price: "от 40 000 руб. / мес.",
  },
  {
    icon: iconProcurement,
    name: "Комплектация",
    description: "Управление закупками, логистика с материка, рекламации.",
    price: "10% от сметы",
  },
  {
    icon: iconSupervision,
    name: "Разовый выезд",
    description: "Помощь в выборе материалов в салонах Симферополя / Севастополя.",
    price: "5 000 руб. / выезд",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("design");
  const heroRef = useScrollFadeIn();
  const contentRef = useScrollFadeIn();
  const valueRef = useScrollFadeIn();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2025' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-5xl text-center opacity-0">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Инвестиции в комфорт
            <br />
            <span className="text-primary">и ликвидность</span>
          </h1>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12">
            Прозрачное ценообразование для проектов любой сложности
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-sm text-xs font-body font-medium tracking-wide transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-transparent border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div ref={contentRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">

          {/* Design tariffs */}
          {activeTab === "design" && (
            <div className="grid md:grid-cols-3 gap-6">
              {designTariffs.map((tariff) => (
                <div
                  key={tariff.name}
                  className={`relative rounded-sm p-8 flex flex-col transition-shadow ${
                    tariff.highlight
                      ? "border-2 border-primary shadow-lg bg-background"
                      : "border border-border bg-background"
                  }`}
                >
                  {tariff.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-medium px-4 py-1 rounded-sm">
                      {tariff.badge}
                    </span>
                  )}

                  <div className="text-center mb-6">
                    <img src={tariff.icon} alt={tariff.name} className="w-14 h-14 object-contain mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {tariff.name}
                    </h3>
                    {tariff.subtitle && (
                      <p className="font-body text-xs text-primary mt-1">{tariff.subtitle}</p>
                    )}
                  </div>

                  <div className="text-center mb-6">
                    <span className="font-heading text-3xl font-semibold text-foreground">{tariff.price}</span>
                    <span className="font-body text-sm text-muted-foreground ml-1">{tariff.unit}</span>
                  </div>

                  <p className="font-body text-xs text-muted-foreground mb-6 text-center leading-relaxed">
                    {tariff.audience}
                  </p>

                  <div className="w-full h-px bg-border mb-6" />

                  <ul className="space-y-3 mb-6">
                    {tariff.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="font-body text-xs text-foreground/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {tariff.excludes && (
                    <p className="font-body text-xs text-muted-foreground/60 italic mb-6">
                      Не входит: {tariff.excludes}
                    </p>
                  )}

                  <div className="mt-auto">
                    <ContactDialog subject={`Тариф «${tariff.name}»`}>
                      <button
                        className={`w-full inline-flex h-11 items-center justify-center rounded-sm font-body text-sm font-medium tracking-wide transition-colors ${
                          tariff.highlight
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        }`}
                      >
                        Выбрать тариф →
                      </button>
                    </ContactDialog>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3D Viz */}
          {activeTab === "3dviz" && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="border border-border rounded-sm p-10 bg-background">
                <img src={iconConcept} alt="3D Визуализация" className="w-16 h-16 object-contain mx-auto mb-6" />
                <h3 className="font-heading text-3xl font-semibold text-foreground mb-4">
                  3D Визуализация
                </h3>
                <div className="mb-6">
                  <span className="font-heading text-3xl font-semibold text-foreground">от 600</span>
                  <span className="font-body text-sm text-muted-foreground ml-1">руб. / м²</span>
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8">
                  Создание фотореалистичных рендеров для дизайнеров интерьера, архитекторов и девелоперов.
                </p>
                <div className="w-full h-px bg-border mb-8" />
                <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                  {[
                    "Моделирование по ТЗ",
                    "Настройка освещения и материалов",
                    "2 круга правок",
                    "Финальные рендеры в 4K",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <ContactDialog subject="3D Визуализация">
                  <button className="inline-flex h-11 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
                    Обсудить проект →
                  </button>
                </ContactDialog>
              </div>
            </div>
          )}

          {/* Extra services */}
          {activeTab === "extra" && (
            <div className="grid md:grid-cols-3 gap-6">
              {extraServices.map((service) => (
                <div key={service.name} className="border border-border rounded-sm p-8 bg-background text-center">
                  <img src={service.icon} alt={service.name} className="w-14 h-14 object-contain mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{service.name}</h3>
                  <div className="mb-4">
                    <span className="font-heading text-xl font-semibold text-primary">{service.price}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ContactDialog subject={service.name}>
                    <button className="inline-flex h-10 px-6 items-center rounded-sm border border-primary text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      Узнать подробнее →
                    </button>
                  </ContactDialog>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Value block */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div ref={valueRef} className="container mx-auto px-4 lg:px-8 max-w-3xl text-center opacity-0">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Почему дизайн-проект окупает себя?
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            Грамотный проект составляет не более 5–10% от общего бюджета на ремонт. 
            Но именно он защищает вас от критических ошибок строителей, перерасхода 
            материалов и потерь времени. Дизайн-проект — это не статья расходов, 
            это инструмент экономии миллионов рублей в долгосрочной перспективе.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Готовы обсудить ваш проект?
          </h2>
          <ContactDialog subject="Обсуждение проекта">
            <button className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Обсудить проект →
            </button>
          </ContactDialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
