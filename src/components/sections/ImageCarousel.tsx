import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  "https://i.pinimg.com/736x/2f/99/9b/2f999bbea65299c5da7b35d1952029dd.jpg",
  "https://i.pinimg.com/736x/2f/99/9b/2f999bbea65299c5da7b35d1952029dd.jpg",
  "https://i.pinimg.com/736x/2f/99/9b/2f999bbea65299c5da7b35d1952029dd.jpg"
];

export const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4 transition-transform ease-linear duration-500">
            {images.map((image, index) => (
              <div
                className="embla__slide min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] transition-transform duration-300 ease-in-out"
                key={index}
              >
                <img
                  src={image}
                  alt={`Medical Care ${index + 1}`}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-[400px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};