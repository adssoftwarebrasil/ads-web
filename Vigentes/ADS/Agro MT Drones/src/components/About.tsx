import { CheckCircle2 } from 'lucide-react';

const HIGHLIGHTS = [
  'Especialistas em drones para o agronegócio',
  'Venda e manutenção com peças originais',
  'Atendimento personalizado em fazendas',
  'Equipe técnica capacitada e certificada',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/agro-mt-drones/img/fachada.webp"
                alt="Drone agrícola em operação"
                className="w-full h-80 sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>

            {/* Badge card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-brand-light">
              <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/agro-mt-drones/img/logo-sem-fundo.webp"
                  alt="Agro MT Drones"
                  className="w-10 h-10 object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="text-brand-dark font-extrabold text-lg leading-none">Agro MT Drones</div>
                <div className="text-gray-500 text-xs mt-1">Primavera do Leste – MT</div>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-brand-accent text-white rounded-2xl shadow-lg px-5 py-3 font-extrabold text-sm">
              Desde 2025
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-brand-primary font-bold text-sm tracking-widest uppercase mb-3">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mb-6">
              Nascemos para Levar Inovação ao{' '}
              <span className="text-brand-primary">Agronegócio</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              A Agro MT Drones nasceu em 2025, em Primavera do Leste, com um propósito claro:
              levar tecnologia de ponta ao produtor rural do Mato Grosso. Desde o primeiro dia,
              trabalhamos com foco em confiança, agilidade e profissionalismo para transformar
              a realidade do campo.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Somos especializados na venda de drones agrícolas e na manutenção de
              equipamentos, oferecendo soluções completas para quem busca eficiência máxima
              na lavoura. Com atendimento direto nas fazendas e suporte técnico de qualidade,
              garantimos que seu equipamento esteja sempre operando com máxima performance.
            </p>

            <ul className="space-y-3 mb-8">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://wa.me/556599004844"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 text-center shadow-md hover:shadow-brand-primary/30"
              >
                Falar conosco
              </a>
              <a
                href="https://www.instagram.com/agromtdronespva/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 text-center"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
