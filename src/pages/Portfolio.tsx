import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { categoryLabels } from "@/data/projects";
import { getAllObjects, getRoomsForObject } from "@/data/objects";
import ObjectCard from "@/components/portfolio/ObjectCard";
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
const statusFilters = ["all", "Реализован", "В процессе", "Концепт"] as const;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeStatus, setActiveStatus] = useState<string>("all");
  const heroRef = useScrollFadeIn();
  const gridRef = useScrollFadeIn();

  const allObjects = useMemo(() => getAllObjects(), []);

  const filtered = useMemo(() => {
    return allObjects.filter((o) => {
      if (activeCategory !== "all" && o.category !== activeCategory) return false;
      if (activeStatus !== "all" && o.status !== activeStatus) return false;
      return true;
    });
  }, [allObjects, activeCategory, activeStatus]);

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allObjects.map((o, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/portfolio/${o.id}`,
      name: o.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Портфолио объектов — дизайн интерьеров в Крыму"
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
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 max-w-5xl text-center opacity-0">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-5 block">
            Портфолио
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] mb-5">
            Объекты, сделанные с вниманием к каждой детали
          </h1>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto mb-12">
            Каждый объект — отдельная история. Открывайте, чтобы увидеть помещения, фотографии и описания.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {filters.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-body font-medium tracking-wide transition-all ${
                  activeCategory === key
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

          {/* Status filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {statusFilters.map((key) => (
              <button
                key={key}
                onClick={() => setActiveStatus(key)}
                className={`px-3 py-1.5 rounded-sm text-[11px] font-body tracking-[0.12em] uppercase transition-colors ${
                  activeStatus === key
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {key === "all" ? "Все статусы" : key}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 lg:pb-32">
        <div ref={gridRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-16">
              По выбранным фильтрам пока ничего нет.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filtered.map((obj) => (
                <ObjectCard
                  key={obj.id}
                  object={obj}
                  roomCount={getRoomsForObject(obj).length}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
