import { Shield, Eye, Heart, Lock, Sparkles, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const pillars: Pillar[] = [
  {
    Icon: Shield,
    title: 'Nossa Missão',
    text: 'Oferecer soluções tecnológicas em rastreamento e gestão de frotas que proporcionem segurança, eficiência e controle total ao cliente, garantindo suporte de qualidade e resultados reais no dia a dia.',
  },
  {
    Icon: Eye,
    title: 'Nossa Visão',
    text: 'Ser referência regional e nacional em tecnologia de rastreamento e monitoramento, reconhecida pela inovação, atendimento eficiente e comprometimento com a segurança dos nossos clientes.',
  },
  {
    Icon: Heart,
    title: 'Nossos Valores',
    text: 'Comprometimento, transparência, segurança, inovação, responsabilidade, ética e personalização em cada serviço que oferecemos.',
  },
];

interface Value {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const values: Value[] = [
  { Icon: Shield, title: 'Compromisso com Qualidade', desc: 'Satisfação e excelência em cada atendimento' },
  { Icon: Eye, title: 'Transparência Total', desc: 'Clareza em todas as etapas do processo' },
  { Icon: Lock, title: 'Segurança como Prioridade', desc: 'Proteção em cada solução oferecida' },
  { Icon: Sparkles, title: 'Inovação Contínua', desc: 'Tecnologia e processos sempre atualizados' },
  { Icon: Heart, title: 'Responsabilidade e Ética', desc: 'Integridade em cada operação' },
  { Icon: Settings, title: 'Soluções Personalizadas', desc: 'Atendimento sob medida para cada necessidade' },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 bg-gradient-to-br from-[rgb(2,66,147)] via-[rgb(0,68,139)] to-[rgb(2,66,147)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(16,215,237)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(16,215,237)] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[rgb(16,215,237)] font-semibold text-sm uppercase tracking-wider">
              Nossos Diferenciais
            </span>
            <div className="h-1 w-20 bg-[rgb(16,215,237)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Por Que Escolher a TS Serviços?
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pillars.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[rgb(16,215,237)] rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-[rgb(2,66,147)]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-200 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[rgb(2,66,147)] to-[rgb(0,68,139)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[rgb(16,215,237)]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[rgb(2,66,147)] mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/557598115869?text=Olá! Quero conhecer mais sobre os diferenciais da TS Serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[rgb(16,215,237)] text-[rgb(2,66,147)] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fale com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
