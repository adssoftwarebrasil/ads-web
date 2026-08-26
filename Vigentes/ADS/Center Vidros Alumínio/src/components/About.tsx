import { Award, Shield, Wrench, Users, Clock, ThumbsUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { value: '18+', label: 'Anos de Experiência' },
  { value: '1 Ano', label: 'de Garantia' },
  { value: '100%', label: 'Compromisso' },
  { value: 'SLZ', label: 'São Luís - MA' },
];

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Award,
    title: 'Mais de 18 Anos no Mercado',
    text: 'Desde 2006 no mercado de vidros e alumínio em São Luís, construímos uma reputação sólida baseada em qualidade e confiança.',
  },
  {
    icon: Shield,
    title: 'Garantia de 1 Ano',
    text: 'Todos os nossos produtos e instalações são garantidos por 1 ano. Sua tranquilidade é nossa prioridade.',
  },
  {
    icon: Wrench,
    title: 'Equipe Especializada',
    text: 'Profissionais treinados e capacitados para cada tipo de serviço, garantindo uma instalação precisa e segura.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente recebe atenção individualizada para entender suas necessidades e oferecer a melhor solução.',
  },
  {
    icon: Clock,
    title: 'Pontualidade e Agilidade',
    text: 'Respeitamos os prazos combinados e trabalhamos com agilidade sem comprometer a qualidade da entrega.',
  },
  {
    icon: ThumbsUp,
    title: 'Materiais de Alta Qualidade',
    text: 'Utilizamos apenas materiais de primeira linha, garantindo durabilidade e acabamento impecável em cada projeto.',
  },
];

export default function About() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-dark overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block text-brand-cyan text-sm font-bold tracking-widest uppercase mb-4">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Referência em Vidros e Alumínio em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                São Luís
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              A Center Vidros e Alumínio nasceu da paixão por transformar espaços com soluções em vidro
              e alumínio de alta qualidade. Há mais de 18 anos atendemos São Luís e região com
              excelência, compromisso e responsabilidade em cada projeto.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Nosso portfólio inclui desde box de vidro para banheiros até portões de alumínio de grande
              porte, passando por portas, janelas, espelhos, guarda-corpos e muito mais. Cada serviço é
              executado com o mesmo nível de cuidado e dedicação.
            </p>
            <a
              href="http://wa.me/559888677636?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Center%20Vidros%20e%20Alumínio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-brand-blue/30"
            >
              Falar com um Especialista
            </a>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/homem-portao-aluminio-polegar-para-cima_1600x1200.webp"
                alt="Profissional Center Vidros"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-blue rounded-2xl p-5 shadow-2xl shadow-brand-blue/40">
                <p className="text-white text-3xl font-black">18+</p>
                <p className="text-white/80 text-sm font-medium">Anos de Excelência</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl">
                <p className="text-brand-blue text-3xl font-black">1 Ano</p>
                <p className="text-gray-500 text-sm font-medium">de Garantia</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-brand-cyan text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-cyan/30 rounded-2xl p-6 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 bg-brand-blue/20 border border-brand-blue/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue/30 transition-colors">
                <Icon width={22} height={22} className="text-brand-cyan" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
