import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactsSection = () => {
  const ref = useScrollFadeIn();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const submissionId = crypto.randomUUID();
      const { error } = await supabase.from("contact_submissions").insert({
        id: submissionId,
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim() || null,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });
      if (error) throw error;

      // Fire-and-forget email notification
      try {
        await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "new-contact-form",
            idempotencyKey: `contact-form-${submissionId}`,
            templateData: {
              name: form.name.trim(),
              phone: form.phone.trim(),
              message: form.message.trim(),
              createdAt: new Date().toLocaleString("ru-RU"),
              referrer: document.referrer || "",
              userAgent: navigator.userAgent,
              submissionId,
            },
          },
        });
      } catch (emailErr) {
        console.warn("Email notification failed (submission still saved)", emailErr);
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
      toast.error("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-5xl opacity-0">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Контакты
        </h2>
        <div className="w-16 h-px bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">Ваше имя</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-10 px-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">Телефон</label>
              <input
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-10 px-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">Расскажите о вашем проекте</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 rounded-sm border border-border bg-background font-body text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="h-10 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Отправляем…" : "Отправить"}
            </button>
            {submitted && (
              <p className="font-body text-sm text-primary">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
            )}
          </form>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:+79781234567" className="font-body text-sm hover:text-primary transition-colors">
                +7 (978) 123-45-67
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <a href="mailto:info@natalifursa.ru" className="font-body text-sm hover:text-primary transition-colors">
                info@natalifursa.ru
              </a>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-body text-xs text-muted-foreground mb-3">Социальные сети</p>
              <div className="flex gap-4">
                <a href="#" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Telegram</a>
                <a href="#" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="font-body text-sm text-foreground/70 hover:text-primary transition-colors">VK</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
