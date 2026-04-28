import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import { getObjectById, getRoomsForObject, getObjectByRoomId } from "@/data/objects";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import EditorialGallery from "@/components/portfolio/EditorialGallery";

const ProjectCase = () => {
  const params = useParams<{ objectId?: string; roomId?: string; id?: string }>();
  const roomId = params.roomId ?? params.id;
  const project = projects.find((p) => p.id === roomId);
  const obj = params.objectId
    ? getObjectById(params.objectId)
    : project ? getObjectByRoomId(project.id) : undefined;
  const infoRef = useScrollFadeIn();

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

  if (!obj) {
    return <Navigate to="/portfolio" replace />;
  }

  const projectUrl = `${SITE_URL}/portfolio/${obj.id}/${project.id}`;
  const ogImage = project.coverImage ? `${SITE_URL}${project.coverImage}` : undefined;

  const siblings = getRoomsForObject(obj);
  const idx = siblings.findIndex((r) => r.id === project.id);
  const prev = idx > 0 ? siblings[idx - 1] : undefined;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : undefined;

  const heroImage = project.gallery[0];
  const restImages = project.gallery.slice(1);

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Наталия Фурса",
      url: `${SITE_URL}/about`,
    },
    dateCreated: project.year,
    locationCreated: project.location,
    url: projectUrl,
    image: ogImage,
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${project.title} — ${obj.title}`}
        description={`${project.description.slice(0, 155)}${project.description.length > 155 ? "…" : ""}`}
        path={`/portfolio/${obj.id}/${project.id}`}
        type="article"
        image={ogImage}
        jsonLd={[
          creativeWorkJsonLd,
          breadcrumbJsonLd([
            { name: "Главная", url: `${SITE_URL}/` },
            { name: "Портфолио", url: `${SITE_URL}/portfolio` },
            { name: obj.title, url: `${SITE_URL}/portfolio/${obj.id}` },
            { name: project.title, url: projectUrl },
          ]),
        ]}
      />
      <Header />

      {/* Breadcrumbs */}
      <section className="pt-28 lg:pt-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <nav className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            <Link to="/portfolio" className="hover:text-primary transition-colors">Портфолио</Link>
            <span className="mx-2">/</span>
            <Link to={`/portfolio/${obj.id}`} className="hover:text-primary transition-colors">
              {obj.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Title + meta */}
      <section className="pt-8 lg:pt-12 pb-10 lg:pb-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-semibold text-foreground leading-[1.02] mb-8 max-w-4xl">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <span><span className="text-foreground/60 mr-2">Объект:</span>{obj.title}</span>
            <span><span className="text-foreground/60 mr-2">Площадь:</span>{project.area}</span>
            <span><span className="text-foreground/60 mr-2">Стиль:</span>{project.style}</span>
            <span><span className="text-foreground/60 mr-2">Год:</span>{project.year}</span>
            <span><span className="text-foreground/60 mr-2">Статус:</span><span className="text-primary">{project.status}</span></span>
          </div>
        </div>
      </section>

      {/* Hero image full-bleed */}
      {heroImage && (
        <section className="mb-2">
          <div className="aspect-[21/9] w-full overflow-hidden bg-secondary/30">
            <img src={heroImage.src} alt={heroImage.alt} className="w-full h-full object-cover" />
          </div>
        </section>
      )}

      {/* Lead description */}
      <section className="py-16 lg:py-24">
        <div ref={infoRef} className="container mx-auto px-4 lg:px-8 max-w-2xl opacity-0">
          <div className="w-12 h-px bg-primary mb-8" />
          <p className="font-heading text-xl sm:text-2xl leading-[1.5] text-foreground/90 mb-10">
            {project.task}
          </p>
          <p className="font-body text-base leading-relaxed text-muted-foreground whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </section>

      {/* Editorial gallery */}
      {restImages.length > 0 && (
        <section className="pb-8">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <EditorialGallery images={restImages} />
          </div>
        </section>
      )}

      {/* Blueprints */}
      {project.blueprints && project.blueprints.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-3 block">
              Чертежи
            </span>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">Планы и узлы</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.blueprints.map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-sm overflow-hidden bg-secondary/30">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <div className="text-primary text-5xl font-heading leading-none mb-6">«</div>
            <p className="font-heading text-xl sm:text-2xl leading-relaxed text-foreground/90 italic mb-6">
              {project.testimonial.text}
            </p>
            <p className="font-body text-xs tracking-[0.18em] uppercase text-muted-foreground">
              — {project.testimonial.author}
            </p>
          </div>
        </section>
      )}

      {/* Sibling navigation */}
      {siblings.length > 1 && (
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="text-left">
                {prev ? (
                  <Link to={`/portfolio/${obj.id}/${prev.id}`} className="group inline-block">
                    <span className="block font-body text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">
                      ← Предыдущее
                    </span>
                    <span className="font-heading text-base text-foreground group-hover:text-primary transition-colors">
                      {prev.title}
                    </span>
                  </Link>
                ) : <span />}
              </div>
              <div className="text-center">
                <Link
                  to={`/portfolio/${obj.id}`}
                  className="font-body text-[11px] tracking-[0.22em] uppercase text-primary hover:opacity-70 transition-opacity"
                >
                  Все помещения объекта
                </Link>
              </div>
              <div className="text-right">
                {next ? (
                  <Link to={`/portfolio/${obj.id}/${next.id}`} className="group inline-block">
                    <span className="block font-body text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-1">
                      Следующее →
                    </span>
                    <span className="font-heading text-base text-foreground group-hover:text-primary transition-colors">
                      {next.title}
                    </span>
                  </Link>
                ) : <span />}
              </div>
            </div>
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
            <Link
              to="/contacts"
              className="inline-flex h-12 px-8 items-center rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Обсудить проект →
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex h-12 px-8 items-center rounded-sm border border-border text-sm font-body font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              ← Все объекты
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectCase;