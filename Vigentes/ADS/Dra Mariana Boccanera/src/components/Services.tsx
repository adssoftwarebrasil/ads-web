import { Video, Clock, Stethoscope, Moon, Utensils, Baby, Heart, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  gradient: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Video,
    iconClass: 'lucide lucide-video ',
    gradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)] shadow-[rgb(251,203,185)]/40',
    title: 'Consulta Online',
    description:
      'Atendimento médico de qualidade no conforto da sua casa, com orientação especializada e prática através de videoconferência.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock ',
    gradient: 'from-[rgb(235,208,217)] to-[rgb(215,188,197)] shadow-[rgb(235,208,217)]/40',
    title: 'Consulta de Urgência',
    description:
      'Atendimento rápido e especializado para casos emergenciais, proporcionando o cuidado necessário com agilidade e eficiência.',
  },
  {
    icon: Stethoscope,
    iconClass: 'lucide lucide-stethoscope ',
    gradient: 'from-[rgb(218,185,165)] to-[rgb(198,165,145)] shadow-[rgb(218,185,165)]/40',
    title: 'Consulta de Rotina',
    description:
      'Acompanhamento preventivo e personalizado para garantir a saúde e o bem-estar contínuo do seu filho.',
  },
  {
    icon: Moon,
    iconClass: 'lucide lucide-moon ',
    gradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)] shadow-[rgb(251,203,185)]/40',
    title: 'Orientação do Sono',
    description:
      'Apoio especializado para estabelecer hábitos saudáveis de sono, ajudando seu filho a ter uma rotina tranquila e reparadora.',
  },
  {
    icon: Utensils,
    iconClass: 'lucide lucide-utensils ',
    gradient: 'from-[rgb(235,208,217)] to-[rgb(215,188,197)] shadow-[rgb(235,208,217)]/40',
    title: 'Introdução Alimentar',
    description:
      'Orientação especializada para a introdução de alimentos sólidos, garantindo uma alimentação saudável desde o início.',
  },
  {
    icon: Baby,
    iconClass: 'lucide lucide-baby ',
    gradient: 'from-[rgb(218,185,165)] to-[rgb(198,165,145)] shadow-[rgb(218,185,165)]/40',
    title: 'Puericultura (0-2 anos)',
    description:
      'Acompanhamento especializado no desenvolvimento do seu bebê, garantindo saúde e crescimento nos primeiros anos.',
  },
  {
    icon: Heart,
    iconClass: 'lucide lucide-heart ',
    gradient: 'from-[rgb(251,203,185)] to-[rgb(235,168,145)] shadow-[rgb(251,203,185)]/40',
    title: 'Pré-Natal Pediátrico',
    description:
      'Preparando o ambiente ideal para o nascimento saudável do seu bebê e garantindo cuidados essenciais desde a gestação.',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-white to-[rgb(235,208,217)]/10"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[rgb(251,203,185)]/10 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow"></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
              <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
              Especialidades
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Cuidado Completo para <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
                Seu Bem Mais Precioso
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Oferecemos um acompanhamento integral, presencial e online, priorizando sempre o
              conforto, a segurança e o desenvolvimento saudável da criança.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[rgb(218,185,165)]/30 animate-fade-in-stagger w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      className={service.iconClass}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[rgb(218,185,165)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center animate-fade-in pt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[rgb(218,185,165)] text-white rounded-full font-semibold text-lg shadow-xl shadow-[rgb(218,185,165)]/30 hover:shadow-2xl hover:shadow-[rgb(218,185,165)]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                Agende Sua Consulta
                <ArrowRight
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Atendimento disponível para Goiânia e região (Presencial) e todo o Brasil (Online).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
