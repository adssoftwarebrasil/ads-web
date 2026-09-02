import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/whatsapp';

const testimonials = [
  {
    text: '"Comprei peças para minha máquina e o atendimento foi de primeira, super recomendo!"',
    initials: 'MO',
    name: 'Maria Oliveira',
    role: 'Produtora Rural',
  },
  {
    text: '"O suporte técnico da NOVO CAMPO é incrível, sempre dispostos a ajudar!"',
    initials: 'CP',
    name: 'Carlos Pereira',
    role: 'Agricultor',
  },
  {
    text: '"Excelente qualidade nos produtos e entrega sempre no prazo, estou muito satisfeita!"',
    initials: 'FC',
    name: 'Fernanda Costa',
    role: 'Gestora Agrícola',
  },
  {
    text: '"A NOVO CAMPO tem sido uma parceria essencial para o sucesso das minhas colheitas, com atendimento sempre excepcional."',
    initials: 'JS',
    name: 'João Silva',
    role: 'Produtor de Soja',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8D617]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#4CAF50] font-semibold text-sm md:text-base uppercase tracking-wider bg-[#4CAF50]/10 px-4 py-2 rounded-full">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A385C] mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-20 h-1 bg-[#F8D617] mx-auto"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.initials} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-12 relative border border-gray-100 group">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#F8D617] rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-12 transition-transform duration-300">
                      <Quote
                        width={40}
                        height={40}
                        strokeWidth={2.5}
                        className="lucide lucide-quote text-[#1A385C]"
                      />
                    </div>
                    <div className="relative z-10 mt-8">
                      <div className="flex gap-1 mb-6 justify-center md:justify-start">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star
                            key={s}
                            width={20}
                            height={20}
                            className="lucide lucide-star fill-[#F8D617] text-[#F8D617] drop-shadow-sm"
                          />
                        ))}
                      </div>
                      <p className="text-[#424242] text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left">
                        {t.text}
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                        <div className="relative">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#001F7A] to-[#4CAF50] flex items-center justify-center shadow-lg ring-4 ring-white">
                            <span className="text-white font-bold text-lg md:text-xl">
                              {t.initials}
                            </span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4CAF50] rounded-full border-2 border-white flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-[#1A385C] text-lg md:text-xl">
                            {t.name}
                          </div>
                          <div className="text-[#4CAF50] text-sm md:text-base font-medium">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#4CAF50]/5 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-[#001F7A] rounded-full flex items-center justify-center text-[#001F7A] hover:bg-[#001F7A] hover:text-white transition-all duration-300 shadow-lg hover:scale-110 group z-10"
            aria-label="Anterior"
          >
            <ChevronLeft
              width={28}
              height={28}
              className="lucide lucide-chevron-left group-hover:-translate-x-0.5 transition-transform"
            />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-[#001F7A] rounded-full flex items-center justify-center text-[#001F7A] hover:bg-[#001F7A] hover:text-white transition-all duration-300 shadow-lg hover:scale-110 group z-10"
            aria-label="Próximo"
          >
            <ChevronRight
              width={28}
              height={28}
              className="lucide lucide-chevron-right group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <div className="flex justify-center gap-2 md:gap-3 mt-10 md:mt-12">
            {testimonials.map((t, i) => (
              <button
                key={t.initials}
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? 'h-2.5 rounded-full transition-all duration-300 bg-[#F8D617] w-12 md:w-16 shadow-lg'
                    : 'h-2.5 rounded-full transition-all duration-300 bg-gray-300 w-2.5 hover:bg-gray-400 hover:w-8'
                }
                aria-label={`Ir para depoimento ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-[#424242] text-lg mb-6">
            Faça parte dessa história de sucesso
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1fb855] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
