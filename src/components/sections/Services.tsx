import React from 'react';
import { Baby, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: <Baby className="h-12 w-12 text-rose-500 animate-float" />,
    title: "Pregnancy Care",
    description: "Comprehensive prenatal care and monitoring for expectant mothers."
  },
  {
    icon: <Sparkles className="h-12 w-12 text-rose-500 animate-float" />,
    title: "Dermatology",
    description: "Advanced skincare treatments and solutions for all skin conditions."
  },
  {
    icon: <Heart className="h-12 w-12 text-rose-500 animate-float" />,
    title: "Hair Transplantation",
    description: "State-of-the-art hair restoration procedures with natural results."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};