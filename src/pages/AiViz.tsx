import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";
import SEO from "@/components/SEO";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Sparkles, Zap, Wallet, Eye, Clock, Check, ArrowRight } from "lucide-react";

import case1Before from "@/assets/ai-viz/case-1-before.jpg";
import case1After from "@/assets/ai-viz/case-1-after.png";
import case2Before from "@/assets/ai-viz/case-2-before.jpg";
import case2After from "@/assets/ai-viz/case-2-after.png";
import case3Img1 from "@/assets/ai-viz/case-3-1.png";
import case3Img2 from "@/assets/ai-viz/case-3-2.png";
import case3Img3 from "@/assets/ai-viz/case-3-3.png";
import case3Img4 from "@/assets/ai-viz/case-3-4.png";
import case4Img1 from "@/assets/ai-viz/case-4-1.jpg";
import case4Img2 from "@/assets/ai-viz/case-4-2.png";
import case4Img3 from "@/assets/ai-viz/case-4-3.png";
import case4Img4 from "@/assets/ai-viz/case-4-4.png";
import case5Before from "@/assets/ai-viz/case-5-before.jpg";
import case5After from "@/assets/ai-viz/case-5-after.jpg";
import case6Before from "@/assets/ai-viz/case-6-before.png";
import case6After from "@/assets/ai-viz/case-6-after.png";
import case7Before from "@/assets/ai-viz/case-7-before.jpg";
import case7After from "@/assets/ai-viz/case-7-after.jpg";

const audiences = [
  { title: "Бизнес", text: "Кафе, магазины, офисы — согласование вывесок, веранд и реновации с арендодателями и инвесторами." },
  { title: "Частные заказчики", text: "Увидеть будущий интерьер квартиры или дома до начала ремонта и избежать дорогих ошибок." },
  { title: "Застройщики", text: "Впечатляющие презентации объектов с фотореалистичными интерьерами и экстерьерами." },
  { title: "Дизайнеры и архитекторы", text: "Мгновенная проверка стилевых гипотез, материалов и сценариев освещения." },
];

const advantages = [
  { icon: Clock, title: "От 3 часов", text: "Готовая визуализация в день обращения, а не через неделю." },
  { icon: Wallet, title: "Дешевле классики", text: "В разы ниже стоимости полноценного 3D-рендера в студии." },
  { icon: Eye, title: "Фотореализм", text: "Свет, фактуры и окружение неотличимы от профессионального рендера." },
  { icon: Zap, title: "Любые исходники", text: "Фото, чертёж, эскиз от руки, текстовое описание — превращаем в картинку." },
];

type CaseItem = {
  title: string;
  tag: string;
  time: string;
  summary: string;
  bullets: string[];
} & (
  | { kind: "ba"; before: string; after: string }
  | { kind: "gallery"; gallery: string[] }
);

