import { Home, MapPin, Star, Phone } from 'lucide-react';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const scrollToAcomodacoes = () =>
  document.getElementById('acomodacoes')?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-black/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                <Home className="lucide lucide-home w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-heading font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-emerald-700 bg-clip-text text-transparent">
                Aluga Goiânia
              </h1>
              <div className="flex items-center space-x-1 -mt-1">
                <MapPin className="lucide lucide-map-pin w-3 h-3 text-emerald-500" />
                <p className="text-xs text-slate-500 font-medium">Goiás</p>
                <div className="flex items-center ml-2">
                  <Star className="lucide lucide-star w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-slate-500 ml-1">Premium</span>
                </div>
              </div>
            </div>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
            >
              Início
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={scrollToAcomodacoes}
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
            >
              Acomodações
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </div>
          <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-2">
              <Phone className="lucide lucide-phone w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">
                <span className="hidden sm:inline">Fale Conosco</span>
                <span className="sm:hidden">Contato</span>
              </span>
            </div>
            <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
