import { useState } from 'react';
import { Tv, Wind, Refrigerator, Wifi, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const MassageIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h18M3 6h18M3 18h18" />
    <circle cx="9" cy="9" r="2" />
    <path d="M9 11v5" />
    <path d="M7 16h4" />
  </svg>
);

const categories = [
  {
    id: 'simples',
    badge: 'Mais Procurada',
    badgeColor: 'bg-[#0aaff9] text-white',
    title: 'Suíte Simples',
    subtitle: '14 unidades disponíveis',
    description: 'Conforto e funcionalidade para uma estadia prática e agradável. Cada suíte é cuidadosamente preparada para proporcionar o descanso que você merece, com todos os recursos essenciais.',
    images: [
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2F3344da17-774b-45e7-863f-444e62e2f050.jpg',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2Faa7f0647-8e32-488d-b7db-72b2b26e783f.jpg',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2Fdb68fa27-f37d-46b9-8b9b-23652e2bbf60.jpg',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FQuartosAvulsos%2Fee39fecb-a9f6-4112-81dc-c4a10ee4ace1.jpg',
    ],
    amenities: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Tv, label: 'TV' },
      { icon: Wifi, label: 'Wi-Fi gratuito' },
      { icon: Check, label: 'Café da manhã' },
    ],
    cta: 'Reservar Suíte Simples',
  },
  {
    id: 'master',
    badge: 'Recomendada',
    badgeColor: 'bg-gold text-navy',
    title: 'Suíte Master',
    subtitle: '2 unidades disponíveis',
    description: 'Eleve sua experiência com o conforto premium das Suítes Master. Equipadas com frigobar, Smart TV e todos os recursos para uma estadia inesquecível.',
    images: [
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite16%2Fimage%20%281195%29.png',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite16%2Fimage%20%281196%29.png',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuite16%2Fimage%20%281197%29.png',
    ],
    amenities: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Refrigerator, label: 'Frigobar' },
      { icon: Wifi, label: 'Wi-Fi gratuito' },
      { icon: Check, label: 'Café da manhã' },
    ],
    cta: 'Reservar Suíte Master',
  },
  {
    id: 'master-premium',
    badge: 'Experiência Única',
    badgeColor: 'bg-navy text-gold border border-gold',
    title: 'Suíte Master Premium',
    subtitle: '1 unidade exclusiva',
    description: 'A experiência máxima de conforto e bem-estar. Esta suíte exclusiva conta com cama de massagem — um diferencial único para quem busca o mais alto nível de relaxamento.',
    images: [
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281198%29.png',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281199%29.png',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281200%29.png',
      'https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FSuites17%2Fimage%20%281201%29.png',
    ],
    amenities: [
      { icon: Wind, label: 'Ar-condicionado' },
      { icon: Tv, label: 'Smart TV' },
      { icon: Refrigerator, label: 'Frigobar' },
      { icon: Wifi, label: 'Wi-Fi gratuito' },
      { icon: MassageIcon as any, label: 'Cama de massagem' },
      { icon: Check, label: 'Café da manhã' },
    ],
    cta: 'Reservar Suíte Premium',
  },
];

function RoomCard({ room, index, inView }: { room: typeof categories[0]; index: number; inView: boolean }) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = () => setImgIndex((i) => (i === 0 ? room.images.length - 1 : i - 1));
  const next = () => setImgIndex((i) => (i === room.images.length - 1 ? 0 : i + 1));

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[imgIndex]}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {room.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === imgIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${room.badgeColor}`}>
          {room.badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-bold text-navy mb-1">{room.title}</h3>
          <p className="text-[#0aaff9] text-sm font-semibold">{room.subtitle}</p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{room.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-navy/5 rounded-full px-3 py-1.5 text-xs font-medium text-navy"
            >
              {typeof amenity.icon === 'function' ? (
                <amenity.icon size={13} className="text-[#0aaff9]" />
              ) : (
                <amenity.icon size={13} className="text-[#0aaff9]" />
              )}
              {amenity.label}
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20reservar%20uma%20${encodeURIComponent(room.title)}%20no%20Hotel%20Avalon%20Benevides.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-navy hover:bg-navy-light text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
        >
          {room.cta}
        </a>
      </div>
    </div>
  );
}

export default function Rooms() {
  const { ref, inView } = useInView();

  return (
    <section id="acomodacoes" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">
              Acomodações
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Escolha Sua Suíte Ideal
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            17 acomodações pensadas para diferentes necessidades, do conforto essencial ao máximo bem-estar. Todas com café da manhã incluso e Wi-Fi gratuito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} inView={inView} />
          ))}
        </div>

        <div
          className={`mt-12 bg-navy rounded-3xl p-8 md:p-12 text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Precisa de Mais Informações?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Entre em contato conosco pelo WhatsApp e nossa equipe terá prazer em ajudá-lo a encontrar a acomodação ideal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20acomodações%20do%20Hotel%20Avalon."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold/30"
            >
              Consultar Disponibilidade
            </a>
            <div className="text-white/60 text-sm">
              Atendimento 24 horas por dia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
