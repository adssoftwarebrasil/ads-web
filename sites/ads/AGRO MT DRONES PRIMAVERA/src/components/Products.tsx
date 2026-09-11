const PRODUCTS = [
  {
    name: 'DJI Agras T-25P',
    category: 'Pulverização',
    description: 'Drone de pulverização compacto e versátil, ideal para pequenas e médias propriedades. Combo com misturador JR 320L e gerador 10 KVA.',
    image: '/imagens/drone-dji-agras-t25p-combo.jpeg',
    badge: 'Mais Vendido',
  },
  {
    name: 'DJI Agras T-70P',
    category: 'Pulverização',
    description: 'Alta performance para médias e grandes lavouras. Combo completo com Drone Mix 600L e gerador 22 KVA para autonomia total no campo.',
    image: '/imagens/drone-dji-agras-t70p-combo.jpeg',
    badge: 'Alta Performance',
  },
  {
    name: 'DJI Agras T100',
    category: 'Pulverização',
    description: 'Tecnologia de ponta para grandes propriedades. Combo com DJI D14000iE, Drone Mix 600L e gerador 22 KVA gasolina.',
    image: '/imagens/drone-dji-agras-t100-combo.jpeg',
    badge: 'Top de Linha',
  },
  {
    name: 'SPAD 200B – Carreta Autônoma',
    category: 'Infraestrutura',
    description: '2 geradores, tanque de 1.000L, estação meteorológica, sistema DAASFY, 2 misturadores 250L, Starlink, antena XRTK e EPIs.',
    image: '/imagens/spad-200b-carreta-autonoma.jpeg',
    badge: 'Solução Completa',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary font-bold text-sm tracking-widest uppercase mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
            Equipamentos que{' '}
            <span className="text-brand-primary">Transformam</span> sua Fazenda
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Trabalhamos com os melhores equipamentos do mercado para atender todas as
            demandas do produtor rural moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-light hover:border-brand-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none" />
                <span className="absolute top-3 right-3 bg-brand-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
                <span className="absolute bottom-3 left-3 text-white/90 text-xs font-semibold uppercase tracking-wider drop-shadow-md">
                  {product.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-brand-dark text-base mb-2 leading-snug">{product.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{product.description}</p>
                <a
                  href={`http://wa.me/556599004844?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}. Poderia me passar mais informações?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-brand-light hover:bg-brand-primary text-brand-primary hover:text-white text-sm font-bold py-2.5 rounded-full text-center transition-all duration-200"
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Não encontrou o que procura?{' '}
          <a
            href="http://wa.me/556599004844"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold hover:underline"
          >
            Fale conosco
          </a>{' '}
          e consulte nosso catálogo completo.
        </p>
      </div>
    </section>
  );
}
