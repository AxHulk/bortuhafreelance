import { useState } from "react";
import { Phone, Mail, Send, MessageCircle } from "lucide-react";

type ContactType = "phone" | "email" | "telegram" | "whatsapp";

const contactConfig: Record<
  ContactType,
  { icon: any; label: string; placeholder: string; mask?: (v: string) => string; validate: (v: string) => boolean }
> = {
  phone: {
    icon: Phone,
    label: "Телефон",
    placeholder: "+7 (___) ___-__-__",
    mask: (v) => {
      const d = v.replace(/\D/g, "").slice(0, 11);
      const n = d.startsWith("8") ? "7" + d.slice(1) : d.startsWith("7") ? d : "7" + d;
      const p = n.padEnd(11, "_");
      return `+7 (${p.slice(1, 4)}) ${p.slice(4, 7)}-${p.slice(7, 9)}-${p.slice(9, 11)}`.replace(/_/g, "_");
    },
    validate: (v) => v.replace(/\D/g, "").length === 11,
  },
  email: {
    icon: Mail,
    label: "Email",
    placeholder: "name@example.com",
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  },
  telegram: {
    icon: Send,
    label: "Telegram",
    placeholder: "@username",
    mask: (v) => {
      let s = v.trim();
      if (s && !s.startsWith("@")) s = "@" + s.replace(/^@+/, "");
      return s.replace(/[^@a-zA-Z0-9_]/g, "");
    },
    validate: (v) => /^@[a-zA-Z0-9_]{4,32}$/.test(v),
  },
  whatsapp: {
    icon: MessageCircle,
    label: "WhatsApp",
    placeholder: "+7 (___) ___-__-__",
    mask: (v) => {
      const d = v.replace(/\D/g, "").slice(0, 15);
      return "+" + d;
    },
    validate: (v) => v.replace(/\D/g, "").length >= 10,
  },
};

export const QuizContactStep = ({
  onSubmit,
  submitting,
}: {
  onSubmit: (c: { name: string; type: ContactType; value: string }) => void;
  submitting: boolean;
}) => {
  const [name, setName] = useState("");
  const [type, setType] = useState<ContactType>("phone");
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const cfg = contactConfig[type];
  const Icon = cfg.icon;
  const valid = name.trim().length >= 2 && cfg.validate(value);

  const handleChange = (v: string) => {
    setValue(cfg.mask ? cfg.mask(v) : v);
  };

  const handleTypeChange = (t: ContactType) => {
    setType(t);
    setValue("");
    setTouched(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    onSubmit({ name: name.trim(), type, value: value.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Остался последний шаг. Оставьте контакт, и я подготовлю персональное
        предложение в течение 24 часов.
      </p>

      <div>
        <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
          Как к вам обращаться?
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          className="h-12 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-wider text-muted-foreground block mb-2">
          Удобный способ связи
        </label>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {(Object.keys(contactConfig) as ContactType[]).map((t) => {
            const I = contactConfig[t].icon;
            const active = type === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => handleTypeChange(t)}
                className={`flex flex-col items-center gap-1 py-3 rounded-sm border transition-colors ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground/60 hover:border-primary/50"
                }`}
              >
                <I size={18} />
                <span className="font-body text-[10px] uppercase tracking-wider">{contactConfig[t].label}</span>
              </button>
            );
          })}
        </div>
        <div className="relative">
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <input
            required
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder={cfg.placeholder}
            className="h-12 w-full pl-10 pr-4 rounded-sm border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        {touched && value && !cfg.validate(value) && (
          <p className="font-body text-xs text-destructive mt-2">Проверьте формат</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting || !valid}
        className="w-full h-12 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Отправляем…" : "Отправить заявку"}
      </button>

      <p className="font-body text-[11px] text-muted-foreground text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
};