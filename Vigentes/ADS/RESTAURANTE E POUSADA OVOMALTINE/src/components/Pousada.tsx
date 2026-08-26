import { BedDouble, ShowerHead, Coffee, Car, Star, Wifi } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import Reveal from './Reveal';

const IMG = 'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/';

const rooms = [
  {
    title: 'Quarto de Casal',
    desc: 'Quarto aconchegante para casais, com cama de casal, banheiro privativo com ducha quente e ambiente bem organizado.',
  },
  {
    title: 'Quarto de Solteiro',
    desc: 'Ideal para viajantes solo ou quem está de passagem pela Dutra. Confortável, limpo e com ótimo custo-benefício.',
  },
];

const amenities = [
  { icon: <BedDouble size={20} />, label: 'Quartos Confortáveis' },
  { icon: <ShowerHead size={20} />, label: 'Ducha Quente' },
  { icon: <Coffee size={20} />, label: 'Café da Manhã' },
  { icon: <Car size={20} />, label: 'Estacionamento' },
  { icon: <Star size={20} />, label: 'Ambiente Limpo' },
  { icon: <Wifi size={20} />, label: 'Fácil Acesso' },
];

export default function Pousada() {
  return (
    <section id="pousada" className="section-padding bg-brand-dark overflow-hidden">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Hospedagem
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Pernoite com Conforto e Segurança
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Na beira da Dutra, a Pousada Ovomaltine oferece o descanso que você precisa. Quartos
            limpos, organizados e com café da manhã que é um banquete.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          <Reveal className="grid grid-cols-2 gap-3" from="opacity-0 -translate-x-10">
            <div className="col-span-2 rounded-2xl overflow-hidden h-48 md:h-56">
              <img
                src={IMG + 'buffet-de-comida-variada-em-restaurante_1600x1200.webp'}
                alt="Café da manhã na pousada"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-36 md:h-44">
              <img
                src={IMG + 'buffet-comidas-variadas-carne-abacaxi-legumes_1600x1200.webp'}
                alt="Buffet variedade"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-36 md:h-44">
              <img
                src={IMG + 'buffet-de-saladas-colorido-com-alimentos-frescos_475x638.webp'}
                alt="Saladas frescas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>
          <Reveal className="delay-200" from="opacity-0 translate-x-10">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {rooms.map((room) => (
                <div
                  key={room.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-brand-orange/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center">
                      <BedDouble size={28} className="text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1.5">{room.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{room.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <h4 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
                Comodidades
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5"
                  >
                    <span className="text-brand-orange flex-shrink-0">{a.icon}</span>
                    <span className="text-white/70 text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-4">
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-brand-orange font-semibold">Avaliação real:</span> "Quartos bem
                limpos e organizados. O café da manhã é um banquete. O proprietário está de
                parabéns!" — Paulo, Local Guide
              </p>
            </div>
          </Reveal>
        </div>
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Reserve seu Quarto Agora
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-lg mx-auto">
            Viajando pela Dutra? Pare aqui, descanse e ainda aproveite nossa comida gostosa.
          </p>
          <a
            href="http://wa.me/5524998199101?text=Olá!%20Gostaria%20de%20reservar%20um%20quarto%20na%20Pousada%20Ovomaltine."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-orange font-bold px-8 py-4 rounded-full hover:bg-brand-cream transition-colors duration-200 shadow-xl text-base"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Reservar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
