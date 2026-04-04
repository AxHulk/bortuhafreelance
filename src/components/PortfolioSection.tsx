import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const categories = ["Все", "Жилые интерьеры", "Курортная недвижимость", "Коммерческие пространства"];

const projects = [
  { id: 1, title: "Квартира на набережной", area: "120 м²", style: "Современная классика", category: "Жилые интерьеры", gradient: "from-primary/20 to-secondary/40" },
  { id: 2, title: "Бутик-отель «Ривьера»", area: "450 м²", style: "Средиземноморский", category: "Курортная недвижимость", gradient: "from-secondary/30 to-primary/20" },
  { id: 3, title: "Кофейня «Терра»", area: "85 м²", style: "Лофт с элементами эко", category: "Коммерческие пространства", gradient: "from-foreground/10 to-primary/15" },
  { id: 4, title: "Вилла в Ялте", area: "280 м²", style: "Минимализм", category: "Жилые интерьеры", gradient: "from-primary/15 to-foreground/10" },
  { id: 5, title: "Гостевой дом «Мирт»", area: "350 м²", style: "Прованс", category: "Курортная недвижимость", gradient: "from-secondary/40 to-primary/10" },
  { id: 6, title: "Салон красоты «Аура»", area: "140 м²", style: "Арт-деко", category: "Коммерческие пространства", gradient: "from-primary/25 to-secondary/30" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("Все");
  const ref = useScrollFadeIn();

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Портфолио
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-10" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-body font-medium tracking-wide transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-heading text-xl font-semibold text-background mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-background/70">
                  {project.area} · {project.style}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
