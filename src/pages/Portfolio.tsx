import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import iconResidential from "@/assets/portfolio-icon-residential.png";

import iconCommercial from "@/assets/portfolio-icon-commercial.png";
import icon3dviz from "@/assets/portfolio-icon-3dviz.png";

const filterIcons: Record<string, string> = {
  residential: iconResidential,
  
  commercial: iconCommercial,
  "3dviz": icon3dviz,
};

const filters = ["all", "residential", "commercial", "3dviz"] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>("all");
  const heroRef = useScrollFadeIn();
  const gridRef = useScrollFadeIn();

  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.category === active);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/portfolio/${p.id}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Портфолио — проекты дизайна интерьеров в Крыму"
        description="Избранные проекты Наталии Фурсы: жилые интерьеры, коммерческие пространства и 3D-визуализация. Симферополь, ЮБК и онлайн."
        path="/portfolio"
        jsonLd={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Главная", url: `${SITE_URL}/` },
            { name: "Портфолио", url: `${SITE_URL}/portfolio` },
          ]),
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-5xl text-center opacity-0">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Избранные проекты
          </h1>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12">
            Жилые и коммерческие пространства. Симферополь, ЮБК и online.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-body font-medium tracking-wide transition-all ${
                  active === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-transparent border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {filterIcons[key] && (
                  <img src={filterIcons[key]} alt="" className="w-4 h-4 object-contain" />
                )}
                {categoryLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div ref={gridRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer block"
              >
                {/* Placeholder gradient (will be replaced by real images) */}
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.coverGradient}`} />
                )}

                {/* Title at rest */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                  <h3 className="font-heading text-xl font-semibold text-background">
                    {project.title}, {project.area}
                  </h3>
                </div>

                {/* Hover overlay — matching the reference design */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/75 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center px-8 py-6 max-w-sm">
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-background mb-4">
                      {project.title}
                    </h3>
                    <div className="w-12 h-px bg-primary mx-auto mb-4" />
                    <p className="font-body text-sm text-background/80 mb-1">
                      Стиль: {project.style}
                    </p>
                    <p className="font-body text-sm text-background/80 mb-1">
                      Задача: {project.task}
                    </p>
                    <p className="font-body text-sm text-background/80 mb-6">
                      Статус: {project.status}
                    </p>
                    <span className="inline-flex items-center text-sm font-body font-medium text-primary border-t border-primary/40 pt-3">
                      Смотреть кейс →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
