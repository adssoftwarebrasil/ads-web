import { Calendar, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Novidade {
  tag: string;
  date: string;
  title: string;
  text: string;
}

const novidades: Novidade[] = [
  {
    tag: 'ENTREGA DE OBRA',
    date: 'Setembro 2024',
    title: 'Entrega do Residencial Sunset',
    text: 'Mais um empreendimento concluído com excelência e dentro do prazo estabelecido.',
  },
  {
    tag: 'EVENTO',
    date: 'Agosto 2024',
    title: 'Participação na Expo Imóveis MG',
    text: 'Apresentamos nossos projetos e diferenciais no maior evento imobiliário da região.',
  },
  {
    tag: 'ENTREGA DE OBRA',
    date: 'Julho 2024',
    title: 'Início das Obras - Garden Park',
    text: 'Lançamento oficial das obras do Residencial Garden Park na Morada do Sol.',
  },
];

export default function Novidades() {
  return (
    <section
      id="novidades"
      className="bg-[rgb(245,247,250)] py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-[rgb(0,40,71)] tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3">
            ÚLTIMAS NOVIDADES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(42,49,51)] mb-3 sm:mb-4 px-4">
            Entregas e Eventos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[rgb(42,49,51)] text-opacity-70 max-w-2xl mx-auto px-4">
            Acompanhe as últimas realizações da Manzi Construtora
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {novidades.map((n) => (
            <Card key={n.title} novidade={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ novidade }: { novidade: Novidade }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-400 cursor-pointer ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
        <img
          src="https://storage.lucasmendes.dev/manzi/logo%2Fhero.jpg"
          alt={novidade.title}
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-110"
        />
        <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[rgb(0,40,71)] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded">
          {novidade.tag}
        </span>
      </div>
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-center text-[rgb(0,40,71)] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
          <Calendar className="lucide lucide-calendar mr-1.5 sm:mr-2 flex-shrink-0" width={14} height={14} />
          {novidade.date}
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[rgb(42,49,51)] mb-2 sm:mb-3 line-clamp-2">
          {novidade.title}
        </h3>
        <p className="text-[rgb(42,49,51)] text-opacity-80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {novidade.text}
        </p>
        <button className="flex items-center text-[rgb(0,40,71)] text-xs sm:text-sm font-semibold group">
          Saiba mais
          <ArrowRight className="lucide lucide-arrow-right ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
