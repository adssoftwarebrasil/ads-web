import { Target, Users, Zap, Shield, Heart, Eye } from 'lucide-react';

const valores = [
  { icon: Zap, label: 'Agilidade' },
  { icon: Shield, label: 'Responsabilidade' },
  { icon: Heart, label: 'Respeito' },
  { icon: Eye, label: 'Transparência' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Pioneiros em Saúde e Segurança do Trabalho
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/advice%20uberlandia%2Fimg%2F34-anos-advice.webp"
                alt="34 anos de Advice"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">34+</div>
                <div className="text-sm font-medium">Anos de Mercado</div>
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-300 opacity-100 translate-x-0">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Excelência em Saúde e Segurança Ocupacional
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              A Advice Gestão em Saúde LTDA é uma empresa especializada em saúde e segurança
              ocupacional, oferecendo soluções completas para empresas e trabalhadores. Nossa missão
              é promover ambientes de trabalho mais seguros e saudáveis, com serviços modernos e
              especializados. Realizamos exames admissionais, periódicos, demissionais e de retorno
              ao trabalho, elaboramos PCMSO e PGR, além de treinamentos e consultorias de segurança
              no trabalho.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Com compromisso com a qualidade e o bem-estar dos colaboradores, atuamos na região para
              apoiar empresas que desejam implantar ou aprimorar práticas de saúde ocupacional no
              ambiente laboral.
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
        <div className="transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <h3 className="text-center text-xl font-bold text-neutral-900 mb-8">Nossos Valores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div key={v.label} className="text-center group">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-500 transition-colors duration-300">
                  <v.icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-semibold text-neutral-700 text-sm">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
