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

import zhk5LoggiaImg01 from "@/assets/portfolio/zhk-5-element-loggia/01-seating-window.png";
import zhk5LoggiaImg02 from "@/assets/portfolio/zhk-5-element-loggia/02-armchair-top.png";
import zhk5LoggiaImg03 from "@/assets/portfolio/zhk-5-element-loggia/03-window-shelf.png";

import zhk5BathImg01 from "@/assets/portfolio/zhk-5-element-bathroom/01-vanity-top.png";
import zhk5BathImg02 from "@/assets/portfolio/zhk-5-element-bathroom/02-vanity-toilet.png";
import zhk5BathImg03 from "@/assets/portfolio/zhk-5-element-bathroom/03-door-view.png";
import zhk5BathImg04 from "@/assets/portfolio/zhk-5-element-bathroom/04-wood-wall.png";
import zhk5BathImg05 from "@/assets/portfolio/zhk-5-element-bathroom/05-shower-vanity.png";
import zhk5BathImg06 from "@/assets/portfolio/zhk-5-element-bathroom/06-toilet-slats.png";
import zhk5BathImg07 from "@/assets/portfolio/zhk-5-element-bathroom/07-shower-niche.png";

import zhk5BedImg01 from "@/assets/portfolio/zhk-5-element-bedroom/01-tv-wall.png";
import zhk5BedImg02 from "@/assets/portfolio/zhk-5-element-bedroom/02-bed-window.png";
import zhk5BedImg03 from "@/assets/portfolio/zhk-5-element-bedroom/03-overall-view.png";
import zhk5BedImg04 from "@/assets/portfolio/zhk-5-element-bedroom/04-bed-detail.png";
import zhk5BedImg05 from "@/assets/portfolio/zhk-5-element-bedroom/05-headboard-detail.png";
import zhk5BedImg06 from "@/assets/portfolio/zhk-5-element-bedroom/06-wardrobe.png";
import zhk5BedImg07 from "@/assets/portfolio/zhk-5-element-bedroom/07-tv-frontal.png";
import zhk5BedImg08 from "@/assets/portfolio/zhk-5-element-bedroom/08-vanity-table.png";

import zhk5DecLivingImg01 from "@/assets/portfolio/zhk-5-element-dec-living/01-sofa-mural.png";
import zhk5DecLivingImg02 from "@/assets/portfolio/zhk-5-element-dec-living/02-tv-wall.png";
import zhk5DecLivingImg03 from "@/assets/portfolio/zhk-5-element-dec-living/03-workspace-sofa.png";
import zhk5DecLivingImg04 from "@/assets/portfolio/zhk-5-element-dec-living/04-workspace-detail.png";
import zhk5DecLivingImg05 from "@/assets/portfolio/zhk-5-element-dec-living/05-tv-vitrine.png";
import zhk5DecLivingImg06 from "@/assets/portfolio/zhk-5-element-dec-living/06-tv-door.png";
import zhk5DecLivingImg07 from "@/assets/portfolio/zhk-5-element-dec-living/07-sofa-mirror.png";
import zhk5DecLivingImg08 from "@/assets/portfolio/zhk-5-element-dec-living/08-armchair-window.png";
import zhk5DecLivingImg09 from "@/assets/portfolio/zhk-5-element-dec-living/09-vitrine-medals.png";

import zhk5DecHallImg01 from "@/assets/portfolio/zhk-5-element-dec-hallway/01-doors-perspective.png";
import zhk5DecHallImg02 from "@/assets/portfolio/zhk-5-element-dec-hallway/02-vanity-wardrobe.png";
import zhk5DecHallImg03 from "@/assets/portfolio/zhk-5-element-dec-hallway/03-vanity-detail.png";
import zhk5DecHallImg04 from "@/assets/portfolio/zhk-5-element-dec-hallway/04-mirror-door.png";
import zhk5DecHallImg05 from "@/assets/portfolio/zhk-5-element-dec-hallway/05-wardrobe-frontal.png";

import zhk5DecKitchenImg01 from "@/assets/portfolio/zhk-5-element-dec-kitchen/01-living-dining.png";
import zhk5DecKitchenImg02 from "@/assets/portfolio/zhk-5-element-dec-kitchen/02-dining-tv.png";
import zhk5DecKitchenImg03 from "@/assets/portfolio/zhk-5-element-dec-kitchen/03-kitchen-overview.png";
import zhk5DecKitchenImg04 from "@/assets/portfolio/zhk-5-element-dec-kitchen/04-armchairs-window.png";
import zhk5DecKitchenImg05 from "@/assets/portfolio/zhk-5-element-dec-kitchen/05-dining-fridge.png";
import zhk5DecKitchenImg06 from "@/assets/portfolio/zhk-5-element-dec-kitchen/06-kitchen-dining.png";
import zhk5DecKitchenImg07 from "@/assets/portfolio/zhk-5-element-dec-kitchen/07-dining-chairs.png";
import zhk5DecKitchenImg08 from "@/assets/portfolio/zhk-5-element-dec-kitchen/08-tv-dining.png";
import zhk5DecKitchenImg09 from "@/assets/portfolio/zhk-5-element-dec-kitchen/09-kitchen-detail.png";

import zhk5DecBathImg01 from "@/assets/portfolio/zhk-5-element-dec-bathroom/01-bath-niche.jpg";
import zhk5DecBathImg02 from "@/assets/portfolio/zhk-5-element-dec-bathroom/02-shower-bath.jpg";
import zhk5DecBathImg03 from "@/assets/portfolio/zhk-5-element-dec-bathroom/03-vanity-laundry.jpg";
import zhk5DecBathImg04 from "@/assets/portfolio/zhk-5-element-dec-bathroom/04-vanity-mirror.jpg";
import zhk5DecBathImg05 from "@/assets/portfolio/zhk-5-element-dec-bathroom/05-shower-detail.jpg";
import zhk5DecBathImg06 from "@/assets/portfolio/zhk-5-element-dec-bathroom/06-vanity-pendants.jpg";
import zhk5DecBathImg07 from "@/assets/portfolio/zhk-5-element-dec-bathroom/07-toilet-mirror.jpg";
import zhk5DecBathImg08 from "@/assets/portfolio/zhk-5-element-dec-bathroom/08-toilet-frontal.jpg";

import zhk5DecBedImg01 from "@/assets/portfolio/zhk-5-element-dec-bedroom/01-bed-mural.png";
import zhk5DecBedImg02 from "@/assets/portfolio/zhk-5-element-dec-bedroom/02-tv-wall.png";
import zhk5DecBedImg03 from "@/assets/portfolio/zhk-5-element-dec-bedroom/03-tv-curtain.png";
import zhk5DecBedImg04 from "@/assets/portfolio/zhk-5-element-dec-bedroom/04-bed-window.png";
import zhk5DecBedImg05 from "@/assets/portfolio/zhk-5-element-dec-bedroom/05-bed-wardrobe.png";
import zhk5DecBedImg06 from "@/assets/portfolio/zhk-5-element-dec-bedroom/06-nightstand-pendant.png";
import zhk5DecBedImg07 from "@/assets/portfolio/zhk-5-element-dec-bedroom/07-nightstand-detail.png";
import zhk5DecBedImg08 from "@/assets/portfolio/zhk-5-element-dec-bedroom/08-loggia-workspace.png";
import zhk5DecBedImg09 from "@/assets/portfolio/zhk-5-element-dec-bedroom/09-loggia-armchair.png";

import guestLoungeImg01 from "@/assets/portfolio/guest-house-lounge/01-sofa-window-floorlamp.jpg";
import guestLoungeImg02 from "@/assets/portfolio/guest-house-lounge/02-corner-sofa-wood.jpg";
import guestLoungeImg03 from "@/assets/portfolio/guest-house-lounge/03-tv-window-wood.jpg";
import guestLoungeImg04 from "@/assets/portfolio/guest-house-lounge/04-tv-console-sconces.jpg";
import guestLoungeImg05 from "@/assets/portfolio/guest-house-lounge/05-tv-workspace-overview.jpg";
import guestLoungeImg06 from "@/assets/portfolio/guest-house-lounge/06-relax-corner-shelves.jpg";
import guestLoungeImg07 from "@/assets/portfolio/guest-house-lounge/07-workspace-frontal.jpg";
import guestLoungeImg08 from "@/assets/portfolio/guest-house-lounge/08-shelves-detail.jpg";

import guestHallImg01 from "@/assets/portfolio/guest-house-hall/01-entry-gallery.jpg";
import guestHallImg02 from "@/assets/portfolio/guest-house-hall/02-changing-wardrobe.jpg";
import guestHallImg03 from "@/assets/portfolio/guest-house-hall/03-floating-stairs.jpg";
import guestHallImg04 from "@/assets/portfolio/guest-house-hall/04-upper-hall-cacti.jpg";
import guestHallImg05 from "@/assets/portfolio/guest-house-hall/05-spa-doors-buckets.jpg";
import guestHallImg06 from "@/assets/portfolio/guest-house-hall/06-pre-sauna-buckets.jpg";
import guestHallImg07 from "@/assets/portfolio/guest-house-hall/07-changing-sofa-stairs.jpg";
import guestHallImg08 from "@/assets/portfolio/guest-house-hall/08-corridor-slats.jpg";

import guestBathImg01 from "@/assets/portfolio/guest-house-bathroom/01-mirror-vanity-overview.jpg";
import guestBathImg02 from "@/assets/portfolio/guest-house-bathroom/02-mirror-vessel-sink.jpg";
import guestBathImg03 from "@/assets/portfolio/guest-house-bathroom/03-toilet-shelves-storage.jpg";
import guestBathImg04 from "@/assets/portfolio/guest-house-bathroom/04-frosted-glass-door.jpg";
import guestBathImg05 from "@/assets/portfolio/guest-house-bathroom/05-shower-glass-blocks.jpg";
import guestBathImg06 from "@/assets/portfolio/guest-house-bathroom/06-shower-fixtures-storage.jpg";
import guestBathImg07 from "@/assets/portfolio/guest-house-bathroom/07-shower-black-fixtures.jpg";

