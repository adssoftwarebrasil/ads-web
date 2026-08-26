import {
  Brain,
  MessageSquare,
  Activity,
  Dumbbell,
  BookOpen,
  Apple,
  Puzzle,
  HeartHandshake,
  Footprints,
  HandHeart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WhatsAppIcon } from './icons';

type Service = { Icon: LucideIcon; box: string; title: string; text: string };

const services: Service[] = [
  {
    Icon: Brain,
    box: 'bg-rose-50 text-rose-500',
    title: 'Psicologia',
    text: 'Avaliação e acompanhamento psicológico para suporte emocional, comportamental e cognitivo da criança e da família.',
  },
  {
    Icon: MessageSquare,
    box: 'bg-orange-50 text-orange-500',
    title: 'Fonoaudiologia',
    text: 'Intervenção especializada no desenvolvimento da linguagem, fala, comunicação e habilidades de deglutição.',
  },
  {
    Icon: Activity,
    box: 'bg-amber-50 text-amber-600',
    title: 'Terapia Ocupacional',
    text: 'Promoção da autonomia e independência nas atividades do dia a dia, com foco em integração sensorial.',
  },
  {
    Icon: Dumbbell,
    box: 'bg-teal-50 text-teal-500',
    title: 'Fisioterapia',
    text: 'Tratamento do desenvolvimento motor, tônus muscular e coordenação, garantindo o bem-estar físico da criança.',
  },
  {
    Icon: BookOpen,
    box: 'bg-blue-50 text-blue-500',
    title: 'Psicopedagogia',
    text: 'Diagnóstico e intervenção nas dificuldades de aprendizagem, apoiando o rendimento escolar e o desenvolvimento cognitivo.',
  },
  {
    Icon: Apple,
    box: 'bg-green-50 text-green-500',
    title: 'Nutrição',
    text: 'Orientação nutricional especializada para crianças neurodivergentes, com atenção às seletividades alimentares.',
  },
  {
    Icon: Puzzle,
    box: 'bg-primary/5 text-primary',
    title: 'Terapia ABA',
    text: 'Análise do Comportamento Aplicada: abordagem baseada em evidências para crianças com Transtorno do Espectro Autista.',
  },
  {
    Icon: HeartHandshake,
    box: 'bg-secondary/10 text-secondary',
    title: 'Atendimento Familiar',
    text: 'Orientação e suporte para famílias, capacitando pais e cuidadores como agentes ativos no desenvolvimento.',
  },
  {
    Icon: Footprints,
    box: 'bg-indigo-50 text-indigo-500',
    title: 'Psicomotricidade',
    text: 'Fundamental na educação infantil, utiliza o corpo para estimular aprendizagem, autonomia, lateralidade, noção espacial e socialização.',
  },
  {
    Icon: HandHeart,
    box: 'bg-cyan-50 text-cyan-500',
    title: 'Serviço Social',
    text: 'Gratuito para a comunidade. Planejamento e execução de programas em órgãos públicos, ONGs e empresas. Ações técnicas, escuta qualificada e mediação de conflitos.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-observe text-center max-w-3xl mx-auto mb-16">
          <span className="tag mb-5 inline-block">Especialidades</span>
          <h2 className="section-title mb-5">
            Cuidado Completo para o<br />
            <span className="text-primary">Desenvolvimento Infantil</span>
          </h2>
          <p className="section-subtitle">
            Nossa equipe multidisciplinar atua de forma integrada, garantindo que cada aspecto do desenvolvimento físico, emocional e cognitivo seja cuidado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, box, title, text }) => (
            <div
              key={title}
              className="bg-surface hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${box} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-heading font-bold text-gray-800 text-base mb-2">{title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center section-observe">
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Seu Filho Merece o Melhor Cuidado</h3>
          <p className="font-sans text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Agende uma avaliação multidisciplinar e descubra como podemos apoiar o desenvolvimento do seu filho. Atendemos em Primavera do Leste e Campo Verde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/556696568775"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-cream font-heading font-bold text-sm px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Primavera do Leste
            </a>
            <a
              href="http://wa.me/556699352163"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/60 text-white hover:bg-white/10 font-heading font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Campo Verde
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
