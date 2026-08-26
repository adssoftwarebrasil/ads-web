import { MapPin, Phone, Calendar } from 'lucide-react';
import { BRANCHES } from '../data/constants';

export default function Branches() {
  return (
    <section id="unidades" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Nossas Unidades
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Presença estratégica no norte de Mato Grosso para atender você onde quer que esteja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              className="group rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Desde {branch.since}
                  </span>
                </div>
              </div>

              <div className="bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">{branch.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600 text-sm">
                    <MapPin size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                    <span>
                      {branch.address}
                      <br />
                      {branch.city}
                      <br />
                      <span className="text-gray-400">{branch.cep}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Phone size={16} className="text-brand-green flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="hover:text-brand-green transition-colors font-medium"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <Calendar size={16} className="text-brand-green flex-shrink-0" />
                    <span>Seg–Sex: 07h–18h | Sáb: 07h–11h30</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
