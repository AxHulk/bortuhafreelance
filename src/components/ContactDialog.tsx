import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  children: React.ReactNode;
  subject?: string;
}

const ContactDialog = ({ children, subject }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectLine = subject
      ? `Заявка с сайта: ${subject}`
      : "Заявка с сайта NataliFursa.ru";

    const body = [
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      form.message ? `Сообщение: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:bortnik.n.n@yandex.ru?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-semibold text-foreground">
            Обсудить проект
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <p className="font-body text-sm text-primary py-8 text-center">
            Спасибо! Откроется ваш почтовый клиент для отправки заявки.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">
                Ваше имя
              </label>
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
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">
                Телефон
              </label>
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
              <label className="block font-body text-xs font-medium text-muted-foreground mb-1.5">
                Расскажите о вашем проекте
              </label>
              <textarea
                rows={3}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 rounded-sm border border-border bg-background font-body text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full h-11 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Отправить заявку →
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
