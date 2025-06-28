const images = require.context('../assets/parks', false, /\.(webp|jpeg|jpg)$/);


const imageMap = images.keys().reduce((acc, path) => {
  const fileName = path.replace('./', '');
  acc[fileName] = images(path);
  return acc;
}, {});

// Now build your cafes array
const parks = [
  {
    id: 'p0001',
    image: imageMap['Kamala Nehru Park.jpeg'],
    name: 'Kamala Nehru Park',
    rating: { stars: 4.3 },
    keywords: ['jogging', 'fitness', 'all-day'],
  },
  {
    id: 'p0002',
    image: imageMap['Chhatrapati Sambhaji Maharaj garden.jpg'],
    name: 'Chhatrapati Sambhaji Maharaj garden',
    rating: { stars: 4.3 },
    keywords: ['aquarium', 'flowers', 'relax'],
  },
  {
    id: 'p0003',
    image: imageMap['P L Deshpande Garden.webp'],
    name: 'P L Deshpande Garden',
    rating: { stars: 4.5 },
    keywords: ['japanese', 'koi-fish', 'bamboo'],
  },
  {
    id: 'p0004',
    image: imageMap[`Shahid Major Pradeep Tathawade Park.webp`],
    name: `Shahid Major Pradeep Tathawade Park`,
    rating: { stars: 4.3 },
    keywords: ['gym', 'play', 'instruments'],
  },
  {
    id: 'p0005',
    image: imageMap['Thorat Garden.jpg'],
    name: 'Thorat Garden',
    rating: { stars: 4.4 },
    keywords: ['dinosaur', 'play', 'jogging'],
  },
];

export default parks;
