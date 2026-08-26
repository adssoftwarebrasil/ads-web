import { Award, HeartHandshake, CheckCircle2, Clock, LucideIcon } from 'lucide-react';

interface Highlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const highlights: Highlight[] = [
  {
    icon: Award,
    title: 'Fundada em 2024',
    desc: 'Empresa nova com infraestrutura moderna e equipamentos de última geração',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    desc: 'Cuidado personalizado com foco no bem-estar e conforto do paciente',
  },
  {
    icon: CheckCircle2,
    title: 'Equipe Qualificada',
    desc: 'Profissionais experientes e capacitados em cuidados pós-operatórios',
  },
  {
    icon: Clock,
    title: 'Disponibilidade Total',
    desc: 'Atendimento 24 horas para emergências e necessidades especiais',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[#282E6A] mb-6">
              Sobre a Louise Pós-Operatório
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <p>
                A <strong>Louise Pós-Operatório</strong> é uma empresa localizada
                em Palmas - TO, especializada em cuidados pós-cirúrgicos,
                oferecendo suporte completo e humanizado a pacientes que estão se
                recuperando de procedimentos cirúrgicos.
              </p>
              <p>
                Fundada em 2024, operamos com o compromisso de proporcionar o
                máximo de conforto e cuidado durante o período de recuperação, com
                atendimento disponível 24 horas por dia.
              </p>
              <p>
                Situada na 603 Sul, Alameda 09, no Plano Diretor Sul, oferecemos um
                serviço personalizado, priorizando o bem-estar e a segurança de
                nossas clientes. Nossa equipe altamente qualificada segue
                rigorosamente as orientações médicas, promovendo uma recuperação
                eficiente e tranquila.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-3">
                  <div className="bg-[#624A7F]/10 p-2 rounded-lg flex-shrink-0">
                    <h.icon size={24} className="text-[#624A7F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#282E6A] mb-1">{h.title}</h3>
                    <p className="text-sm text-gray-600">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5563992135677"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#624A7F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7a5d9e] transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Fale Conosco
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Fmais-imagens-internas%2Fquemsomos.jpg"
                alt="Louise Pós-Operatório - Instalações"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#282E6A]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
