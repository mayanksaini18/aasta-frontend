// /app/page.tsx
import Header from './components/Header';
import FoodCard from './components/FoodCard';
import { FoodData, FoodItem } from './types/food';

// Data that adheres to the FoodData type
const popularFoods: FoodData[] = [
  { name: 'Maggie', restaurant: 'Banaras Cafe', discount: '54%', oldPrice: 150, newPrice: 69, isVeg: true, isSoldOut: true, imagePlaceholder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVKG98_R-8LkEa9yFBfhfZhEFRWVW-3n6yA&s' },
  { name: 'Rasgulla', restaurant: 'Banaras Cafe', discount: '68%', oldPrice: 59, newPrice: 19, isVeg: true, isSoldOut: false, imagePlaceholder: 'https://img.freepik.com/premium-photo/indian-sweet-dessert-rasgulla-famous-bengali-sweet-clay-bowl-with-napkin-red_136354-1766.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Chicken Biryani', restaurant: 'Hyderabadi House', discount: '15%', oldPrice: 300, newPrice: 185, isVeg: false, isSoldOut: true, imagePlaceholder: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500' },
  
  { name: 'Chocolate Cake', restaurant: 'Sweet Treats', discount: '10%', oldPrice: 500, newPrice: 250, isVeg: true, isSoldOut: true, imagePlaceholder: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
  { name: 'Veggie Pizza', restaurant: 'Pizza Palace', discount: '25%', oldPrice: 400, newPrice: 299, isVeg: true, isSoldOut: false, imagePlaceholder: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500' },
];

const cartItem = { isCart: true, count: 1, imagePlaceholder: 'https://images.unsplash.com/photo-1574672282223-f17de58a1043?w=500' };

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* This main container is pulled up to overlap the header's curve */}
      <main className="px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        {/* New container for the popular foods section */}
        <div className="bg-white rounded-t-2xl shadow-lg p-4 sm:p-6">
          {/* Popular Foods Section Title with custom red dot */}
          <h2 className="text-[45px] text-right sm:text-4xl font-extrabold just-another-hand-regular text-gray-800 mb-6 relative">
            Popular foods
           
          </h2>

          {/* Food Cards Grid (Responsive 2-column layout) */}
          <section className="grid grid-cols-2 gap-4 pb-20 md:grid-cols-3 lg:grid-cols-4">
            {popularFoods.map((food, index) => (
              <FoodCard key={index} food={food} />
            ))}
          </section>
        </div>
        
      </main>
      <FoodCard food={cartItem} />
    </div>
  );
};

export default Home;