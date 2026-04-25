export type FieldType =
  | "single"
  | "multi"
  | "text"
  | "textarea"
  | "number"
  | "tags"
  | "files"
  | "yesno-files"
  | "rooms"
  | "family";

export type Option = { value: string; label: string; allowOther?: boolean };

export type Field = {
  id: string;
  type: FieldType;
  label: string;
  hint?: string;
  options?: Option[];
  optional?: boolean;
  placeholder?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  maxFiles?: number;
  allowOther?: boolean;
};

export type Step = {
  id: string;
  title: string;
  fields: Field[];
};

/* RESIDENTIAL */
export const residentialSteps: Step[] = [
  {
    id: "type",
    title: "Тип жилого объекта",
    fields: [
      {
        id: "objectType",
        type: "single",
        label: "Что за объект?",
        options: [
          { value: "newbuild", label: "Новостройка (без отделки)" },
          { value: "secondary", label: "Вторичное жильё (требуется демонтаж)" },
          { value: "house", label: "Частный дом" },
          { value: "penthouse", label: "Апартаменты / пентхаус" },
        ],
      },
    ],
  },
  {
    id: "location",
    title: "Местоположение",
    fields: [
      {
        id: "location",
        type: "text",
        label: "Город, район или ЖК",
        hint: "Нужно для оценки инсоляции и транспортной доступности. Точный адрес необязателен.",
        optional: true,
      },
    ],
  },
  {
    id: "area",
    title: "Площадь и комнаты",
    fields: [
      { id: "area", type: "number", label: "Площадь, м²", min: 1, max: 100000, optional: true },
      {
        id: "rooms",
        type: "rooms",
        label: "Количество комнат",
        optional: true,
      },
    ],
  },
  {
    id: "access",
    title: "Доступ на объект",
    fields: [
      {
        id: "access",
        type: "single",
        label: "Когда возможны обмеры?",
        optional: true,
        options: [
          { value: "ready", label: "Ключи на руках — готовы к обмерам" },
          { value: "construction", label: "Строительство ведётся, доступ будет позже", allowOther: true },
          { value: "consult", label: "Затрудняюсь ответить — нужна консультация" },
        ],
      },
    ],
  },
  {
    id: "plan",
    title: "Планировочное решение",
    fields: [
      {
        id: "planFiles",
        type: "files",
        label: "План БТИ или схема от застройщика",
        hint: "Необязательно. Это ускорит подготовку решений.",
        optional: true,
        maxFiles: 3,
      },
    ],
  },
  {
    id: "decision",
    title: "Кто принимает решение?",
    fields: [
      {
        id: "decisionMaker",
        type: "single",
        label: "Кто принимает финальное решение по проекту?",
        optional: true,
        options: [
          { value: "self", label: "Я лично" },
          { value: "partner", label: "Мы с партнёром" },
          { value: "family", label: "Семейный совет" },
          { value: "other", label: "Другой вариант", allowOther: true },
        ],
      },
    ],
  },
  {
    id: "family",
    title: "Состав семьи",
    fields: [
      {
        id: "family",
        type: "family",
        label: "Кто живёт в доме?",
        hint: "Например: двое взрослых 35 и 33, ребёнок 5 лет, собака.",
        optional: true,
      },
    ],
  },
  {
    id: "hobbies",
    title: "Хобби и увлечения",
    fields: [
      {
        id: "hobbies",
        type: "multi",
        label: "Что требует особого места или оборудования?",
        optional: true,
        allowOther: true,
        options: [
          { value: "music", label: "Музыка" },
          { value: "collection", label: "Коллекционирование" },
          { value: "craft", label: "Рукоделие / мастерская" },
          { value: "sport", label: "Спорт (тренажёры, йога)" },
          { value: "wine", label: "Винная коллекция" },
          { value: "none", label: "Ничего особенного" },
        ],
      },
    ],
  },
  {
    id: "deadline",
    title: "Сроки",
    fields: [
      {
        id: "deadline",
        type: "single",
        label: "Планируемая дата завершения / въезда",
        optional: true,
        options: [
          { value: "3-4m", label: "3–4 месяца" },
          { value: "6m", label: "6 месяцев" },
          { value: "6m+", label: "Более 6 месяцев" },
          { value: "other", label: "Свой вариант", allowOther: true },
        ],
      },
    ],
  },
  {
    id: "scenarios",
    title: "Сценарии использования",
    fields: [
      {
        id: "scenarios",
        type: "multi",
        label: "Как планируете жить в доме?",
        optional: true,
        allowOther: true,
        options: [
          { value: "cooking", label: "Приготовление пищи" },
          { value: "remote", label: "Удалённая работа — нужен кабинет" },
          { value: "guests", label: "Приём гостей, ужины" },
          { value: "rest", label: "Спокойный отдых, чтение" },
          { value: "media", label: "Игры, стриминг, мультимедиа" },
        ],
      },
    ],
  },
  {
    id: "engineering",
    title: "Инженерные системы",
    fields: [
      {
        id: "engineering",
        type: "multi",
        label: "Что планируете внедрить?",
        optional: true,
        options: [
          { value: "smart", label: "Умный дом" },
          { value: "cinema", label: "Домашний кинотеатр" },
          { value: "gaming", label: "Игровая / стримерская зона" },
          { value: "security", label: "Безопасность и видеонаблюдение" },
          { value: "trust", label: "Не рассматривал — доверяю вашему опыту" },
        ],
      },
    ],
  },
  {
    id: "references",
    title: "Визуальные предпочтения",
    fields: [
      {
        id: "references",
        type: "yesno-files",
        label: "Есть ли примеры интерьеров, которые нравятся?",
        optional: true,
        maxFiles: 5,
      },
    ],
  },
  {
    id: "atmosphere",
    title: "Атмосфера",
    fields: [
      {
        id: "atmosphere",
        type: "tags",
        label: "Опишите желаемую атмосферу",
        optional: true,
        allowOther: true,
        options: [
          { value: "cozy", label: "уютный" },
          { value: "minimalism", label: "минимализм" },
          { value: "loft", label: "лофт" },
          { value: "eco", label: "эко" },
          { value: "bright", label: "яркий" },
          { value: "brutal", label: "брутальный" },
          { value: "classic", label: "классический" },
          { value: "warm", label: "тёплый" },
          { value: "calm", label: "спокойный" },
          { value: "light", label: "светлый" },
          { value: "scandi", label: "скандинавский" },
        ],
      },
    ],
  },
  {
    id: "lighting",
    title: "Освещение",
    fields: [
      {
        id: "lighting",
        type: "multi",
        label: "Предпочтения по свету",
        optional: true,
        options: [
          { value: "natural", label: "Максимум естественного света" },
          { value: "soft", label: "Мягкий рассеянный свет, уютный полумрак" },
          { value: "functional", label: "Яркое функциональное освещение" },
          { value: "scenarios", label: "Гибкие сценарии (диммирование)" },
          { value: "decor", label: "Декоративный свет как арт-объект" },
        ],
      },
    ],
  },
  {
    id: "materials",
    title: "Материалы и текстуры",
    fields: [
      {
        id: "materials",
        type: "multi",
        label: "Что вам ближе?",
        optional: true,
        allowOther: true,
        options: [
          { value: "wood", label: "Натуральное дерево" },
          { value: "stone", label: "Камень / мрамор" },
          { value: "concrete", label: "Бетон" },
          { value: "glass", label: "Стекло" },
          { value: "metal", label: "Металл" },
          { value: "velvet", label: "Бархат, велюр" },
          { value: "linen", label: "Лён, хлопок" },
          { value: "brick", label: "Кирпич" },
        ],
      },
    ],
  },
  {
    id: "avoid",
    title: "Категорически нет",
    fields: [
      {
        id: "avoid",
        type: "multi",
        label: "Что точно не подходит?",
        optional: true,
        allowOther: true,
        options: [
          { value: "gold", label: "Обилие золота и глянца" },
          { value: "open-shelves", label: "Открытые полки" },
          { value: "white", label: "Белые полы или стены" },
          { value: "dark-ceil", label: "Тёмные потолки" },
          { value: "concrete-cold", label: "Холодный бетон в больших объёмах" },
        ],
      },
    ],
  },
  {
    id: "dream",
    title: "Самая смелая мечта",
    fields: [
      {
        id: "dream",
        type: "textarea",
        label: "Если бы можно было реализовать любую идею без ограничений…",
        hint: "Например: водопад в гостиной, потайная комната, стена-аквариум.",
        optional: true,
        maxLength: 1000,
      },
    ],
  },
];

