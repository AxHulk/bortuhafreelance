import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import leadImg from "@/assets/home-leadmagnet.jpg";
import { useQuiz } from "@/components/quiz/QuizContext";

const LeadMagnetSection = () => {
  const ref = useScrollFadeIn();
  const { open: openQuiz } = useQuiz();

  return (
    <section className="py-24 lg:py-32 bg-foreground">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 opacity-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text + Form */}
          <div>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
              Бесплатно
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-background leading-tight mb-4">
              Планируете ремонт
              <br />в Крыму?
            </h2>
            <p className="font-body text-sm text-background/75 leading-relaxed mb-6">
              Пройдите интересный опрос, который поможет вам разобраться в своих внутренних желаниях и внешних потребностях.
            </p>
            <p className="font-body text-sm text-background/70 leading-relaxed mb-8">
              В подарок — авторская статья <span className="text-background">«7 фатальных ошибок при планировке квартиры»</span>, бесплатная консультация и индивидуальное сопровождение сделки.
            </p>

            <button
              onClick={openQuiz}
              className="w-full sm:w-auto h-12 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
            >
              Обсудить проект
            </button>

            <p className="font-body text-xs text-background/50 mt-6">
              Или запишитесь на бесплатную консультацию
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-1 font-body text-sm text-primary hover:text-primary/80 transition-colors mt-1"
            >
              Записаться онлайн →
            </Link>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <img
              src={leadImg}
              alt="Опрос о вашем интерьерном проекте"
              className="w-full rounded-sm object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
