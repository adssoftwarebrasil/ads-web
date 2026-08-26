import { CheckCircle2 } from 'lucide-react';

const HIGHLIGHTS = [
  'Mais de 15 anos de mercado',
  'Remanufatura com alto padrão técnico',
  'Peças de procedência confiável',
  'Garantia em todos os serviços',
  'Atendimento em Sinop e toda a região',
  'Equipe especializada e experiente',
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28"
      style={{ background: 'rgb(22, 17, 21)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: 'rgb(234, 34, 37)' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'rgb(98, 11, 12)' }}
            />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden rounded-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/fachada-loja-so-embreagens-carros-estacionados_1024x768.webp"
                  alt="Fachada da loja Só Embreagens"
                  className="w-full h-56 md:h-72 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/embreagem-prata-nova-sobre-estante-de-madeira_960x1280.webp"
                  alt="Embreagem nova"
                  className="w-full h-40 md:h-52 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/embreagens-remanufaturadas-linha-pesada-caminhoes_1024x1536.webp"
                  alt="Embreagens remanufaturadas linha pesada"
                  className="w-full h-40 md:h-52 object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-sm whitespace-nowrap"
              style={{
                background: 'rgba(22,17,21,0.9)',
                border: '1px solid rgba(234,34,37,0.3)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                style={{ background: 'rgb(234, 34, 37)' }}
              >
                15+
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: 'rgb(210, 210, 208)' }}>
                  Anos de experiência
                </p>
                <p className="text-xs" style={{ color: 'rgb(153, 151, 150)' }}>
                  no mercado de embreagens
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                background: 'rgba(234,34,37,0.12)',
                color: 'rgb(234, 34, 37)',
                border: '1px solid rgba(234,34,37,0.25)',
              }}
            >
              Sobre Nós
            </div>
            <h2
              className="text-3xl sm:text-4xl font-black mb-5 leading-tight"
              style={{ color: '#fff' }}
            >
              Referência em Embreagens no{' '}
              <span style={{ color: 'rgb(234, 34, 37)' }}>Mato Grosso</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: 'rgb(153, 151, 150)' }}
            >
              A <strong style={{ color: 'rgb(237, 219, 223)' }}>Só Embreagens</strong> nasceu
              com um propósito claro: oferecer soluções eficientes, seguras e com custo-benefício
              real para quem depende do seu veículo para trabalhar. Fundada há mais de 15 anos,
              construímos nossa reputação no rigor técnico e na transparência com cada cliente.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgb(153, 151, 150)' }}
            >
              Atendemos desde veículos leves até a linha pesada — caminhões e tratores — sempre
              com materiais de procedência confiável, critérios rigorosos de qualidade e
              garantia em todos os serviços realizados. Do diagnóstico à entrega, cada etapa
              é conduzida com cuidado e excelência.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={17}
                    className="flex-shrink-0"
                    style={{ color: 'rgb(234, 34, 37)' }}
                  />
                  <span className="text-sm" style={{ color: 'rgb(210, 210, 208)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
