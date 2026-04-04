import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Наталия полностью перевернула моё представление о том, каким должен быть ремонт. Каждый этап был прозрачным, бюджет не вышел за рамки.",
    author: "Анна М.",
    city: "Ялта",
  },
  {
    text: "Заказывала 3D-визуализацию для своего объекта. Результат превзошёл ожидания — клиенты сразу увидели себя в пространстве.",
    author: "Дмитрий К.",
    city: "Симферополь",
  },
  {
    text: "Самое ценное — это чёткие чертежи и спецификация. Строители работали без единого вопроса.",
    author: "Елена С.",
    city: "Севастополь",
  },
];

const ReviewsSection = () => {
  const ref = useScrollFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-primary text-center block mb-4">
          Отзывы клиентов
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12">
          Что говорят те, кто уже живёт
          <br className="hidden sm:block" /> в своём проекте
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-card border border-border rounded-sm p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="font-heading text-5xl text-primary/60 leading-none block mb-4">
                  "
                </span>
                <p className="font-body text-sm text-foreground/80 leading-relaxed italic mb-6">
                  {r.text}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm font-semibold">{r.author}</p>
                  <p className="font-body text-xs text-muted-foreground">{r.city}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