import guestBedImg01 from "@/assets/portfolio/guest-house-bedroom/01-bedroom-overview.jpg";
import guestBedImg02 from "@/assets/portfolio/guest-house-bedroom/02-bed-frontal.jpg";
import guestBedImg03 from "@/assets/portfolio/guest-house-bedroom/03-wardrobe-roof.jpg";
import guestBedImg04 from "@/assets/portfolio/guest-house-bedroom/04-wood-slats.jpg";
import guestBedImg05 from "@/assets/portfolio/guest-house-bedroom/05-light-tracks.jpg";
import guestBedImg06 from "@/assets/portfolio/guest-house-bedroom/06-nightstand-detail.jpg";
import guestBedImg07 from "@/assets/portfolio/guest-house-bedroom/07-tv-storage.jpg";
import guestBedImg08 from "@/assets/portfolio/guest-house-bedroom/08-tv-window.jpg";

import fontanyLoungeImg01 from "@/assets/portfolio/fontany-lounge/01-zones-overview.jpg";
import fontanyLoungeImg02 from "@/assets/portfolio/fontany-lounge/02-lounge-yard-view.jpg";
import fontanyLoungeImg03 from "@/assets/portfolio/fontany-lounge/03-relax-dining.jpg";
import fontanyLoungeImg04 from "@/assets/portfolio/fontany-lounge/04-dining-boucle-chairs.jpg";
import fontanyLoungeImg05 from "@/assets/portfolio/fontany-lounge/05-ethnic-bas-relief.jpg";
import fontanyLoungeImg06 from "@/assets/portfolio/fontany-lounge/06-kitchen-bar-pendants.jpg";
import fontanyLoungeImg07 from "@/assets/portfolio/fontany-lounge/07-kitchen-window-bar.jpg";
import fontanyLoungeImg08 from "@/assets/portfolio/fontany-lounge/08-kitchen-onyx-wood.jpg";
import fontanyLoungeImg09 from "@/assets/portfolio/fontany-lounge/09-kitchen-glossy-onyx.jpg";

import fontanyBathImg01 from "@/assets/portfolio/fontany-bathroom/01-vanity-pendants.jpg";
import fontanyBathImg02 from "@/assets/portfolio/fontany-bathroom/02-shower-bench.jpg";
import fontanyBathImg03 from "@/assets/portfolio/fontany-bathroom/03-fluted-glass-shower.jpg";
import fontanyBathImg04 from "@/assets/portfolio/fontany-bathroom/04-laundry-louvers.jpg";
import fontanyBathImg05 from "@/assets/portfolio/fontany-bathroom/05-ethnic-toilet-window.jpg";

import fontanyBedImg01 from "@/assets/portfolio/fontany-bedroom/01-styles-mix-overview.jpg";
import fontanyBedImg02 from "@/assets/portfolio/fontany-bedroom/02-bas-relief-green-accents.jpg";
import fontanyBedImg03 from "@/assets/portfolio/fontany-bedroom/03-bed-fluted-glass-wardrobe.jpg";
import fontanyBedImg04 from "@/assets/portfolio/fontany-bedroom/04-sconce-bas-relief-headboard.jpg";
import fontanyBedImg05 from "@/assets/portfolio/fontany-bedroom/05-textile-wood-combo.jpg";
import fontanyBedImg06 from "@/assets/portfolio/fontany-bedroom/06-bamboo-panels-tv.jpg";
import fontanyBedImg07 from "@/assets/portfolio/fontany-bedroom/07-chandelier-wood-texture.jpg";
import fontanyBedImg08 from "@/assets/portfolio/fontany-bedroom/08-bedside-lamp-detail.jpg";

import urozhKitchenImg01 from "@/assets/portfolio/urozhaynoe-kitchen-living/01-overall-view.jpg";
import urozhKitchenImg02 from "@/assets/portfolio/urozhaynoe-kitchen-living/02-kitchen-dining-overview.jpg";
import urozhKitchenImg03 from "@/assets/portfolio/urozhaynoe-kitchen-living/03-kitchen-frontal.jpg";
import urozhKitchenImg04 from "@/assets/portfolio/urozhaynoe-kitchen-living/04-copper-faucet-detail.jpg";
import urozhKitchenImg05 from "@/assets/portfolio/urozhaynoe-kitchen-living/05-dining-sconce.jpg";
import urozhKitchenImg06 from "@/assets/portfolio/urozhaynoe-kitchen-living/06-living-sofa-windows.jpg";
import urozhKitchenImg07 from "@/assets/portfolio/urozhaynoe-kitchen-living/07-living-bookshelf.jpg";
import urozhKitchenImg08 from "@/assets/portfolio/urozhaynoe-kitchen-living/08-vinyl-station.jpg";
import urozhKitchenImg09 from "@/assets/portfolio/urozhaynoe-kitchen-living/09-projector-evening.jpg";

import urozhBedImg01 from "@/assets/portfolio/urozhaynoe-bedroom/01-bed-overview.jpg";
import urozhBedImg02 from "@/assets/portfolio/urozhaynoe-bedroom/02-bed-frontal.jpg";
import urozhBedImg03 from "@/assets/portfolio/urozhaynoe-bedroom/03-wardrobe-glass.jpg";
import urozhBedImg04 from "@/assets/portfolio/urozhaynoe-bedroom/04-wardrobe-detail.jpg";
import urozhBedImg05 from "@/assets/portfolio/urozhaynoe-bedroom/05-art-shelving.jpg";
import urozhBedImg06 from "@/assets/portfolio/urozhaynoe-bedroom/06-noir-corner.jpg";
import urozhBedImg07 from "@/assets/portfolio/urozhaynoe-bedroom/07-vanity-niche.jpg";
import urozhBedImg08 from "@/assets/portfolio/urozhaynoe-bedroom/08-vanity-mirror-detail.jpg";

