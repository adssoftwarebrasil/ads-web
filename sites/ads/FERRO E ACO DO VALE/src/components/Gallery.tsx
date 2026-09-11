import { ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/estante-tubos-metalicos-quadrados-ferragens_1440x1920.webp',
    alt: 'Estante com tubos metálicos quadrados e ferragens',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/perfil-metalico-quadrado-empilhado-na-prateleira_1440x1440.webp',
    alt: 'Perfil metálico quadrado empilhado na prateleira',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/perfil-u-vermelho-empilhado-industria-construcao_1440x1800.webp',
    alt: 'Perfil U empilhado na indústria de construção',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/perfis-metalicos-retangulares-empilhados-estrutura-de-aco_1440x1800.webp',
    alt: 'Perfis metálicos retangulares empilhados',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/pilha-perfis-metalicos-galpao-construcao_1440x1920.webp',
    alt: 'Pilha de perfis metálicos no galpão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/pilha-perfis-metalicos-variados-industria_1440x1800.webp',
    alt: 'Pilha de perfis metálicos variados',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/tubos-metalicos-estantes-armazem-industria_1440x1800.webp',
    alt: 'Tubos metálicos em estantes no armazém',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ferro-e-aco-do-vale/galeria/tubos-metalicos-retangulares-empilhados-metalurgia_1440x1440.webp',
    alt: 'Tubos metálicos retangulares empilhados',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="text-brand-orange text-sm font-semibold tracking-widest uppercase mb-3 block">Galeria</span>
          <h2 className="section-title text-white mb-4">Nosso Estoque em Imagens</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Conheça a variedade e qualidade dos materiais disponíveis para o seu projeto.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="animate-on-scroll break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="lucide lucide-zoom-in w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
