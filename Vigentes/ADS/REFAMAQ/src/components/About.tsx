import { CheckCircle2, CalendarDays, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  'Recuperação de rodantes de tratores de esteira',
  'Embuchamento de carregadeiras e escavadeiras',
  'Reforma de motoniveladoras e skidders',
  'Fabricação de garfos e escarificadores',
  'Implementos agrícolas e florestais',
  'Serviços de torno e solda especializada',
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={leftRef}
            className={`relative transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/refamaq/img/sobre-nos.webp"
                alt="Refamaq - Sobre Nós"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#243b8e]/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-[#243b8e] text-white rounded-2xl px-8 py-6 shadow-xl">
              <div className="text-4xl font-extrabold">30+</div>
              <div className="text-blue-200 text-sm font-medium mt-1">Anos de Excelência</div>
            </div>

            <div className="absolute -top-6 -left-6 hidden lg:block bg-[#466fc5] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-2xl font-extrabold">1994</div>
              <div className="text-blue-100 text-xs font-medium">Fundação</div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <span className="inline-block text-[#466fc5] font-semibold text-sm uppercase tracking-widest mb-3">
              Sobre a Refamaq
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#373536] mb-5 leading-tight">
              Tradição e Qualidade em
              <span className="text-[#466fc5]"> Máquinas Pesadas</span>
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed mb-5">
              Fundada em 1994, na cidade de Sinop, Mato Grosso, a Refamaq nasceu com o propósito de oferecer serviços de excelência na recuperação de rodantes, embuchamentos e reforma de máquinas pesadas.
            </p>
            <p className="text-[#6b7280] text-base leading-relaxed mb-8">
              Ao longo de três décadas, expandimos nossa atuação para a fabricação de implementos agrícolas e florestais — garfos carregadores, escarificadores frontais, conchas para escavadeiras — sempre com o compromisso de qualidade que construiu nossa reputação no Centro-Oeste e Norte do Brasil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[#466fc5] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#373536] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#eef2fb] rounded-xl">
              <div className="flex items-start gap-3">
                <CalendarDays size={20} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#6b7280] font-medium">Fundação</p>
                  <p className="text-sm font-bold text-[#373536]">Desde 1994</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#6b7280] font-medium">Horário</p>
                  <p className="text-sm font-bold text-[#373536]">Seg–Sex 7h–18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-[#6b7280] font-medium">Localização</p>
                  <p className="text-sm font-bold text-[#373536]">Sinop - MT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
