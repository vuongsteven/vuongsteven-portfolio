import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovered, setIsHovered] = useState('');

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center list-none p-0 m-0">
          <li className="text-2xl font-bold">Steven Vuong</li>
          <div className="flex space-x-6">
            {['Home', 'Experience'/*, 'Blog'*/].map((item) => (
              <li key={item} className="list-none">
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                    isHovered === item ? 'bg-white text-indigo-700' : 'hover:bg-white/20'
                  }`}
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {item}
                  {isHovered === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  )}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
