import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-rose-500" />,
    title: "Call Us",
    info: "+1 (555) 123-4567"
  },
  {
    icon: <Calendar className="h-6 w-6 text-rose-500" />,
    title: "Working Hours",
    info: "Mon-Sat: 9AM - 7PM"
  },
  {
    icon: <MapPin className="h-6 w-6 text-rose-500" />,
    title: "Location",
    info: "123 Healthcare Ave, Medical District"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-rose-100 rounded-full mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-600">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};