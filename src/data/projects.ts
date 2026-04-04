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
  
  commercial: "Коммерческие пространства",
  "3dviz": "3D Визуализация",
};

import sushiCafe1 from "@/assets/portfolio/sushi-cafe-1.jpg";
import sushiCafe2 from "@/assets/portfolio/sushi-cafe-2.jpg";
import sushiCafe3 from "@/assets/portfolio/sushi-cafe-3.jpg";
import sushiMango1 from "@/assets/portfolio/sushi-mango-1.jpg";
import sushiMango2 from "@/assets/portfolio/sushi-mango-2.jpg";
import sushiMango3 from "@/assets/portfolio/sushi-mango-3.jpg";
import saunaBath1 from "@/assets/portfolio/sauna-bath-1.jpg";
import saunaBath2 from "@/assets/portfolio/sauna-bath-2.jpg";
import saunaBath3 from "@/assets/portfolio/sauna-bath-3.jpg";
import bedroom1 from "@/assets/portfolio/bedroom-1.jpg";
import bedroom2 from "@/assets/portfolio/bedroom-2.jpg";
import bedroom3 from "@/assets/portfolio/bedroom-3.jpg";
import compactBedroom1 from "@/assets/portfolio/compact-bedroom-1.jpg";
import compactBedroom2 from "@/assets/portfolio/compact-bedroom-2.jpg";
import compactBedroom3 from "@/assets/portfolio/compact-bedroom-3.jpg";
import coffeeShopSimferopol1 from "@/assets/portfolio/coffee-shop-simferopol-1.jpg";
import holidayHouseLiving1 from "@/assets/portfolio/holiday-house-living-1.jpg";
import holidayHouseLiving2 from "@/assets/portfolio/holiday-house-living-2.jpg";
import holidayHouseLiving3 from "@/assets/portfolio/holiday-house-living-3.jpg";
import holidayHouseLiving4 from "@/assets/portfolio/holiday-house-living-4.jpg";
import holidayHouseLiving5 from "@/assets/portfolio/holiday-house-living-5.jpg";
import marbleKitchen1 from "@/assets/portfolio/marble-kitchen-1.jpg";
import marbleKitchen2 from "@/assets/portfolio/marble-kitchen-2.jpg";
import marbleKitchen3 from "@/assets/portfolio/marble-kitchen-3.jpg";
import garageLiving1 from "@/assets/portfolio/garage-living-1.jpg";
import garageLiving2 from "@/assets/portfolio/garage-living-2.jpg";
import garageLiving3 from "@/assets/portfolio/garage-living-3.jpg";
import garageLiving4 from "@/assets/portfolio/garage-living-4.jpg";
import kidsRoom1 from "@/assets/portfolio/kids-room-1.jpg";
import kidsRoom2 from "@/assets/portfolio/kids-room-2.jpg";
import kidsRoom3 from "@/assets/portfolio/kids-room-3.jpg";
import kidsRoom4 from "@/assets/portfolio/kids-room-4.jpg";
import hallwayZhigulina1 from "@/assets/portfolio/hallway-zhigulina-1.jpg";
import hallwayZhigulina2 from "@/assets/portfolio/hallway-zhigulina-2.jpg";
import hallwayZhigulina3 from "@/assets/portfolio/hallway-zhigulina-3.jpg";
import balustradeViz1 from "@/assets/portfolio/balustrade-viz-1.jpg";
import balustradeViz2 from "@/assets/portfolio/balustrade-viz-2.jpg";

