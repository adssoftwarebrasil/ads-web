import { useReveal } from '../hooks/useReveal';

interface GalleryImg {
  src: string;
  alt: string;
  delay: number;
}

const images: GalleryImg[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/armazem-industrial-prateleiras-produtos-variados_900x1600.webp',
    alt: 'Armazém com prateleiras de produtos variados',
    delay: 0,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-ferragens-escadas-carrinhos-de-mao_900x1600.webp',
    alt: 'Loja com escadas e carrinhos de mão',
    delay: 80,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/corredor-de-mercado-mostrando-geladeira-de-bebidas_900x1600.webp',
    alt: 'Corredor da loja com geladeira de bebidas',
    delay: 160,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-ferragens-prateleiras-produtos-morlan-sentinela_900x1600.webp',
    alt: 'Prateleiras com produtos Morlan e Sentinela',
    delay: 240,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-ferramentas-prateleiras-produtos-corredor-iluminado_900x1600.webp',
    alt: 'Corredor iluminado da loja de ferramentas',
    delay: 320,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/loja-material-construcao-rolo-tela-metalica_900x1600.webp',
    alt: 'Materiais de construção e tela metálica',
    delay: 400,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/interior-loja-ferragens-cadeiras-brancas-decoracao_900x1600.webp',
    alt: 'Interior da loja com decoração',
    delay: 480,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/rolos_1370x1600.webp',
    alt: 'Rolos de materiais na loja',
    delay: 560,
  },
];

export default function Gallery() {
  const heading = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgb(120,193,55),transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-3 block">Nossa Estrutura</span>
          <h2 className="text-3xl sm:text-4xl font-black text-cream mb-4">
            Conheça a <span className="text-brand">Batuta Agroshop</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Uma estrutura ampla, organizada e abastecida para você encontrar o que precisa com praticidade.
          </p>
        </div>
        <div ref={grid.ref} className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((img) => (
            <div
              key={img.src}
              className={`break-inside-avoid rounded-xl overflow-hidden group transition-all duration-700 ${
                grid.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${img.delay}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-brand/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0,20,45)" strokeWidth="2.5">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
