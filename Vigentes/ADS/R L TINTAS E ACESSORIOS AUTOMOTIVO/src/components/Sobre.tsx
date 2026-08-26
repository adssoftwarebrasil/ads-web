import { CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';

const bullets = [
  'Fundada em 29 de junho de 2017',
  'Mais de 8 anos servindo Primavera do Leste',
  'Técnico especializado em colorimetria',
  'Linha automotiva, imobiliária e estética',
  'Produtos de qualidade com preços justos',
  'Atendimento personalizado e sem enrolação',
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#f9f9f9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/r%20l%20tintas/img/fachada-da-loja.webp"
                alt="Fachada da RL Tintas"
                className="w-full h-80 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-black text-white rounded-2xl px-6 py-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <CalendarDays
                  className="lucide lucide-calendar-days text-red-600 flex-shrink-0"
                  width={28}
                  height={28}
                />
                <div>
                  <p className="text-2xl font-black">8+ Anos</p>
                  <p className="text-xs text-gray-400">de Experiência</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -left-2 sm:-left-5 bg-red-700 text-white rounded-2xl px-6 py-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <MapPin className="lucide lucide-map-pin flex-shrink-0" width={24} height={24} />
                <div>
                  <p className="text-sm font-bold leading-tight">Primavera do Leste</p>
                  <p className="text-xs text-red-200">Mato Grosso - MT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
              Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-2 mb-6">
              Referência em Tintas em Primavera do Leste
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              A <strong className="text-black">RL Tintas</strong> foi fundada em 29 de junho de 2017
              com um propósito claro: oferecer tintas automotivas e imobiliárias de alta qualidade
              com atendimento que vai além da venda.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Em mais de 8 anos de atuação em Primavera do Leste-MT, construímos uma loja ampla, com
              variedade incrível de produtos e um diferencial exclusivo:{' '}
              <strong className="text-black">
                produção de tintas automotivas personalizadas por técnico especializado em
                colorimetria
              </strong>
              , garantindo que a cor do seu veículo fique o mais próxima possível da original.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2
                    className="lucide lucide-check-circle2 text-red-700 flex-shrink-0 mt-0.5"
                    width={17}
                    height={17}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              href="http://wa.me/5566984628134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-800/30"
            >
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
