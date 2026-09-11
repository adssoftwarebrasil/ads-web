import { CheckCircle, Clock, Shield } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const badges = [
  { icon: CheckCircle, label: 'Satisfaction 100% Guaranteed' },
  { icon: Clock, label: 'Dependable & Affordable' },
  { icon: Shield, label: 'Licensed & Insured' },
];

export default function Hero() {
  return (
    <section id="hero">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("/pessoa-do-servico-de-limpeza-profissional-que-limpa-a-janela-do-escritorio_23-2150520611.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 px-2">
              Your Home, Clean and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Shining
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
                Your Time, Reclaimed.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Trusted residential and commercial cleaning services in Connecticut.
              <span className="font-semibold text-yellow-400"> Satisfaction guaranteed.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
              <button
                onClick={() => scrollToId('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-base sm:text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                Get a Free Estimate
              </button>
              <button
                onClick={() => scrollToId('services')}
                className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-200 text-center"
              >
                View Our Services
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center justify-center space-x-2 bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <Icon className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-black text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
