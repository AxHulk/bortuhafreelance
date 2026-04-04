import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const AboutSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2025' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-4xl opacity-0">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          О подходе
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
              Каждый проект начинается с глубокого погружения в образ жизни клиента. 
              Я создаю не просто красивые интерьеры — я проектирую пространства, 
              которые отражают индивидуальность владельца и работают на его комфорт.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Мой подход сочетает эстетику современного дизайна с функциональной 
              эргономикой, учитывая климатические особенности Крыма и специфику 
              местных материалов.
            </p>
          </div>
          <div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-6">
              Работая в Симферополе и на Южном берегу Крыма, я специализируюсь 
              на жилых интерьерах, курортной недвижимости и коммерческих 
              пространствах — от уютных квартир до бутик-отелей.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Каждая деталь продумана: от планировочного решения до подбора 
              текстиля и освещения. Результат — интерьер, в котором хочется жить.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
