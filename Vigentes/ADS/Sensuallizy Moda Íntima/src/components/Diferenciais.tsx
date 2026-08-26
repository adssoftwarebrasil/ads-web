import { Heart, ShieldCheck, Sparkles, Users, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const IMG3 = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg3%2F';
const IMG = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg%2F';

interface Card {
  img: string;
  alt: string;
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const cards: Card[] = [
  { img: `${IMG3}atendimento-acolhedor.webp`, alt: 'Atendimento Acolhedor', Icon: Heart, iconClass: 'lucide lucide-heart w-7 h-7 text-white', title: 'Atendimento Acolhedor', text: 'Cada cliente se sente segura, valorizada e confiante. Nossa equipe está sempre pronta para ajudar.' },
  { img: `${IMG3}qualidade-garantida.webp`, alt: 'Qualidade Garantida', Icon: ShieldCheck, iconClass: 'lucide lucide-shield-check w-7 h-7 text-white', title: 'Qualidade Garantida', text: 'Peças de alta durabilidade e conforto. Marcas reconhecidas e testadas por milhares de clientes.' },
  { img: `${IMG3}variedade.webp`, alt: 'Variedade Exclusiva', Icon: Sparkles, iconClass: 'lucide lucide-sparkles w-7 h-7 text-white', title: 'Variedade Exclusiva', text: 'Lingeries, camisolas, pijamas, moda praia e modeladores. Para todos os estilos e ocasiões.' },
  { img: `${IMG3}experiencia.webp`, alt: 'Experiência de 9 Anos', Icon: Users, iconClass: 'lucide lucide-users w-7 h-7 text-white', title: 'Experiência de 9 Anos', text: 'Desde 2015 construindo relacionamentos baseados em confiança e cuidado com cada cliente.' },
  { img: `${IMG3}flexibilidade.webp`, alt: 'Flexibilidade', Icon: Clock, iconClass: 'lucide lucide-clock w-7 h-7 text-white', title: 'Flexibilidade', text: 'Atendimento online ágil e loja física para você experimentar e se sentir confortável.' },
  { img: `${IMG}coracao-de-sinop.webp`, alt: 'Localização Privilegiada', Icon: MapPin, iconClass: 'lucide lucide-map-pin w-7 h-7 text-white', title: 'Localização Privilegiada', text: 'Fácil acesso no coração de Sinop, com estacionamento e ambiente acolhedor.' },
];

const stats = [
  { value: '9+', label: 'Anos de Mercado', delay: '' },
  { value: '5★', label: 'Avaliação Google', delay: 'delay-100' },
  { value: '100%', label: 'Satisfação', delay: 'delay-200' },
];

export default function Diferenciais() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#E24244] font-semibold text-sm tracking-wider uppercase">Diferenciais</span>
            <div className="h-1 w-16 bg-[#E24244] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212423] mt-6 mb-6 leading-tight">
            Por Que Escolher a<span className="block text-[#E24244]">Sensuallizy?</span>
          </h2>
          <p className="text-[#212423]/70 text-lg leading-relaxed">
            Mais do que vender peças, entregamos uma experiência completa de bem-estar, autoestima e conexão.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img src={c.img} alt={c.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              <div className="absolute top-48 right-6 w-14 h-14 bg-[#E24244] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#d13d3f] transition-colors z-10">
                <c.Icon className={c.iconClass} />
              </div>
              <div className="p-8 pt-10 flex-1">
                <h3 className="text-xl font-bold text-[#212423] mb-3 group-hover:text-[#E24244] transition-colors">{c.title}</h3>
                <p className="text-[#212423]/70 leading-relaxed text-sm md:text-base">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className={`text-center p-8 rounded-2xl bg-gradient-to-br from-[#E24244] to-[#d13d3f] text-white shadow-lg transform hover:-translate-y-2 transition-transform ${s.delay}`}>
              <div className="text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-white/90 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
