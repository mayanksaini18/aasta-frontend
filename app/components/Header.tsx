// /components/Header.tsx
import { MapPin, Search, User } from "lucide-react";


const Header: React.FC = () => {
  return (
    <header className="relative pb-32 pt-4 overflow-hidden custom-header-curve bg-[#D9FF63]">

      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-30 bg-repeat"
        style={{
          backgroundImage: 'url("/food-pattern.svg")',
          backgroundSize: "110px",
        }}
      ></div>

      <div className="relative container mx-auto space-y-4">

        {/* Top Row */}
        <div className="flex justify-between items-center">

          {/* Location Button */}
          <button className="flex items-center bg-[#E9FFC2] text-black rounded-full py-2 px-4 shadow-md text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2 text-black" />
            Whitefield, Bengaluru
          </button>

          {/* Profile */}
          <div className="w-12 h-12 bg-[#E9FFC2] rounded-full flex items-center justify-center shadow">
            <User className="w-7 h-7 text-black" />
          </div>
        </div>

        {/* Search Bar and Veg Mode Toggle */}
        <div className="flex justify-between items-center mt-3 gap-4">
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder='Search "biryani".'
              className="w-full  pl-12 pr-4 py-3 bg-[#E9FFC2] rounded-full shadow text-gray-800 placeholder:text-gray-700 text-[15px] font-medium focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
          </div>

          {/* VEG MODE + Toggle */}
          <div className="flex flex-col items-center">
            <div className="text-xs font-extrabold leading-tight text-black text-center">
              <span className="font-bold text-base">VEG </span> <br />
              <span className="font-bold">MODE</span>
            </div>
            <div className="mt-1 w-10 h-5 bg-white border-2 border-black rounded-lg flex items-center justify-end p-0.5">
              <div className="w-3.5 h-3.5 bg-green-600 rounded"></div>
            </div>
          </div>
        </div>

        {/* Main Banner Text */}
        <h1
           className="text-center text-[40px] sm:text-5xl lg:text-6xl xl:text-[92px] text-green-950 font-extrabold font-just-another-hand"
        >
          Foodie, it’s your turn to <br />
          <span className="">hack the menu.</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