export const projects: Project[] = [
  {
    id: "balustrade-3d-visualization",
    title: "3D-визуализация кованых балясин",
    area: "—",
    location: "Симферополь",
    year: "2024",
    style: "Классика",
    category: "3dviz",
    task: "Создать фотореалистичную визуализацию кованых балясин в интерьере для маркетинговых материалов кузнечного двора",
    status: "Реализован",
    description: "Маркетинговая 3D-визуализация для производителя кованых изделий. Задача — показать продукцию не изолированно, а в контексте премиального интерьера, чтобы потенциальный заказчик сразу увидел, как балясины работают в пространстве. Парадная лестница с мраморными ступенями, ореховым паркетом «ёлочкой» и витыми балясинами с золотым декором передаёт масштаб, качество исполнения и статус изделий. Визуализация выполнена в 3ds Max с акцентом на детализацию металлической фурнитуры, текстуру дерева и игру света на полированных поверхностях.",
    coverImage: balustradeViz1,
    coverGradient: "from-primary/20 to-secondary/25",
    gallery: [
      { src: balustradeViz1, alt: "Детализация кованых балясин с золотым декором" },
      { src: balustradeViz2, alt: "Парадная лестница с мраморными ступенями — общий вид" },
    ],
  },
  {
    id: "hallway-zhigulina-roscha",
    title: "Прихожая в ЖК «Жигулина Роща»",
    area: "12 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современная классика",
    category: "residential",
    task: "Создать светлую, функциональную прихожую с ощущением простора и продуманным хранением",
    status: "Реализован",
    description: "Прихожая — визитная карточка дома, и здесь она задаёт тон всей квартире. Светлая нейтральная палитра, мягкие текстурные обои с геометрическим рисунком и тёплое дерево на полу формируют ощущение лёгкости и уюта с первых шагов. Входная зона оснащена мягкой панелью с вешалками, банкеткой с ящиками для обуви и компактной тумбой — всё необходимое на расстоянии вытянутой руки, без визуального шума. Воздушная люстра-heracleum и точечное освещение добавляют объём, а перспектива коридора с видом на столовую подчёркивает глубину пространства.",
    coverImage: hallwayZhigulina1,
    coverGradient: "from-primary/20 to-secondary/25",
    gallery: [
      { src: hallwayZhigulina1, alt: "Прихожая — вид от входа" },
      { src: hallwayZhigulina2, alt: "Коридор с видом на столовую" },
      { src: hallwayZhigulina3, alt: "Входная зона с мягкой панелью и банкеткой" },
    ],
  },
  {
    id: "kids-room-balcony",
    title: "Детская с выходом на балкон",
    area: "18 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный нейтральный",
    category: "residential",
    task: "Совместить зону отдыха, учёбы и самовыражения в одной комнате, сохранив ощущение простора",
    status: "Реализован",
    description: "Детская комната, в которой продумано всё: место для сна, учёбы, игры и уединения. Пространство построено на мягкой нейтральной палитре с тактильными текстурами — рельефные обои, орнаментальные фасады мебели и приглушённое освещение создают уютную, но не перегруженную атмосферу. Рабочая зона у окна оснащена анатомическим креслом и продуманной системой хранения для школьных принадлежностей. А выход на утеплённый балкон превращён в камерный уголок для чтения и общения — с мягким диванчиком, подушками и характерным постером, задающим настроение всему интерьеру.",
    coverImage: kidsRoom1,
    coverGradient: "from-primary/20 to-secondary/25",
    gallery: [
      { src: kidsRoom1, alt: "Спальная зона с текстильными акцентами" },
      { src: kidsRoom2, alt: "ТВ-зона с орнаментальной мебелью" },
      { src: kidsRoom3, alt: "Рабочее место у окна" },
      { src: kidsRoom4, alt: "Уютный балкон с диванчиком" },
    ],
  },
  {
    id: "garage-to-living-kitchen",
    title: "Кухня-гостиная в бывшей пристройке",
    area: "30 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный минимализм",
    category: "residential",
    task: "Превратить помещение пристройки в полноценную кухню-гостиную и создать удобное, эстетичное пространство для жизни",
    status: "Реализован",
    description: "Проект кухни-гостиной, созданной на месте бывшей пристройки, которая позволила увеличить полезную площадь дома и превратить техническое помещение в комфортную жилую зону. Пространство решено в спокойной современной палитре с мягкими фактурами, тёплым деревом и лаконичными световыми акцентами. Особое внимание уделено практичности кухни: рабочая зона оформлена немаркими материалами, а стильная штукатурка защищена стеклянным скинали, что делает интерьер одновременно эстетичным и удобным в эксплуатации. В результате получилась светлая, функциональная кухня-гостиная, где бытовой сценарий работает на комфорт, а сама трансформация пространства становится главной идеей проекта.",
    coverGradient: "from-secondary/20 to-foreground/15",
    coverImage: garageLiving1,
    gallery: [
      { src: garageLiving1, alt: "Кухня-гостиная — мягкая зона и обеденный стол" },
      { src: garageLiving2, alt: "Кухня — рабочая зона с тёмными фасадами" },
      { src: garageLiving3, alt: "Кухня-гостиная — вид на столовую группу" },
      { src: garageLiving4, alt: "Кухня-гостиная — общий вид пространства с диваном" },
    ],
  },
  {
    id: "marble-kitchen-island",
    title: "Кухня с островом и патагонским мрамором",
    area: "24 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современная элегантность",
    category: "residential",
    task: "Создать выразительную кухню с островом, где благородная палитра и акцентные материалы формируют ощущение статуса и уюта",
    status: "Концепт",
    description: "Один из недавних проектов кухни с островом, где сдержанная элегантность сочетается с выразительной фактурой материалов. Серые фасады с тонкой золотой фурнитурой создают благородную основу, а остров и фартук из патагонского мрамора становятся главным акцентом интерьера благодаря сложному природному рисунку. Хрустальная люстра добавляет лёгкую декоративность, а мягкие барные стулья и тёплая палитра дерева делают пространство более уютным и жилым. В результате интерьер получился одновременно статусным, светлым и очень тактильным — с балансом классической элегантности и современной чистоты линий.",
    coverGradient: "from-secondary/20 to-primary/15",
    coverImage: marbleKitchen1,
    gallery: [
      { src: marbleKitchen1, alt: "Кухня — фронтальный вид на фасады и мраморный фартук" },
      { src: marbleKitchen2, alt: "Кухня — зона столовой и декоративная акцентная стена" },
      { src: marbleKitchen3, alt: "Кухня — остров из патагонского мрамора крупным планом" },
    ],
  },
  {
    id: "holiday-house-living-simferopol",
    title: "Кухня-гостиная в домике для отдыха",
    area: "48 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный эко-минимализм",
    category: "residential",
    task: "Создать объединённую кухню-гостиную с атмосферой отдыха, натуральными материалами и мягкой визуальной пластикой",
    status: "Концепт",
    description: "Кухня-гостиная в домике для отдыха в Симферополе, построенная на сочетании тёплого дерева, природных оттенков и спокойной открытой композиции. Пространство объединяет кухню, столовую и мягкую зону в единый сценарий расслабленного отдыха, где каждая зона логично перетекает в следующую. Натуральные фактуры, крупные подвесные светильники, мягкая мебель и акценты в приглушённой зелени формируют интерьер с ощущением уюта, воздуха и тихой приватности. Это пространство про комфортную жизнь за городом и визуальное спокойствие без лишней перегруженности.",
    coverGradient: "from-secondary/30 to-foreground/10",
    coverImage: holidayHouseLiving1,
    gallery: [
      { src: holidayHouseLiving1, alt: "Кухня-гостиная — общий вид мягкой зоны и кухни" },
      { src: holidayHouseLiving2, alt: "Кухня-гостиная — вид на обеденную зону и кухню" },
      { src: holidayHouseLiving3, alt: "Кухня-гостиная — фронтальный вид на мягкую группу" },
      { src: holidayHouseLiving4, alt: "Кухня-гостиная — кухонный остров у панорамного окна" },
      { src: holidayHouseLiving5, alt: "Кухня-гостиная — вид на кухню и обеденный стол" },
    ],
  },
  {
    id: "coffee-shop-simferopol",
    title: "Дизайн кофейни в Симферополе",
    area: "42 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный минимализм с loft-акцентами",
    category: "commercial",
    task: "Разработать планировочное решение и выразительную визуальную концепцию в формате быстрого дизайн-проекта",
    status: "Концепт",
    description: "Проект кофейни в Симферополе, выполненный по тарифу «Быстрый дизайн проект». В основе — продуманное планировочное решение и атмосферная визуализация интерьера, созданная с помощью нейросетей для быстрой и наглядной подачи идеи. Пространство решено в современном минималистичном ключе: тёмная палитра, мягкий сценарий света, фактурные поверхности и лаконичная мебель формируют узнаваемую, уютную среду для гостей. В проект также входит ведомость используемых материалов, мебели, освещения и декора, что делает концепцию не только эффектной, но и прикладной для дальнейшей реализации.",
    coverGradient: "from-foreground/20 to-secondary/15",
    coverImage: coffeeShopSimferopol1,
    gallery: [
      { src: coffeeShopSimferopol1, alt: "Интерьер кофейни — общий вид зала и барной зоны" },
    ],
  },
  {
    id: "compact-bedroom-135",
    title: "Спальня 13,5 м² для семейной пары",
    area: "13,5 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный минимализм",
    category: "residential",
    task: "Разместить полноценное спальное место и системы хранения на компактной площади, сохранив ощущение простора",
    status: "Реализован",
    description: "Компактная спальня для семейной пары, где на площади 13,5 м² нужно было разместить всё необходимое для комфортной жизни и при этом сохранить визуальную лёгкость. Решение построено на принципах практичного минимализма: встроенные системы хранения, спокойная светлая палитра, графичные линии освещения и аккуратные акценты в текстиле создают ощущение порядка и простора. Интерьер получился сдержанным, функциональным и уютным — без перегрузки, но с вниманием к каждой детали повседневного комфорта.",
    coverGradient: "from-secondary/25 to-foreground/10",
    coverImage: compactBedroom1,
    gallery: [
      { src: compactBedroom1, alt: "Компактная спальня — общий вид с кроватью и шкафом" },
      { src: compactBedroom2, alt: "Компактная спальня — туалетный столик и мягкое освещение" },
      { src: compactBedroom3, alt: "Компактная спальня — вид на кровать и подвесной светильник" },
    ],
  },
  {
    id: "bedroom-forest-accent",
    title: "Спальня с акцентом лесной зелени",
    area: "18 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный минимализм",
    category: "residential",
    task: "Создать камерную спальню с выразительным характером, тактильными материалами и мягкой атмосферой уюта",
    status: "Концепт",
    description: "Современная спальня, в которой глубокие древесные панели, графичный чёрный светильник, мягкая текстура стен и приглушённая природная палитра формируют атмосферу спокойной роскоши. Акценты в оттенке лесной зелени оживляют интерьер, а тёплый свет подчёркивает архитектуру пространства и делает его особенно камерным. Это интерьер про баланс строгих линий, тактильных материалов и мягких форм мебели — минимализм здесь работает не на холодную отстранённость, а на комфорт и ощущение дома.",
    coverGradient: "from-foreground/20 to-secondary/20",
    coverImage: bedroom1,
    gallery: [
      { src: bedroom1, alt: "Спальня — общий вид с кроватью и акцентным светильником" },
      { src: bedroom2, alt: "Спальня — вид на зону кровати и стеклянный шкаф" },
      { src: bedroom3, alt: "Спальня — ракурс с кроватью и деревянными панелями" },
    ],
  },
  {
    id: "sauna-bathroom",
    title: "Санузел и душевая при сауне",
    area: "12 м²",
    location: "Симферополь",
    year: "2024",
    style: "Современный, натуральные материалы",
    category: "residential",
    task: "Создание приватного спа-пространства с акцентом на тактильный комфорт и визуальную чистоту",
    status: "Реализован",
    description: "Интерьер санузла и душевой при сауне, построенный на ощущении тишины, тепла и тактильного комфорта. Натуральная древесина, крупноформатный керамогранит, тёмные акценты и мягкая скрытая подсветка формируют атмосферу приватного спа. Круглая линия зеркала смягчает строгую геометрию, а сочетание тёплых древесных текстур и каменных поверхностей добавляет глубину. Душевая продолжает эстетику через натуральные материалы, приглушённую палитру и спокойный свет. Это интерьер про ритуалы, замедление и комфорт, который ощущается в каждой фактуре.",
    coverGradient: "from-foreground/20 to-primary/15",
    coverImage: saunaBath1,
    gallery: [
      { src: saunaBath1, alt: "Санузел — зона умывальника с круглым зеркалом" },
      { src: saunaBath2, alt: "Санузел — вид на унитаз и систему хранения" },
      { src: saunaBath3, alt: "Душевая зона с верхним душем" },
    ],
  },
  {
    id: "sushi-mango",
    title: "Суши-кафе «О7 Суши-манго»",
    area: "25 м²",
    location: "Ялта, набережная Массандры",
    year: "2024",
    style: "Японский минимализм",
    category: "commercial",
    task: "Планировка take-away точки, цветовая концепция, визуализация",
    status: "Концепт",
    description: "Проект суши-кафе формата take away на набережной Массандры. Яркий, запоминающийся образ с акцентом на тёплый оранжевый, чистую геометрию и лаконичную организацию зоны выдачи. Решение учитывает специфику формата — скорость обслуживания, визуальную привлекательность для прохожих и удобство работы персонала. Визуализация выполнена в 3ds Max с применением AI-инструментов для быстрой подачи концепции.",
    coverGradient: "from-primary/20 to-secondary/40",
    coverImage: sushiMango1,
    gallery: [
      { src: sushiMango1, alt: "Фасад суши-кафе на набережной" },
      { src: sushiMango2, alt: "Интерьер — зона выдачи и витрина" },
      { src: sushiMango3, alt: "Рабочая зона кафе" },
    ],
  },
  {
    id: "sushi-cafe-fm",
    title: "Посадочная зона суши-кафе",
    area: "45 м²",
    location: "Симферополь, ТЦ «ФМ»",
    year: "2024",
    style: "Современный, эко-акценты",
    category: "commercial",
    task: "Зонирование посадочных мест, интеграция бренда в пространство ТЦ, эргономика потока",
    status: "Реализован",
    description: "Проект посадочной зоны для суши-кафе в торговом центре, где важно было создать не просто несколько столиков, а заметное, комфортное и визуально притягательное пространство. Выразительная палитра — насыщенный фиолетовый, мягкий жёлтый и живая зелень — задаёт запоминающийся характер. Арочные перегородки, подвесные растения, мягкие диваны и компактные столики формируют камерную атмосферу в открытом пространстве торгового центра. Решение учитывает визуальную идентичность бренда, эргономику и особенности трафика.",
    coverGradient: "from-primary/20 to-secondary/40",
    coverImage: sushiCafe1,
    gallery: [
      { src: sushiCafe1, alt: "Посадочная зона — вид сверху" },
      { src: sushiCafe2, alt: "Арочные перегородки и подвесная зелень" },
      { src: sushiCafe3, alt: "Общий вид зоны кафе" },
    ],
  },
];
