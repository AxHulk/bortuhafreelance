export type ProjectCategory = "residential" | "resort" | "commercial" | "3dviz";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  area: string;
  location: string;
  year: string;
  style: string;
  category: ProjectCategory;
  task: string;
  status: "Реализован" | "Концепт" | "В процессе";
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
  resort: "Курортная недвижимость",
  commercial: "Коммерческие пространства",
  "3dviz": "3D Визуализация",
};

export const projects: Project[] = [
  {
    id: "apartments-yalta",
    title: "Апартаменты в Ялте",
    area: "85 м²",
    location: "Ялта, ЮБК",
    year: "2024",
    style: "Современный минимализм",
    category: "resort",
    task: "Панорамное остекление, интеграция кондиционирования",
    status: "Реализован",
    description: "Проект апартаментов с панорамным видом на море. Задача — максимально раскрыть вид из окон, сохранив функциональность и уют пространства.",
    coverGradient: "from-primary/20 to-secondary/40",
    gallery: [],
  },
  {
    id: "kvartira-simferopol",
    title: "Квартира на набережной",
    area: "120 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современная классика",
    category: "residential",
    task: "Объединение кухни-гостиной, скрытые системы хранения",
    status: "Реализован",
    description: "Элегантная квартира в центре Симферополя. Классические пропорции и современные решения в отделке создают ощущение вневременного стиля.",
    coverGradient: "from-secondary/30 to-primary/20",
    gallery: [],
  },
  {
    id: "coffee-terra",
    title: "Кофейня «Терра»",
    area: "85 м²",
    location: "Симферополь",
    year: "2023",
    style: "Лофт с элементами эко",
    category: "commercial",
    task: "Зонирование для потока и уюта, выбор антивандальных материалов",
    status: "Концепт",
    description: "Концепция кофейни с акцентом на натуральные материалы и промышленную эстетику. Каждая зона продумана для максимального комфорта гостей.",
    coverGradient: "from-foreground/10 to-primary/15",
    gallery: [],
  },
  {
    id: "villa-yalta",
    title: "Вилла в Ялте",
    area: "280 м²",
    location: "Ялта, ЮБК",
    year: "2024",
    style: "Минимализм",
    category: "residential",
    task: "Интеграция с ландшафтом, открытые террасы",
    status: "В процессе",
    description: "Просторная вилла с видом на горы и море. Минималистичный дизайн подчёркивает природное окружение и создаёт ощущение лёгкости.",
    coverGradient: "from-primary/15 to-foreground/10",
    gallery: [],
  },
  {
    id: "guesthouse-mirt",
    title: "Гостевой дом «Мирт»",
    area: "350 м²",
    location: "Алушта, ЮБК",
    year: "2023",
    style: "Средиземноморский",
    category: "resort",
    task: "Единый стиль для 6 номеров, общие зоны",
    status: "Реализован",
    description: "Проект гостевого дома в средиземноморском стиле. Каждый номер — индивидуальный, но все объединены общей стилистикой и вниманием к деталям.",
    coverGradient: "from-secondary/40 to-primary/10",
    gallery: [],
  },
  {
    id: "salon-aura",
    title: "Салон красоты «Аура»",
    area: "140 м²",
    location: "Симферополь",
    year: "2024",
    style: "Арт-деко",
    category: "commercial",
    task: "Премиальная атмосфера, эргономика рабочих зон",
    status: "Концепт",
    description: "Концепция премиального салона красоты. Арт-деко элементы в сочетании с современными материалами создают атмосферу роскоши и комфорта.",
    coverGradient: "from-primary/25 to-secondary/30",
    gallery: [],
  },
];
