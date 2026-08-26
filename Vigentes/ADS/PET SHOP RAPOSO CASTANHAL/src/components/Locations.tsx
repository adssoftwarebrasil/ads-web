import { MapPin, Clock } from 'lucide-react';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0876799999997!2d-47.9205!3d-1.2945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnNDAuMiJTIDQ3wrA1NSczNy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890';

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[rgb(253,118,22)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[rgb(6,168,232)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[rgb(255,232,4)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Nossas Unidades
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[rgb(253,118,22)]">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[rgb(253,118,22)]/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-[rgb(253,118,22)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Matriz</h3>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-semibold">
                  Avenida Barão do Rio Branco, 1074
                </p>
                <p className="text-gray-600 text-sm">CEP: 68742-015</p>
                <p className="text-gray-600 text-sm">Castanhal - PA</p>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-gray-100">
                <iframe
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Matriz"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[rgb(6,168,232)]">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[rgb(6,168,232)]/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-[rgb(6,168,232)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Filial</h3>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-semibold">
                  R. Dr. Laureano Francisco Alves de Melo, 90
                </p>
                <p className="text-gray-600 text-sm">CEP: 68746-012</p>
                <p className="text-gray-600 text-sm">Castanhal - PA</p>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-gray-100">
                <iframe
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Filial"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[rgb(255,232,4)] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[rgb(255,232,4)]/20 rounded-full flex items-center justify-center">
                <Clock size={24} className="text-[rgb(253,118,22)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Horários</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[rgb(253,118,22)]/5 border border-[rgb(253,118,22)]/20 rounded-xl p-4">
                <p className="text-gray-700 font-semibold text-sm mb-1">
                  Segunda a Sábado
                </p>
                <p className="text-xl font-bold text-gray-900">08h00 às 20h00</p>
              </div>
              <div className="bg-[rgb(6,168,232)]/5 border border-[rgb(6,168,232)]/20 rounded-xl p-4">
                <p className="text-gray-700 font-semibold text-sm mb-1">
                  Domingo e Feriados
                </p>
                <p className="text-xl font-bold text-gray-900">08h00 às 12h00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
