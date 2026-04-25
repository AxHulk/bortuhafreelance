import { CheckCircle2 } from "lucide-react";

export const QuizSuccess = ({ onClose }: { onClose: () => void }) => (
  <div className="text-center py-10 space-y-5">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
    </div>
    <h3 className="font-heading text-3xl text-foreground">Спасибо!</h3>
    <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
      Я получила ваш бриф и в течение 24 часов подготовлю персональное предложение
      с оценкой стоимости и сроков. Свяжусь с вами по указанному контакту.
    </p>
    <button
      onClick={onClose}
      className="h-12 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors"
    >
      Закрыть
    </button>
  </div>
);