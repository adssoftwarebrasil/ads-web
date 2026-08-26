const GREEN = '#004a27';

// Mantivemos todas as imagens caso queira mudar depois, 
// mas vamos exibir apenas as 6 primeiras para o grid 3x2.
const allImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-alta-de-ripas-de-madeira-amarradas_960x1280.webp',
    alt: 'Pilha de ripas de madeira amarradas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-madeira-rosa-amarrada-com-cinta-preta_1200x1600.webp',
    alt: 'Pilha de madeira amarrada com cinta preta',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/caminhao-carregado-pilhas-madeira-pinus-crua_1200x1600.webp',
    alt: 'Caminhão carregado com pilhas de madeira pinus',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-molduras-de-madeira-embaladas_1200x1600.webp',
    alt: 'Pilha de molduras de madeira embaladas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-tabuas-de-madeira-pinus-empilhadas_720x1280.webp',
    alt: 'Pilha de tábuas de madeira pinus empilhadas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-longa-de-madeira-vermelha-com-cintas_960x1280.webp',
    alt: 'Pilha longa de madeira vermelha com cintas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/caminhao-carregado-madeira-transporte_899x1599.webp',
    alt: 'Caminhão carregado com madeira',
  },
];

// Seleciona exatamente 6 itens para o grid 3x2
const displayImages = allImages.slice(0, 6);

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-gray-50">
      {/* Container reduzido para max-w-4xl para ficar mais compacto e centralizado */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho com design refinado */}
        <div className="text-center mb-14">
           <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
            style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
          >
            Nosso Estoque
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
            Qualidade que você vê
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: GREEN }}></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Confira uma seleção dos nossos materiais prontos para entrega.
          </p>
        </div>

        {/* Grid 3x2 Exato */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center">
          {displayImages.map((img, i) => (
            <div
              key={i}
              // Design de "Card Premium":
              // - aspect-square: Mantém tudo quadrado e alinhado
              // - p-2 bg-white: Cria uma borda branca estilo moldura
              // - rounded-2xl: Bordas arredondadas modernas
              // - shadow-md hover:shadow-xl: Efeito de "levantar" da tela
              // - Ring colorido no hover usando a cor da marca
              className="group relative p-2 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-[#004a27]/10 transition-all duration-500 ease-out hover:-translate-y-1 ring-1 ring-gray-100 hover:ring-[#004a27]/30 aspect-square overflow-hidden"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                 <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  // Zoom suave e um leve aumento de contraste no hover
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:contrast-[1.05]"
                />
                {/* Overlay sutil para dar profundidade no hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-[#004a27]/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}