import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

const ProjectCase = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const infoRef = useScrollFadeIn();
  const galleryRef = useScrollFadeIn();

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-40 pb-24 text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Проект не найден</h1>
          <Link to="/portfolio" className="text-primary font-body text-sm hover:underline">
            ← Вернуться к портфолио
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Cover */}
      <section className="pt-20 relative">
        <div className="aspect-[21/9] w-full relative overflow-hidden">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.coverGradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-16">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-background">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Info block */}
      <section className="py-16 lg:py-24">
        <div ref={infoRef} className="container mx-auto px-4 lg:px-8 max-w-4xl opacity-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Площадь</p>
              <p className="font-heading text-lg font-semibold text-foreground">{project.area}</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Локация</p>
              <p className="font-heading text-lg font-semibold text-foreground">{project.location}</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Год</p>
              <p className="font-heading text-lg font-semibold text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Статус</p>
              <p className="font-heading text-lg font-semibold text-foreground">{project.status}</p>
            </div>
          </div>

          <div className="w-16 h-px bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">О проекте</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Задача</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{project.task}</p>
              <p className="font-body text-sm text-muted-foreground mt-4">
                <span className="text-foreground font-medium">Стиль:</span> {project.style}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div ref={galleryRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">Галерея</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blueprints */}
      {project.blueprints && project.blueprints.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">Чертежи и узлы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.blueprints.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden bg-secondary/30">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <div className="text-primary text-4xl font-heading mb-4">«</div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground italic mb-4">
              {project.testimonial.text}
            </p>
            <p className="font-body text-xs text-foreground font-medium">
              — {project.testimonial.author}
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Хотите подобный проект?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contacts"
              className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Обсудить проект →
            </a>
            <Link
              to="/portfolio"
              className="inline-flex h-12 px-8 items-center rounded-sm border border-border text-sm font-body font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              ← Все проекты
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectCase;
