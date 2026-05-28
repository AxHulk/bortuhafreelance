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

      const leadId = crypto.randomUUID();
      const { error } = await supabase.from("quiz_leads").insert({
        id: leadId,
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

      // Fire-and-forget email notification (don't block success on it)
      try {
        const flatAnswers = buildAnswerSummary(steps, answers);
        const fileUrls = await buildFileUrls(filePaths);
        await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "new-quiz-lead",
            idempotencyKey: `quiz-lead-${leadId}`,
            templateData: {
              trackLabel: track === "residential" ? "Жилое помещение" : "Коммерческое",
              contactName: contact.name,
              contactType: contact.type,
              contactValue: contact.value,
              createdAt: new Date().toLocaleString("ru-RU"),
              referrer: document.referrer || "",
              userAgent: navigator.userAgent,
              answers: flatAnswers,
              files: fileUrls,
              leadId,
            },
          },
        });
      } catch (emailErr) {
        console.warn("Email notification failed (lead still saved)", emailErr);
      }

      // Yandex.Metrika goal — quiz submitted
      try {
        // @ts-ignore
        if (typeof window !== "undefined" && typeof (window as any).ym === "function") {
          (window as any).ym(109143239, "reachGoal", "quiz_submit", { track });
        }
      } catch (ymErr) {
        console.warn("Yandex.Metrika goal failed", ymErr);
      }

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

// Build a human-readable [{ label, value }] summary using step/field/option labels
function buildAnswerSummary(
  steps: Step[],
  answers: Record<string, any>,
): Array<{ label: string; value: string }> {
  const out: Array<{ label: string; value: string }> = [];
  for (const step of steps) {
    for (const field of step.fields) {
      const raw = answers[field.id];
      if (raw === undefined || raw === null || raw === "") continue;
      if (Array.isArray(raw) && raw.length === 0) continue;

      let value = "";
      const optionLabel = (v: string) =>
        field.options?.find((o) => o.value === v)?.label ?? v;

      if (field.type === "single") {
        if (raw && typeof raw === "object" && "value" in raw) {
          const base = optionLabel(String((raw as any).value));
          const other = (raw as any).other?.toString().trim();
          value = other ? `${base} — ${other}` : base;
        } else {
          value = optionLabel(String(raw));
        }
      } else if (field.type === "multi" || field.type === "tags") {
        if (Array.isArray(raw)) {
          value = raw.map((v) => optionLabel(String(v))).join(", ");
        } else if (raw && typeof raw === "object") {
          const values: string[] = Array.isArray((raw as any).values) ? (raw as any).values : [];
          const labels = values
            .filter((v) => v !== "__other__")
            .map((v) => optionLabel(String(v)));
          const other = (raw as any).other?.toString().trim();
          if (other) labels.push(`другое: ${other}`);
          value = labels.join(", ");
        } else {
          value = String(raw);
        }
      } else if (field.type === "files" || field.type === "yesno-files") {
        // Files are listed separately in the email; only emit a short status here.
        if (Array.isArray(raw)) {
          continue; // file paths handled in files section
        }
        if (raw && typeof raw === "object") {
          const has = (raw as any).has;
          const files = Array.isArray((raw as any).files) ? (raw as any).files : [];
          const parts: string[] = [];
          if (has === true) parts.push("Да");
          else if (has === false) parts.push("Нет");
          if (files.length) parts.push(`файлов: ${files.length}`);
          value = parts.join(", ");
        } else {
          value = String(raw);
        }
      } else if (field.type === "rooms" || field.type === "family") {
        if (field.type === "family" && raw && typeof raw === "object") {
          const f = raw as any;
          const parts: string[] = [];
          if (f.adults?.toString().trim()) parts.push(`взрослые: ${f.adults}`);
          if (f.kids?.toString().trim()) parts.push(`дети: ${f.kids}`);
          if (f.pets?.toString().trim()) parts.push(`питомцы: ${f.pets}`);
          if (f.growing) parts.push("планируется пополнение");
          value = parts.join("; ");
        } else {
          value = String(raw);
        }
      } else {
        value = String(raw);
      }

      if (value) out.push({ label: field.label, value });
    }
  }
  return out;
}

async function buildFileUrls(paths: string[]): Promise<string[]> {
  const urls: string[] = [];
  for (const p of paths) {
    // strip "quiz-uploads/" prefix if present, since bucket name is "quiz-uploads"
    const key = p.startsWith("quiz-uploads/") ? p.slice("quiz-uploads/".length) : p;
    const { data } = await supabase.storage
      .from("quiz-uploads")
      .createSignedUrl(key, 60 * 60 * 24 * 7); // 7 days
    if (data?.signedUrl) urls.push(data.signedUrl);
  }
  return urls;
}