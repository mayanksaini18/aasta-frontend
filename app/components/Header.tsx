// /components/Header.tsx
import { MapPin, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    // 'custom-header-curve' class will need to be defined in your global CSS
    <header className="bg-[#44933a] text-white pt-10 pb-40 relative overflow-hidden custom-header-curve">
      
      {/* Background pattern placeholder */}
      <div className="absolute inset-0 opacity-20 bg-repeat" style={{ backgroundImage: 'url("/food-pattern.svg")', backgroundSize: '100px' }}></div>

      <div className="relative container mx-auto px-4 space-y-6">
        
        {/* Top Row: Location and Veg Mode */}
        <div className="flex justify-between items-center z-10">
          
          {/* Location Button */}
          <button className="flex items-center bg-black/20 rounded-full py-2 px-4 shadow-lg text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2" />
            Whitefield, **Bengaluru**
          </button>
          
          {/* Profile/Veg Mode Group */}
          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-end text-[10px] font-bold leading-none">
                <span>VEG</span>
                <span>MODE</span>
            </div>
            {/* Veg Mode Toggle */}
            <div className="w-6 h-4 bg-gray-200 border-2 border-white rounded-md relative flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
            </div>
            {/* Profile Icon */}
            <div className="w-8 h-8 p-1 bg-black/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder='Search "biryani".'
            className="w-full pl-12 pr-4 py-3 text-gray-800 rounded-full shadow-lg focus:outline-none text-base"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Main Banner Text */}
        <h1 className="text-3xl sm:text-4xl font-extrabold pt-4 leading-snug">
          Foodie, it's your turn to <br /> **hack the menu.**
        </h1>
      </div>
    </header>
  );
};

export default Header;