import { Star, ArrowRight, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Clock, title: '24/7 Available', subtitle: 'Always at Your Service' },
  { icon: Shield, title: 'Fully Insured', subtitle: 'Complete Coverage' },
  { icon: Star, title: 'Licensed Pros', subtitle: 'Expert Chauffeurs' },
];

function Hero() {
  const scrollToBook = () => {
    const el = document.getElementById('book-now');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video autoPlay loop playsInline className="w-full h-full object-cover">
          <source
            src="https://storage.lucasmendes.dev/site-sp/royall%2Fimg%2Fsaindo-do-carro.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left">
        <div className="lg:max-w-3xl">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Star size={16} fill="currentColor" />
              <span>Premium Transportation Services in Bay Area</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Luxury and Comfort
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              in Every Ride
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Experience unparalleled luxury transportation services across the San Francisco Bay
            Area. Professional chauffeurs, premium fleet, and exceptional service available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToBook}
              className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-400/50"
            >
              <span>Book Your Ride</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:5103162021"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              <span>Call Now</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                  <stat.icon size={24} className="text-yellow-400" {...(stat.icon === Star ? { fill: 'currentColor' } : {})} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{stat.title}</p>
                  <p className="text-gray-400 text-sm">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}

export default Hero;
