interface Produto {
  img: string;
  alt: string;
  title: string;
  text: string;
  maisVendido: boolean;
}

const produtos: Produto[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2FLinguica-de-frango-com-bacon-e-queijo-coalho.webp',
    alt: 'Frango com Bacon e Queijo Coalho',
    title: 'Frango com Bacon e Queijo Coalho',
    text: 'Massa de frango nobre, bacon crocante e queijo coalho derretido. Uma explosão de sabor em cada mordida.',
    maisVendido: true,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2FLinguica-suina-com-jilo.webp',
    alt: 'Suína com Jiló',
    title: 'Suína com Jiló',
    text: 'Carne suína de primeira com jiló fresco. Para quem aprecia o sabor autêntico brasileiro.',
    maisVendido: false,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2Flinguica-churrasco.webp',
    alt: 'Linguiça de Churrasco',
    title: 'Linguiça de Churrasco',
    text: 'Tradicional e perfeita para o churrasco. Tempero especial da casa que conquista todos.',
    maisVendido: true,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2Flinguica-de-frango-gourmet-sem-recheio.webp',
    alt: 'Frango Gourmet Puro',
    title: 'Frango Gourmet Puro',
    text: 'Massa de frango premium sem recheio. Sabor concentrado e suculento.',
    maisVendido: false,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2Flinguica-la-total-3-massas-14-recheios.webp',
    alt: 'Lá Total - Monte a Sua',
    title: 'Lá Total - Monte a Sua',
    text: '3 massas, 14 recheios, infinitas possibilidades. Crie sua linguiça única do seu jeito.',
    maisVendido: true,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2Flinguica-suina-com-queijo-coalho.webp',
    alt: 'Suína com Queijo Coalho',
    title: 'Suína com Queijo Coalho',
    text: 'Carne suína nobre com queijo coalho de alta qualidade. Combinação irresistível.',
    maisVendido: false,
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fprodutos%2Flinguica-suina-tradicional.webp',
    alt: 'Suína Tradicional',
    title: 'Suína Tradicional',
    text: 'O clássico que nunca sai de moda. Tempero artesanal com receita de família.',
    maisVendido: false,
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-black py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Nossos Sabores Exclusivos</h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Linguiças artesanais feitas na hora com ingredientes selecionados. Cada uma é uma experiência única de sabor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div
              key={produto.title}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-800"
            >
              <div className="aspect-square bg-slate-800 overflow-hidden relative">
                {produto.maisVendido && (
                  <div className="absolute top-4 right-4 z-10 bg-[rgb(242,51,52)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Mais Vendido
                  </div>
                )}
                <img
                  src={produto.img}
                  alt={produto.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{produto.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{produto.text}</p>
                <button className="w-full bg-[rgb(242,51,52)] hover:bg-red-700 py-3 rounded-lg text-white font-semibold text-center transition-colors duration-300">
                  Pedir Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
