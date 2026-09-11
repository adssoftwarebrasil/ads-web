import { Shield, Heart, Zap, Eye, Target, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ABOUT_IMG =
  'https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2F34-anos-advice.webp';

const VALUES = [
  { icon: Zap, label: 'Agilidade' },
  { icon: Shield, label: 'Responsabilidade' },
  { icon: Heart, label: 'Respeito' },
  { icon: Eye, label: 'Transparência' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Pioneiros em Saúde e Segurança do Trabalho
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="34 anos de Advice"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">34+</div>
                <div className="text-sm font-medium">Anos de Mercado</div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Excelência em Saúde e Segurança Ocupacional
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              A Advice Medicina e Engenharia do Trabalho atua com excelência na prestação de serviços de saúde e segurança ocupacional, oferecendo soluções completas como exames ocupacionais, laboratoriais e programas de segurança (PGR, PCMSO, LTCAT, eSocial, entre outros). Com mais de 30 anos de experiência e um compromisso sólido com a satisfação dos clientes, a Advice atende empresas de diversos segmentos, como agropecuário, comércio, indústrias e construção civil.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Nossa missão é garantir condições seguras e saudáveis de trabalho, prevenindo lesões, doenças ocupacionais e processos trabalhistas. Trabalhamos com um sistema de gestão integrada (SGI) e oferecemos suporte técnico em áreas regulamentadas, com um olhar profissional e personalizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-brand-500" />
                  <span className="font-bold text-neutral-900">Missão</span>
                </div>
                <p className="text-sm text-neutral-600">
                  Garantir condições seguras e saudáveis de trabalho.
                </p>
              </div>
              <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-brand-500" />
                  <span className="font-bold text-neutral-900">Visão</span>
                </div>
                <p className="text-sm text-neutral-600">
                  Tornar-se referência em saúde e segurança do trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-500 ${
            isInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-center text-xl font-bold text-neutral-900 mb-8">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center group">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-semibold text-neutral-700 text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
