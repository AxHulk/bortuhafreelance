import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { localBusinessJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import iconPhone from "@/assets/contact-icon-phone.png";
import iconEmail from "@/assets/contact-icon-email.png";
import iconLocation from "@/assets/contact-icon-location.png";
import socialVk from "@/assets/social-vk.png";
import socialBehance from "@/assets/social-behance.png";

const objectTypes = ["Квартира", "Дом", "Коммерция", "Апартаменты ЮБК"];
const serviceTypes = ["Дизайн-проект", "Только 3D Визуализация", "Консультация"];

const Contacts = () => {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    objectType: "",
    area: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length > 100) errs.name = "Введите имя (до 100 символов)";
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,20}$/.test(form.phone.trim())) errs.phone = "Введите корректный номер телефона";
    if (form.message.length > 1000) errs.message = "Сообщение до 1000 символов";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
  };

  const inputClass = "w-full bg-transparent border border-foreground/20 rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors";
  const selectClass = "w-full bg-transparent border border-foreground/20 rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none";

  return (
    <div className="min-h-screen">
      <SEO
        title="Контакты — обсудить проект интерьера"
        description="Связаться с дизайнером интерьера Наталией Фурсой: +7 (978) 540-09-81, bortnik.n.n@yandex.ru. Симферополь, Севастополь, Ялта, Алушта, Евпатория, Саки — выезд по Крыму и онлайн."
        path="/contacts"
        jsonLd={[
          localBusinessJsonLd,
          breadcrumbJsonLd([
            { name: "Главная", url: `${SITE_URL}/` },
            { name: "Контакты", url: `${SITE_URL}/contacts` },
          ]),
        ]}
      />
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2025' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-6xl opacity-0">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contacts */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground mb-4">
                Давайте обсудим
                <br />
                <span className="text-primary">ваш проект</span>
              </h1>
              <p className="font-body text-sm leading-relaxed text-muted-foreground mb-12">
                Свяжитесь со мной удобным для вас способом или оставьте заявку, и я перезвоню в течение дня.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <img src={iconPhone} alt="Телефон" className="w-10 h-10 object-contain shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Телефон / WhatsApp / Telegram</p>
                    <a href="tel:+79785400981" className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      +7 (978) 540-09-81
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <img src={iconEmail} alt="Email" className="w-10 h-10 object-contain shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Email</p>
                    <a href="mailto:bortnik.n.n@yandex.ru" className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      bortnik.n.n@yandex.ru
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <img src={iconLocation} alt="Локация" className="w-10 h-10 object-contain shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">География работы</p>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      Симферополь, Севастополь, ЮБК
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Возможна удалённая работа по всему миру
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-4 pt-4">
                  <a href="https://vk.ru/visfursa" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={socialVk} alt="ВКонтакте" className="w-10 h-10 object-contain" />
                  </a>
                  <a href="https://www.behance.net/bd28e124" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={socialBehance} alt="Behance" className="w-10 h-10 object-contain" />
                  </a>
                </div>
              </div>

              {/* Requisites */}
              <div className="mt-12 pt-8 border-t border-border">
                <details className="group">
                  <summary className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                    Реквизиты ▸
                  </summary>
                  <div className="mt-4 space-y-1 font-body text-xs text-muted-foreground leading-relaxed">
                    <p>ИП Фурса Наталия Николаевна</p>
                    <p>ИНН: 910201714510</p>
                    <p>ОГРНИП: 322911200005052</p>
                    <p>Банк: ФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО)</p>
                    <p>БИК: 044525411</p>
                    <p>Корр. счёт: 30101810145250000411</p>
                    <p>Расч. счёт: 40802810324780002560</p>
                    <p>Юр. адрес: г. Симферополь, ул. Кечкеметская д. 94-А, кв. 11</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <span className="text-primary text-2xl">✓</span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">Заявка отправлена</h3>
                    <p className="font-body text-sm text-muted-foreground">Я свяжусь с вами в течение дня.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Имя *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      maxLength={100}
                    />
                    {errors.name && <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      maxLength={20}
                    />
                    {errors.phone && <p className="font-body text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <select
                      value={form.objectType}
                      onChange={(e) => setForm({ ...form, objectType: e.target.value })}
                      className={selectClass}
                    >
                      <option value="" disabled>Тип объекта</option>
                      {objectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Площадь (м²)"
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      className={inputClass}
                      maxLength={10}
                    />
                  </div>

                  <div>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={selectClass}
                    >
                      <option value="" disabled>Интересующая услуга</option>
                      {serviceTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      placeholder="Сообщение / Вопросы"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} min-h-[120px] resize-none`}
                      maxLength={1000}
                    />
                    {errors.message && <p className="font-body text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-sm bg-foreground text-primary font-body text-sm font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
                  >
                    Отправить заявку
                  </button>
                  <p className="font-body text-[10px] text-muted-foreground/60 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
