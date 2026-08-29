import { CheckCircle } from 'lucide-react';
import { COMPANY, DIFFERENTIALS } from '../data/constants';

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/soagricolas/quem-somos.jpg"
                alt="Equipe Só Agrícola"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-orange text-white rounded-2xl shadow-xl p-5 md:p-6">
              <p className="text-3xl md:text-4xl font-black leading-none">+25</p>
              <p className="text-sm font-semibold mt-1 leading-tight">Anos de<br />Experiência</p>
            </div>
            <div className="absolute -top-4 -left-4 md:-left-6 bg-brand-green text-white rounded-2xl shadow-xl p-5 md:p-6">
              <p className="text-3xl md:text-4xl font-black leading-none">+50</p>
              <p className="text-sm font-semibold mt-1 leading-tight">Colaboradores<br />dedicados</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              A parceira que o{' '}
              <span className="text-brand-green">agronegócio</span>{' '}
              pode confiar
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {COMPANY.description}
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Modelo multimarcas para máxima compatibilidade',
                'Estoque amplo com pronta entrega',
                'Equipe técnica especializada',
                'Atendimento ágil e personalizado',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {DIFFERENTIALS.map((d) => (
                <div
                  key={d.label}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-xl md:text-2xl font-black text-brand-green">{d.label}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
