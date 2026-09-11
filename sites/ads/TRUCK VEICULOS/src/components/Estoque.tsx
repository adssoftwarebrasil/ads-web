import { CheckCircle2, Truck, ArrowRight, Image as ImageIcon } from 'lucide-react';

const vehicles = [
  {
    title: 'Ford Cargo',
    desc: 'Caminhões Ford Cargo em diversas configurações: toco, truck e bitruck. Ideais para transporte de carga geral.',
    tags: ['Baú', 'Carga Seca', 'Carroceria'],
    href: 'https://wa.me/559292834895?text=Ol%C3%A1!%20Tenho%20interesse%20em%20caminh%C3%B5es%20Ford%20Cargo.%20Podem%20me%20informar%20o%20estoque%20dispon%C3%ADvel%3F',
  },
  {
    title: 'Volkswagen Worker',
    desc: 'Linha VW Worker com opções para todo tipo de operação logística. Robustos e com ótima durabilidade.',
    tags: ['Graneleiro', 'Frigorífico', 'Plataforma'],
    href: 'https://wa.me/559292834895?text=Ol%C3%A1!%20Tenho%20interesse%20em%20caminh%C3%B5es%20Volkswagen%20Worker.%20Podem%20me%20informar%20o%20estoque%20dispon%C3%ADvel%3F',
  },
  {
    title: 'Mercedes-Benz Accelo',
    desc: 'Caminhões Mercedes-Benz Accelo para entregas e distribuição. Compactos e ágeis.',
    tags: ['Entrega', 'Distribuição', 'Urbano'],
    href: 'https://wa.me/559292834895?text=Ol%C3%A1!%20Tenho%20interesse%20em%20caminh%C3%B5es%20Mercedes-Benz%20Accelo.%20Podem%20me%20informar%20o%20estoque%20dispon%C3%ADvel%3F',
  },
  {
    title: 'Veículos Leves',
    desc: 'Utilitários e carros populares para uso pessoal ou profissional com ótimas condições.',
    tags: ['Furgão', 'Pickup', 'Sedan'],
    href: 'https://wa.me/559292834895?text=Ol%C3%A1!%20Tenho%20interesse%20em%20ve%C3%ADculos%20leves%20e%20utilit%C3%A1rios.%20Podem%20me%20informar%20o%20estoque%20dispon%C3%ADvel%3F',
  },
];

const gallery = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/caminhao-basculante-amarelo-volkswagen-worker_561x752.webp',
    alt: 'Veículo Truck Veículos 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/caminhao-basculante-branco-vw-constellation_381x512.webp',
    alt: 'Veículo Truck Veículos 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/empilhadeira-laranja-estacionada-area-externa-galpao_474x634.webp',
    alt: 'Veículo Truck Veículos 3',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/empilhadeira-laranja-huahie-estacionada-area-externa_474x635.webp',
    alt: 'Veículo Truck Veículos 4',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/retroescavadeira-amarela-estacionada-frente-casa_397x528.webp',
    alt: 'Veículo Truck Veículos 5',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/truck-veiculos/galeria/retroescavadeira-john-deere-amarela-estacionada_397x532.webp',
    alt: 'Veículo Truck Veículos 6',
  },
];

export default function Estoque() {
  return (
    <section id="estoque" className="py-20 sm:py-32 bg-[#010101] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div className="animate-on-scroll opacity-0 translate-y-4 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 transition-all duration-700 lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 bg-[#af0201]/10 border border-[#af0201]/30 text-[#af0201] text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#af0201] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#af0201]"></span>
              </span>
              Estoque Atualizado
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#fefefe] leading-[1.1] mb-6">
              Veículos para Cada <br />
              <span className="text-[#af0201]">Necessidade.</span>
            </h2>
            <p className="text-[#fefefe]/60 text-lg leading-relaxed mb-10 max-w-xl">
              Nosso pátio em Manaus oferece uma seleção criteriosa de caminhões,
              máquinas e utilitários, todos rigorosamente revisados, com
              procedência garantida e prontos para o trabalho imediato.
            </p>
            <div className="space-y-4 mb-10">
              {['Pátio amplo e coberto', 'Financiamento facilitado', 'Vistoria completa e aprovada'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-[#fefefe]/80">
                    <CheckCircle2 width={18} height={18} className="text-[#af0201]" />
                    <span className="font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/truck-veiculos%2Fimg%2Fcaminhoes-propaganda-truck-veiculos.webp"
                alt="Frota Truck Veículos"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#af0201] flex items-center justify-center">
                  <Truck width={18} height={18} className="text-white" />
                </div>
                <p className="text-white text-sm font-semibold">Manaus – Amazonas</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {vehicles.map((v) => (
              <div
                key={v.title}
                className="animate-on-scroll opacity-0 translate-x-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 transition-all duration-500 group bg-white/[0.03] border border-white/10 hover:border-[#af0201]/50 rounded-2xl p-6 hover:bg-white/[0.06] relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#fefefe] group-hover:text-[#af0201] transition-colors mb-2">
                      {v.title}
                    </h3>
                    <p className="text-[#fefefe]/50 text-sm leading-relaxed mb-4 max-w-md">
                      {v.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-0">
                      {v.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-[#fefefe]/40 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-[#af0201] text-white px-5 py-3 rounded-xl transition-all duration-300 group/btn"
                  >
                    <span className="text-sm font-bold">Consultar</span>
                    <ArrowRight
                      width={16}
                      height={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/559292834895?text=Olá! Gostaria de ver o estoque completo."
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll opacity-0 translate-y-4 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 transition-all duration-500 flex items-center justify-center gap-3 w-full bg-[#af0201] hover:bg-[#8e0201] text-[#fefefe] font-bold py-5 rounded-2xl duration-300 hover:shadow-[0_0_30px_rgba(175,2,1,0.3)] mt-4"
            >
              Ver Estoque Completo no WhatsApp
            </a>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="animate-on-scroll opacity-0 translate-y-4 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 transition-all duration-700">
              <div className="flex items-center gap-2 text-[#af0201] font-bold uppercase tracking-widest text-xs mb-3">
                <ImageIcon width={16} height={16} />
                Galeria de Fotos
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#fefefe]">
                Nossa Frota em <span className="text-[#af0201]">Detalhes.</span>
              </h3>
            </div>
            <p className="animate-on-scroll opacity-0 translate-y-4 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 transition-all duration-700 text-[#fefefe]/40 max-w-sm text-sm">
              Confira algumas das máquinas e caminhões que passaram recentemente
              pelo nosso pátio. Qualidade garantida em cada item.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="animate-on-scroll opacity-0 scale-95 [&.is-visible]:opacity-100 [&.is-visible]:scale-100 transition-all duration-700 delay-150 relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#af0201]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
