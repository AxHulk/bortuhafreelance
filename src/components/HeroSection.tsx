const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background as placeholder for future photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-foreground/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,hsl(39_42%_59%/0.15),transparent_70%)]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-background leading-tight mb-6">
          Архитектура эмоций
          <br />
          <span className="text-primary">в каждом интерьере</span>
        </h1>
        <p className="font-body text-base sm:text-lg text-background/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Создание эксклюзивных жилых и коммерческих пространств
          <br className="hidden sm:block" /> в Симферополе и на Южном берегу Крыма
        </p>
        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
        >
          Смотреть портфолио
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
