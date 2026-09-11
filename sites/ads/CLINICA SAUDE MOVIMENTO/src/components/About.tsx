import { CheckCircle2, Heart, Award, Users, MessageCircle, type LucideIcon } from 'lucide-react';
import { WHATSAPP_LINK_ALT } from '../lib/constants';

const bullets = [
  'Avaliação completa e protocolo personalizado para cada paciente',
  'Profissional com especialização em Ortopedia Traumato-Ortopédica',
  'Atende de 14 a 100 anos — qualquer fase da vida',
  'Ambiente acolhedor, organizado e com estrutura completa',
  'Integração entre fisioterapia, pilates e terapia manual',
  'Foco em resultados mensuráveis e bem-estar duradouro',
];

interface MiniCard {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const miniCards: MiniCard[] = [
  {
    icon: Heart,
    iconClass: 'lucide-heart',
    title: 'Cuidado Humanizado',
    description: 'Cada paciente é único e merece atenção exclusiva',
  },
  {
    icon: Award,
    iconClass: 'lucide-award',
    title: 'Excelência Técnica',
    description: 'Profissionais altamente qualificados e especializados',
  },
  {
    icon: Users,
    iconClass: 'lucide-users',
    title: 'Atendimento Individual',
    description: 'Sem filas, sem pressa. Você é a prioridade',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-clinic-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block text-clinic-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-teal leading-tight mb-6">
              Saúde e Bem-Estar
              <br />
              <span className="text-clinic-gold">Através do Movimento</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Fundada em 2016, a Clínica Saúde Movimento nasceu com um propósito claro: oferecer
              tratamentos de alta qualidade que transformam a vida das pessoas. Localizada em
              Rondonópolis - MT, nossa clínica é referência em fisioterapia e pilates na região.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Nossa fisioterapeuta possui formação sólida em Ortopedia Traumato-Ortopédica e Terapia
              Manual, além de especializações em pilates, treinamento funcional e fisiologia do
              exercício. Cada atendimento é conduzido com dedicação total e foco em resultados reais.
            </p>
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-clinic-gold flex-shrink-0 mt-0.5"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {miniCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-white rounded-xl p-4 border border-clinic-teal/10 hover:border-clinic-teal/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-clinic-teal-50 flex items-center justify-center mb-3">
                      <Icon
                        className={`lucide ${card.iconClass} text-clinic-teal`}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="font-semibold text-clinic-teal text-sm mb-1">{card.title}</div>
                    <div className="text-gray-500 text-xs leading-snug">{card.description}</div>
                  </div>
                );
              })}
            </div>
            <a
              href={WHATSAPP_LINK_ALT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-clinic-teal hover:bg-clinic-teal/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
              Agendar minha avaliação
            </a>
          </div>
          <div className="relative transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-1 row-span-2">
                <div className="relative h-[400px] sm:h-[480px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/atualizadas/equipe%2003.webp"
                    alt="Equipe Saúde Movimento"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-teal/40 to-transparent"></div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative h-48 sm:h-56 lg:h-[292px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/atualizadas/equipe%2002.webp"
                    alt="Atendimento Fisioterapia"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative h-48 sm:h-60 lg:h-[292px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/clinica%20saude%20movimento/atualizadas/equipe%2001.webp"
                    alt="Equipe Clínica"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-clinic-gold rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
              <div className="text-white font-bold text-lg">4.9 ★</div>
              <div className="text-white/80 text-xs">Avaliação Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
