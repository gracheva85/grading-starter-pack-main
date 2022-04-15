const NameSpace = {
  Data: 'Data',
  User: 'User',
};

const AppRoute = {
  Root: '/',
  Quest: '/detailed-quest/:id',
  Contacts: '/contacts',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Stocks: '/stocks',
  Error: '/404',
};

const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};

const Levels = {
  HARD: {
    name: 'сложный',
    level: 'hard',
  },
  MEDIUM: {
    name: 'средний',
    level: 'medium',
  },
  EASY: {
    name: 'простой',
    level: 'easy',
  },
}

const Types = {
  ALL: {
    name: 'Все квесты',
    type: 'all',
  },
  ADVENTURES: {
    name: 'Приключения',
    type: 'adventures',
  },
  HORROR: {
    name: 'Ужасы',
    type: 'horror',
  },
  MYSTIC: {
    name: 'Мистика',
    type: 'mystic',
  },
  DETECTIVE: {
    name: 'Детектив',
    type: 'detective',
  },
  SCI_FI: {
    name: 'Sci-fi',
    type: 'sci-fi',
  },
};

const Menu = {
  QUESTS: {
    name: 'Квесты',
    route: AppRoute.Root,
  },
  BEFINNERS: {
    name: 'Новичкам',
    route: AppRoute.Beginners,
  },
  REVIEWS: {
    name: 'Отзывы',
    route: AppRoute.Reviews,
  },
  STOCKS: {
    name: 'Акции',
    route: AppRoute.Stocks,
  },
  CONTACTS: {
    name: 'Контакты',
    route: AppRoute.Contacts,
  },
};

const Contact = {
  PHONE: {
    href: 'tel:88003335599',
    text: '8 (800) 333-55-99',
  },
  EMAIL: {
    href: 'mailto:info@escape-room.ru',
    text: 'info@escape-room.ru',
  },
};

const Status = {
  Unknown: 'Unknown',
  Isloaded: 'Isloaded',
  IsNotloaded: 'IsNotloaded',
}

export {
  NameSpace,
  AppRoute,
  APIRoute,
  Levels,
  Types,
  Menu,
  Contact,
  Status
};
