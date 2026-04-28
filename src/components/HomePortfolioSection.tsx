import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { projects } from "@/data/projects";
import { getObjectByRoomId } from "@/data/objects";

const HomePortfolioSection = () => {
  const ref = useScrollFadeIn();
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
          Избранные проекты
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-background leading-tight mb-12">
          Работы, которыми я горжусь
        </h2>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {featured.map((project, i) => {
            const obj = getObjectByRoomId(project.id);
            const href = obj
              ? `/portfolio/${obj.id}/${project.id}`
              : `/portfolio/${project.id}`;
            return (
            <Link
              key={project.id}
              to={href}
              className={`group relative overflow-hidden rounded-sm block ${
                i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[4/3]"
              }`}
            >
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
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="inline-block bg-background/95 text-foreground font-body text-xs px-3 py-1.5 rounded-sm">
                  {project.title} · {project.location} · {project.area}
                </span>
              </div>
            </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex h-12 px-8 items-center rounded-sm border border-primary text-sm font-body font-medium tracking-wider uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Смотреть все проекты →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolioSection;
