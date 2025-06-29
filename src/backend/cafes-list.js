const images = require.context('../assets/cafes', false, /\.webp$/);

const imageMap = images.keys().reduce((acc, path) => {
  const fileName = path.replace('./', '');
  acc[fileName] = images(path);
  return acc;
}, {});

// Now build your cafes array
const cafes = [
  {
    id: 'c0001',
    image: imageMap['Cibbo - All Day Dining & Bar.webp'],
    name: 'Cibbo - All Day Dining & Bar',
    rating: { stars: 4.5 },
    keywords: ['italian', 'bar', 'all-day'],
    price: '  ₹600 for one',
    cuisine:['American', 'Continental', 'Italian']
  },
  {
    id: 'c0002',
    image: imageMap['Boho Boho.webp'],
    name: 'Boho Boho',
    rating: { stars: 4.3 },
    keywords: ['italian', 'boho', 'aesthetic'],
    price: '  ₹700 for one',
    cuisine:['Sandwich', 'Vegan', 'Italian']
  },
  {
    id: 'c0003',
    image: imageMap['Brewbox Blend Cafe + Cowork.webp'],
    name: 'Brewbox Blend Cafe + Cowork',
    rating: { stars: 4.1 },
    keywords: ['coffee', 'co-working', 'wifi'],
    price: '  ₹500 for one',
    cuisine:['Salads', 'Desserts', 'Italian']
  },
  {
    id: 'c0004',
    image: imageMap[`Glen's Bakehouse Pune.webp`],
    name: `Glen's Bakehouse Pune`,
    rating: { stars: 3.7 },
    keywords: ['cupcakes', 'italian', 'all-day'],
    price: '  ₹400 for one',
    cuisine:['American', 'Pastries', 'Italian']
  },
  {
    id: 'c0005',
    image: imageMap['Mauji - The Time Cafe.webp'],
    name: 'Mauji - The Time Cafe',
    rating: { stars: 4.7 },
    keywords: ['aesthetic', 'co-working', 'peaceful', 'library'],
    price: '  ₹200 for one',
    cuisine:['American', 'Veg-Only', 'Italian']
  },
];

export default cafes;
