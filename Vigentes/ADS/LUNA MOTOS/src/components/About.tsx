import { Check } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const features = [
  {
    title: 'Especialização Total',
    text: 'Equipe capacitada em motos de baixa e alta cilindrada, nacionais e importadas',
  },
  {
    title: 'Peças Originais',
    text: 'Trabalhamos apenas com peças de qualidade certificada e fornecedores confiáveis',
  },
  {
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é único. Soluções sob medida para suas necessidades',
  },
  {
    title: 'Preço Justo',
    text: 'Melhor custo-benefício da região. Transparência total em nossos orçamentos',
  },
];

const stats = [
  { value: '1+', label: 'Ano de Experiência' },
  { value: '500+', label: 'Clientes Atendidos' },
  { value: '98%', label: 'Satisfação' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Fnossa-loja.webp"
              alt="Nossa Loja - Luna Motos"
              className="w-full h-auto rounded-2xl shadow-2xl hover:scale-102 transition-transform duration-500 object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[#F97316] text-sm font-bold uppercase tracking-wider">
              SOBRE NÓS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020202] mt-3 mb-6 leading-tight">
              Luna Motos: Sua Parceira de Confiança desde 2023
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Desde 22 de dezembro de 2023, a Luna Motos vem revolucionando o mercado de peças e
              serviços para motocicletas em Boa Vista, Roraima. Especialistas em baixa e alta
              cilindrada, nossa missão é entregar qualidade excepcional que supera expectativas.
            </p>
            <div className="space-y-5 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center mt-0.5">
                    <Check className="lucide lucide-check w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020202] text-base mb-1">{f.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#F97316] mb-1">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('loja')}
              className="px-8 py-3 border-2 border-[#020202] text-[#020202] font-semibold text-sm uppercase rounded-lg hover:bg-[#020202] hover:text-white transition-all duration-200"
            >
              CONHEÇA NOSSA ESTRUTURA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
