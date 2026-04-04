import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import leadImg from "@/assets/home-leadmagnet.jpg";

const LeadMagnetSection = () => {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState({ name: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", contact: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

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
            <p className="font-body text-sm text-background/70 leading-relaxed mb-8">
              Скачайте чек-лист: «7 фатальных ошибок при планировке квартиры, которые стоят миллионы»
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 px-4 rounded-sm border border-background/20 bg-transparent text-background font-body text-sm placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Телефон или Email"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="h-12 px-4 rounded-sm border border-background/20 bg-transparent text-background font-body text-sm placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto h-12 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
                >
                  Получить в Telegram
                </button>
              </form>
            ) : (
              <p className="font-body text-sm text-primary">
                Спасибо! Мы отправим чек-лист в ближайшее время.
              </p>
            )}

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
              alt="Чек-лист 7 ошибок при планировке"
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
