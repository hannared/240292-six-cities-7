import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(dayjsRandom);

const AVATAR_URL = 'https://i.pravatar.cc/54';

const reviews = [
  {
    propertyId: '1',
    id: '1',
    comment:
      'Pretium viverra suspendisse potenti nullam ac tortor. Tortor posuere ac ut consequat. Placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium lectus. Suspendisse ultrices gravida dictum fusce.',
    date: dayjs.between('2018-06-10', '2021-07-06').format('MMMM D'),
    user: {
      id: '1',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'John Doe',
      rating: 4,
    },
  },

  {
    propertyId: '1',
    id: '2',
    comment:
      'Pretium viverra suspendisse potenti nullam ac tortor. Tortor posuere ac ut consequat.',
    date: dayjs.between('2018-06-10', '2021-07-06').format('MMMM D'),
    user: {
      id: '2',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Alex Clark',
      rating: 5,
    },
  },

  {
    propertyId: '1',
    id: '3',
    text: 'Pretium nibh ipsum consequat nisl vel pretium lectus. Suspendisse ultrices gravida dictum fusce.',
    date: dayjs.between('2018-06-10', '2021-07-06').format('MMMM D'),
    user: {
      id: '3',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Andy Moore',
      rating: 3,
    },
  },

  {
    propertyId: '1',
    id: '4',
    comment:
      'Amet cursus sit amet dictum. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. ',
    date: dayjs.between('2018-06-10', '2021-07-06').format('MMMM D'),
    user: {
      id: '4',
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Davide Bloom',
      rating: 5,
    },
  },
];

export default reviews;
