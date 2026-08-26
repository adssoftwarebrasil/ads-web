import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Breakfast from './components/Breakfast';
import Features from './components/Features';
import Location from './components/Location';
import Reviews from './components/Reviews';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Breakfast />
      <Features />
      <Location />
      <Reviews />
      <FinalCTA />
      <Footer />
    </div>
  );
}
