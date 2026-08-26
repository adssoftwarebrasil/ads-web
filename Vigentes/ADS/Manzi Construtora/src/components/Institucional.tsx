import { Target, Star, Trophy } from 'lucide-react';

const valores = ['Exclusividade', 'Excelência', 'Confiança', 'Inovação', 'Compromisso'];
const diferenciais = [
  'Projetos personalizados',
  'Acabamento premium',
  'Cumprimento de prazos',
  'Transparência total',
  'Suporte pós-entrega',
];

function Bullet() {
  return (
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(0,40,71)] rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
  );
}

export default function Institucional() {
  return (
    <section
      id="institucional"
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="transition-all duration-1000 opacity-100 translate-x-0">
            <div className="relative py-8 sm:py-10 md:py-0">
              <div className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-bold text-[rgb(0,40,71)] opacity-10 absolute -top-4 sm:-top-6 md:-top-10 left-0 sm:-left-4">
                2019
              </div>
              <img
                src="https://storage.lucasmendes.dev/manzi/logo%2FLogo%20Manzi%20Construtora%202024.png"
                alt="Manzi Construtora"
                className="relative z-10 w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto px-4 sm:px-0"
              />
              <div className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[rgb(0,40,71)] opacity-10 absolute -bottom-4 sm:-bottom-6 md:-bottom-10 right-0 sm:right-4">
                6.000m²
              </div>
            </div>
          </div>
          <div className="transition-all duration-1000 delay-200 opacity-100 translate-x-0">
            <p className="text-xs sm:text-sm font-semibold text-[rgb(42,49,51)] tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3">
              INSTITUCIONAL
            </p>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[rgb(0,40,71)] mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(0,40,71)] mb-4 sm:mb-6">
              Sobre a Manzi Construtora
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold italic text-[rgb(0,40,71)] mb-4 sm:mb-6">
              "CADA PROJETO, UMA HISTÓRIA DE SUCESSO"
            </p>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[rgb(42,49,51)] text-opacity-80 leading-relaxed">
              <p>
                A <strong>Manzi Construtora</strong> foi fundada em 2019 pelos irmãos{' '}
                <strong>Henrique Manzi</strong> e <strong>Sergio Manzi</strong>, ambos
                engenheiros civis com vasta experiência no mercado de construção civil.
              </p>
              <p>
                Com mais de <strong>6.000m²</strong> já construídos, a Manzi se destaca
                pela excelência em cada detalhe, compromisso com prazos e qualidade
                superior em acabamentos.
              </p>
              <p>
                Nossa missão é transformar sonhos em realidade, entregando
                empreendimentos que agregam valor e proporcionam qualidade de vida aos
                nossos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-10 sm:mt-12 md:mt-16">
          <div
            className="bg-white border border-[rgb(0,40,71)] border-opacity-20 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-100"
            style={{ transitionDelay: '0.3s' }}
          >
            <Target className="lucide lucide-target text-[rgb(0,40,71)] mb-3 sm:mb-4" width={32} height={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-[rgb(42,49,51)] mb-3 sm:mb-4">
              Missão
            </h3>
            <p className="text-sm sm:text-base text-[rgb(42,49,51)] text-opacity-80 leading-relaxed">
              Construir empreendimentos de alto padrão, superando expectativas e
              entregando valor real aos nossos clientes com excelência e compromisso.
            </p>
          </div>
          <div
            className="bg-white border border-[rgb(0,40,71)] border-opacity-20 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-100"
            style={{ transitionDelay: '0.5s' }}
          >
            <Star className="lucide lucide-star text-[rgb(0,40,71)] mb-3 sm:mb-4" width={32} height={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-[rgb(42,49,51)] mb-3 sm:mb-4">
              Valores
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {valores.map((v) => (
                <li
                  key={v}
                  className="flex items-center text-sm sm:text-base text-[rgb(42,49,51)] text-opacity-80"
                >
                  <Bullet />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-white border border-[rgb(0,40,71)] border-opacity-20 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 sm:col-span-2 lg:col-span-1 opacity-100"
            style={{ transitionDelay: '0.7s' }}
          >
            <Trophy className="lucide lucide-trophy text-[rgb(0,40,71)] mb-3 sm:mb-4" width={32} height={32} />
            <h3 className="text-lg sm:text-xl font-semibold text-[rgb(42,49,51)] mb-3 sm:mb-4">
              Diferenciais
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {diferenciais.map((d) => (
                <li
                  key={d}
                  className="flex items-center text-sm sm:text-base text-[rgb(42,49,51)] text-opacity-80"
                >
                  <Bullet />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
