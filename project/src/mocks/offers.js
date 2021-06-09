const AVATAR_URL = 'https://i.pravatar.cc/74';

const offers = [
  {
    id: '1',
    photos: [
      '/img/apartment-02.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-03.jpg',
      '/img/apartment-01.jpg',
    ],
    title: 'Beautiful & luxurious studio at great location',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    isPremium: true,
    isFavorite: true,
    type: 'apartment',
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 100,
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      id: '1',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Max Green',
      isPro: true,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },

  {
    id: '2',
    photos: [
      '/img/apartment-03.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-01.jpg',
    ],
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    isPremium: true,
    isFavorite: false,
    type: 'room',
    rating: 5.0,
    bedrooms: 1,
    maxAdults: 2,
    price: 60,
    goods: [
      'Wifi',
      'Heating',
      'Kitchen',
      'Cable TV',
      'Swimming Pool',
      'Community Garden',
      'Elevator',
    ],
    host: {
      id: '1',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Angelina Walker',
      isPro: false,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },

  {
    id: '3',
    photos: [
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/apartment-01.jpg',
    ],
    title:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Cologne',
    },
    isPremium: true,
    isFavorite: true,
    type: 'house',
    rating: 4.0,
    bedrooms: 2,
    maxAdults: 4,
    price: 180,
    goods: [
      'Wifi',
      'Heating',
      'Kitchen',
      'Cable TV',
      'Swimming Pool',
      'Private Garden',
      'Elevator',
      'Iron',
    ],
    host: {
      id: '3',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Anna Freeman',
      isPro: true,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },

  {
    id: '4',
    photos: [
      '/img/apartment-01.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
    ],
    title:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    isPremium: true,
    isFavorite: false,
    type: 'hotel',
    rating: 3.9,
    bedrooms: 1,
    maxAdults: 2,
    price: 90,
    goods: [
      'Wifi',
      'Heating',
      'Kitchen',
      'Cable TV',
      'Swimming Pool',
      'Elevator',
      'Bar',
    ],
    host: {
      id: '4',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Andy Smith',
      isPro: true,
      titlePro: 'Pro',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
];

export default offers;
