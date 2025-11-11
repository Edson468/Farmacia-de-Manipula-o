import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGallery from './components/ProductGallery';
import ImageCarousel from './components/ImageCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProductGallery />
      <ImageCarousel />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;