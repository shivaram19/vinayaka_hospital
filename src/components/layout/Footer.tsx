import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-semibold">WomenCare</span>
        </div>
        <p className="text-gray-400">© 2025 WomenCare. All rights reserved.</p>
      </div>
    </footer>
  );
};