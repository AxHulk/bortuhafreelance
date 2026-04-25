import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { useQuiz } from "./QuizContext";

const STORAGE_KEY = "nf_quiz_banner_dismissed";

export const QuizBanner = () => {
  const { open, isOpen } = useQuiz();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setDismissed(true);
      return;
    }

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setShow(true);
    };

    const timer = window.setTimeout(trigger, 5000);

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (scrolled > 0.3) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Hide banner while quiz is open
  useEffect(() => {
    if (isOpen) setShow(false);
  }, [isOpen]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const handleOpen = () => {
    open();
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (dismissed || !show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md sm:w-[420px] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="relative bg-foreground text-background rounded-sm shadow-2xl border border-foreground/10 overflow-hidden">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 p-1 text-background/60 hover:text-background transition-colors z-10"
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>
        <div className="p-6 pr-10">
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary block mb-2">
            Бросьте вызов
          </span>
          <h3 className="font-heading text-2xl leading-tight mb-2">
            Узнайте стоимость и сроки вашего проекта
          </h3>
          <p className="font-body text-xs text-background/70 mb-4 leading-relaxed">
            Ответьте на короткий опрос — в течение 24 часов я подготовлю персональное предложение.
          </p>
          <button
            onClick={handleOpen}
            className="group inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
          >
            Пройти опрос
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};