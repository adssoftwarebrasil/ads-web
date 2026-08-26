import { Star, Coffee, MapPin, Heart, ArrowRight } from 'lucide-react';

export default function LinhaUrbana() {
  return (
    <section
      id="urbana"
      className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-40 right-32 w-40 h-40 bg-amber-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-orange-400 rounded-full opacity-10 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(253, 88, 34) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(253,88,34)] to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-2xl hover:scale-105 transition-transform duration-300">
            <Star className="lucide lucide-star w-5 h-5 fill-white animate-pulse" />
            <span>Mais Vendida · Best Seller</span>
            <Star className="lucide lucide-star w-5 h-5 fill-white animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Linha{' '}
            <span className="bg-gradient-to-r from-[rgb(253,88,34)] to-orange-500 bg-clip-text text-transparent">
              Urbana &amp; Lazer
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            <span className="font-bold text-orange-600">Conforto supremo</span> e
            design clássico para transformar seu trajeto diário em um momento de{' '}
            <span className="font-bold text-amber-600">pura liberdade</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
              <Coffee className="lucide lucide-coffee w-5 h-5 text-orange-600" />
              <span className="font-bold text-gray-800 text-sm">
                Café &amp; Pedal
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-amber-200">
              <MapPin className="lucide lucide-map-pin w-5 h-5 text-amber-600" />
              <span className="font-bold text-gray-800 text-sm">
                Explore a Cidade
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-orange-200">
              <Heart className="lucide lucide-heart w-5 h-5 text-orange-600" />
              <span className="font-bold text-gray-800 text-sm">Bem-Estar</span>
            </div>
          </div>
        </div>
        <div className="relative group max-w-4xl mx-auto mb-12">
          <div className="absolute -inset-3 bg-gradient-to-r from-[rgb(253,88,34)] via-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sj0bike%2Fpasseio.jpg&version_id=null"
                alt="Linha Urbana &amp; Lazer"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="group/btn bg-gradient-to-r from-[rgb(253,88,34)] to-orange-500 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-[rgb(253,88,34)]/50 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 hover:scale-105">
            <span>Ver Detalhes</span>
            <ArrowRight className="lucide lucide-arrow-right w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