import urozhBathImg01 from "@/assets/portfolio/urozhaynoe-bathroom/01-overview-bath-vanity.jpg";
import urozhBathImg02 from "@/assets/portfolio/urozhaynoe-bathroom/02-bath-shower-zone.jpg";
import urozhBathImg03 from "@/assets/portfolio/urozhaynoe-bathroom/03-shower-detail.jpg";
import urozhBathImg04 from "@/assets/portfolio/urozhaynoe-bathroom/04-bath-toilet-view.jpg";
import urozhBathImg05 from "@/assets/portfolio/urozhaynoe-bathroom/05-shower-herringbone.jpg";
import urozhBathImg06 from "@/assets/portfolio/urozhaynoe-bathroom/06-vanity-mirror.jpg";
import urozhBathImg07 from "@/assets/portfolio/urozhaynoe-bathroom/07-toilet-wardrobe.jpg";

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
  {
    id: "zhk-5-element-kitchen-living",
    objectId: "zhk-pyatiy-element",
    title: "Кухня-гостиная 20,5 м²",
    area: "20,5 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Минимализм с лёгким шиком, серо-бежевая палитра, мрамор и золото",
    category: "residential",
    task: "Создать многофункциональное пространство кухни-гостиной 20,5 м² для семьи с тремя детьми: дополнительное спальное место, трансформируемая обеденная зона и аккуратное скрытие технических элементов от застройщика — ригелей, котла, счётчика и вентиляции.",
    status: "Реализован",
    description:
      "Кухня-гостиная 20,5 м² спроектирована как сердце квартиры для большой семьи: пространство, где каждый элемент работает сразу на функцию и на эстетику. " +
      "В зоне гостиной — прямой раскладной диван, который легко превращается в полноценное дополнительное спальное место. Центром обеденной зоны стал раскладной стол 140–200 см, рассчитанный и на ежедневные ужины, и на большие компании. " +
      "Главное технологическое достижение проекта — полное и незаметное интегрирование инженерии: неудобные ригели от застройщика, котёл, счётчик и вентиляция аккуратно скрыты за фасадами кухни и декоративными витринами. Поверхности остаются ровными и спокойными, минимализм не разрушается ни одной лишней деталью. " +
      "Палитра построена на благородных серо-бежевых оттенках, дополненных натуральным мрамором на фартуке и столешницах. Матовые фасады кухни и витрин придают пространству современный дорогой вид, а вставки из рифлёного дерева добавляют тактильности и тепла. " +
      "Многоуровневое освещение зонирует пространство и формирует характер: встроенные трековые светильники отвечают за общий и функциональный свет, а круглая люстра с золотистыми элементами становится главным акцентом — тем самым «лёгким шиком», который объединяет всю композицию. " +
      "Элегантные витрины с подсветкой работают одновременно как системы хранения и как декоративный приём, подчёркивая статусность интерьера. В результате — гармоничное и продуманное до инженерных мелочей пространство, в котором живут, готовят, принимают гостей и отдыхают без компромиссов между красотой и удобством.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5KitchenImg06,
    gallery: [
      { src: zhk5KitchenImg06, alt: "Кухня-гостиная — общий вид: кухня, обеденная зона и витрина" },
      { src: zhk5KitchenImg01, alt: "Кухонный фронт с мраморным фартуком и встроенной техникой" },
      { src: zhk5KitchenImg07, alt: "Кухня и зона ТВ: матовые фасады и винный шкаф" },
      { src: zhk5KitchenImg02, alt: "Обеденная зона с раскладным столом и круглой люстрой" },
      { src: zhk5KitchenImg04, alt: "Обеденная зона у витрины с бокалами и подсветкой" },
      { src: zhk5KitchenImg05, alt: "Гостиная: диван и витрина-бар с золотистыми акцентами" },
      { src: zhk5KitchenImg03, alt: "Зона гостиной с акцентной реечной стеной и трековым светом" },
      { src: zhk5KitchenImg08, alt: "Раскладной диван и обеденный стол у реечной перегородки" },
      { src: zhk5KitchenImg09, alt: "Деталь: мраморный фартук, чёрный смеситель и тостер SMEG" },
    ],
  },
  {
    id: "zhk-5-element-loggia",
    objectId: "zhk-pyatiy-element",
    title: "Лоджия 3,8 м²",
    area: "3,8 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Современный минимализм с элементами роскоши, тёплое дерево и чёрный мрамор",
    category: "residential",
    task: "Превратить небольшую лоджию 3,8 м² в уютное и функциональное пространство, где зона хранения соседствует с камерным местом для отдыха.",
    status: "Реализован",
    description:
      "Несмотря на компактные 3,8 м², лоджия стала полноценным продолжением интерьера квартиры — в стиле современного минимализма с лёгкими элементами роскоши. " +
      "В одной части пространства размещён лаконичный шкаф, который добавляет дополнительные системы хранения и разгружает жилые комнаты. " +
      "Центром притяжения стало мягкое глубокое кресло с приставным столиком из чёрного мрамора — идеальное место для утреннего кофе или вечернего чтения с видом на город. " +
      "Эстетика чёрного мрамора на столике эффектно перекликается с отделкой подоконной зоны и откосов из чёрного глянцевого керамогранита: игра фактур и глубокого цвета придаёт интерьеру графичность, визуальную глубину и особый шик. " +
      "В результате маленькое пространство превратилось в стильную камерную зону, где практичность систем хранения гармонично соседствует с эстетикой релакса. Проект подчёркивает, что даже на 3,8 м² можно создать интерьер с характером и настроением.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5LoggiaImg01,
    gallery: [
      { src: zhk5LoggiaImg01, alt: "Лоджия — кресло у панорамного окна с видом на город" },
      { src: zhk5LoggiaImg02, alt: "Вид сверху на зону отдыха с подушками и мраморным столиком" },
      { src: zhk5LoggiaImg03, alt: "Деревянная ниша-полка у окна с книгами" },
    ],
  },
  {
    id: "zhk-5-element-bathroom",
    objectId: "zhk-pyatiy-element",
    title: "Санузел 6,1 м²",
    area: "6,1 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Современный стиль с акцентом на натуральные материалы: мраморный керамогранит, тёплое дерево и графичные чёрные детали",
    category: "residential",
    task: "Объединить раздельный санузел в единое просторное помещение для большой семьи: организовать комфортную душевую зону, полноценный хозяйственный блок со стиральной и сушильной машинами и вместительные системы хранения.",
    status: "Реализован",
    description:
      "Ключевым решением проекта стало объединение ванной комнаты и туалета в единое пространство — это позволило значительно увеличить полезную площадь и создать ощущение свободы и «воздуха». Благодаря грамотной перепланировке в 6,1 м² удалось разместить просторную душевую, полноценный хозяйственный блок со стиральной и сушильной машинами и вместительные системы хранения, скрытые за эстетичными фасадами. " +
      "Дизайн выполнен в современном стиле с акцентом на натуральные материалы и продуманное освещение — утилитарное помещение превращается в уютную зону отдыха. Основным материалом отделки стал керамогранит, имитирующий натуральный мрамор с выразительными прожилками: единая отделка стен и пола создаёт бесшовное, обволакивающее пространство. В душевой зоне предусмотрены интегрированные в стену полки — функциональные и поддерживающие чистоту линий интерьера. " +
      "Просторная душевая со стеклянными перегородками и современным чёрным смесителем с тропическим душем подчёркивает современность проекта. Скрытая подсветка в верхней и нижней частях душевой создаёт мягкое, расслабляющее свечение, превращая ежедневные ритуалы в настоящий спа-отдых. " +
      "Несмотря на насыщенный функционал, интерьер не выглядит перегруженным: стиральная и сушильная машины, места для хранения бытовой химии и полотенец аккуратно интегрированы в пространство, сохраняя эстетику минимализма. Многоуровневое освещение — от акцентных подвесов над раковиной до контурной подсветки — позволяет менять атмосферу в зависимости от времени суток. Чёрные графичные детали (смесители, полотенцесушитель, фурнитура) добавляют интерьеру строгости и завершённости. " +
      "В итоге создан высокофункциональный и эстетически безупречный санузел, который полностью закрывает потребности большой семьи. Проект демонстрирует, как объединение пространства и продуманная эргономика позволяют совместить в одном помещении просторную зону отдыха и полноценную домашнюю прачечную.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5BathImg01,
    gallery: [
      { src: zhk5BathImg01, alt: "Санузел — раковина с подвесными светильниками из чёрного мрамора и зеркалом во всю стену" },
      { src: zhk5BathImg02, alt: "Общий вид: подвесная тумба, инсталляция и встроенные шкафы со скрытой подсветкой" },
      { src: zhk5BathImg05, alt: "Душевая со стеклянной дверью и зона раковины с подвесными светильниками" },
      { src: zhk5BathImg07, alt: "Душевая зона: мраморные стены, чёрный тропический душ и подсвеченные ниши с полками" },
      { src: zhk5BathImg06, alt: "Подвесной унитаз у акцентной деревянной стены с реечной перегородкой" },
      { src: zhk5BathImg04, alt: "Хозяйственная зона: деревянная стена и реечная перегородка, скрывающая стиральную и сушильную машины" },
      { src: zhk5BathImg03, alt: "Скрытая дверь в санузел в едином мраморном панно стен" },
    ],
  },
  {
    id: "zhk-5-element-bedroom",
    objectId: "zhk-pyatiy-element",
    title: "Спальня 13,5 м²",
    area: "13,5 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в апреле 2026",
    style: "Современный минимализм в нежной бежевой палитре с графичными чёрными акцентами",
    category: "residential",
    task: "Создать уютное и функциональное пространство спальни 13,5 м², где каждый элемент способствует отдыху: вместительное хранение, зона для ухода за собой и максимальная эргономика на ограниченной площади.",
    status: "Реализован",
    description:
      "Несмотря на компактные размеры комнаты, удалось разместить все необходимые функциональные зоны. Центральное место занимает комфортная кровать, вокруг которой выстроена вся композиция. Вдоль одной из стен — вместительный встроенный шкаф с реечными вставками, обеспечивающий достаточно места для одежды и личных вещей. Рядом с ним элегантно интегрирован туалетный столик с пуфами — удобная зона для ухода за собой. " +
      "Интерьер выполнен в нежных бежевых оттенках: они создают атмосферу спокойствия, тепла и уюта, способствуют расслаблению и визуально расширяют пространство. Различные оттенки и текстуры бежевого — от мягкого изголовья и текстиля до матовых фасадов мебели — добавляют глубины и изысканности, не перегружая интерьер. Графичные чёрные линии магнитного трека на потолке и стенах задают современный ритм и подчёркивают архитектуру комнаты. " +
      "Особое внимание уделено многофункциональному освещению. На потолке установлена современная трековая система, позволяющая гибко настраивать направление света и акцентировать разные зоны. Над кроватью — крупная кольцевая люстра с тёплой подсветкой, а справа от изголовья — оригинальный подвесной светильник, который благодаря своей конструкции наклоняется в разные стороны и обеспечивает идеальный свет для чтения или камерной вечерней атмосферы. " +
      "Для сохранения ощущения простора и беспрепятственного доступа к шкафу рядом с кроватью размещён приставной столик из прозрачного тонированного стекла: его невесомая конструкция не загромождает пространство и становится изящным дополнением к интерьеру. Сочетание мягких текстильных элементов, гладких поверхностей мебели и деликатного освещения создаёт ощущение тихой роскоши и комфорта. " +
      "В итоге получился настоящий оазис спокойствия и функциональности — пример того, как даже на небольшой площади можно создать гармоничное пространство, полностью отвечающее потребностям владельцев, благодаря грамотному планированию и вниманию к деталям.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5BedImg03,
    gallery: [
      { src: zhk5BedImg03, alt: "Спальня — общий вид с кроватью, кольцевой люстрой и встроенным шкафом" },
      { src: zhk5BedImg02, alt: "Кровать у панорамного окна с плотными шторами и подвесной люстрой" },
      { src: zhk5BedImg08, alt: "Туалетный столик у окна с двумя пуфами и декором" },
      { src: zhk5BedImg06, alt: "Вместительный встроенный шкаф с реечными вставками вдоль стены" },
      { src: zhk5BedImg01, alt: "Зона ТВ напротив кровати: матовые панели и трековая подсветка" },
      { src: zhk5BedImg07, alt: "Фронтальный вид на ТВ-панель с графичными чёрными линиями" },
      { src: zhk5BedImg04, alt: "Деталь кровати: мягкое изголовье, текстиль и подвесной светильник" },
      { src: zhk5BedImg05, alt: "Крупный план: изголовье, прозрачный приставной столик и подвес-зеркало" },
    ],
  },
  {
    id: "zhk-5-element-dec-living",
    objectId: "zhk-pyatiy-element-dec-2025",
    title: "Гостиная 18,3 м²",
    area: "18,3 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в декабре 2025",
    style: "Тёплый минимализм с золотыми акцентами и шоколадным текстилем",
    category: "residential",
    task: "На 18,3 м² организовать многофункциональное пространство для семейной пары: зона отдыха, полноценная система хранения и технологичное рабочее место — без потери ощущения воздуха и лёгкости.",
    status: "Реализован",
    description:
      "Гостиная 18,3 м² спроектирована как пространство «тёплого минимализма», где строгие линии смягчаются благородной палитрой и тактильными материалами. " +
      "Планировка построена на принципе чёткого зонирования и встроенных конструкций: вместо громоздкой мебели — полноразмерный платяной шкаф с вертикальным фрезерованием фасадов, который воспринимается как архитектурное продолжение стены и решает задачу масштабного хранения, не перегружая пространство. " +
      "Палитра построена на сочетании оттенков «cashmere» и пыльно-бежевого с глубоким шоколадным цветом в текстиле. Золотистые акценты в фурнитуре и освещении добавляют интерьеру статусности и лёгкого шика, а классическая «французская ёлочка» на полу формирует уютную и надёжную базу. " +
      "Главным декоративным акцентом стала стена с авторским графичным панно — в сочетании с зеркальными вставками на фасадах шкафа оно визуально расширяет границы комнаты и усиливает световой поток. " +
      "Особое внимание уделено эргономике: диван в мягкой велюровой обивке выполнен без подлокотников для экономии пространства, но оснащён подъёмными подголовниками для идеальной поддержки спины и шеи. В ТВ-группу интегрирована изящная стеклянная витрина с контурной подсветкой для медалей и кубков владельцев. Рабочая зона решена максимально лаконично — подвесная консоль со скрытым кабель-менеджментом легко превращает уголок в полноценный домашний офис. " +
      "Световой сценарий построен на центральной люстре с лепестковыми плафонами и закарнизной подсветке: эффект «парящего» потолка позволяет менять атмосферу от торжественной до камерной. В результате — глубоко персональный интерьер, где ценности заказчиков и их стремление к комфорту подчёркнуты выверенными материалами и скрытым функционалом.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5DecLivingImg01,
    gallery: [
      { src: zhk5DecLivingImg01, alt: "Гостиная — диван у акцентной стены с графичным панно и зеркальным шкафом" },
      { src: zhk5DecLivingImg07, alt: "Зона отдыха: велюровый диван без подлокотников и зеркальные фасады шкафа" },
      { src: zhk5DecLivingImg02, alt: "ТВ-зона: панно с волнистым принтом, ТВ-панель и подвесная тумба" },
      { src: zhk5DecLivingImg06, alt: "Фронтальный вид на ТВ-зону с подвесной консолью" },
      { src: zhk5DecLivingImg09, alt: "Стеллаж-витрина с подсветкой для медалей и кубков рядом с ТВ-зоной" },
      { src: zhk5DecLivingImg05, alt: "ТВ-зона со стеклянной витриной, шоколадными шторами и креслом буклé" },
      { src: zhk5DecLivingImg03, alt: "Рабочая зона у окна: кресло буклé и подвесная консоль с монитором" },
      { src: zhk5DecLivingImg04, alt: "Деталь рабочей зоны: подвесная консоль со скрытым кабель-менеджментом" },
      { src: zhk5DecLivingImg08, alt: "Кресло у окна с шоколадными шторами и центральной люстрой" },
    ],
  },
  {
    id: "zhk-5-element-dec-hallway",
    objectId: "zhk-pyatiy-element-dec-2025",
    title: "Коридор 13,6 м²",
    area: "13,6 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в декабре 2025",
    style: "Тёплый минимализм с молдингами, золотистыми акцентами и зеркалом в пол",
    category: "residential",
    task: "Превратить транзитную зону 13,6 м² в полноценную, эстетически выверенную часть квартиры — парадную галерею света, где каждый элемент работает на визуальное расширение пространства, без ощущения захламлённости и тесноты.",
    status: "Реализован",
    description:
      "Коридор и прихожая 13,6 м² спроектированы как парадный вход и галерея света — пространство, которое первым встречает владельцев и задаёт тон всему интерьеру квартиры. " +
      "Большое количество дверей нивелировано лаконичными полотнами в цвет стен и строгими наличниками: они создают спокойный архитектурный ритм, не перегружая взгляд. Входная зона оборудована масштабным зеркалом в пол — классический приём удвоения объёма, который мгновенно добавляет помещению воздуха и света. " +
      "Встроенный шкаф с фасадами в цвет стен буквально «растворяется» в пространстве: вертикальное фрезерование и отсутствие лишних деталей позволяют системам хранения не доминировать, а органично вписываться в архитектуру. " +
      "Единое напольное покрытие — «французская ёлочка» без порогов — соединяет коридор со всеми комнатами, создавая бесшовное и визуально бесконечное пространство. Светлые стены и графичные молдинги поддерживают ощущение воздушности и парадности. " +
      "Световой сценарий построен на двух уровнях: лаконичные встроенные светильники обеспечивают равномерный заливающий свет днём, а настенные бра в золотистом исполнении добавляют интерьеру вечерней парадности и создают уютный полумрак. Тонкие золотистые линии в фурнитуре и отделке перекликаются с люстрами в гостиной и кухне, связывая все зоны квартиры в единую стилистическую историю. " +
      "В результате — просторная галерея без ощущения тесноты: только воздух, свет и предвкушение домашнего уюта. Благодаря продуманной геометрии, единым материалам и точечным акцентам помещение задаёт безупречный тон всему интерьеру, оставаясь при этом полностью функциональным.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5DecHallImg04,
    gallery: [
      { src: zhk5DecHallImg04, alt: "Коридор — зеркало в пол с подсветкой и дверь в цвет стен" },
      { src: zhk5DecHallImg01, alt: "Перспектива коридора: двери с молдингами и зеркало в пол" },
      { src: zhk5DecHallImg05, alt: "Встроенный шкаф во всю стену с молдингами и золотистой фурнитурой" },
      { src: zhk5DecHallImg02, alt: "Зона прихожей: туалетный столик с пуфом и встроенный шкаф" },
      { src: zhk5DecHallImg03, alt: "Деталь: подвесная консоль, бра-дискосы и пуф с цветочным принтом" },
    ],
  },
  {
    id: "zhk-5-element-dec-kitchen",
    objectId: "zhk-pyatiy-element-dec-2025",
    title: "Кухня-гостиная 20,5 м²",
    area: "20,5 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в декабре 2025",
    style: "Тёплый минимализм с молдингами, кремовыми фасадами и терракотовыми акцентами",
    category: "residential",
    task: "На 20,5 м² создать смысловой центр квартиры: профессионально оснащённую зону приготовления пищи, полноценную обеденную группу и уютную релакс-зону — без ощущения тесноты и с сохранением атмосферы домашнего тепла.",
    status: "Реализован",
    description:
      "Кухня-гостиная 20,5 м² спроектирована как непрерывный сценарий жизни — от функциональной рабочей зоны до мягкой обеденной группы и уголка для отдыха. " +
      "Планировочно удалось интегрировать масштабный кухонный гарнитур с антресольными шкафами «в потолок», отдельно стоящий холодильник в специальной нише, полноценную обеденную группу и два кресла для релакса — без перегруза пространства. " +
      "Визуально интерьер продолжает общую стилистику квартиры: нежные кремовые фасады, текстура светлого мрамора на фартуке и столешнице, классическая «французская ёлочка» на полу и элегантные золотистые акценты в освещении формируют благородную и тёплую атмосферу. " +
      "Кухонный гарнитур с антресолями обеспечивает максимум хранения и создаёт архитектурную чистоту линий. Для отдельно стоящего холодильника с большой морозильной камерой предусмотрена специальная ниша — техника становится логичной частью композиции, оставаясь максимально удобной в эксплуатации. " +
      "Жемчужина проекта — декоративная ниша с изящными стеклянными полками и мягкой встроенной подсветкой: идеальное место для красивой посуды и предметов декора, которое добавляет интерьеру глубины и лёгкости. " +
      "В центре обеденной зоны — раскладной стол 140–180 см, который в повседневной жизни остаётся компактным, а к приезду детей и внуков легко трансформируется для большой компании. Стулья в мягкой терракотовой обивке становятся ярким цветовым акцентом и оживляют спокойную палитру. Зона релакса с двумя комфортными креслами у окна — уголок для утреннего кофе или бесед, пока готовится ужин. " +
      "Многоуровневое освещение позволяет менять настроение комнаты: от яркого рабочего света над столешницей до камерной вечерней атмосферы, создаваемой роскошной хрустальной люстрой над столом и подсветкой стеклянных полок в нише. " +
      "В результате на 20,5 м² не пришлось идти на компромиссы: здесь есть всё — от мощного технического оснащения и вместительного отдельно стоящего холодильника до по-настоящему домашнего уюта с любимыми креслами, где время замедляется.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5DecKitchenImg03,
    gallery: [
      { src: zhk5DecKitchenImg03, alt: "Кухня-гостиная — общий вид: кухня с антресолями и обеденная зона" },
      { src: zhk5DecKitchenImg06, alt: "Перспектива: обеденная группа, кухонный фронт и кресло для релакса" },
      { src: zhk5DecKitchenImg01, alt: "Релакс-зона с креслами и обеденная группа у акцентной стены с молдингами" },
      { src: zhk5DecKitchenImg02, alt: "Обеденная зона: круглый стол, терракотовые стулья и ТВ на стене с молдингами" },
      { src: zhk5DecKitchenImg08, alt: "ТВ-зона над обеденным столом с хрустальной люстрой" },
      { src: zhk5DecKitchenImg05, alt: "Обеденная группа у ниши с холодильником и ТВ на стене" },
      { src: zhk5DecKitchenImg07, alt: "Деталь обеденной зоны: терракотовые стулья и отдельно стоящий холодильник в нише" },
      { src: zhk5DecKitchenImg09, alt: "Деталь кухни: мраморный фартук, кремовые фасады и встроенная подсветка" },
      { src: zhk5DecKitchenImg04, alt: "Уголок отдыха: два мягких кресла у окна с шоколадными шторами" },
    ],
  },
  {
    id: "zhk-5-element-dec-bathroom",
    objectId: "zhk-pyatiy-element-dec-2025",
    title: "Ванная и санузел 4 + 2,1 м²",
    area: "4 + 2,1 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в декабре 2025",
    style: "Тёплый минимализм с керамогранитом под оникс, терракотовыми акцентами и латунью",
    category: "residential",
    task: "Спроектировать ванную комнату 4 м² и санузел 2,1 м² как гармоничное продолжение общей концепции квартиры: совместить высокую функциональность с размещением постирочного блока и эстетику личного SPA-пространства, сохранив ощущение чистоты и порядка.",
    status: "Реализован",
    description:
      "Ванная комната 4 м² и санузел 2,1 м² спроектированы как единый ансамбль — продолжение общей концепции квартиры с тёплым керамогранитом под оникс, терракотовыми акцентами и латунной фурнитурой. " +
      "В основе планировочного решения — вертикальное зонирование и эргономичные формы. В ванной удалось разместить полноценную хозяйственную колонну со стиральной и сушильной машинами, не загромождая пространство. В санузле подобрана компактная подвесная сантехника, что сохранило свободу передвижения даже на ограниченной площади. " +
      "Светлый крупноформатный керамогранит с текстурой оникса визуально раздвигает границы стен. Акцентная вертикальная вставка из терракотовой плиткой с патинированной фактурой и латунная фурнитура добавляют интерьеру утонченности и теплоты. " +
      "Ключевой элемент ванной — просторная асимметричная ванна 170×110 см, которая работает как полноценная альтернатива SPA-зоне. Тропический душ в латуни на акцентной стене, мягкая подсветка ниш для косметики и закарнизный свет создают обволакивающую атмосферу для релаксации. " +
      "Над подвесной тумбой с классическими филёнчатыми фасадами — овальное зеркало с контурной подсветкой и пара декоративных подвесов из янтарного стекла с латунью: тот самый «лёгкий шик», который связывает ванную с гостиной и кухней. " +
      "Санузел 2,1 м² несмотря на компактные размеры выглядит стильно и продуманно: панели в цвете «пыльной розы» с тонкими молдингами, овальное зеркало с мягкой контурной подсветкой и компактная подвесная раковина с золотистым смесителем работают на визуальное расширение пространства. Цветовая преемственность с остальными комнатами квартиры подчёркивает безупречный вкус владельцев. " +
      "В результате оба помещения демонстрируют, что грамотное планирование и внимание к деталям позволяют превратить даже самые скромные площади в статусные и комфортные пространства с атмосферой уюта и роскоши.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5DecBathImg04,
    gallery: [
      { src: zhk5DecBathImg04, alt: "Ванная — фронтальный вид: тумба с овальным зеркалом и постирочная колонна" },
      { src: zhk5DecBathImg03, alt: "Ванная: тумба с латунным смесителем, подвесы и постирочный блок" },
      { src: zhk5DecBathImg02, alt: "Зона ванной: асимметричная ванна 170×110 и латунный душ на терракотовой стене" },
      { src: zhk5DecBathImg05, alt: "Деталь: латунный душ-стойка на акцентной терракотовой плитке" },
      { src: zhk5DecBathImg01, alt: "Ванная: ниша с подсветкой для косметики и полотенцесушитель" },
      { src: zhk5DecBathImg06, alt: "Деталь зоны умывальника: янтарные подвесы и ниша с подсветкой" },
      { src: zhk5DecBathImg07, alt: "Санузел 2,1 м²: подвесной унитаз, овальное зеркало и компактная раковина" },
      { src: zhk5DecBathImg08, alt: "Санузел: фронтальный вид на инсталляцию в цвете «пыльной розы» и латунные акценты" },
    ],
  },
  {
    id: "zhk-5-element-dec-bedroom",
    objectId: "zhk-pyatiy-element-dec-2025",
    title: "Спальня с лоджией 13,5 + 3,8 м²",
    area: "13,5 + 3,8 м²",
    location: "Симферополь, ЖК «Пятый элемент»",
    year: "Сдан в декабре 2025",
    style: "Тёплый минимализм с пудровой палитрой, терракотовыми акцентами и пасторальными обоями в технике сепия",
    category: "residential",
    task: "На площади 13,5 м² спальни и 3,8 м² лоджии создать статусное и уютное пространство для отдыха семейной пары — «тихий оазис» с возможностью уединения, сохранив функциональность для работы и хранения вещей.",
    status: "Реализован",
    description:
      "Мастер-спальня 13,5 м² с присоединённой лоджией 3,8 м² спроектирована как камерный оазис семейной пары — продолжение общей концепции квартиры в благородной пудровой палитре с тёплыми терракотовыми акцентами. " +
      "Планировка построена на принципах симметрии и эргономики. Центральное место занимает кровать формата king-size 180×200 см, при этом проходы и доступ к системам хранения остались максимально свободными. Лоджия трансформирована в изолированное многофункциональное пространство и стала логическим продолжением комнаты. " +
      "Изголовье кровати обрамлено классическими молдингами, внутри которых размещены обои с пасторальным лесным пейзажем в технике сепия — решение добавляет интерьеру глубины и художественности, оставаясь вне времени и моды. " +
      "Вместительный шкаф длиной 180 см выполнен с лаконичными фасадами в цвет стен и практически растворяется в интерьере. Подвесная консоль в ТВ-зоне выглядит невесомой, сохраняя чистоту линий и визуально увеличивая площадь пола. " +
      "Световой сценарий построен на роскошной кольцевой люстре с матовыми сферами и изящных подвесных светильниках у прикроватных тумб — многослойное и мягкое освещение для любого настроения. " +
      "На лоджии 3,8 м² удалось разместить две полноценные зоны: с одной стороны — компактное рабочее место с лаконичными полками, позволяющее работать, не мешая партнёру; с другой — глубокое мягкое кресло для чтения и отдыха в тишине. Пол выложен французской ёлкой, продолжая материальную палитру квартиры. " +
      "В результате на 17,3 м² получилась полноценная экосистема для жизни — от комфортного сна до продуктивной работы, дарящая владельцам ощущение абсолютного спокойствия и персонального комфорта.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: zhk5DecBedImg01,
    gallery: [
      { src: zhk5DecBedImg01, alt: "Спальня — фронтальный вид: кровать king-size с пасторальными обоями в сепии и кольцевой люстрой" },
      { src: zhk5DecBedImg05, alt: "Спальня: кровать у акцентной стены с молдингами и встроенный шкаф 180 см в цвет стен" },
      { src: zhk5DecBedImg04, alt: "Перспектива спальни: кровать у окна с шоколадными шторами и подвесные светильники" },
      { src: zhk5DecBedImg02, alt: "ТВ-зона: подвесная консоль и телевизор на стене с молдингами" },
      { src: zhk5DecBedImg03, alt: "ТВ-зона: подвесная консоль, зеркальная панель и шоколадные шторы" },
      { src: zhk5DecBedImg06, alt: "Прикроватная тумба с латунной фурнитурой и подвесной светильник из матового стекла" },
      { src: zhk5DecBedImg07, alt: "Деталь: прикроватная тумба, керамический декор и пасторальные обои в молдингах" },
      { src: zhk5DecBedImg08, alt: "Лоджия: рабочее место со столешницей в нише, открытые полки и терракотовое кресло" },
      { src: zhk5DecBedImg09, alt: "Лоджия: зона релакса с глубоким мягким креслом у окна с римскими шторами" },
    ],
  },
  {
    id: "guest-house-lounge",
    objectId: "guest-house-sauna",
    title: "Гостевая (медиа-лаундж) 22,6 м²",
    area: "22,6 м²",
    location: "Симферополь, Гостевой домик с сауной",
    year: "Сдан в августе 2025",
    style: "Мансардный современный, контраст тёплого ореха и графита, декоративная штукатурка",
    category: "residential",
    task: "Спроектировать многофункциональный медиа-лаундж 22,6 м² в мансардном пространстве гостевого домика: совместить камерную зону вечернего кинопросмотра, комфортное место отдыха после сауны и полноценное эргономичное рабочее место — без потери цельности интерьера.",
    status: "Реализован",
    description:
      "Гостевая 22,6 м² спроектирована как многофункциональный медиа-лаундж, который гармонично сочетает в себе место для вечернего кинопросмотра, зону отдыха после сауны и полноценную рабочую локацию. " +
      "Интерьер продолжает эстетику мансардного пространства, играя на контрасте тёплых древесных фактур и строгого графита. Скошенные плоскости подчёркнуты обшивкой из натурального ореха, а светлая декоративная штукатурка облегчает геометрию и наполняет комнату воздухом. " +
      "Центральное место занимает большая ТВ-панель на фоне светлой штукатурки. Под ней — длинная подвесная консоль графитового цвета с мягкой контурной подсветкой, создающей эффект «парения». Просторный угловой диван в обивке из серого велюра приглашает к отдыху, а изящный напольный торшер с янтарным абажуром добавляет камерности в вечернее время. " +
      "Несмотря на статус «зоны отдыха», здесь организовано эргономичное рабочее пространство: глубокий рабочий стол с текстурой ореха интегрирован между высокими шкафами от пола до потолка с фасадами в глубоком графитовом цвете. Стенка за столом оформлена вертикальными рейками с открытыми ореховыми полками и декоративной подсветкой — идеальный фон для видеозвонков и аккуратное хранение книг. " +
      "Главная световая интрига — магнитная трековая система, встроенная прямо в деревянную панель, переходящую с потолка на стену. Её акцентные круглые светильники по форме и стилю идеально перекликаются с парными чёрными бра на ТВ-стене, формируя единый графический ритм. Встроенные споты в светлой части потолка обеспечивают равномерное заполняющее освещение. " +
      "В результате — атмосферное и продуманное пространство, в котором одинаково комфортно смотреть кино после сауны, работать с ноутбуком и принимать гостей.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: guestLoungeImg05,
    gallery: [
      { src: guestLoungeImg05, alt: "Гостевая — общий вид: ТВ-зона, рабочее место и графитовые шкафы" },
      { src: guestLoungeImg04, alt: "Лаконичная ТВ-зона с парящей графитовой консолью и графичными чёрными бра" },
      { src: guestLoungeImg03, alt: "Магнитные треки в деревянной отделке и панорамное окно мансарды" },
      { src: guestLoungeImg01, alt: "Зона отдыха: серый диван у окна, торшер с янтарным абажуром и круглый журнальный стол" },
      { src: guestLoungeImg02, alt: "Угловой диван в обивке из серого велюра на фоне ореховой стены с трековым светом" },
      { src: guestLoungeImg06, alt: "Уголок отдыха: диалог фактур ореха, графита и мягкого текстиля" },
      { src: guestLoungeImg07, alt: "Функциональный кабинет в лаундж-зоне: ореховый стол между графитовыми шкафами" },
      { src: guestLoungeImg08, alt: "Деталь: ореховые полки с подсветкой и реечная стена за рабочим местом" },
    ],
  },
  {
    id: "guest-house-hall",
    objectId: "guest-house-sauna",
    title: "Коридор-предбанник",
    area: "Холл-раздевалка и SPA-зона",
    location: "Симферополь, Гостевой домик с сауной",
    year: "Сдан в августе 2025",
    style: "Современный, контраст серого камня и тёплого дерева, графитовые акценты и зелёная контурная подсветка",
    category: "residential",
    task: "Спроектировать многофункциональный холл-предбанник как связующее звено между SPA-зоной и жилыми комнатами второго этажа: продумать «мокрую» зону для контрастных процедур, комфортную раздевалку с системами хранения и эффектную парящую лестницу — без потери цельности интерьера.",
    status: "Реализован",
    description:
      "Холл-предбанник спроектирован как связующее звено между SPA-зоной и жилыми комнатами второго этажа. Интерьер выстроен на сочетании эстетики парящих конструкций и практичности мокрой зоны — каждый сценарий продуман до мелочей. " +
      "В SPA-блоке выделена «мокрая» зона с обливными ведрами для контрастных процедур после сауны. Трапы интегрированы прямо в плитку, а выверенный уклон пола обеспечивает быстрый сток воды и сохраняет остальное пространство сухим. Стены облицованы знакомым тандемом серого камня и тёплого дерева, потолок подчёркнут контурной зелёной подсветкой, добавляющей сценарию футуристичности. " +
      "Зона раздевания решена в спокойных тонах: у стены — уютный серый диван для комфортного переодевания, рядом просторный встроенный шкаф с графитовыми фасадами для халатов и личных вещей. Стены оформлены декоративной штукатуркой с вертикальными полосами; фактуру подсвечивают минималистичные чёрные бра, формирующие ритмичную игру света и тени. " +
      "Главный архитектурный акцент — «парящая» лестница на второй этаж. Она базируется на скрытом металлическом каркасе: ступени с текстурой дерева словно парят в воздухе, а встроенная в них подсветка делает подъём безопасным и эффектным. Роль перил выполняют вертикальные чёрные металлические стержни (арматура), которые пронзают пространство от пола до потолка и работают как строгий графический фильтр. " +
      "У входа собрана камерная галерея постеров в чёрных рамах, а над всей композицией парит дизайнерская волнообразная LED-люстра, объединяющая SPA-зону, раздевалку и лестничный холл в единый сценарий. На втором этаже лестница ведёт в небольшую зону отдыха у комнат, украшенную крупными кактусами в стильных кашпо.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: guestHallImg07,
    gallery: [
      { src: guestHallImg07, alt: "Зона раздевания: серый диван у реечной перегородки и парящая лестница на второй этаж" },
      { src: guestHallImg02, alt: "Входная зона раздевания: вместительный шкаф с графитовыми фасадами и волнообразная LED-люстра" },
      { src: guestHallImg03, alt: "Графичное ограждение из арматуры и парящие ступени с мягкой подсветкой" },
      { src: guestHallImg01, alt: "Входная зона в гостевой дом с сауной: галерея постеров и стеклянная дверь во двор" },
      { src: guestHallImg08, alt: "Коридор: «мокрая» зона и зона отдыха, разделённые лаконичной перегородкой из деревянных реек" },
      { src: guestHallImg05, alt: "SPA-блок: матовые двери в санузел и душевую, обливные ведра и зелёная контурная подсветка" },
      { src: guestHallImg06, alt: "Зона предбанника с обливными ведрами и технологичными трапами в полу" },
      { src: guestHallImg04, alt: "Верхний холл: графичные перила, стильные кашпо с кактусами и декоративная штукатурка" },
    ],
  },
  {
    id: "guest-house-bathroom",
    objectId: "guest-house-sauna",
    title: "Санузел и душевая",
    area: "2,8 + 2,1 м²",
    location: "Симферополь, Гостевой домик с сауной",
    year: "Сдан в августе 2025",
    style: "Современный SPA: три вида керамогранита, тёплое дерево, скрытая подсветка и чёрные матовые акценты",
    category: "residential",
    task: "Спроектировать компактные санузел и душевую так, чтобы при площадях 2,8 и 2,1 м² они выглядели просторно и эффектно: продумать сценарии освещения, эргономику хранения и сочетание трёх видов керамогранита, поддерживающее общую SPA-атмосферу гостевого дома.",
    status: "Реализован",
    description:
      "Самые приватные зоны гостевого дома — санузел 2,8 м² и душевая 2,1 м². Несмотря на скромные площади, помещения выглядят просторными благодаря продуманным сценариям освещения, матовым стеклянным дверям и точно выверенной геометрии. " +
      "Интерьер санузла построен на сочетании трёх видов керамогранита: базового серого с деликатными глянцевыми вкраплениями, насыщенного «деревянного» и глубокого тёмно-серого акцента в зоне инсталляции. Подвесная белая тумба с деревянной столешницей укомплектована изящной накладной раковиной-чашей и парит над полом, визуально облегчая компактное пространство. " +
      "Главным украшением стал зеркальный полукруг на фоне вертикальной полосы из «деревянного» керамогранита. За зеркалом размещена скрытая подсветка — она подчёркивает текстуру дерева и создаёт мягкий тёплый ореол, добавляя пространству глубины. Слева от раковины обустроена ниша с полками и встроенной подсветкой для косметики, а над инсталляцией расположены вместительные шкафы с деревянными фасадами. " +
      "В оформлении душевой используется тот же тандем серого камня и тёплого дерева, создающий атмосферу SPA. Для зонирования пространства использована перегородка из фактурных дымчатых стеклоблоков: она отделяет зону принятия душа от места для переодевания, сохраняя светопропускаемость и визуальную лёгкость. " +
      "Лаконичная душевая система, смесители и аксессуары выполнены в контрастном чёрном матовом цвете и графично читаются на фоне благородных фактур. Стены облицованы серым керамогранитом, а акцентная стена и пол — под дерево, что визуально объединяет душевую с остальными помещениями дома и поддерживает единый сценарий гостевого SPA.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: guestBathImg01,
    gallery: [
      { src: guestBathImg01, alt: "Санузел: акцентное полукруглое зеркало с тёплой подсветкой и асимметричная раковина-чаша" },
      { src: guestBathImg02, alt: "Подвесная тумба с деревянной столешницей и накладной раковиной-чашей у акцентного зеркала" },
      { src: guestBathImg03, alt: "Зона инсталляции: тёмно-серый керамогранит, ореховые панели и ниша с подсвеченными полками для хранения" },
      { src: guestBathImg04, alt: "Матовая стеклянная дверь в деревянном обрамлении — деликатная граница приватных зон" },
      { src: guestBathImg05, alt: "Душевая: фактурная перегородка из дымчатых стеклоблоков и контурная подсветка под потолком" },
      { src: guestBathImg06, alt: "Эргономика душевой: три вида керамогранита, чёрный матовый смеситель и мобильные стеллажи для косметики" },
      { src: guestBathImg07, alt: "Чёрные матовые акценты сантехники на фоне благородного серого камня и тёплого дерева" },
    ],
  },
  {
    id: "guest-house-bedroom",
    objectId: "guest-house-sauna",
    title: "Гостевая спальня",
    area: "14,8 м²",
    location: "Симферополь, Гостевой домик с сауной",
    year: "Сдан в августе 2025",
    style: "Современная мансарда: контраст ореха и светлых реечных панелей, графичные световые линии и трековая ременная система",
    category: "residential",
    task: "Спроектировать гостевую спальню в мансардной части дома так, чтобы сложная геометрия крыши стала достоинством, а не ограничением: организовать полноценное хранение под скатами, создать атмосферу премиального отдыха для гостей и поддержать единый сценарий гостевого дома с сауной.",
    status: "Реализован",
    description:
      "Гостевая спальня 14,8 м² расположена в мансардной части дома над SPA-зоной. Сложная геометрия потолка с выраженными скосами не маскируется, а становится главным архитектурным акцентом — каждая плоскость работает на ощущение премиального отдыха. " +
      "Зонирование выстроено цветом и фактурой: одна часть потолка и стена за изголовьем отделаны глубокими панелями с выраженной текстурой ореха, другая — светлыми реечными панелями, визуально облегчающими пространство. Контраст тёплого дерева и графичных белых реек задаёт характер всей комнаты. " +
      "Несмотря на сложную форму крыши, в спальне разместился полноценный встроенный шкаф: его графитовые матовые фасады точно повторяют уклон потолка и обеспечивают максимум мест для хранения, не нарушая цельности архитектуры. " +
      "Центральный элемент — просторная кровать со спальным местом 180×200 см в обивке из тёмного велюра. Постельное бельё светлых тонов дополнено фактурным покрывалом тёплого терракотового оттенка, который перекликается с акцентами в освещении. С одной стороны кровати — компактная прикроватная тумба с рифлёным фасадом, с другой — минималистичный столик-сетка из чёрного металла. " +
      "Напротив кровати, на стене с отделкой под светлую декоративную штукатурку, установлена ТВ-панель — лаконичная медиа-зона без визуального шума. Большое мансардное окно с римскими шторами графитового цвета и лёгким тюлем открывает вид на зелень участка. " +
      "Освещение здесь — отдельный сценарий. В потолок и стены интегрированы тонкие световые линии: они равномерно освещают помещение и подчёркивают архитектурные линии мансарды, плавно переходя с горизонтальных поверхностей на вертикальные. У кровати установлена трековая ременная система Belt Track — матовые шарообразные плафоны подвешены на стильных терракотовых ремнях, перекликающихся с текстилем и добавляющих интерьеру графичности.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: guestBedImg01,
    gallery: [
      { src: guestBedImg01, alt: "Гостевая мансардная спальня: гармония ореха, светлых реечных панелей и тёплого текстиля" },
      { src: guestBedImg02, alt: "Перспектива спальни: комфортная кровать 180×200, вместительный шкаф под скатом и прикроватные зоны" },
      { src: guestBedImg03, alt: "Встроенный шкаф с графитовыми фасадами, повторяющий геометрию мансардной крыши" },
      { src: guestBedImg04, alt: "Сочетание глубины ореха и лёгкости светлых реечных панелей в зоне изголовья" },
      { src: guestBedImg05, alt: "Световые линии на потолке и трековая ременная система с матовыми сферами на терракотовых ремнях" },
      { src: guestBedImg06, alt: "Детали комфорта: прикроватная тумба с рифлёным фасадом и мягкий свет для вечернего чтения" },
      { src: guestBedImg07, alt: "ТВ-зона напротив кровати и встроенный шкаф с графитовыми фасадами под скатом крыши" },
      { src: guestBedImg08, alt: "ТВ-зона на фоне лаконичной декоративной штукатурки и мансардное окно с видом на зелень" },
    ],
  },
  {
    id: "fontany-lounge",
    objectId: "fontany-retreat",
    title: "Комната отдыха 52,1 м²",
    area: "52,1 м²",
    location: "Симферополь, Фонтаны",
    year: "Сдан в феврале 2026",
    style: "Современный этно-лофт: бамбук, орех, оникс, ротанг и ручной барельеф",
    category: "residential",
    task: "На 52,1 м² создать персональный ретрит — единое пространство с рабочей кухней, обеденной зоной необычной формы и комфортной мягкой группой. Обеспечить трансформацию интерьера в полукрытую беседку через раздвижные окна и применить влагостойкие, износостойкие материалы для уличной эксплуатации.",
    status: "Реализован",
    description:
      "Комната отдыха 52,1 м² в гостевом доме-ретрите на Фонтанах задумана как манифест свободы и света — место, где время замедляется. В едином объёме разместились кухонная зона с барной стойкой, обеденная группа необычной формы, мягкая зона из двух диванов и кресла, а также ТВ-зона с декоративным барельефом. " +
      "Ключевая инженерная идея — окна, раздвижные вниз: одним движением комната превращается в полуоткрытую беседку, и окружающий ландшафт становится частью интерьера. Высокие потолки и бамбуковые панели с алюминиевыми профилями добавляют объёма и природной графичности. " +
      "Визуальный язык — современный этно-лофт. Базовые антрацитовые и графитовые тона стен контрастируют с тёплой текстурой бамбука на потолке и фасадами кухни из натурального дерева. Главный акцент — барельеф ручной работы, уникальный объект, превращающий стену за обеденным столом в визуальную доминанту вечера. " +
      "На полу — крупноформатный керамогранит, износостойкий и влагоустойчивый, рассчитанный на режим «открытой беседки». Кухонный гарнитур с деревянными фасадами дополнен столешницей и фартуком из керамогранита под оникс — благородная полупрозрачная текстура работает как драгоценная поверхность и облегчает тёмные базы. Островная часть совмещает рабочую плоскость и барную стойку. " +
      "Мягкая группа собрана из двух просторных диванов и кресла в тёплой бежевой обивке уличного класса: ткань выдерживает перепады влажности и температуры при открытых окнах, сохраняя комфорт для большой компании. Обеденный стол спроектирован необычной формы — для визуальной динамики и удобства больших застолий, а стулья в обивке букле мягкого зелёного оттенка перекликаются с природой за окном. " +
      "Свет выстроен в несколько сценариев: встроенные точечные светильники равномерно заливают объём, над мягкой зоной — комплект ротанговых люстр для камерной атмосферы, над обеденным столом — две крупные подвесные люстры с тканевыми абажурами, над барной стойкой — направленные подвесы, подчёркивающие рабочую поверхность. Отдельная подсветка барельефа выявляет фактуру и объём, превращая стену в главный вечерний акцент.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: fontanyLoungeImg01,
    gallery: [
      { src: fontanyLoungeImg01, alt: "Комната отдыха: единая сцена кухни, обеденной и мягкой зон под бамбуковым потолком" },
      { src: fontanyLoungeImg02, alt: "Зона отдыха с видом на частный двор: ротанговые люстры и обеденная группа на фоне барельефа" },
      { src: fontanyLoungeImg03, alt: "Зона релакса и званых вечеров: два дивана и кресло в уличной обивке у обеденной группы" },
      { src: fontanyLoungeImg04, alt: "Комфортный обеденный стол необычной формы и стулья в обивке букле зелёного оттенка" },
      { src: fontanyLoungeImg05, alt: "Этнический барельеф ручной работы у обеденного стола с акцентной подсветкой" },
      { src: fontanyLoungeImg06, alt: "Кухня и барная стойка с подвесными светильниками над рабочей поверхностью" },
      { src: fontanyLoungeImg07, alt: "Шик, лёгкость и теплота кухни: барная стойка из оникса у панорамного окна с раздвижной системой" },
      { src: fontanyLoungeImg08, alt: "Кухонная зона: сочетание оникса и благородного дерева с панорамным окном в сад" },
      { src: fontanyLoungeImg09, alt: "Кухонная зона с глянцевым ониксом, графитовыми высокими шкафами и крупной подвесной люстрой" },
    ],
  },
  {
    id: "fontany-bathroom",
    objectId: "fontany-retreat",
    title: "Санузел 9,8 м²",
    area: "9,8 м²",
    location: "Симферополь, Фонтаны",
    year: "Сдан в феврале 2026",
    style: "SPA-ретрит: травертин, дерево, рифлёное стекло и плетение макраме",
    category: "residential",
    task: "На 9,8 м² организовать полноценный SPA-санузел гостевого дома: безбарьерную душевую, скрытый хозблок со стиральной и сушильной машинами, эргономичную зону умывальника и атмосферу загородного ретрита, стилистически связанную со спальней.",
    status: "Реализован",
    description:
      "Санузел 9,8 м² в гостевом доме «Фонтаны» задуман как полноценная зона релаксации, где функциональность мастер-ванной встречается с атмосферой загородного ретрита. Внушительная площадь позволила выделить широкие проходы и обособленные сценарии для водных процедур и бытовых нужд, сохранив ощущение воздуха и свободы. " +
      "Хозяйственный блок интегрирован в глубокую нишу: стиральная и сушильная машины полностью скрыты за высокими жалюзийными фасадами из тёплого дерева — они не только маскируют технику, но и обеспечивают её естественную вентиляцию. " +
      "Стены оформлены комбинацией вертикальной плитки «кабанчик» в светло-бежевых тонах и декоративной отделки с этническим барельефом-мандалой — этот мотив проходит сквозной нитью через спальню и санузел, объединяя помещения в единую смысловую цепочку. " +
      "Душевая выполнена в безбарьерном стиле: без порога и бортиков, с уклоном керамогранита к скрытому трапу, облицованному той же плиткой, — система слива становится практически невидимой. Перегородка из рифлёного стекла в чёрном профиле визуально расширяет зону, а тёплая деревянная стена за душем работает как акцент в духе сауны. " +
      "Центр композиции — массивная подвесная раковина из керамогранита с фактурой травертина, дополненная встроенным чёрным смесителем и высоким зеркалом с контурной подсветкой. У зеркала размещены подвесные светильники ручной работы в технике макраме — мягкий крафтовый акцент, добавляющий тактильности. " +
      "Освещение многоуровневое: встроенные точечные светильники, скрытая контурная подсветка по периметру потолка с тёплым свечением и декоративные подвесы у зеркала. Подвесной унитаз с матовой графитовой поверхностью, латунная клавиша смыва и чёрный полотенцесушитель-лесенка завершают графику интерьера. " +
      "В результате — пространство, в котором интересно не только находиться, но и осязать: рифлёное стекло, плетение макраме, «каменная» раковина и тёплое дерево создают по-настоящему ретритную атмосферу.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: fontanyBathImg01,
    gallery: [
      { src: fontanyBathImg01, alt: "Зона умывальника: раковина из керамогранита под травертин и подвесные светильники макраме у зеркала" },
      { src: fontanyBathImg02, alt: "Душевая со стеклянной перегородкой и зелёная бархатная банкетка у стены с этническим барельефом" },
      { src: fontanyBathImg03, alt: "Душевая кабина с перегородкой из рифлёного стекла в чёрном профиле и тёплой деревянной стеной" },
      { src: fontanyBathImg04, alt: "Зона прачечной, скрытая за высокими жалюзийными фасадами из дерева" },
      { src: fontanyBathImg05, alt: "Сочетание этнических мотивов и уюта: подвесной унитаз, окно с видом на зелень и барельеф-мандала" },
    ],
  },
  {
    id: "fontany-bedroom",
    objectId: "fontany-retreat",
    title: "Спальня 15,5 м²",
    area: "15,5 м²",
    location: "Симферополь, Фонтаны",
    year: "Сдан в феврале 2026",
    style: "Природное уединение: бамбуковые панели, этнический барельеф, изумрудный текстиль",
    category: "residential",
    task: "Создать спальню-«кокон» 15,5 м² в гостевом доме «Фонтаны»: тотальная отделка бамбуковыми панелями, эргономичная зона сна, скрытая гардеробная за рифлёным стеклом и многоуровневое освещение для разных сценариев дня.",
    status: "Реализован",
    description:
      "Спальня 15,5 м² в домике для отдыха «Фонтаны» продолжает общую эко-концепцию объекта и превращается в настоящий «кокон» для сна. Здесь господствуют натуральные фактуры, приглушённые природные тона и выверенная геометрия света. " +
      "Главная особенность — тотальная отделка бамбуковыми панелями насыщенного орехового оттенка: они покрывают не только стены, но и плавно переходят на потолок, создавая единое, обволакивающее пространство. Стена за изголовьем выполнена в светлых тонах и украшена изысканным барельефом с этническими мотивами — круговая мандала добавляет интерьеру глубины и художественной ценности, не перегружая его цветом. На полу — крупноформатный керамогранит с фактурой камня в серых тонах, спокойный фундамент для тёплого дерева. " +
      "В центре композиции — кровать со спальным местом 180×200 см с лаконичным мягким изголовьем скруглённой формы, обитым светлой рогожкой. Глубокий изумрудно-зелёный цвет постельного белья перекликается с тяжёлыми бархатными шторами, создавая атмосферу лесной свежести; многослойность подчёркнута фактурным пледом в мелкую полоску. " +
      "С одной стороны кровати — мягкая прикроватная тумба со скруглёнными углами в тон изголовью с настольной лампой на чёрном гофрированном основании. С другой — изящный кофейный столик на тонком золотистом основании для утреннего напитка или книги. " +
      "Вместительная гардеробная зона скрыта за фасадами из рифлёного тонированного стекла: внутренняя интегрированная подсветка полок превращает шкаф в эффектную световую инсталляцию, при этом мягко скрывая содержимое. ТВ-панель интегрирована прямо в бамбуковую отделку напротив кровати — отсутствие видимых проводов и лишних полок поддерживает принцип минимализма. Возле шкафа — высокое зеркало на подставке в тонкой раме: оно функционально и визуально расширяет пространство, отражая свет. " +
      "Освещение спроектировано так, чтобы менять настроение комнаты от бодрящего утреннего до интимного вечернего: дизайнерская центральная люстра из чёрных тонких прутьев, напоминающая по форме экзотический цветок, создаёт ажурные тени на бамбуковом потолке; минималистичное бра в виде светящегося диска у барельефа даёт мягкий ореол света; контурная светодиодная лента по периметру потолка визуально «приподнимает» его и подчёркивает текстуру дерева. " +
      "В результате — пространство, где строгая современная графика (чёрные акценты, рифлёное стекло) и мягкие природные материалы (бамбук, лён, барельеф) создают комнату, в которой легко дышится и приятно засыпать.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: fontanyBedImg01,
    gallery: [
      { src: fontanyBedImg01, alt: "Общий вид спальни: сочетание разных стилистических элементов — бамбук, рифлёное стекло, барельеф и зелёный текстиль" },
      { src: fontanyBedImg02, alt: "Этнический барельеф-мандала за изголовьем и свежесть зелёных акцентов в текстиле" },
      { src: fontanyBedImg03, alt: "Комфортная кровать и вместительный шкаф с фасадами из рифлёного тонированного стекла с подсветкой полок" },
      { src: fontanyBedImg04, alt: "Минималистичное бра-диск и этнический барельеф у изголовья кровати" },
      { src: fontanyBedImg05, alt: "Сочетание мягкости текстиля и структурности дерева: бамбуковые стены, ТВ-панель и шкаф из рифлёного стекла" },
      { src: fontanyBedImg06, alt: "Бамбуковые панели с молдингами на стене и потолке, ТВ интегрирован в отделку, дизайнерская люстра из чёрных прутьев" },
      { src: fontanyBedImg07, alt: "Утончённость дизайнерской люстры в сочетании с текстурностью дерева у панорамного окна" },
      { src: fontanyBedImg08, alt: "Настольный светильник с чёрным гофрированным основанием на мягкой прикроватной тумбе из текстиля" },
    ],
  },
  {
    id: "urozhaynoe-kitchen-living",
    objectId: "urozhaynoe-house",
    title: "Кухня-гостиная 31,8 м²",
    area: "31,8 м²",
    location: "За городом",
    year: "Сдан в мае 2026",
    style: "Современная классика: молдинги, паркет «ёлочка», магнитный трек и медные акценты",
    category: "residential",
    task: "На 31,8 м² объединить кухню, столовую и гостиную для семьи меломанов и киноманов: создать неоклассический интерьер без золота, продумать зону винила, скрытый домашний кинотеатр на проекторе и трансформируемую обеденную группу для приёма гостей.",
    status: "Реализован",
    description:
      "Кухня-гостиная 31,8 м² в частном доме за городом стала отражением уникальных увлечений заказчиков: пространство выполнено в стиле современной классики, где эстетика молдингов и паркета «ёлочка» сочетается с атмосферой настоящего творческого ретрита. " +
      "Архитектура построена на диалоге времён: изящные стеновые молдинги и классический паркет соседствуют с суперсовременной магнитной трековой системой освещения и лаконичной мебелью — этот контраст создаёт глубокий и нетривиальный образ. " +
      "При проектировании кухни мы столкнулись с интересным вызовом: заказчик категорически не любит золотые элементы. Решение нашли в комбинации фактур. Основной массив выполнен в тёплой текстуре ореха: высокие колонны со встроенной техникой (микроволновая печь, духовой шкаф) и верхние шкафы под потолок создают монолитный объём. Верхние фасады у рабочей зоны — в контрастном пыльно-сером оттенке. " +
      "Тонкая столешница из HPL-пластика и фартук из светлой мелкой плитки стали фоном для главного акцента. Комбинируя чёрную матовую сантехнику и технику (вытяжку-тубус, индукционную плиту), мы выделили центр рабочей зоны смесителем в медном финише — это добавило интерьеру благородной теплоты, изящно обойдя ненавистное заказчикам золото. " +
      "В центре зоны разместили трансформируемую обеденную группу: раскладной стол 120–180 см в компактном виде идеален для четверых, а при приезде гостей легко превращается в полноценное место для большой компании. Глубокий синий цвет обивки обеденных кресел перекликается с акцентным верхним шкафом кухни и шторами, собирая пространство в единый ансамбль. " +
      "Вместо привычной ТВ-зоны гостиная подчинена увлечениям владельцев. Виниловая станция с проигрывателем и аппаратурой на специальном столе-консоли с усиленными опорами и вместительный стеллаж для коллекции пластинок разместились у окна на веранду — хобби превратилось в стильный элемент декора. " +
      "По желанию владельцев от телевизора отказались в пользу проектора: выбрана система с электроэкраном, скрыто монтируемым в натяжной потолок. В выключенном состоянии экран полностью исчезает, сохраняя чистоту и лаконичность неоклассического интерьера. Для комфортного размещения гостей в зоне гостиной установлен большой раскладной диван с просторным спальным местом — общая зона легко превращается во временную спальню.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: urozhKitchenImg01,
    gallery: [
      { src: urozhKitchenImg01, alt: "Общий вид кухни-гостиной: единое пространство с гостиной, столовой и кухней под молдингами и магнитным треком" },
      { src: urozhKitchenImg02, alt: "Обеденная группа с синими креслами и кухонная зона в орехе с акцентным синим шкафом" },
      { src: urozhKitchenImg03, alt: "Фронтальный вид кухни: ореховые фасады, белая плитка-стрипс, чёрная вытяжка-тубус и винтажная люстра" },
      { src: urozhKitchenImg04, alt: "Деталь кухни: медный смеситель на фоне белой плитки и тёмно-синих верхних фасадов" },
      { src: urozhKitchenImg05, alt: "Барная зона со столиком, винтажная люстра, бра и акустическая стена с молдингами" },
      { src: urozhKitchenImg06, alt: "Зона гостиной: серый диван у окна с синими портьерами, ореховый стеллаж и виниловая станция" },
      { src: urozhKitchenImg07, alt: "Гостиная с серым диваном, ореховыми стеллажами и молдингами на стенах" },
      { src: urozhKitchenImg08, alt: "Виниловая станция: стол-консоль с проигрывателем и аппаратурой Marshall у окна на веранду" },
      { src: urozhKitchenImg09, alt: "Вечерний сценарий: домашний кинотеатр с проектором и опускным электроэкраном" },
    ],
  },
  {
    id: "urozhaynoe-bedroom",
    objectId: "urozhaynoe-house",
    title: "Спальня 16,3 м²",
    area: "16,3 м²",
    location: "За городом",
    year: "Сдан в мае 2026",
    style: "Тёмная неоклассика: антрацитовые стены, чёрный потолок и нуар-акценты",
    category: "residential",
    task: "Создать камерную мастер-спальню 16,3 м² для заказчика, который любит «много тёмного»: насыщенная антрацитовая палитра, чёрный кессонный потолок, эргономичная зона сна без стандартных тумб, шкаф-купе из тонированного стекла с подсветкой и акцент на приобретённой картине с красными мотивами.",
    status: "Реализован",
    description:
      "Мастер-спальня 16,3 м² в частном доме за городом — это гимн глубоким тёмным оттенкам и изысканному драматизму. Проект разрабатывался для заказчика, который страстно любит тёмную палитру, поэтому основной концепцией стало создание камерного, почти мистического пространства, где архитектурный свет играет на контрасте с ночными тонами. " +
      "Стены оформлены в насыщенном антрацитовом цвете и декорированы классическими молдингами — это добавляет интерьеру архитектурного ритма. Потолок выполнен в радикальном чёрном цвете и украшен роскошной кессонной розеткой, которая визуально углубляет пространство и придаёт ему неоклассическую торжественность. На полу — тёмный паркет «ёлочка», поддерживающий общую благородную гамму. " +
      "Учитывая площадь и необходимость соблюдения строгой эргономики, мы отказались от стандартных прикроватных тумб. Вместо них симметрично по обе стороны от кровати размещены компактные и стильные журнальные столики, а у изголовья — подвесные светильники с рифлёным стеклом и акцентами из зелёного мрамора, перекликающимися с центральной люстрой. Кровать — центральный элемент комнаты — имеет объёмное стёганое изголовье и каркас в мягкой серой обивке, контрастирующий с тёмной графикой стен. " +
      "В зоне входа размещён вместительный шкаф-купе с фасадами из тонированного стекла. Главная особенность — внутренняя LED-подсветка полок: она не только позволяет легко найти вещи, но и превращает шкаф в эффектную световую витрину, добавляя интерьеру глубины и таинственности. Напротив кровати — открытый стеллаж из ореха с тонкими чёрными опорами, на котором живут книги и аксессуары владельцев. " +
      "Финальным аккордом интерьера стала картина, которую заказчик приобрёл заранее — драматичный портрет девушки с красными акцентами. Мы дополнили её специальной контурной подсветкой: красный цвет «играет» на фоне тёмных стен, создавая глубокое, завораживающее сияние. Этот же красный отголосок повторяется в нише с туалетным столиком из ореха и в декоративных вазах с осенними ветвями — собранные точечные акценты собирают пространство в единый художественный кадр. " +
      "В результате — спальня, которая полностью удовлетворяет вкус владельца к тёмным оттенкам, оставаясь при этом эргономичной, функциональной и наполненной художественными акцентами.",
    coverGradient: "from-primary/20 to-secondary/25",
    coverImage: urozhBedImg01,
    gallery: [
      { src: urozhBedImg01, alt: "Общий вид спальни: чёрный кессонный потолок, мягкая кровать с объёмным изголовьем и дизайнерская люстра с зелёными акцентами" },
      { src: urozhBedImg02, alt: "Фронтальный вид кровати: антрацитовые стены с молдингами, симметричные подвесы у изголовья и серая обивка" },
      { src: urozhBedImg03, alt: "Шкаф-купе с фасадами из тонированного стекла и внутренней LED-подсветкой полок напротив кровати" },
      { src: urozhBedImg04, alt: "Деталь шкафа из тонированного стекла: одежда подсвечена изнутри как световая витрина" },
      { src: urozhBedImg05, alt: "Картина с красной контурной подсветкой и стеллаж из ореха с книгами и предметами декора" },
      { src: urozhBedImg06, alt: "Нуар-уголок: красное свечение картины, антрацитовые стены и драматичная люстра с зелёным мрамором" },
      { src: urozhBedImg07, alt: "Туалетный столик из ореха в нише с красной подсветкой и отражение в зеркальной двери" },
      { src: urozhBedImg08, alt: "Деталь зоны туалетного столика: высокое зеркало, картина с красной подсветкой и осенние ветви в вазах" },
    ],
  },
];
