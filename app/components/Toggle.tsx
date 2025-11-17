'use client';

import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div
      onClick={handleToggle}
      className={`mt-1 w-10 h-5 bg-white border-2 border-black rounded-lg flex items-center p-0.5 cursor-pointer transition-all duration-300 ${
        checked ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className={`w-3.5 h-3.5 rounded transition-all duration-300 ${checked ? 'bg-green-600' : 'bg-red-600'}`}></div>
    </div>
  );
};

export default Toggle;