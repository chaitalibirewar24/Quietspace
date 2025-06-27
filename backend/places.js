
const imageModules = import.meta.glob('../assets/cafes/*.webp', { eager: true });

const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split('/').pop(); 
    return [fileName, module.default];
  })
);

// Now build your cafes array
const cafes = [
  {
    id: 'c0001',
    image: imageMap['Cibbo - All Day Dining & Bar.webp'],
    name: 'Cibbo - All Day Dining & Bar',
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
    keywords: ['italian', 'bar', 'all-day']
  }
];

export default cafes;