/* COMMERCIAL */
export const commercialSteps: Step[] = [
  {
    id: "type",
    title: "Тип помещения",
    fields: [
      {
        id: "objectType",
        type: "single",
        label: "Что за объект?",
        options: [
          { value: "office", label: "Офис / коворкинг" },
          { value: "cafe", label: "Кафе / ресторан / бар" },
          { value: "shop", label: "Магазин / шоу-рум" },
          { value: "salon", label: "Салон красоты / клиника / студия" },
          { value: "hotel", label: "Отель / апарт-отель" },
          { value: "other", label: "Иное", allowOther: true },
        ],
      },
    ],
  },
  {
    id: "location",
    title: "Местоположение",
    fields: [
      {
        id: "location",
        type: "text",
        label: "Город, улица, район",
        hint: "Влияет на проходимость и логистику.",
        optional: true,
      },
    ],
  },
  {
    id: "area",
    title: "Площадь и зоны",
    fields: [
      { id: "area", type: "number", label: "Площадь, м²", min: 1, max: 100000, optional: true },
      {
        id: "zones",
        type: "single",
        label: "Количество отдельных помещений / зон",
        optional: true,
        options: [
          { value: "1-2", label: "1–2" },
          { value: "3-5", label: "3–5" },
          { value: "6+", label: "6 и более" },
        ],
      },
    ],
  },
  {
    id: "stage",
    title: "Стадия готовности",
    fields: [
      {
        id: "stage",
        type: "single",
        label: "В каком состоянии помещение?",
        optional: true,
        options: [
          { value: "raw", label: "Бетонная коробка" },
          { value: "demo", label: "Требуется демонтаж" },
          { value: "redesign", label: "Действующее заведение — нужен редизайн" },
        ],
      },
    ],
  },
  {
    id: "deadline",
    title: "Желаемая дата открытия",
    fields: [
      {
        id: "deadline",
        type: "single",
        label: "Когда планируете открыться?",
        optional: true,
        options: [
          { value: "asap", label: "Горит — сроки сжатые" },
          { value: "3-4m", label: "3–4 месяца" },
          { value: "6m+", label: "6 месяцев и более" },
          { value: "flex", label: "Сроки не критичны" },
        ],
      },
    ],
  },
  {
    id: "plan",
    title: "Технический план",
    fields: [
      {
        id: "planFiles",
        type: "files",
        label: "Приложите технический план / БТИ",
        hint: "Необязательно. Ускорит подготовку решений.",
        optional: true,
        maxFiles: 3,
      },
    ],
  },
  {
    id: "business",
    title: "О бизнесе",
    fields: [
      {
        id: "business",
        type: "textarea",
        label: "Краткое описание бизнеса",
        hint: "Например: кофейня спешалти, частная стоматология, IT-стартап.",
        optional: true,
        maxLength: 1000,
      },
    ],
  },
  {
    id: "audience",
    title: "Целевая аудитория",
    fields: [
      {
        id: "audience",
        type: "textarea",
        label: "Опишите ядро клиентов или сотрудников",
        hint: "Возраст, платёжеспособность, привычки.",
        optional: true,
        maxLength: 2000,
      },
    ],
  },
  {
    id: "tasks",
    title: "Ключевые задачи интерьера",
    fields: [
      {
        id: "tasks",
        type: "multi",
        label: "Что важнее всего?",
        optional: true,
        allowOther: true,
        options: [
          { value: "traffic", label: "Привлечение проходимости, фото-зоны" },
          { value: "capacity", label: "Максимум посадочных / рабочих мест" },
          { value: "premium", label: "Подчёркнутая премиальность" },
          { value: "hr", label: "Комфорт для персонала (HR-бренд)" },
        ],
      },
    ],
  },
  {
    id: "capacity",
    title: "Вместимость",
    fields: [
      {
        id: "capacity",
        type: "number",
        label: "Максимум человек одновременно",
        optional: true,
        min: 0,
        max: 99999,
      },
    ],
  },
  {
    id: "references",
    title: "Визуальные предпочтения",
    fields: [
      {
        id: "references",
        type: "yesno-files",
        label: "Есть ли примеры интерьеров, которые нравятся?",
        optional: true,
        maxFiles: 5,
      },
    ],
  },
  {
    id: "atmosphere",
    title: "Характер пространства",
    fields: [
      {
        id: "atmosphere",
        type: "tags",
        label: "Опишите атмосферу",
        optional: true,
        allowOther: true,
        options: [
          { value: "business", label: "деловой" },
          { value: "mono", label: "монохромный" },
          { value: "concise", label: "лаконичный" },
          { value: "wow", label: "вау-эффект" },
          { value: "intimate", label: "камерный" },
          { value: "minimalism", label: "минимализм" },
          { value: "futurism", label: "футуризм" },
          { value: "natural", label: "природный" },
          { value: "euphoria", label: "эйфория" },
        ],
      },
    ],
  },
  {
    id: "lighting",
    title: "Освещение",
    fields: [
      {
        id: "lighting",
        type: "multi",
        label: "Предпочтения по свету",
        optional: true,
        options: [
          { value: "natural", label: "Максимум естественного света" },
          { value: "accent", label: "Акцентная подсветка зон и витрин" },
          { value: "intimate", label: "Мягкий камерный свет" },
          { value: "functional", label: "Яркое функциональное освещение" },
          { value: "dynamic", label: "Динамические сценарии в течение дня" },
        ],
      },
    ],
  },
  {
    id: "materials",
    title: "Материалы и текстуры",
    fields: [
      {
        id: "materials",
        type: "multi",
        label: "Что вам ближе?",
        optional: true,
        allowOther: true,
        options: [
          { value: "wood", label: "Дерево" },
          { value: "stone", label: "Камень / мрамор / бетон" },
          { value: "metal", label: "Металл" },
          { value: "glass", label: "Стекло" },
          { value: "textile", label: "Текстиль (бархат, лён, кожа)" },
          { value: "plastic", label: "Пластик / акрил" },
        ],
      },
    ],
  },
  {
    id: "avoid",
    title: "Недопустимые решения",
    fields: [
      {
        id: "avoid",
        type: "multi",
        label: "Что категорически нет?",
        optional: true,
        allowOther: true,
        options: [
          { value: "office-typical", label: "Типовой офисный стиль" },
          { value: "dark", label: "Избыток тёмных тонов" },
          { value: "cheap", label: "Визуально дешёвые материалы" },
        ],
      },
    ],
  },
  {
    id: "dream",
    title: "Самая смелая идея",
    fields: [
      {
        id: "dream",
        type: "textarea",
        label: "Если бы можно было добавить любую фантастическую деталь…",
        hint: "Например: парящая переговорная, стена-аквариум, раздвижные фасады.",
        optional: true,
        maxLength: 1000,
      },
    ],
  },
  {
    id: "scope",
    title: "Объём услуг",
    fields: [
      {
        id: "scope",
        type: "single",
        label: "Что нужно?",
        optional: true,
        options: [
          { value: "design", label: "Только дизайн-проект" },
          { value: "design+supervision", label: "Дизайн-проект + авторский надзор" },
          { value: "consult", label: "Нужна консультация" },
        ],
      },
    ],
  },
  {
    id: "contractor",
    title: "Подрядчик",
    fields: [
      {
        id: "contractor",
        type: "single",
        label: "Кто выполняет ремонт?",
        optional: true,
        options: [
          { value: "own", label: "Свой подрядчик" },
          { value: "recommend", label: "Нужны рекомендации" },
          { value: "team", label: "Реализация силами вашей команды" },
          { value: "consult", label: "Нужна консультация" },
        ],
      },
    ],
  },
  {
    id: "budget",
    title: "Бюджет",
    fields: [
      {
        id: "budget",
        type: "single",
        label: "Бюджет на реализацию (конфиденциально)",
        optional: true,
        options: [
          { value: "<3", label: "До 3 млн ₽" },
          { value: "3-7", label: "3–7 млн ₽" },
          { value: "7-15", label: "7–15 млн ₽" },
          { value: "15+", label: "Свыше 15 млн ₽" },
          { value: "help", label: "Помогите оценить" },
        ],
      },
    ],
  },
  {
    id: "branding",
    title: "Фирменный стиль",
    fields: [
      {
        id: "branding",
        type: "single",
        label: "Есть ли брендбук?",
        optional: true,
        options: [
          { value: "yes", label: "Есть (приложу позже)" },
          { value: "no", label: "Нет — цвета и шрифты на ваше усмотрение" },
          { value: "help", label: "Нужна помощь в разработке айдентики" },
        ],
      },
    ],
  },
];