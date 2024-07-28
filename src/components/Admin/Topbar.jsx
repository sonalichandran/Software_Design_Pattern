import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

const Topbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='h-[8vh] w-full flex justify-center items-center shadow-sm shadow-slate-700'>
      <div className='w-[95%] h-full flex items-center justify-end gap-4'>
        <ModeToggle />
        <div className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Edit Profile</a>
              <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
