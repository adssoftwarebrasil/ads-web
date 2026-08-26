import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  initial: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Excelente atendimento e trabalho eficiente! Fui bem atendida, o técnico foi muito atencioso e o reparo ficou perfeito. Super recomendo a JM Celular!"',
    initial: 'C',
    name: 'Camila Santana de Jesus',
  },
  {
    text: '"Serviço de altíssima qualidade da região, um dos melhores em Salvador. Profissionalismo do início ao fim, atendimento rápido e preço justo. Sucesso!"',
    initial: 'G',
    name: 'GabrielC',
  },
  {
    text: '"Avaliando do meu celular consertado!! Recuperaram meu cell de uma queda que pifou a tela, trocando por uma nova. Atendimento excelente, preço justo, serviço rápido e eficiente. Busquei meu celular no dia seguinte, funcionando e sem perda de arquivos. Recomendo!"',
    initial: 'L',
    name: 'Letícia Ribeiro',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={16} height={16} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#F4F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#004AAC] font-semibold text-sm tracking-widest uppercase mb-3">
            Avaliações reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="inline-flex flex-col items-center gap-2 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100 mt-2">
            <p className="text-5xl font-extrabold text-[#004AAC] leading-none">4.8</p>
            <Stars />
            <p className="text-sm text-gray-500">Média no Google Avaliações</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote width={28} height={28} className="text-blue-100 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-[#004AAC] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-base">{t.initial}</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Quer deixar sua avaliação?</p>
          <a
            href="https://www.google.com/maps/place/JM+Celular"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#004AAC] text-[#004AAC] font-semibold px-6 py-3 rounded-xl hover:bg-[#004AAC] hover:text-white transition-all duration-200"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
