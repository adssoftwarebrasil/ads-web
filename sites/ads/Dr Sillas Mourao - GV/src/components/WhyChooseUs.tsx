import { Award, Zap, UserCheck, ShieldCheck, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award ',
    title: 'Especialista Reconhecido',
    text: 'Credenciado pelo Conselho Federal de Medicina com especialização em Coloproctologia e anos de experiência clínica e cirúrgica.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap ',
    title: 'Tecnologia de Ponta',
    text: 'Equipamentos modernos de colonoscopia, cirurgia a Laser de CO2, videolaparoscopia e manometria anorretal para diagnósticos e tratamentos precisos.',
  },
  {
    icon: UserCheck,
    iconClass: 'lucide lucide-user-check ',
    title: 'Atendimento Humanizado',
    text: 'Cada paciente recebe atenção individualizada, com explicações claras sobre diagnóstico, tratamento e recuperação, sem pressa e com total segurança.',
  },
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check ',
    title: 'Segurança em Primeiro Lugar',
    text: 'Protocolos rigorosos de segurança cirúrgica e acompanhamento pré e pós-operatório completo para garantir a melhor recuperação.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock ',
    title: 'Agilidade no Atendimento',
    text: 'Agendamento rápido e facilitado pelo WhatsApp. Atendimento de segunda a sexta, das 8h às 18h, com pontualidade e respeito ao seu tempo.',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin ',
    title: 'Localização Estratégica',
    text: 'Consultório no coração de Governador Valadares, no Edifício Medical Center, de fácil acesso para toda a região.',
  },
];

const stats = [
  { value: '+10', label: 'Anos de Experiência' },
  { value: '+3.000', label: 'Pacientes Atendidos' },
  { value: '4.9★', label: 'Avaliação Google' },
  { value: '6', label: 'Especialidades Oferecidas' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#144170] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009FC2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#009FC2]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#009FC2] text-sm font-semibold tracking-widest uppercase mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            O Cuidado que Você
            <span className="text-[#009FC2]"> Merece</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            Conheça os diferenciais que fazem da clínica Dr. Sillas Mourão a referência em coloproctologia em
            Governador Valadares e região.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[#009FC2]/40 hover:shadow-lg hover:shadow-[#009FC2]/5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#009FC2]/20 flex items-center justify-center text-[#009FC2] flex-shrink-0">
                  <Icon width={26} height={26} className={f.iconClass} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center border border-white/10 rounded-2xl py-6 px-4 bg-white/5">
              <p className="text-3xl sm:text-4xl font-bold text-[#009FC2]">{s.value}</p>
              <p className="text-white/60 text-xs mt-2 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
