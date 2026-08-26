import { useState } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

const TESTIMONIALS = [
  { text: '"Meu vestido de noiva foi um sonho realizado! O atendimento da equipe foi maravilhoso desde a primeira prova até o grande dia. Qualidade impecável."', initial: 'M', name: 'Mariana Souza', role: 'Noiva' },
  { text: '"O terno que aluguei ficou perfeito, com caimento sob medida. Atendimento excelente e variedade incrível de opções modernas."', initial: 'L', name: 'Lucas Almeida', role: 'Noivo' },
  { text: '"O vestido de debutante da minha filha estava deslumbrante! Recebemos muitos elogios. O cuidado com os detalhes fez toda a diferença."', initial: 'A', name: 'Ana Clara Silva', role: 'Mãe de Debutante' },
  { text: '"Equipe super atenciosa, me ajudaram a escolher o modelo ideal para o meu corpo. O ajuste ficou perfeito. Super recomendo!"', initial: 'F', name: 'Fernanda Rocha', role: 'Madrinha' },
  { text: '"Alugo meus vestidos de festa aqui há anos e nunca me decepciono. Sempre peças novas, limpas e com um atendimento acolhedor."', initial: 'P', name: 'Patrícia Lima', role: 'Cliente' },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const maxIndex = TESTIMONIALS.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFFEF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-[#721515] font-medium tracking-wider uppercase mb-2 text-sm">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">O que dizem nossos clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Histórias reais de quem confiou no Ateliê Noiva e Cia.</p>
        </div>
        <div className="relative group">
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#721515] hover:bg-[#721515] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 33.3333}%)` }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="flex-shrink-0 px-3" style={{ width: '33.3333%' }}>
                  <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-50 flex flex-col relative overflow-hidden">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-[#721515]/5 rotate-180" />
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#721515] text-[#721515]" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed italic flex-grow relative z-10">{t.text}</p>
                    <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#721515]/10 flex items-center justify-center flex-shrink-0 text-[#721515] font-bold text-lg md:text-xl">{t.initial}</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm md:text-base">{t.name}</p>
                        <p className="text-xs md:text-sm text-[#721515] font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#721515] hover:bg-[#721515] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-[#721515]' : 'w-2 bg-gray-300 hover:bg-[#721515]/50'}`}
                aria-label={`Ir para slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => openWhatsApp()}
            className="group inline-flex items-center gap-3 bg-[#721515] hover:bg-[#8b1a1a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Quero ser o próximo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
