import { Award, Clock, Users, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Award, value: '+15', label: 'Anos de Mercado', color: 'rgb(0,180,215)' },
  { icon: Users, value: '+500', label: 'Clientes Atendidos', color: 'rgb(122,200,160)' },
  { icon: Clock, value: '48h', label: 'Prazo Médio de Entrega', color: 'rgb(243,144,124)' },
  { icon: TrendingUp, value: '4.8★', label: 'Avaliação no Google', color: 'rgb(255,200,0)' },
];

const GALLERY_ITEMS = [
  'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/pilhas-de-agendas-fergraf-azul-espiral-preta_1440x1440.webp',
  'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/flyer-seminario-integrado-saude-sergipe_1440x1440.webp',
  'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/pilha-cadernos-vermelhos-corpo-bombeiros_1440x1440.webp',
  'https://storage.lucasmendes.dev/site-sp/fergrafe/galeria/calendarios-2024-girassol-varios-em-pilha_1440x1440.webp',
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {GALLERY_ITEMS.map((src, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg ${i === 1 || i === 3 ? 'mt-6' : ''}`}
                >
                  <img
                    src={src}
                    alt="Produto Fergraf"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="absolute -bottom-5 -left-5 bg-[rgb(53,80,155)] rounded-2xl p-4 shadow-xl hidden sm:flex flex-col items-center justify-center w-28 h-28">
              <span className="text-[rgb(255,240,1)] text-3xl font-black">15+</span>
              <span className="text-white text-xs text-center leading-tight mt-1">anos no mercado</span>
            </div>

            <div className="absolute -top-5 -right-5 bg-[rgb(0,180,215)] rounded-2xl p-4 shadow-xl hidden sm:flex flex-col items-center justify-center w-28 h-28">
              <span className="text-white text-3xl font-black">SE</span>
              <span className="text-white text-xs text-center leading-tight mt-1">Aracaju e todo Brasil</span>
            </div>
          </div>

          <div>
            <span className="inline-block bg-[rgb(53,80,155)]/10 text-[rgb(53,80,155)] font-semibold text-sm px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Sobre a Fergraf
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[rgb(53,80,155)] mb-5 leading-tight">
              Qualidade Gráfica que{' '}
              <span className="text-[rgb(0,180,215)]">Fortalece Marcas</span>{' '}
              desde 2010
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              A <strong className="text-[rgb(53,80,155)]">Fergraf</strong> nasceu em 2010 com um propósito claro:
              oferecer soluções gráficas de qualidade aliando tecnologia, eficiência e atendimento personalizado.
              Desde então, construímos uma trajetória marcada por compromisso, pontualidade e evolução constante.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Investimos em equipamentos modernos e capacitação contínua da equipe para garantir que cada trabalho
              saia perfeito. Do cartão de visita ao material de comunicação visual completo, entregamos soluções
              criativas que fortalecem a identidade dos nossos clientes no mercado.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={16} style={{ color: stat.color }} />
                      <span className="text-2xl font-black" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="http://wa.me/557988448494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[rgb(53,80,155)] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[rgb(0,180,215)] transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Falar com a Equipe
              </a>
              <a
                href="https://www.instagram.com/fergrafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[rgb(53,80,155)] text-[rgb(53,80,155)] font-bold px-7 py-3.5 rounded-full hover:bg-[rgb(53,80,155)] hover:text-white transition-all duration-200"
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
