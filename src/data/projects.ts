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

import zhk5HallImg01 from "@/assets/portfolio/zhk-5-element-hallway/01-wardrobe.png";
import zhk5HallImg02 from "@/assets/portfolio/zhk-5-element-hallway/02-corridor-view.png";
import zhk5HallImg03 from "@/assets/portfolio/zhk-5-element-hallway/03-mirror-zone.png";
import zhk5HallImg04 from "@/assets/portfolio/zhk-5-element-hallway/04-round-mirror.png";
import zhk5HallImg05 from "@/assets/portfolio/zhk-5-element-hallway/05-mirror-console.png";
import zhk5HallImg06 from "@/assets/portfolio/zhk-5-element-hallway/06-wardrobe-door.png";
import zhk5HallImg07 from "@/assets/portfolio/zhk-5-element-hallway/07-passage.png";

import zhk5KitchenImg01 from "@/assets/portfolio/zhk-5-element-kitchen/01-kitchen-wine.png";
import zhk5KitchenImg02 from "@/assets/portfolio/zhk-5-element-kitchen/02-dining-table.png";
import zhk5KitchenImg03 from "@/assets/portfolio/zhk-5-element-kitchen/03-living-sofa.png";
import zhk5KitchenImg04 from "@/assets/portfolio/zhk-5-element-kitchen/04-dining-vitrine.png";
import zhk5KitchenImg05 from "@/assets/portfolio/zhk-5-element-kitchen/05-living-vitrine.png";
import zhk5KitchenImg06 from "@/assets/portfolio/zhk-5-element-kitchen/06-overview.png";
import zhk5KitchenImg07 from "@/assets/portfolio/zhk-5-element-kitchen/07-kitchen-tv.png";
import zhk5KitchenImg08 from "@/assets/portfolio/zhk-5-element-kitchen/08-sofa-table.png";
import zhk5KitchenImg09 from "@/assets/portfolio/zhk-5-element-kitchen/09-marble-detail.png";

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
  {
    id: "zhk-5-element-hallway",
    objectId: "zhk-pyatiy-element",
    title: "Коридор 13,5 м²",
    area: "13,5 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Современный минимализм, тёплая бежевая палитра с золотыми акцентами",
    category: "residential",
    task: "Создать просторный и гостеприимный коридор 13,5 м², который выполняет роль визитной карточки квартиры: вместительные системы хранения, комфортная зона переобувания и сценарное освещение, подчёркивающее эстетику интерьера.",
    status: "Реализован",
    description:
      "Коридор 13,5 м² спроектирован как функциональная и элегантная входная зона, которая встречает с порога и задаёт тон всему интерьеру квартиры. " +
      "Планировочно пространство выстроено вокруг полноразмерного шкафа длиной 300 см и глубиной 60 см вдоль одной из стен — он закрывает все потребности семьи в хранении верхней одежды и обуви, не загромождая коридор и сохраняя ощущение простора. " +
      "Визуальная концепция построена на тёплых бежевых тонах: спокойная палитра в отделке стен и мебели создаёт мягкую гармоничную атмосферу, визуально расширяет пространство и делает его светлее с первой минуты. " +
      "У входа организована удобная зона с крючками для повседневной одежды и мягкой подушкой для сидения. Ниша эффектно подсвечена светодиодной лентой, интегрированной в потолочную нишу, — рассеянный свет подчёркивает архитектуру и делает прихожую гостеприимной. " +
      "Главным декоративным акцентом стало большое круглое зеркало с контурной подсветкой: оно работает и как практичный элемент, и как инструмент, визуально увеличивающий пространство. Рядом — изящная тёмная консоль для ключей и аксессуаров, над которой акцентно размещены подвесные светильники с золотыми элементами, добавляющие интерьеру лёгкого шика и красивую игру света и тени. " +
      "В итоге транзитная зона превратилась в стильное, продуманное до деталей пространство, которое одинаково хорошо справляется и с бытовыми сценариями, и с ролью первого впечатления о квартире.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5HallImg03,
    gallery: [
      { src: zhk5HallImg03, alt: "Коридор — вид с круглым зеркалом и консолью" },
      { src: zhk5HallImg04, alt: "Круглое зеркало с подсветкой и тёмная консоль" },
      { src: zhk5HallImg05, alt: "Зеркало с отражением гардеробной зоны" },
      { src: zhk5HallImg01, alt: "Встроенная гардеробная и зона прихожей" },
      { src: zhk5HallImg06, alt: "Фасады встроенной мебели с реечной фактурой" },
      { src: zhk5HallImg02, alt: "Перспектива коридора с трековым освещением" },
      { src: zhk5HallImg07, alt: "Скрытые двери в конце коридора" },
    ],
  },
];
