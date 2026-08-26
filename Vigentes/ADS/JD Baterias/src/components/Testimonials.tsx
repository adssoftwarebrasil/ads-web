import { useEffect, useState } from 'react';
import { MessageCircle, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_URL } from '../constants';

const TESTIMONIALS = [
  { text: 'Ótima loja! Comprei uma bateria nova e a instalação foi super rápida. Atendimento nota 10! Recomendo para todos.', initials: 'JS', name: 'João da Silva', since: 'Cliente desde 2022', delay: '300ms' },
  { text: 'Super satisfeita com o atendimento, equipe muito atenciosa e prestativa. Recomendo a JD Baterias para todos!', initials: 'MO', name: 'Maria Oliveira', since: 'Cliente desde 2021', delay: '400ms' },
  { text: 'Compra fácil e entrega rápida. Chegou no mesmo dia! Com certeza voltarei a comprar. Excelente custo-benefício.', initials: 'CA', name: 'Carlos Almeida', since: 'Cliente desde 2023', delay: '500ms' },
];

function Stars({ size = 20 }: { size?: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="rgb(254, 186, 0)" className="lucide lucide-star text-[rgb(254,186,0)]" />
      ))}
    </>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  const reveal = (extra: string) => (inView ? 'opacity-100 translate-y-0' : `opacity-0 ${extra}`);
  const current = TESTIMONIALS[active];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]" style={{ background: 'rgb(4, 51, 140)' }}></div>
      <div ref={ref} className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ backgroundColor: 'rgba(254, 186, 0, 0.15)', color: 'rgb(4, 51, 140)' }}
          >
            <MessageCircle className="w-4 h-4" />
            Depoimentos
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 transition-all duration-700 delay-100 ${reveal('translate-y-4')}`} style={{ color: 'rgb(4, 51, 140)' }}>
            O Que Nossos{' '}
            <span className="relative inline-block">
              Clientes Dizem
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="rgb(254, 186, 0)" strokeWidth="4" strokeLinecap="round"></path>
              </svg>
            </span>
          </h2>
          <p className={`text-[#555] text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${reveal('translate-y-4')}`}>
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que eles têm a dizer!
          </p>
        </div>

        <div className="relative">
          {/* Desktop: 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className={`group relative bg-[#f8f9fa] hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${reveal('translate-y-8')}`}
                style={{ transitionDelay: t.delay }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: 'rgb(254, 186, 0)' }}>
                  <Quote className="w-6 h-6" style={{ color: 'rgb(4, 51, 140)' }} />
                </div>
                <div className="flex gap-1 mb-5">
                  <Stars />
                </div>
                <p className="text-[#333] text-base md:text-lg leading-relaxed mb-8 min-h-[100px]">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: 'rgb(4, 51, 140)', color: 'white' }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ color: 'rgb(4, 51, 140)' }}>{t.name}</p>
                    <p className="text-[#888] text-sm">{t.since}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.name} className={`group relative bg-[#f8f9fa] rounded-2xl p-8 transition-all duration-500 ${reveal('translate-y-8')}`} style={{ transitionDelay: t.delay }}>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center opacity-20" style={{ backgroundColor: 'rgb(254, 186, 0)' }}>
                  <Quote className="w-6 h-6" style={{ color: 'rgb(4, 51, 140)' }} />
                </div>
                <div className="flex gap-1 mb-5">
                  <Stars />
                </div>
                <p className="text-[#333] text-base leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'rgb(4, 51, 140)', color: 'white' }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: 'rgb(4, 51, 140)' }}>{t.name}</p>
                    <p className="text-[#888] text-sm">{t.since}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: single active card */}
          <div className="md:hidden">
            <div className="bg-[#f8f9fa] rounded-2xl p-6 transition-all duration-500 opacity-100 translate-y-0">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(254, 186, 0, 0.2)' }}>
                <Quote className="w-6 h-6" style={{ color: 'rgb(254, 186, 0)' }} />
              </div>
              <div className="flex gap-1 mb-4">
                <Stars size={18} />
              </div>
              <p className="text-[#333] text-base leading-relaxed mb-6">"{current.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'rgb(4, 51, 140)', color: 'white' }}>
                  {current.initials}
                </div>
                <div>
                  <p className="font-bold" style={{ color: 'rgb(4, 51, 140)' }}>{current.name}</p>
                  <p className="text-[#888] text-sm">{current.since}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-center gap-4 mt-10 transition-all duration-700 delay-500 ${reveal('translate-y-4')}`}>
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Depoimento anterior"
              style={{ backgroundColor: 'rgb(4, 51, 140)' }}
              onClick={() => setActive((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-3 rounded-full transition-all duration-300 ${i === active ? 'w-8' : 'w-3 hover:bg-[rgb(4,51,140)]/50'}`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  style={i === active ? { backgroundColor: 'rgb(254, 186, 0)' } : { backgroundColor: 'rgba(4, 51, 140, 0.2)' }}
                ></button>
              ))}
            </div>
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Próximo depoimento"
              style={{ backgroundColor: 'rgb(4, 51, 140)' }}
              onClick={() => setActive((v) => (v + 1) % TESTIMONIALS.length)}
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
          <p className="text-center text-sm text-[#888] mt-4">Rolagem automática ativada</p>
        </div>

        <div className={`mt-14 text-center transition-all duration-700 delay-700 ${reveal('translate-y-4')}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <div className="text-center sm:text-left">
              <p className="text-lg md:text-xl font-bold mb-1" style={{ color: 'rgb(4, 51, 140)' }}>Faça parte dos nossos clientes satisfeitos!</p>
              <p className="text-[#666] text-sm">Entre em contato e descubra por que somos referência em Natal.</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
              style={{ backgroundColor: 'rgb(254, 186, 0)', color: 'rgb(4, 51, 140)' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
