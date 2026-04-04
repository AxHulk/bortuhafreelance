import { useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactDialog from "@/components/ContactDialog";

interface ExtraServiceDetail {
  title: string;
  headline: string;
  description: string;
  includes: string[];
  audience: string;
  note?: string;
  ctaLabel: string;
  ctaSubject: string;
}

const serviceDetails: Record<string, ExtraServiceDetail> = {
  "Авторский надзор": {
    title: "Авторский надзор — от 40 000 руб. / мес.",
    headline: "Я слежу за тем, чтобы строители строили по проекту, а не «по-своему»",
    description:
      "Авторский надзор — это регулярные выезды на объект и постоянная связь с прорабом на протяжении всего ремонта. Я проверяю, чтобы каждое решение из рабочей документации было реализовано точно: правильные углы, верные размеры, согласованные материалы.",
    includes: [
      "Выезды на объект по согласованному графику (от 2 раз в месяц)",
      "Проверка соответствия выполненных работ проекту и чертежам",
      "Оперативная связь с прорабом и ответы на технические вопросы",
      "Согласование замен материалов, если что-то недоступно",
      "Фотофиксация каждого этапа с письменными комментариями",
      "Финальная приёмка объекта перед расчётом со строителями",
    ],
    audience:
      "Для тех, кто хочет получить именно тот результат, который видел на 3D-визуализации, а не «ну, примерно так».",
    note: "Авторский надзор доступен только для объектов, по которым разработан полный дизайн-проект у Наталии Фурса.",
    ctaLabel: "Обсудить надзор за моим объектом →",
    ctaSubject: "Авторский надзор",
  },
  "Комплектация": {
    title: "Комплектация — 10% от сметы",
    headline: "Я беру на себя всё, что связано с закупками — от поиска до доставки на объект",
    description:
      "Комплектация — это полное управление закупочным процессом. Вам не нужно тратить выходные на объезд салонов, разбираться в артикулах и ждать курьеров. Я делаю это профессионально, со скидками поставщиков и без наценок на позиции.",
    includes: [
      "Составление детальной спецификации с артикулами, ценами и поставщиками",
      "Заказ материалов, мебели, светильников и декора у проверенных поставщиков",
      "Логистика с материка: организация доставки в Крым, таможенное оформление при необходимости",
      "Контроль сроков поставок и хранение на складе до начала монтажа",
      "Работа с рекламациями: замена брака, возврат, повторный заказ",
      "Итоговый отчёт по всем закупкам с чеками и гарантийными документами",
    ],
    audience:
      "Для занятых клиентов, которые ценят своё время и хотят получить готовый интерьер «под ключ» без погружения в операционные детали.",
    ctaLabel: "Рассчитать стоимость комплектации →",
    ctaSubject: "Комплектация",
  },
  "Разовый выезд": {
    title: "Разовый выезд — 5 000 руб. / выезд",
    headline: "Не знаете, что выбрать в шоуруме? Я приеду и помогу принять правильное решение",
    description:
      "Разовый выезд — это персональное сопровождение в салонах и шоурумах Симферополя или Севастополя. Я помогу не потеряться в ассортименте, выбрать материалы и мебель, которые будут сочетаться между собой и подойдут именно вашему пространству.",
    includes: [
      "Предварительная консультация: вы рассказываете о задаче, я готовлю маршрут по релевантным салонам",
      "Совместный выезд в шоурумы Симферополя или Севастополя (до 4 часов)",
      "Профессиональный взгляд на сочетаемость материалов, цветов и фактур",
      "Помощь в переговорах с менеджерами салонов и проверка технических характеристик",
      "Итоговый список выбранных позиций с артикулами и ценами в мессенджер",
    ],
    audience:
      "Для тех, кто делает ремонт самостоятельно, но хочет профессиональной поддержки в ключевых решениях. А также для клиентов с действующим проектом, которым нужна помощь на этапе финального выбора.",
    note: "Стоимость одного выезда — 5 000 руб. При заказе трёх и более выездов — скидка 20%.",
    ctaLabel: "Записаться на выезд →",
    ctaSubject: "Разовый выезд в шоурум",
  },
};

interface ExtraServiceDialogProps {
  serviceName: string;
  children: React.ReactNode;
}

const ExtraServiceDialog = ({ serviceName, children }: ExtraServiceDialogProps) => {
  const detail = serviceDetails[serviceName];
  if (!detail) return <>{children}</>;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-background border-border max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl font-semibold text-foreground leading-snug">
            {detail.headline}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-2 space-y-5">
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            {detail.description}
          </p>

          <div>
            <p className="font-body text-xs font-medium text-foreground mb-3 tracking-wide uppercase">
              Что входит в услугу:
            </p>
            <ul className="space-y-2.5">
              {detail.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-xs text-foreground/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/30 rounded-sm p-4">
            <p className="font-body text-xs font-medium text-foreground mb-1">Для кого:</p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {detail.audience}
            </p>
          </div>

          {detail.note && (
            <p className="font-body text-xs text-muted-foreground/70 italic">
              Важно: {detail.note}
            </p>
          )}

          <ContactDialog subject={detail.ctaSubject}>
            <button className="w-full h-11 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
              {detail.ctaLabel}
            </button>
          </ContactDialog>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExtraServiceDialog;