const cases: CaseItem[] = [
  {
    kind: "ba",
    title: "БУХАREZ + Beerluskoni",
    tag: "Экстерьер · Ритейл",
    time: "8 часов",
    before: case1Before,
    after: case1After,
    summary:
      "Концепция реновации сетевого бара для защиты проекта перед генеральными директорами: демонтаж старого навеса, интеграция новой арендованной площади и единый брендинг двух марок.",
    bullets: [
      "Согласование инвестиций до старта стройки",
      "Точная фактура отделки и работа света на вывесках",
      "Без дорогостоящего 3D-продакшна",
    ],
  },
  {
    kind: "ba",
    title: "Набережная в Евпатории",
    tag: "Городское пространство",
    time: "3 часа",
    before: case2Before,
    after: case2After,
    summary:
      "Визуализация общественного пространства для утверждения концепции с администрацией города. Заказчик предоставил фото со стройки и референсы мебели — ИИ сохранил геометрию и вписал детали в масштаб.",
    bullets: [
      "Принято с первого раза — без правок",
      "Конкретные модели мебели и вазонов в кадре",
      "Дни классического рендера → 3 часа",
    ],
  },
  {
    kind: "gallery",
    title: "Стильная кофейня в арендуемом пространстве",
    tag: "Коммерческий интерьер · 3ds Max + ИИ",
    time: "2 дня",
    gallery: [case3Img1, case3Img2, case3Img3, case3Img4],
    summary:
      "Камерный лофт с «индустриальным шиком» в реальных габаритах арендуемого павильона — без демонтажа существующей каменной кладки и деревянных панелей. Гибрид точной геометрии 3ds Max и фактур, подобранных нейросетью.",
    bullets: [
      "Точная геометрия и эргономика в 3ds Max",
      "Фактуры бетона, дерева и свет — через ИИ",
      "Сохранили существующую отделку — экономия на ремонте",
      "Зонирование, неон и сценарный свет для «инстаграмности»",
    ],
  },
  {
    kind: "gallery",
    title: "Суши-бар «07» на набережной",
    tag: "Ребрендинг павильона · Экстерьер + интерьер",
    time: "4 часа",
    gallery: [case4Img1, case4Img2, case4Img3, case4Img4],
    summary:
      "Переосмысление существующего павильона у моря: из брутального гриль-бара — в яркий суши-бар с японскими акцентами. На вход — реальное фото объекта, на выходе — фасад с витриной, неоном и проработанный интерьер для согласования с арендодателем.",
    bullets: [
      "Сохранили существующий каркас и деревянную отделку",
      "Новая айдентика, неон и витрина — в реальных габаритах",
      "Экстерьер и два ракурса интерьера — единый стиль",
      "От фото до пакета визуализаций — за 4 часа",
    ],
  },
  {
    kind: "ba",
    title: "Гостевой комплекс «Проектный»",
    tag: "Застройщик · Обновление контента",
    time: "5 часов",
    before: case5Before,
    after: case5After,
    summary:
      "У застройщика на руках был только устаревший SketchUp-рендер объекта — для сайта и соцсетей такого мало. Превратили рабочую 3D-модель в фотореалистичный кадр с летним светом, сосновым лесом и ландшафтом — без перестройки геометрии.",
    bullets: [
      "Сохранили архитектуру и планировку из исходной модели",
      "Добавили окружение, свет и сезон — для маркетинга",
      "Готовый кадр для сайта, лендинга и Instagram",
    ],
  },
  {
    kind: "ba",
    title: "СК «Новый дом» — типовой проект",
    tag: "Застройщик · Каталог проектов",
    time: "3 часа",
    before: case6Before,
    after: case6After,
    summary:
      "Старый рендер каркасного дома «висел в воздухе» на белом фоне — продавать по такой картинке тяжело. Перенесли проект в реальную среду: вечерний свет, сосны, благоустроенный участок с дорожкой и клумбами.",
    bullets: [
      "Точно сохранили форму, кровлю и террасу",
      "Контекст участка вместо «дома в вакууме»",
      "Конверсия каталога вырастает на фотореализме",
    ],
  },
  {
    kind: "ba",
    title: "Little Home — модульный дом",
    tag: "Застройщик · Фото со стройплощадки",
    time: "2 часа",
    before: case7Before,
    after: case7After,
    summary:
      "На вход — реальное фото готового модульного дома на пустом участке с забором-рабицей и грунтом. На выходе — тот же дом в обжитом саду с дорожкой, цветниками и зоной отдыха. Идеально для соцсетей и презентаций клиентам.",
    bullets: [
      "Тот же объект, без вмешательства в конструкцию",
      "Ландшафт и сезон — под нужный сценарий продажи",
      "Не нужно ждать, пока участок благоустроят",
    ],
  },
];

const pricingFactors = [
  "Сложность и объём проекта",
  "Качество исходных данных",
  "Уровень детализации и реализма",
  "Срочность выполнения",
  "Количество вариантов и правок",
];

