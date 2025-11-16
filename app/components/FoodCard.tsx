// /components/FoodCard.tsx
import { ShoppingCart } from 'lucide-react';
import { FoodData, FoodItem, CartItem } from '../types/food';

interface FoodCardProps {
    food: FoodData;
}

// Type guard to check if the item is a CartItem
const isCartItem = (food: FoodData): food is CartItem => 'isCart' in food;

const Card: React.FC<{ item: FoodItem }> = ({ item }) => {
    const { name, restaurant, discount, oldPrice, newPrice, isVeg, isSoldOut, imagePlaceholder } = item;
    
    return (
        <div className={`col-span-1 rounded-xl overflow-hidden shadow-lg border relative ${isSoldOut ? 'opacity-60' : ''}`}>
            
            <div className="relative h-36 sm:h-44 bg-gray-200">
                <img 
                    src={`/images/${imagePlaceholder}.jpg`} 
                    alt={name} 
                    className={`w-full h-full object-cover ${isSoldOut ? 'filter grayscale' : ''}`}
                />

                {/* SOLD OUT Ribbon */}
                {isSoldOut && (
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-45 bg-red-600 text-white text-xs font-bold py-1 px-8 shadow-md">
                        SOLD OUT
                    </div>
                )}
            </div>

            <div className="p-3 bg-white">
                <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold text-gray-800 leading-tight">{name}</h3>
                    {isVeg && (
                        <div className="w-3 h-3 border border-green-600 flex items-center justify-center rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        </div>
                    )}
                </div>
                
                <p className="text-xs text-gray-500 mb-1">({restaurant})</p>

                <p className="text-xs font-bold text-blue-600 mb-1">{discount} OFF</p>
                <div className="flex items-baseline space-x-2">
                    <span className="text-sm text-gray-400 line-through">
                        ₹{oldPrice}
                    </span>
                    <span className="text-xl font-extrabold text-gray-800">
                        ₹{newPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

const CartCard: React.FC<{ item: CartItem }> = ({ item }) => (
    // Cart Card for the bottom right corner
    <div className="col-span-1 relative aspect-square">
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg border">
            <img src={`/images/${item.imagePlaceholder}.jpg`} alt="View Cart" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
            
            <button className="absolute bottom-3 right-3 flex items-center bg-white text-green-700 font-bold py-2 px-4 rounded-full shadow-xl">
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-600 text-xs text-white rounded-full flex items-center justify-center ring-2 ring-white">
                    {item.count}
                </span>
                <ShoppingCart className="w-4 h-4 mr-1"/> View Cart <span className="ml-1 font-bold">→</span>
            </button>
        </div>
    </div>
);


const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
    // Use the type guard to determine which component to render
    if (isCartItem(food)) {
        return <CartCard item={food} />;
    }
    return <Card item={food} />;
};

export default FoodCard;