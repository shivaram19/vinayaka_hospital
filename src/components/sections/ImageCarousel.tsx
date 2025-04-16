import useEmblaCarousel from 'embla-carousel-react';

const images = [
  "https://images.unsplash.com/photo-1632053002424-705e06574cc3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559702977-34c06c3b51f4?auto=format&fit=crop&q=80"
];

export const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={image}
                  alt={`Medical Care ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};