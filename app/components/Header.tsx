// /components/Header.tsx
import { MapPin, Search, User } from "lucide-react";


const Header: React.FC = () => {
  return (
    <header className="relative pb-40 pt-10 overflow-hidden custom-header-curve bg-[#D9FF63]">

      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-30 bg-repeat"
        style={{
          backgroundImage: 'url("/food-pattern.svg")',
          backgroundSize: "110px",
        }}
      ></div>

      <div className="relative container mx-auto px-4 space-y-6">

        {/* Top Row */}
        <div className="flex justify-between items-center">

          {/* Location Button */}
          <button className="flex items-center bg-[#E9FFC2] text-black rounded-full py-2 px-4 shadow-md text-sm font-medium">
            <MapPin className="w-4 h-4 mr-2 text-black" />
            Whitefield, Bengaluru
          </button>

          {/* VEG MODE + Toggle + Profile */}
          <div className="flex items-center space-x-3">

            {/* VEG MODE Text */}
            <div className="flex flex-col text-[10px] font-extrabold leading-tight text-black text-right">
              <span>VEG</span>
              <span>MODE</span>
            </div>

            {/* Toggle Box */}
            <div className="w-7 h-4 bg-white border border-black rounded-md flex items-center justify-end px-0.5">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
            </div>

            {/* Profile */}
            <div className="w-9 h-9 bg-[#E9FFC2] rounded-full flex items-center justify-center shadow">
              <User className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-3">
          <input
            type="text"
            placeholder='Search "biryani".'
            className="w-full pl-12 pr-4 py-3 bg-[#E9FFC2] rounded-full shadow text-gray-800 placeholder:text-gray-700 text-[15px] font-medium focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
        </div>

        {/* Main Banner Text */}
        <h1
          className="text-[45px] sm:text-[36px] font-extrabold just-another-hand-regular leading-snug text-black delaGothicOne"
          style={{ letterSpacing: "-0.5px" }}
        >
          Foodie, it’s your turn to <br />
          <span className="text-black delaGothicOne">hack the menu.</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
