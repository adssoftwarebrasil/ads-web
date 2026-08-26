import { TrendingUp, Award, Zap, Users, Leaf, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats = [
  { label: 'Anos de Experiência', value: '3+' },
  { label: 'Projetos Entregues', value: '100+' },
  { label: 'Economia Média', value: '95%' },
  { label: 'Clientes Satisfeitos', value: '100%' },
];

const pillars: { icon: LucideIcon; iconClass: string; title: string; text: string }[] = [
  {
    icon: Award,
    iconClass: 'lucide-award',
    title: 'Qualidade Premium',
    text: 'Trabalhamos apenas com equipamentos Tier 1 (topo de linha) e acabamento de instalação impecável.',
  },
  {
    icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Agilidade Total',
    text: 'Processos internos otimizados para reduzir o tempo entre o fechamento e a geração de energia.',
  },
  {
    icon: Users,
    iconClass: 'lucide-users',
    title: 'Transparência',
    text: 'Você acompanha cada etapa. Sem letras miúdas, sem surpresas no orçamento final.',
  },
  {
    icon: Leaf,
    iconClass: 'lucide-leaf',
    title: 'Sustentabilidade',
    text: 'Compromisso real com o futuro. Cada projeto instalado equivale a centenas de árvores plantadas.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 items-start mb-24">
          <div className="space-y-8 lg:col-start-1 lg:row-start-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
              Quem Somos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] leading-tight tracking-tight">
              Energia que Transforma Vidas em Franca
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 font-light">
              <p>
                Nascemos do sonho de levar ao mercado fotovoltaico mais{' '}
                <span className="text-[rgb(26,110,76)] font-medium">qualidade, transparência e agilidade</span>. Com
                mais de 3 anos de expertise no Norte e Nordeste do país, nossa equipe chega a Franca com um propósito
                claro: proporcionar economia real, conforto e qualidade de vida.
              </p>
              <p>
                Tratamos sua casa ou empresa como se fosse a nossa. Desde a primeira visita técnica até a ativação do
                sistema, acompanhamos de perto para garantir sua total satisfação e máxima performance energética.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full min-h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[rgb(26,110,76)]/5 via-transparent to-[rgb(235,156,51)]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="grid grid-cols-12 grid-rows-12 gap-3 sm:gap-4 h-[400px] lg:h-[600px] relative z-10 sticky top-8">
              <div className="col-span-8 row-span-12 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fnossa%20equipe%2Fnossa-equipe-fachada-empresa.webp"
                  alt="Fachada da LEGSOL"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="col-span-4 row-span-6 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fnossa%20equipe%2Fnossa-equipe-interior-empresa.webp"
                  alt="Interior da LEGSOL"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="col-span-4 row-span-6 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white group">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/legsol%2Fimg%2Fnossa%20equipe%2Fnossa-equipe-selfie-fachada-empresa.webp"
                  alt="Equipe LEGSOL"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(27,45,114)]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="text-white font-bold text-xs uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                    Time Legsol
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-start-1 lg:row-start-2 lg:self-start w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative overflow-hidden p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[rgb(26,110,76)]/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="lucide lucide-trending-up text-[rgb(235,156,51)]" width={16} height={16} />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-[rgb(27,45,114)] group-hover:text-[rgb(26,110,76)] transition-colors">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(27,45,114)] mb-4 tracking-tight">
              Nossos Pilares Fundamentais
            </h3>
            <p className="text-gray-600">
              Princípios inegociáveis que guiam cada instalação e relacionamento com nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-[rgb(235,156,51)] hover:shadow-xl transition-all duration-300 text-left flex flex-col items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[rgb(26,110,76)]/5 flex items-center justify-center mb-6 group-hover:bg-[rgb(26,110,76)] transition-colors duration-300">
                    <Icon
                      className={`lucide ${p.iconClass} text-[rgb(26,110,76)] group-hover:text-white transition-colors duration-300`}
                      width={28}
                      height={28}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-[rgb(27,45,114)] mb-3 group-hover:text-[rgb(26,110,76)] transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <CheckCircle2 className="lucide lucide-check-circle2 text-[rgb(235,156,51)]" width={18} height={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
