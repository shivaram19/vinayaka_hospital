import React from 'react';
import { Baby } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Baby className="h-16 w-16 text-rose-400 animate-bounce-slow" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Specialized Care for <span className="text-rose-500">Women's Health</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Expert care in pregnancy, dermatology, and hair restoration, all in one place.
        </p>
        <a
          href="#contact"
          className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};