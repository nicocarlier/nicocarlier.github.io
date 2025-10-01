const getImagePath = (path: string) => {
  return process.env.NODE_ENV === 'production' ? `/info${path}` : path;
};

export const FAVORITE_BOOKS = [
  {
    title: 'Rework',
    authors: 'David Heinemeier Hansson & Jason Fried',
    cover: '📚',
    category: 'Business',
    coverImage: getImagePath('/books/rework.jpeg'),
  },
  {
    title: 'Deep Work',
    authors: 'Cal Newport',
    cover: '🧠',
    category: 'Productivity',
    coverImage: getImagePath('/books/deep-work.jpeg'),
  },
  {
    title: "Ender's Game",
    authors: 'Orson Scott Card',
    cover: '🚀',
    category: 'Science Fiction',
    coverImage: getImagePath('/books/enders-game.jpeg'),
  },
  {
    title: 'Zero to One',
    authors: 'Peter Thiel',
    cover: '💡',
    category: 'Business',
    coverImage: getImagePath('/books/zero-to-one.png'),
  },
  {
    title: 'The Complacent Class',
    authors: 'Tyler Cowen',
    cover: '📊',
    category: 'Economics',
    coverImage: getImagePath('/books/the-complacent-class.jpeg'),
  },
  //   {
  //     title: "Holes",
  //     authors: "Louis Sachar",
  //     cover: "⛰️",
  //     category: "Fiction",
  //     coverImage: '/books/holes.jpeg'
  //   },
  //   {
  //     title: 'Open',
  //     authors: 'Andre Agassi',
  //     cover: '🎾',
  //     category: 'Biography',
  //     coverImage: '/books/open.jpeg',
  //   },
  {
    title: 'The Catcher in the Rye',
    authors: 'J. D. Salinger',
    cover: '🌾',
    category: 'Fiction',
    coverImage: getImagePath('/books/the-catcher-in-the-rye.jpeg'),
  },
  {
    title: 'Sapiens',
    authors: 'Yuval Noah Harari',
    category: 'History',
    coverImage: getImagePath('/books/sapiens.jpeg'),
  },
  {
    title: 'The Magic of Reality',
    authors: 'Richard Dawkins',
    cover: '🔮',
    category: 'Science',
    coverImage: getImagePath('/books/magic-of-reality.jpeg'),
  },
];

export const CURRENTLY_READING = [
  {
    title: 'Superintelligence',
    authors: 'Nick Bostrom',
    subtitle: 'Paths, Dangers, Strategies',
    coverImage: getImagePath('/books/superintellegence.jpeg'),
  },
];

export const RECENT_TRIPS = [
  {
    date: '26 Dec',
    location: 'Bali, Indonesia',
    flag: '🇮🇩',
  },
  {
    date: '21 Dec',
    location: 'Yasawa Islands, Fiji',
    flag: '🇫🇯',
  },
  {
    date: '3 Dec',
    location: 'Auckland, New Zealand',
    flag: '🇳🇿',
  },
];

export const ACTIVITIES = [
  { name: 'Tennis', emoji: '🎾' },
  { name: 'Hockey', emoji: '🏑' },
  { name: 'Rock Climbing', emoji: '🧗‍♂️' },
  { name: 'Swimming', emoji: '🏊‍♂️' },
  { name: 'Skiing', emoji: '⛷️' },
  { name: 'Chess', emoji: '♟️' },
  { name: 'Gym', emoji: '🏋️‍♂️' },
];
