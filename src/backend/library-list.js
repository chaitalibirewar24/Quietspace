const images = require.context('../assets/libraries', false,/\.(webp|jpeg|jpg|avif)$/);

const imageMap = images.keys().reduce((acc, path) => {
  const fileName = path.replace('./', '');
  acc[fileName] = images(path);
  return acc;
}, {});

// Now build your cafes array
const library = [
  {
    id: 'l0001',
    image: imageMap['Central Library.jpeg'],
    name: 'Central Library',
    rating: { stars: 4.5},
    keywords: ['study', 'books', 'quiet'],
  },
  {
    id: 'l0002',
    image: imageMap['Dnyaneshwari Abhyasika.avif'],
    name: 'Dnyaneshwari Abhyasika',
    rating: { stars: 4.7 },
    keywords: ['students', 'study', 'peaceful'],
  },
  {
    id: 'l0003',
    image: imageMap['Phoenix Library.jpg'],
    name: 'Phoenix Library',
    rating: { stars: 4.3 },
    keywords: ['wifi', 'books', 'spacious'],
  },
  {
    id: 'l0004',
    image: imageMap[`Pioneer Library Pune.webp`],
    name: `Pioneer Library Pune`,
    rating: { stars: 4.7 },
    keywords: ['readers', 'locker', 'AC'],
  }
];

export default library;
