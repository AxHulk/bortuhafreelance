import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Честно, я долго сомневалась — казалось, дизайнер это дорого и непонятно зачем. Но после первого созвона с Наталией всё встало на место. Она сразу спросила не про стиль, а про то, как мы живём. И уже из этого сделала планировку. Когда увидела 3D — заплакала, это было именно то, что я хотела, но не умела объяснить словами. Ремонт уже закончен, всё совпало с картинкой. Ни одного сюрприза по бюджету.",
    author: "Марина Д.",
    city: "Симферополь",
  },
  {
    text: "Покупал квартиру на ЮБК под сдачу. Нужно было сделать быстро, стильно и так, чтобы гости оставляли хорошие отзывы. Наталия предложила концепцию буквально за неделю — лаконично, без лишнего, но с характером. Отдельно оценил то, что она сразу считала всё в реальных ценах крымских поставщиков. Квартира сдаётся с первого месяца после ремонта, гости фотографируют интерьер и выкладывают в сторис.",
    author: "Алексей К.",
    city: "Ялта",
  },
  {
    text: "Мы строили дом три года и боялись, что на финише с дизайном что-то пойдёт не так. Понравилось, что она не навязывала трендовые вещи — спросила, что нам нравится, что раздражает. В итоге получился дом, который ощущается как наш, а не как картинка из Pinterest. Строители работали по чертежам без вопросов — прораб сам сказал, что давно не видел такой подробной документации.",
    author: "Светлана и Игорь Р.",
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
