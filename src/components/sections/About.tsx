import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="embla">
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
                  alt="Medical Team"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                With over 20 years of experience in women's healthcare, our team of specialists provides
                personalized care using the latest medical technologies and techniques.
              </p>
              <p className="text-gray-600">
                We understand that every patient is unique, which is why we take the time to listen
                and create customized treatment plans that address your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};