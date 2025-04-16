import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ImageCarousel } from './components/sections/ImageCarousel';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;