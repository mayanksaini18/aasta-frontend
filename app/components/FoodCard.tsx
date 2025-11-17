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
            
            <div className="relative h-38 sm:h-44 ">
                <img 
                    src={imagePlaceholder}
                    alt={name}
                    className={` w-xs h-full m-auto object-cover rounded-3xl ${isSoldOut ? 'filter grayscale' : ''}`}
                />
                
                {/* SOLD OUT Ribbon */}
                {isSoldOut && (
                    <div className="absolute top-6 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-45 bg-red-600 text-white text-xs font-bold py-1 px-8 shadow-md">
                        SOLD OUT
                    </div>
                )}
            </div>

            <div className="p-3 bg-white">
                <div className="flex justify-between items-start">
                    <h3 className="text-base lg:text-lg font-bold text-gray-800 leading-tight">{name}</h3>
                    {/* Veg/Non-Veg Indicator */}
                    <div className={`w-4 h-4 border rounded-sm font-bold ${isVeg ? 'border-green-600' : 'border-red-600'} bg-white flex items-center justify-center flex-shrink-0`}>
                        <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                    </div>
                </div>
                
                <p className="text-xs text-gray-500 mb-1">({restaurant})</p>

                <p className="text-xs font-bold text-blue-600 mb-1">{discount} OFF</p>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        ₹{oldPrice}
                    </span>
                    <span className="text-xl lg:text-2xl font-extrabold text-gray-800">
                        ₹{newPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

const CartCard: React.FC<{ item: CartItem }> = ({ item }) => (
    
    <div className="fixed bottom-5 right-5 z-50">
        <button className="relative flex items-center bg-white/70 backdrop-blur-md border border-green-700 text-green-700 font-bold py-2 px-4 rounded-full shadow-xl">
            <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-600 text-xs text-white rounded-full flex items-center justify-center ring-2 ring-white">
                {item.count}
            </span>
            <ShoppingCart className="w-4 h-4 mr-1"/> View Cart <span className="ml-1 font-bold">→</span>
        </button>
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