import { MapPin, Navigation, Waves } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const beaches = [
  { name: 'Praia de Mosqueiro', distance: '~40 km', description: 'Famosa pelas praias de água doce em meio ao rio Pará.' },
  { name: 'Praia de Salinas', distance: '~220 km', description: 'A maior praia de água doce do mundo, um paraíso amazônico.' },
  { name: 'Praia de Marudá', distance: '~150 km', description: 'Destino encantador com bangalôs e pôr do sol espetacular.' },
];

export default function Location() {
  const { ref, inView } = useInView();

  return (
    <section id="localizacao" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Localização
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Na Rota das Melhores Praias
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Estrategicamente localizado em Benevides – PA, o Hotel Avalon é o ponto de partida ideal para explorar as belezas naturais da região amazônica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/15 h-80 md:h-96 bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63809.89563782836!2d-48.2565!3d-1.3609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4b9f37ad20089%3A0x7a1e7d4f3b5c62d5!2sBenevides%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="mt-6 flex items-start gap-3 bg-navy/5 rounded-2xl p-4">
              <MapPin size={20} className="text-[#0aaff9] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy text-sm">Hotel Avalon Benevides</p>
                <p className="text-gray-500 text-sm">Benevides, Pará – Brasil</p>
                <a
                  href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20saber%20o%20endereço%20exato%20do%20Hotel%20Avalon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0aaff9] text-sm font-medium hover:underline mt-1 inline-flex items-center gap-1"
                >
                  <Navigation size={12} />
                  Solicitar endereço completo
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">
              Ponto de Partida Perfeito
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Benevides está na rota de acesso a algumas das praias mais belas do Pará. Nosso hotel é a base ideal para quem deseja explorar a região com conforto e praticidade.
            </p>

            <div className="space-y-4">
              {beaches.map((beach, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#0aaff9]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0aaff9]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0aaff9]/20 transition-colors">
                    <Waves size={18} className="text-[#0aaff9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-navy text-sm">{beach.name}</h4>
                      <span className="bg-gold/15 text-gold-dark text-xs font-bold px-2.5 py-1 rounded-full">
                        {beach.distance}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{beach.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 text-white">
              <p className="font-serif text-xl font-bold mb-2">Sua base na Amazônia</p>
              <p className="text-white/75 text-sm leading-relaxed">
                Além das praias, Benevides oferece fácil acesso a Belém do Pará e aos principais pontos turísticos da região. O Hotel Avalon é o ponto de apoio que você precisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
