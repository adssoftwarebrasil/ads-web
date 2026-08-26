import { Quote, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  { text: '"Fui muito bem recebida, eles são profissionais no que eles fazem. Ficou muito bom o serviço que eles fizeram pra mim, eu gostei muito!"', initial: 'L', name: 'Luciana Amorim', role: 'Cliente Satisfeito' },
  { text: '"Excelente atendimento, serviço de qualidade! Recomendo muito."', initial: 'A', name: 'Ana Ribeiro', role: 'Cliente Satisfeito' },
  { text: '"Atendimento ótimo e qualidade impecável! Super recomendo."', initial: 'G', name: 'Guilherme Ramires Gonçalves', role: 'Cliente Satisfeito' },
  { text: '"Eles são excelentes em fabricação de jóias, eu estou muito satisfeita com o serviço. Atendimento exemplar."', initial: 'L', name: 'Lene Lopes', role: 'Cliente Satisfeito' },
  { text: '"Ótimo atendimento e pra quem quer comprar ouro de qualidade eu recomendo a Ourofino Jóias, o melhor lugar para você solicitar a personalização de correntes, pulseiras ou pingente únicos."', initial: 'R', name: 'Rafael Koloche', role: 'Cliente Satisfeito' },
  { text: '"Muito bom! Atendimento excelente e trabalho excelente."', initial: 'L', name: 'Liliane Cespedes', role: 'Cliente Satisfeito' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-[rgb(29,29,27)] to-[rgb(20,20,18)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">O Que Nossos Clientes Dizem</h2>
          <div className="h-1 w-24 bg-[rgb(186,176,97)] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">A satisfação de nossos clientes é nossa maior recompensa.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-[rgb(29,29,27)] border border-[rgb(186,176,97)]/20 rounded-lg p-8 hover:border-[rgb(186,176,97)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgb(186,176,97)]/10 relative group"
            >
              <Quote size={48} className="absolute top-6 right-6 text-[rgb(186,176,97)]/20 group-hover:text-[rgb(186,176,97)]/30 transition-colors duration-300" />
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={20} className="fill-[rgb(186,176,97)] text-[rgb(186,176,97)]" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center">
                <div className="bg-[rgb(186,176,97)]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[rgb(186,176,97)] font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Seja Nosso Próximo Cliente Satisfeito
          </a>
        </div>
      </div>
    </section>
  );
}
