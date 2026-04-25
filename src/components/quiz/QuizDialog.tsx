import { useState, useMemo, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useQuiz } from "./QuizContext";
import { residentialSteps, commercialSteps, Step } from "./quizConfig";
import { QuizStep } from "./QuizStep";
import { QuizContactStep } from "./QuizContactStep";
import { QuizSuccess } from "./QuizSuccess";
import { ChevronLeft, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Track = "residential" | "commercial" | null;
type Answers = Record<string, any>;

const QuizDialog = () => {
  const { isOpen, close } = useQuiz();
  const [track, setTrack] = useState<Track>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());

  const steps: Step[] = useMemo(
    () => (track === "residential" ? residentialSteps : track === "commercial" ? commercialSteps : []),
    [track],
  );

  const totalSteps = steps.length + 1; // + contact
  const isContactStep = track && stepIdx === steps.length;

  useEffect(() => {
    if (!isOpen) {
      // Reset on close
      setTimeout(() => {
        setTrack(null);
        setStepIdx(0);
        setAnswers({});
        setDone(false);
      }, 300);
    }
  }, [isOpen]);

  const handleTrackPick = (t: Exclude<Track, null>) => {
    setTrack(t);
    setStepIdx(0);
  };

  const handleNext = (stepData: Answers) => {
    setAnswers((prev) => ({ ...prev, ...stepData }));
    setStepIdx((i) => i + 1);
  };

  const handleBack = () => {
    if (stepIdx === 0) {
      setTrack(null);
    } else {
      setStepIdx((i) => i - 1);
    }
  };

  const handleSubmit = async (contact: {
    name: string;
    type: "phone" | "email" | "telegram" | "whatsapp";
    value: string;
  }) => {
    if (!track) return;
    setSubmitting(true);
    try {
      // collect file paths from answers
      const filePaths: string[] = [];
      Object.values(answers).forEach((v) => {
        if (Array.isArray(v) && v.every((x) => typeof x === "string" && x.startsWith("quiz-uploads/"))) {
          filePaths.push(...v);
        }
      });

      const { error } = await supabase.from("quiz_leads").insert({
        track,
        answers,
        contact_name: contact.name,
        contact_type: contact.type,
        contact_value: contact.value,
        file_paths: filePaths,
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });
      if (error) throw error;
      setDone(true);
    } catch (e: any) {
      toast.error("Не удалось отправить заявку. Попробуйте ещё раз.");
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-w-2xl p-0 gap-0 max-h-[92vh] overflow-hidden flex flex-col">
        {/* Custom header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background sticky top-0 z-10">
          <div className="flex items-center gap-3 min-w-0">
            {track && !done && (
              <button
                onClick={handleBack}
                className="p-1 -ml-1 text-foreground/60 hover:text-primary transition-colors"
                aria-label="Назад"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <div className="min-w-0">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">
                {!track ? "Бесплатный опрос" : isContactStep ? "Финальный шаг" : `Шаг ${stepIdx + 1} из ${totalSteps}`}
              </p>
              <h2 className="font-heading text-xl text-foreground truncate">
                {!track
                  ? "Бросьте вызов проекту"
                  : isContactStep
                  ? "Ваши контакты"
                  : steps[stepIdx]?.title}
              </h2>
            </div>
          </div>
          <button
            onClick={close}
            className="p-1 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {track && !done && (
          <div className="h-1 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((stepIdx + 1) / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {done ? (
            <QuizSuccess onClose={close} />
          ) : !track ? (
            <TrackPicker onPick={handleTrackPick} />
          ) : isContactStep ? (
            <QuizContactStep onSubmit={handleSubmit} submitting={submitting} />
          ) : (
            <QuizStep
              key={`${track}-${stepIdx}`}
              step={steps[stepIdx]}
              initial={answers}
              sessionId={sessionId}
              onNext={handleNext}
              onSkip={() => setStepIdx((i) => i + 1)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TrackPicker = ({ onPick }: { onPick: (t: "residential" | "commercial") => void }) => (
  <div className="space-y-6">
    <div className="text-center mb-2">
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Ответьте на несколько вопросов — и в течение 24 часов я подготовлю
        предварительную оценку <span className="text-foreground font-medium">стоимости и сроков</span> вашего проекта.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      <button
        onClick={() => onPick("residential")}
        className="group p-6 border border-border rounded-sm text-left hover:border-primary hover:bg-primary/5 transition-all"
      >
        <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
          Жилое помещение
        </h3>
        <p className="font-body text-xs text-muted-foreground">
          Квартира, дом, апартаменты
        </p>
      </button>
      <button
        onClick={() => onPick("commercial")}
        className="group p-6 border border-border rounded-sm text-left hover:border-primary hover:bg-primary/5 transition-all"
      >
        <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
          Коммерческое
        </h3>
        <p className="font-body text-xs text-muted-foreground">
          Офис, кафе, салон, магазин
        </p>
      </button>
    </div>
    <p className="font-body text-xs text-muted-foreground text-center pt-2">
      Большинство вопросов необязательны. Можно пропустить любой шаг.
    </p>
  </div>
);

export default QuizDialog;