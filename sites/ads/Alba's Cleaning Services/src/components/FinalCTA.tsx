import { Star, Phone } from 'lucide-react';

const badges = ['Licensed & Insured', '100% Satisfaction Guaranteed', 'Serving in Connecticut'];

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full">
            <Star className="h-6 w-6 text-black" fill="currentColor" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 px-4">
          Ready for a Spotless Home or Office?
        </h2>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed px-4 text-gray-300">
          Get your free estimate today and discover why families in Connecticut trust Alba's Cleaning
          Services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
          >
            Request Your Free Estimate Today
          </a>
          <a
            href="tel:8607786773"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold text-base sm:text-lg border-2 transition-all duration-200 border-white text-white hover:bg-white hover:text-black"
          >
            <Phone className="h-5 w-5" />
            <span>(860) 778-6773</span>
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm px-4">
          {badges.map((b) => (
            <div key={b} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="whitespace-nowrap text-gray-300">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
