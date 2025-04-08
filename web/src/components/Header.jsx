import React, { useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between p-6 text-white">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer group z-20"
        onClick={() => handleNavClick("/")}
      >
        <Camera className="h-8 w-8 text-white group-hover:text-emerald-300 group-hover:rotate-12 transition-all duration-300" />
        <span className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-all duration-300">
          CelebClone
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <button className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1">
          Product
        </button>
        <button className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1">
          Technology
        </button>
        <button
          onClick={() => handleNavClick("/about")}
          className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1"
        >
          About us
        </button>
      </div>

      {/* Get Started Button (visible on desktop) */}
      <div className="hidden md:block z-20">
        <button className="bg-white text-emerald-900 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-emerald-400 hover:scale-105 hover:shadow-lg hover:shadow-emerald-900/20">
          Get Started
        </button>
      </div>

      {/* Hamburger Menu Button (visible on mobile) */}
      <div className="md:hidden z-20">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-emerald-800 to-black pt-24 px-6 flex flex-col items-center space-y-6 z-10 md:hidden">
          {/* Mobile Navigation Links */}
          <button
            onClick={() => alert("Navigate to Product")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            Product
          </button>
          <button
            onClick={() => alert("Navigate to Technology")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            Technology
          </button>
          <button
            onClick={() => handleNavClick("/about")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            About us
          </button>

          {/* Get Started Button (visible in mobile menu) */}
          <button className="mt-8 bg-white text-emerald-900 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-emerald-400 hover:scale-105">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
