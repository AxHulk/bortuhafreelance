export type ProjectCategory = "residential" | "resort" | "commercial" | "3dviz";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  objectId: string;
  title: string;
  area: string;
  location: string;
  year: string;
  style: string;
  category: ProjectCategory;
  task: string;
  status: "Реализован" | "Концепт";
  description: string;
  coverGradient: string;
  coverImage?: string;
  gallery: ProjectImage[];
  blueprints?: ProjectImage[];
  testimonial?: {
    text: string;
    author: string;
  };
}

export const categoryLabels: Record<string, string> = {
  all: "Все проекты",
  residential: "Жилые интерьеры",
  commercial: "Коммерческие пространства",
  "3dviz": "3D Визуализация",
};

import zhk5KidsImg01 from "@/assets/portfolio/zhk-5-element-kids/01-tv-storage.png";
import zhk5KidsImg02 from "@/assets/portfolio/zhk-5-element-kids/02-bed-corner.png";
import zhk5KidsImg03 from "@/assets/portfolio/zhk-5-element-kids/03-sleep-zone.png";
import zhk5KidsImg04 from "@/assets/portfolio/zhk-5-element-kids/04-overall-view.png";
import zhk5KidsImg05 from "@/assets/portfolio/zhk-5-element-kids/05-sofa-wall.png";
import zhk5KidsImg06 from "@/assets/portfolio/zhk-5-element-kids/06-desk-window.png";
import zhk5KidsImg07 from "@/assets/portfolio/zhk-5-element-kids/07-room-overview.png";
import zhk5KidsImg08 from "@/assets/portfolio/zhk-5-element-kids/08-frontal-view.png";
import zhk5KidsImg09 from "@/assets/portfolio/zhk-5-element-kids/09-desk-shelving.png";

export const projects: Project[] = [
  {
    id: "zhk-5-element-kids-room",
    objectId: "zhk-pyatiy-element",
    title: "Детская 18,6 м²",
    area: "18,6 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Современный, тёплая нейтральная палитра с терракотовыми акцентами",
    category: "residential",
    task: "Создать многофункциональное и эргономичное пространство для троих детей разного пола: четыре полноценных спальных места, два рабочих места и вместительные системы хранения — без ощущения тесноты.",
    status: "Реализован",
    description:
      "Детская спальня для троих детей разного пола, в которой на 18,6 м² разместились четыре полноценных спальных места, два рабочих места и продуманные системы хранения — при этом интерьер не перегружен и легко дышит. " +
      "Ключевым решением стало зонирование: рабочая зона у окна с общим столом 160 см обеспечивает естественный свет сразу для двоих, а раскладной диван и подростковая кровать с выкатным дополнительным местом закрывают сценарий сна без визуального шума. В центре комнаты остаётся свободное место для игр. " +
      "Эстетика построена на сочетании мягких природных фактур и современных технологичных решений. Главным связующим звеном стал глубокий терракотовый цвет — он деликатно появляется в отделке открытого стеллажа, потолочной нише и элементах освещения, формируя целостный и динамичный образ. " +
      "Особое внимание уделено свету: над рабочим столом и в зоне отдыха установлена современная трековая ременная система на терракотовой основе. Светильники свободно перемещаются вдоль ремня, адаптируя сценарии под учёбу или вечернее чтение. " +
      "Светлое дерево на полу, мягкая обивка дивана в кофейных тонах и тактильные обои с абстрактным принтом добавляют комнате уют и глубину. Круглый ковёр с мелкими цветными вкраплениями объединяет пространство и привносит лёгкую игривую ноту.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5KidsImg04,
    gallery: [
      { src: zhk5KidsImg04, alt: "Детская — общий вид с зоной сна и рабочей зоной" },
      { src: zhk5KidsImg08, alt: "Фронтальный вид: акцентная стена с обоями и трековая подсветка" },
      { src: zhk5KidsImg02, alt: "Угловая кровать с тёплой обивкой и декоративными бра" },
      { src: zhk5KidsImg03, alt: "Зона сна и отдыха: два спальных места с мягким текстилем" },
      { src: zhk5KidsImg07, alt: "Перспектива комнаты: ТВ-зона, рабочее место и окно" },
      { src: zhk5KidsImg06, alt: "Рабочая зона у окна с трековым освещением и стеллажом" },
      { src: zhk5KidsImg09, alt: "Рабочее место на двоих с терракотовым стеллажом" },
      { src: zhk5KidsImg01, alt: "Зона ТВ и встроенные системы хранения" },
      { src: zhk5KidsImg05, alt: "Диван у акцентной стены с трековыми светильниками" },
    ],
  },
];
