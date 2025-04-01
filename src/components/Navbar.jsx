import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-8">
        
        {/* Logo - Fully Flushed Left */}
        <h1 className="text-3xl font-extrabold uppercase text-red-500 tracking-wide">
          FitZone
        </h1>

        {/* Desktop Menu - Proper Spacing */}
        <div className="hidden md:flex items-center space-x-12">
          {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium hover:text-red-500 transition-all duration-300"
            >
              {item}
            </a>
          ))}

          {/* Join Now Button */}
          <a
            href="#join"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-lg font-semibold transition-all shadow-lg uppercase tracking-wide"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white py-6 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 text-lg">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#join"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-lg font-semibold transition-all shadow-lg uppercase"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
