import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

interface Review {
  text: string;
  initial: string;
  name: string;
  meta: string;
}

const reviews: Review[] = [
  {
    text: '"Pousada top, ambiente top, alimentação top e barato. Atendimento top. Fiquei 2 noites, os quartos bem limpos e organizados. O café da manhã quem dormiu lá é um banquete. O proprietário está de parabéns. Eu recomendo!"',
    initial: 'P',
    name: 'Paulo Uberaba',
    meta: 'Local Guide · 177 avaliações',
  },
  {
    text: '"Muito bom, super recomendo! Proprietários super atenciosos, quartos bons, limpos, super arrumados. Ótima ducha bem quentinha. Vale muito a pena parar aqui na Dutra."',
    initial: 'D',
    name: 'Daniel Xavier',
    meta: 'Local Guide · 35 avaliações',
  },
  {
    text: '"Apesar de simples, o restaurante é coordenado por uma família que atende muito bem. Os produtos são maravilhosos: milk-shake de Ovomaltine, sorvete da casa, leite batido com Ovomaltine, misto quente delicioso. Para quem quiser, ainda existe o self-service."',
    initial: 'A',
    name: 'Andrea Siciliano',
    meta: 'Local Guide · 194 avaliações',
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="section-padding bg-brand-navy overflow-hidden">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Avaliações
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white font-display">4.4</div>
              <div className="text-white/60 text-xs mt-1">Média Google</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <div className="flex gap-1 mb-1.5">
                <Star size={20} className="lucide lucide-star fill-amber-400 text-amber-400" />
                <Star size={20} className="lucide lucide-star fill-amber-400 text-amber-400" />
                <Star size={20} className="lucide lucide-star fill-amber-400 text-amber-400" />
                <Star size={20} className="lucide lucide-star fill-amber-400 text-amber-400" />
                <Star size={20} className="lucide lucide-star fill-amber-400/50 text-amber-400/50" />
              </div>
              <div className="text-white/60 text-xs">Avaliação no Google Maps</div>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-brand-orange/30 card-hover"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-4 right-4 text-brand-orange/20">
                <Quote size={48} />
              </div>
              <div className="mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="lucide lucide-star fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 relative z-10">{review.text}</p>
              <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Restaurante+e+Pousada+Ovomaltine+Barra+Mansa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
          >
            <Star size={18} />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
