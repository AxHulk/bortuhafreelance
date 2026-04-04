import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { projects, categoryLabels } from "@/data/projects";

const categories = ["all", "residential", "resort", "commercial"] as const;

const PortfolioSection = () => {
  const [active, setActive] = useState<string>("all");
  const ref = useScrollFadeIn();

  const filtered = active === "all" ? projects.slice(0, 6) : projects.filter((p) => p.category === active).slice(0, 6);

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
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer block"
            >
              {project.coverImage ? (
                <img src={project.coverImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.coverGradient}`} />
              )}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <h3 className="font-heading text-xl font-semibold text-background">
                  {project.title}, {project.area}
                </h3>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-heading text-xl font-semibold text-background mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-background/70">
                  {project.area} · {project.style}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex h-12 px-8 items-center rounded-sm border border-primary text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Смотреть все проекты →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
