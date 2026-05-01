import { projects, type Project, type ProjectCategory } from "./projects";
import zhk5KitchenCover from "@/assets/portfolio/zhk-5-element-kitchen/06-overview.png";
import zhk5DecLivingCover from "@/assets/portfolio/zhk-5-element-dec-living/01-sofa-mural.png";
import guestLoungeCover from "@/assets/portfolio/guest-house-lounge/05-tv-workspace-overview.jpg";
import fontanyLoungeCover from "@/assets/portfolio/fontany-lounge/01-zones-overview.jpg";

export interface PortfolioObject {
  id: string;
  title: string;
  area: string;
  location: string;
  year: string;
  status: "Реализован" | "Концепт";
  category: ProjectCategory;
  intro: string;
  coverImage?: string;
  coverGradient: string;
  roomIds: string[];
}

/**
 * Manually curated objects.
 * Each entry groups one or more rooms (Project records) under a single object
 * (e.g. an apartment, a house, a commercial venue).
 *
 * To group several existing rooms into one object: add a new entry here and
 * list their ids in `roomIds`. Rooms not referenced by any object are shown
 * automatically as standalone single-room objects (see `getAllObjects()`).
 */
export const curatedObjects: PortfolioObject[] = [
  {
    id: "zhk-pyatiy-element",
    title: "ЖК «Пятый элемент»",
    area: "75,8 м²",
    location: "Симферополь",
    year: "Сдан в апреле 2026",
    status: "Реализован",
    category: "residential",
    intro:
      "Квартира 75,8 м² в новом ЖК «Пятый элемент» в Симферополе. Проект про современную тёплую палитру, аккуратное зонирование и продуманные сценарии для семьи с тремя детьми.",
    coverImage: zhk5KitchenCover,
    coverGradient: "from-primary/20 to-secondary/25",
    roomIds: [
      "zhk-5-element-kids-room",
      "zhk-5-element-hallway",
      "zhk-5-element-kitchen-living",
      "zhk-5-element-loggia",
      "zhk-5-element-bathroom",
      "zhk-5-element-bedroom",
    ],
  },
  {
    id: "zhk-pyatiy-element-dec-2025",
    title: "ЖК «Пятый элемент»",
    area: "75,8 м²",
    location: "Симферополь",
    year: "Сдан в декабре 2025",
    status: "Реализован",
    category: "residential",
    intro:
      "Квартира 75,8 м² в ЖК «Пятый элемент» в Симферополе. Проект про тёплый минимализм, благородную палитру cashmere и шоколада, золотые акценты и продуманные сценарии для жизни семейной пары.",
    coverImage: zhk5DecLivingCover,
    coverGradient: "from-primary/20 to-secondary/25",
    roomIds: [
      "zhk-5-element-dec-living",
      "zhk-5-element-dec-hallway",
      "zhk-5-element-dec-kitchen",
      "zhk-5-element-dec-bathroom",
      "zhk-5-element-dec-bedroom",
    ],
  },
  {
    id: "guest-house-sauna",
    title: "Гостевой домик с сауной",
    area: "84,2 м²",
    location: "Симферополь",
    year: "Сдан в августе 2025",
    status: "Реализован",
    category: "residential",
    intro:
      "Гостевой домик с сауной площадью 84,2 м² в мансардном пространстве. Проект про контраст тёплого ореха и графита, продуманные сценарии отдыха после сауны и многофункциональные зоны для гостей.",
    coverImage: guestLoungeCover,
    coverGradient: "from-primary/20 to-secondary/25",
    roomIds: [
      "guest-house-lounge",
      "guest-house-hall",
      "guest-house-bathroom",
      "guest-house-bedroom",
    ],
  },
  {
    id: "fontany-retreat",
    title: "Домик для отдыха «Фонтаны»",
    area: "77,4 м²",
    location: "Симферополь, Фонтаны",
    year: "Сдача в феврале 2026",
    status: "Концепт",
    category: "residential",
    intro:
      "Домик для отдыха 77,4 м² в районе Фонтаны: персональный ретрит с раздвижными окнами-беседкой, бамбуковыми панелями, кухней с ониксом и ручным барельефом. Пространство, где время замедляется, а интерьер сливается с садом.",
    coverImage: fontanyLoungeCover,
    coverGradient: "from-primary/20 to-secondary/25",
    roomIds: [
      "fontany-lounge",
      "fontany-bathroom",
    ],
  },
];

function objectFromRoom(room: Project): PortfolioObject {
  return {
    id: `solo-${room.id}`,
    title: room.title,
    area: room.area,
    location: room.location,
    year: room.year,
    status: room.status,
    category: room.category,
    intro: room.description.split(". ").slice(0, 2).join(". ") + ".",
    coverImage: room.coverImage,
    coverGradient: room.coverGradient,
    roomIds: [room.id],
  };
}

/**
 * Returns the full list of portfolio objects: curated objects first,
 * then auto-generated single-room wrappers for any rooms not yet grouped.
 */
export function getAllObjects(): PortfolioObject[] {
  const grouped = new Set<string>();
  curatedObjects.forEach((o) => o.roomIds.forEach((id) => grouped.add(id)));

  const standalone = projects
    .filter((p) => !grouped.has(p.id))
    .map(objectFromRoom);

  return [...curatedObjects, ...standalone];
}

export function getObjectById(id: string): PortfolioObject | undefined {
  return getAllObjects().find((o) => o.id === id);
}

export function getRoomsForObject(obj: PortfolioObject): Project[] {
  return obj.roomIds
    .map((rid) => projects.find((p) => p.id === rid))
    .filter((r): r is Project => Boolean(r));
}

export function getObjectByRoomId(roomId: string): PortfolioObject | undefined {
  return getAllObjects().find((o) => o.roomIds.includes(roomId));
}

export const statusLabels: Record<PortfolioObject["status"], string> = {
  "Реализован": "Реализован",
  "Концепт": "Концепт",
};