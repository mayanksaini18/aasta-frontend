// /app/page.tsx
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import { FoodData, FoodItem } from './types/food';

// Data that adheres to the FoodData type
const popularFoods: FoodData[] = [
    { name: 'Maggie', restaurant: 'Banaras Cafe', discount: '54%', oldPrice: 150, newPrice: 69, isVeg: true, isSoldOut: true, imagePlaceholder: 'maggie' },
    { name: 'Rasgulla', restaurant: 'Banaras Cafe', discount: '68%', oldPrice: 59, newPrice: 19, isVeg: true, isSoldOut: true, imagePlaceholder: 'rasgulla' },
    { name: 'Chicken Delight', restaurant: 'Spicy Grill', discount: '10%', oldPrice: 200, newPrice: 180, isVeg: false, isSoldOut: false, imagePlaceholder: 'chicken' },
    { isCart: true, count: 1, imagePlaceholder: 'cart' }, 
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* This main container is pulled up to overlap the header's curve */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        {/* New container for the popular foods section */}
        <div className="bg-white rounded-t-2xl shadow-lg p-4 sm:p-6">
          {/* Popular Foods Section Title with custom red dot */}
          <h2 className="text-[35px] text-right sm:text-4xl font-extrabold just-another-hand-regular text-gray-800 mb-6 relative">
            Popular foods
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1 absolute bottom-1"></span>
          </h2>

          {/* Food Cards Grid (Responsive 2-column layout) */}
          <section className="grid grid-cols-2 gap-4 pb-20">
            {popularFoods.map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </section>
        </div>
        
        {/* Placeholder for the bottom navigation/menu items */}
      </main>
    </div>
  );
};

export default Home;