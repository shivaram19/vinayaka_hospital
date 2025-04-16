import React from 'react';
import { Heart } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-semibold text-gray-800">WomenCare</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-rose-500 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-rose-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};