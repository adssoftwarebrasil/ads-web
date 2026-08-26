import { CheckCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '5563992199115';

const rooms = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto-Mais-Bonito.jpg',
    type: 'CASAL COM SOLTEIRO',
    title: 'Casal com solteiro',
    desc: 'Cama de casal e cama de solteiro no mesmo ambiente, perfeito para casais com acompanhante ou pequenas famílias.',
    features: ['Cama Casal + Solteiro', 'Ar-condicionado', 'Smart TV', 'Frigobar'],
    badge: 'Mais Reservado',
    badgeColor: 'bg-[#f68033]',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto1.jpg',
    type: 'TRIPLO SOLTEIRO',
    title: 'Triplo solteiro',
    desc: 'Três camas de solteiro em ambiente aconchegante, ideal para amigos, colegas de trabalho ou famílias.',
    features: ['3 Camas Solteiro', 'Ar-condicionado', 'Smart TV', 'Wi-Fi gratuito'],
    badge: 'Melhor Custo',
    badgeColor: 'bg-[#fff808]',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FQuarto3.jpg',
    type: 'QUARTO MASTER',
    title: 'Suíte Premium',
    desc: 'Espaço amplo e sofisticado com decoração exclusiva, perfeito para quem busca o melhor da hospedagem Ipanema.',
    features: ['Cama King Size', 'Ar-condicionado', 'Smart TV', 'Banheiro Privativo'],
    badge: 'Premium',
    badgeColor: 'bg-[#bdbec2]',
  },
];

export default function Rooms() {
  const handleReserve = (type: string) => {
    const msg = encodeURIComponent(`Olá! Tenho interesse no ${type} do Hotel Ipanema. Gostaria de mais informações e disponibilidade.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="quartos" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#f68033] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fff808] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f68033] text-sm font-bold tracking-widest uppercase mb-3">
            Acomodações
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Quartos para Cada <span className="text-[#fff808]">Momento</span>
          </h2>
          <p className="text-[#bdbec2] text-lg max-w-2xl mx-auto">
            Cada quarto foi pensado para oferecer uma experiência única. Escolha o ambiente ideal para a sua estadia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-[#f68033]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {room.badge && (
                  <span className={`absolute top-3 right-3 ${room.badgeColor} text-black text-xs font-black px-3 py-1 rounded-full`}>
                    {room.badge}
                  </span>
                )}
                <p className="absolute bottom-3 left-3 text-[#f68033] text-xs font-bold tracking-widest">
                  {room.type}
                </p>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-black text-xl mb-2">{room.title}</h3>
                <p className="text-[#bdbec2] text-sm leading-relaxed mb-4">{room.desc}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={14} className="text-[#f68033] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleReserve(room.title)}
                  className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-[#f68033] border border-white/20 hover:border-[#f68033] text-white font-bold py-3 rounded-xl text-sm transition-all duration-300 group/btn"
                >
                  Reservar Este Quarto
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
