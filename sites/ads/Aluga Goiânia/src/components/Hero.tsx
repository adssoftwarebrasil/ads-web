import { MapPin, Users, Star, ArrowDown, Sparkles } from 'lucide-react';

const scrollToAcomodacoes = () =>
  document.getElementById('acomodacoes')?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage-admin.lucasmendes.dev/api/v1/buckets/alugargoiania/objects/download?preview=true&prefix=Whisk_63e1c446bda3aa693dc4c2893c7468efdr.jpeg&version_id=null"
          alt="Apartamento moderno em Goiânia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-emerald-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-300/8 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white text-sm font-medium mb-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 hover:bg-white/25 hover:scale-105 transition-all cursor-pointer shadow-lg">
          <MapPin className="lucide lucide-map-pin w-4 h-4" />
          <span>Goiânia, Goiás</span>
        </div>
        <div className="space-y-6 mb-12">
          <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-8xl text-white leading-tight opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            Sua casa em{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Goiânia
            </span>
          </h1>
          <p
            className="font-body text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600"
            style={{ textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 12px' }}
          >
            Encontre o apartamento perfeito para sua estadia
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-12 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-800">
          <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer shadow-lg">
            <div className="w-10 h-10 bg-emerald-400/30 rounded-full flex items-center justify-center">
              <Users className="lucide lucide-users w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">37+</div>
              <div className="text-white/80 text-sm">Imóveis</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer shadow-lg">
            <div className="w-10 h-10 bg-teal-400/30 rounded-full flex items-center justify-center">
              <MapPin className="lucide lucide-map-pin w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-white/80 text-sm">Bairros</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer shadow-lg">
            <div className="w-10 h-10 bg-yellow-400/30 rounded-full flex items-center justify-center">
              <Star className="lucide lucide-star w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-white/80 text-sm">Premium</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
          <button
            onClick={scrollToAcomodacoes}
            className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/30 border-2 border-white/20"
          >
            <span>Ver Acomodações</span>
            <ArrowDown className="lucide lucide-arrow-down w-5 h-5 group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300" />
          </button>
          <button className="group inline-flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-white/25 hover:border-white/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
            <span>Fale Conosco</span>
            <Sparkles className="lucide lucide-sparkles w-5 h-5 group-hover:animate-spin transition-transform duration-300" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-in fade-in duration-700 delay-1200 hidden sm:block hover:scale-110 transition-transform cursor-pointer">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-emerald-300 to-teal-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
