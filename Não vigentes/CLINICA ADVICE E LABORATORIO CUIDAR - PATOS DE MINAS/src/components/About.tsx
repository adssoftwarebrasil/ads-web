import { Target, Users, Zap, Shield, Heart, Eye } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const values: { icon: LucideIcon; label: string }[] = [
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
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">Quem Somos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Pioneiros em Saúde e Segurança do Trabalho
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2F34-anos-advice.webp"
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
              A maior referência em Medicina Ocupacional de Patos de Minas
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              A Clínica Advice é pioneira na cidade, com mais de 34 anos de atuação no mercado de saúde e
              segurança do trabalho. Carregamos com orgulho três selos de qualidade internacionais:{' '}
              <strong className="text-neutral-800">ISO 9001, ISO 14001 e ISO 45001</strong>, garantindo
              excelência em cada atendimento.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Contamos com laboratório próprio, infraestrutura com mais de 200 assentos, corpo clínico
              disponível em tempo integral, além de uma equipe de engenharia formada por 3 engenheiros e 5
              técnicos de segurança do trabalho, garantindo atendimento completo e humanizado para a sua
              empresa.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-brand-500" />
                  <span className="font-bold text-neutral-900">Missão</span>
                </div>
                <p className="text-sm text-neutral-600">Cuidar de quem cuida da sua empresa.</p>
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
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center group">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-semibold text-neutral-700 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