const AiViz = () => {
  const heroRef = useScrollFadeIn();
  const audRef = useScrollFadeIn();
  const advRef = useScrollFadeIn();
  const casesRef = useScrollFadeIn();
  const priceRef = useScrollFadeIn();
  const [active, setActive] = useState<Record<number, "before" | "after">>({});

  return (
    <div className="min-h-screen">
      <SEO
        title="Нейровизуализация интерьеров и экстерьеров — от 3 часов"
        description="Фотореалистичные AI-визуализации интерьеров, фасадов и общественных пространств за часы, а не дни. Согласование с арендодателями, инвесторами и администрацией."
        path="/ai-viz"
        jsonLd={breadcrumbJsonLd([
          { name: "Главная", url: `${SITE_URL}/` },
          { name: "Нейровизуализация", url: `${SITE_URL}/ai-viz` },
        ])}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0, transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--primary)) 0, transparent 40%)",
          }}
        />
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-5xl text-center opacity-0 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-primary">AI · Будущее уже сегодня</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Нейровизуализация:
            <br />
            <span className="text-primary">фотореализм за часы</span>
          </h1>
          <p className="font-body text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-10">
            Превращаем фото, чертежи и эскизы в реалистичные изображения интерьеров и фасадов.
            Согласовывайте проекты с арендодателями, инвесторами и администрацией в день обращения.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ContactDialog subject="Нейровизуализация">
              <button className="inline-flex h-12 px-8 items-center gap-2 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
                Получить расчёт <ArrowRight className="w-4 h-4" />
              </button>
            </ContactDialog>
            <a
              href="#ai-cases"
              className="inline-flex h-12 px-8 items-center rounded-sm border border-primary text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Смотреть кейсы
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-16 rounded-sm overflow-hidden border border-border">
            {[
              { v: "3 ч", l: "минимальный срок" },
              { v: "0", l: "правок в среднем" },
              { v: "13 лет", l: "опыта дизайнера" },
              { v: "60+", l: "реализованных проектов" },
            ].map((s) => (
              <div key={s.l} className="bg-background py-6 px-4">
                <div className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">{s.v}</div>
                <div className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div ref={advRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Почему это работает</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              Скорость классического эскиза.<br className="hidden sm:block" /> Реалистичность студийного рендера.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="bg-background border border-border rounded-sm p-7 hover:border-primary/50 transition-colors">
                <a.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 lg:py-24">
        <div ref={audRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Для кого</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
              Когда нужен «как в жизни» результат — вчера
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {audiences.map((a, i) => (
              <div key={a.title} className="flex gap-5 p-6 lg:p-8 border border-border rounded-sm bg-background">
                <div className="font-heading text-2xl text-primary/40 shrink-0 w-8">0{i + 1}</div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="ai-cases" className="py-16 lg:py-24 bg-secondary/30">
        <div ref={casesRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Кейсы</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-3">
              Было · Стало
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto">
              Реальные проекты, согласованные с собственниками, арендодателями и администрацией.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {cases.map((c, i) => {
              const view = active[i] ?? "after";
              const isReversed = i % 2 === 1;
              return (
                <article
                  key={c.title}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Image: before/after toggle or gallery */}
                  <div>
                    {c.kind === "ba" ? (
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-background border border-border group">
                        <img
                          src={c.before}
                          alt={`${c.title} — до`}
                          loading="lazy"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${view === "before" ? "opacity-100" : "opacity-0"}`}
                        />
                        <img
                          src={c.after}
                          alt={`${c.title} — после`}
                          loading="lazy"
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${view === "after" ? "opacity-100" : "opacity-0"}`}
                        />
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-background/90 backdrop-blur-sm border border-border">
                          <Clock className="w-3 h-3 text-primary" />
                          <span className="font-body text-[11px] tracking-[0.15em] uppercase text-foreground">{c.time}</span>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex p-1 rounded-sm bg-background/95 backdrop-blur-sm border border-border shadow-sm">
                          {(["before", "after"] as const).map((k) => (
                            <button
                              key={k}
                              onClick={() => setActive((p) => ({ ...p, [i]: k }))}
                              className={`px-4 py-1.5 text-[11px] font-body font-medium tracking-[0.18em] uppercase rounded-sm transition-colors ${
                                view === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {k === "before" ? "До" : "После"}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {c.gallery.map((src, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-square rounded-sm overflow-hidden bg-background border border-border group"
                          >
                            <img
                              src={src}
                              alt={`${c.title} — ракурс ${idx + 1}`}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {idx === 0 && (
                              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-background/90 backdrop-blur-sm border border-border">
                                <Clock className="w-3 h-3 text-primary" />
                                <span className="font-body text-[10px] tracking-[0.15em] uppercase text-foreground">{c.time}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-body text-[11px] tracking-[0.25em] uppercase text-primary mb-3">{c.tag}</p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-4">{c.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">{c.summary}</p>
                    <ul className="space-y-2.5">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="font-body text-sm text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24">
        <div ref={priceRef} className="container mx-auto px-4 lg:px-8 max-w-4xl opacity-0">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Стоимость</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Цена — индивидуально под задачу
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto">
              Никаких «средних чеков по больнице». Считаем по факту вашего проекта — и предлагаем оптимальное решение.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {pricingFactors.map((f, i) => (
              <div key={f} className="flex items-center gap-4 px-5 py-4 border border-border rounded-sm bg-background">
                <span className="font-heading text-sm text-primary/50 w-6">0{i + 1}</span>
                <span className="font-body text-sm text-foreground/85">{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <ContactDialog subject="Нейровизуализация — расчёт стоимости">
              <button className="inline-flex h-12 px-8 items-center gap-2 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
                Получить индивидуальный расчёт <ArrowRight className="w-4 h-4" />
              </button>
            </ContactDialog>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Покажите проект — увидите результат сегодня
          </h2>
          <p className="font-body text-sm sm:text-base text-background/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Пришлите фото, чертёж или просто описание — вернёмся с готовой визуализацией и расчётом стоимости.
          </p>
          <ContactDialog subject="Нейровизуализация — быстрый запрос">
            <button className="inline-flex h-12 px-10 items-center gap-2 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Обсудить проект <ArrowRight className="w-4 h-4" />
            </button>
          </ContactDialog>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiViz;