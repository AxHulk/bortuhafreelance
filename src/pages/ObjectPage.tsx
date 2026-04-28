import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { getObjectById, getRoomsForObject } from "@/data/objects";
import RoomCard from "@/components/portfolio/RoomCard";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";

const ObjectPage = () => {
  const params = useParams<{ objectId?: string; id?: string }>();
  const objectId = params.objectId ?? params.id;
  const heroRef = useScrollFadeIn();
  const gridRef = useScrollFadeIn();

  const obj = objectId ? getObjectById(objectId) : undefined;

  // If a single-room object exists with this id but the visitor came directly,
  // jump them straight to the room page for a cleaner flow.
  if (!obj) {
    return <Navigate to="/portfolio" replace />;
  }

  const rooms = getRoomsForObject(obj);
  const objectUrl = `${SITE_URL}/portfolio/${obj.id}`;
  const ogImage = obj.coverImage ? `${SITE_URL}${obj.coverImage}` : undefined;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: obj.title,
    description: obj.intro,
    url: objectUrl,
    image: ogImage,
    hasPart: rooms.map((r) => ({
      "@type": "CreativeWork",
      name: r.title,
      url: `${objectUrl}/${r.id}`,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${obj.title} — портфолио`}
        description={obj.intro.slice(0, 155)}
        path={`/portfolio/${obj.id}`}
        type="article"
        image={ogImage}
        jsonLd={[
          collectionJsonLd,
          breadcrumbJsonLd([
            { name: "Главная", url: `${SITE_URL}/` },
            { name: "Портфолио", url: `${SITE_URL}/portfolio` },
            { name: obj.title, url: objectUrl },
          ]),
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="pt-20 relative">
        <div className="aspect-[21/9] w-full relative overflow-hidden">
          {obj.coverImage ? (
            <img
              src={obj.coverImage}
              alt={obj.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${obj.coverGradient}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

          <div ref={heroRef} className="absolute inset-x-0 bottom-0 opacity-0">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl pb-10 lg:pb-16">
              <nav className="font-body text-[11px] tracking-[0.18em] uppercase text-background/75 mb-4">
                <Link to="/portfolio" className="hover:text-background transition-colors">
                  ← Все объекты
                </Link>
              </nav>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-semibold text-background leading-[1.05] mb-4 max-w-4xl">
                {obj.title}
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-body text-xs sm:text-sm tracking-wider uppercase text-background/85">
                <span>{obj.area}</span>
                <span>·</span>
                <span>{obj.location}</span>
                <span>·</span>
                <span>{obj.year}</span>
                <span>·</span>
                <span className="text-primary">{obj.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/85 text-center">
            {obj.intro}
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="pb-24 lg:pb-32">
        <div ref={gridRef} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-3 block">
                Помещения объекта
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
                {rooms.length === 1 ? "Помещение" : `${rooms.length} помещений`}
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {rooms.map((r) => (
              <RoomCard key={r.id} objectId={obj.id} room={r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Хотите похожий объект?
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

export default ObjectPage;