import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { personJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import aboutHero from "@/assets/natali-fursa-portrait.jpg";
import iconPrecision from "@/assets/icon-precision.png";
import iconElegance from "@/assets/icon-elegance.png";
import iconDialogue from "@/assets/icon-dialogue.png";

const About = () => {
  const heroRef = useScrollFadeIn();
  const timelineRef = useScrollFadeIn();
  const valuesRef = useScrollFadeIn();
  const ctaRef = useScrollFadeIn();

  return (
    <div className="min-h-screen">
      <SEO
        title="Обо мне — Наталия Фурса, дизайнер интерьеров"
        description="Дизайнер и визуализатор интерьера Наталия Фурса. Восемь лет академического образования, опыт в финансовой сфере и более 40 реализованных объектов в Крыму."
        path="/about"
        type="profile"
        jsonLd={[
          personJsonLd,
          breadcrumbJsonLd([
            { name: "Главная", url: `${SITE_URL}/` },
            { name: "Обо мне", url: `${SITE_URL}/about` },
          ]),
        ]}
      />
      <Header />

      {/* Блок 1 — Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2025' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-5xl opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                Точность аналитика.
                <br />
                <span className="text-primary">Видение художника.</span>
              </h1>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Наталия Фурса — дизайнер и визуализатор интерьера, Симферополь
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
                Путь к дизайну редко бывает прямым. Восемь лет академического образования 
                и четыре года практики в финансовой сфере сформировали то, чего не хватает 
                большинству творческих людей: системное мышление, внимание к деталям и умение 
                работать с бюджетом проекта как с точным инструментом.
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Когда в 2022 году Наталия открыла для себя мир 3D-визуализации, это стало 
                не сменой профессии — это стало синтезом двух природ. Сегодня за каждым 
                рендером стоит не просто красивая картинка, а выверенная логика пространства: 
                просчитанные пропорции, обоснованные материалы и решения, которые работают 
                в реальной жизни так же безупречно, как выглядят на экране.
              </p>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-lg aspect-[4/5]">
                <img
                  src={aboutHero}
                  alt="Наталия Фурса — дизайнер интерьеров, Симферополь"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Блок 2 — История / Timeline */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div ref={timelineRef} className="container mx-auto px-4 lg:px-8 max-w-3xl opacity-0">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-center text-foreground mb-4">
            Как это началось
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-12" />

          <div className="space-y-6">
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Ещё в детстве любимым занятием было обустройство виртуальных домов — 
              создание уюта из ничего, поиск идеального баланса между функцией и эстетикой. 
              То, что тогда казалось игрой, оказалось профессиональным призванием.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              В ноябре 2022 года, пройдя обучение в профессиональной онлайн-школе 
              3D Club, Наталия начала создавать первые коммерческие проекты. С тех пор 
              каждый реализованный интерьер — это диалог между архитектурой пространства 
              и характером человека, который в нём живёт.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Сегодня студия Natali Fursa работает в Симферополе и принимает проекты 
              по всему Крыму — от городских квартир до апартаментов на Южном берегу.
            </p>
          </div>
        </div>
      </section>

      {/* Блок 3 — Ценности */}
      <section className="py-24 lg:py-32">
        <div ref={valuesRef} className="container mx-auto px-4 lg:px-8 max-w-5xl opacity-0">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Точность */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img src={iconPrecision} alt="Точность" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Точность
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Финансовый бэкграунд научил работать с деталями, которые невидимы, 
                но решают всё: соответствие чертежей нормам, соблюдение бюджета, 
                точность спецификаций.
              </p>
            </div>

            {/* Элегантность */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img src={iconElegance} alt="Элегантность" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Элегантность
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Каждое решение проходит проверку одним вопросом: это красиво и через 
                десять лет? Стиль без времени — не тренд, а принцип.
              </p>
            </div>

            {/* Диалог */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img src={iconDialogue} alt="Диалог" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Диалог
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Лучший интерьер рождается не из референсов в Pinterest, а из глубокого 
                понимания того, как клиент живёт, работает и отдыхает. 
                Бриф — это не анкета, это разговор.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 4 — CTA */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div ref={ctaRef} className="container mx-auto px-4 lg:px-8 max-w-2xl text-center opacity-0">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Готовы обсудить ваш проект?
          </h2>
          <a
            href="/contacts"
            className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Обсудить проект →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
