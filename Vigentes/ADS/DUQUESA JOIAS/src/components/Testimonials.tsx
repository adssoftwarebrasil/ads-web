import { Star, Quote } from 'lucide-react';
import { useReveal } from '../useReveal';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      ></path>
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      ></path>
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      ></path>
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      ></path>
    </svg>
  );
}

interface Review {
  initial: string;
  avatarColor: string;
  name: string;
  meta: string;
  text: string;
  delay: number;
}

const reviews: Review[] = [
  {
    initial: 'I',
    avatarColor: 'rgb(188, 151, 96)',
    name: 'Israel Vale dos Santos',
    meta: 'Guia Local · 6 avaliações',
    text: 'Atendimento maravilhoso! São super atenciosos e prestativos. Recomendo de olhos fechados!',
    delay: 0,
  },
  {
    initial: 'G',
    avatarColor: 'rgb(240, 113, 171)',
    name: 'Gabriely Ricieri Davi',
    meta: '3 avaliações · 1 foto',
    text: 'Peças de alta qualidade, atendimento nota 1000. A melhor empresa de Semijoias e prata do estado do Mato Grosso. Uma ótima opção para quem procura uma fonte de renda — empresa de confiança, pronta para agregar na vida de seus clientes. E o melhor: possui um programa de recompensas com prêmios!',
    delay: 150,
  },
  {
    initial: 'T',
    avatarColor: 'rgb(221, 185, 163)',
    name: 'Thais Melo',
    meta: '8 avaliações',
    text: 'As semijoias são de altíssima qualidade. Dá para ver que cada peça é escolhida com muito cuidado e bom gosto. Além disso, o atendimento é maravilhoso! A equipe é super atenciosa, prestativa e realmente entende do que vende, ajudando a escolher a peça perfeita.',
    delay: 300,
  },
];

function rgba(color: string, alpha: number) {
  const nums = color.match(/\d+/g);
  if (!nums) return color;
  return `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, ${alpha})`;
}

export default function Testimonials() {
  const header = useReveal();
  const grid = useReveal();

  return (
    <section id="depoimentos" className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <div
          ref={header.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Avaliações Google
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            O que nossas clientes <span className="italic text-gold-gradient">dizem sobre nós</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full mt-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={16}
                  height={16}
                  className="lucide lucide-star fill-gold text-gold"
                />
              ))}
            </div>
            <span className="font-bold text-xl text-gold">5.0</span>
            <span className="text-white/60 text-sm">— Avaliação média no Google</span>
          </div>
        </div>
        <div ref={grid.ref} className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`group bg-white border border-lgray/50 rounded-3xl p-7 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                grid.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${r.delay}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ backgroundColor: r.avatarColor }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">{r.name}</div>
                    <div className="text-black/40 text-xs">{r.meta}</div>
                  </div>
                </div>
                <Quote
                  width={20}
                  height={20}
                  className="lucide lucide-quote text-lgray flex-shrink-0"
                />
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={14}
                    height={14}
                    className="lucide lucide-star fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-black/65 text-sm leading-relaxed">{r.text}</p>
              <div
                className="mt-5 pt-5 border-t flex items-center gap-2 text-xs font-medium"
                style={{ borderColor: rgba(r.avatarColor, 0.19), color: r.avatarColor }}
              >
                <GoogleIcon />
                Avaliado no Google
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
