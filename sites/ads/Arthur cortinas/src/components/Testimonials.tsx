import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL_ENCODED } from '../constants';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: '"Adorei o atendimento da Arthur Cortinas! Super recomendo pela qualidade e gentileza."',
    initial: 'M',
    name: 'Maria Silva',
    role: 'Cliente Satisfeito',
  },
  {
    text: '"Os produtos da Arthur Cortinas são de excelente qualidade! Minha casa ficou linda."',
    initial: 'J',
    name: 'João Pereira',
    role: 'Cliente Satisfeito',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-24 h-1 bg-[rgb(218,165,33)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação de nossos clientes é nosso maior reconhecimento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-[rgb(218,165,33)]/10">
                <Quote className="lucide lucide-quote w-16 h-16" />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="lucide lucide-star w-5 h-5 text-[rgb(218,165,33)] fill-[rgb(218,165,33)]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(218,165,33)] to-[rgb(198,145,13)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[rgb(218,165,33)] to-[rgb(198,145,13)] rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para Transformar Seu Ambiente?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a realizar o projeto dos seus sonhos
            </p>
            <a
              href={WHATSAPP_URL_ENCODED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[rgb(218,165,33)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Solicitar Orçamento Grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
