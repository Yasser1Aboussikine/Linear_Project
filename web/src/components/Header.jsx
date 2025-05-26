import React, { useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PDF_URL = "/FINAL_report_Yasser_Ikram_Smaiin (1).pdf";

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

  const handleOpenPdf = () => {
    window.open(PDF_URL, "_blank");
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
          PCA Image Classifier
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
        <button
          onClick={() => handleNavClick("/code")}
          className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1"
        >
          Code
        </button>
        <button
          onClick={() => handleNavClick("/about")}
          className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1"
        >
          About us
        </button>
        <button
          onClick={() => handleOpenPdf()}
          className="text-white hover:text-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105 hover:border-b-2 hover:border-emerald-300 pb-1"
        >
          Report
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
            onClick={() => handleNavClick("/code")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            Code
          </button>
          <button
            onClick={() => handleNavClick("/about")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            About us
          </button>
          <button
            onClick={() => window.open("/report.pdf", "_blank")}
            className="text-xl hover:text-emerald-300 transition-colors"
          >
            Get Report
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
