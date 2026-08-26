const WHATSAPP_CATALOG =
  'https://wa.me/5562984256606?text=Olá!%20Gostaria%20de%20ver%20mais%20produtos%20disponíveis.'

const products = [
  {
    url: '/img/produto-unicornio.webp',
    alt: 'Estojo de maquiagem infantil unicórnio com coração rosa',
    span: 'row-span-2',
  },
  {
    url: '/img/produto-pirulito.webp',
    alt: 'Kit de maquiagem infantil com pirulito e espelho rosa',
    span: '',
  },
  {
    url: '/img/produto-lilo.webp',
    alt: 'Miniaturas Lilo and Stitch em embalagem colecionável',
    span: '',
  },
]

export default function Products() {
  return (
    <section id="produtos" className="bg-brand-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Destaques
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Produtos em destaque
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-base">
            Uma seleção dos nossos produtos mais procurados. Visite a loja e descubra muito mais!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.url}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${product.span}`}
            >
              <img
                src={product.url}
                alt={product.alt}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[280px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium leading-tight">{product.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/50 text-sm mb-4">
            Quer ver mais produtos? Entre em contato e peça nosso catálogo completo!
          </p>
          <a
            href={WHATSAPP_CATALOG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-brand-blue/40 hover:scale-105"
          >
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
