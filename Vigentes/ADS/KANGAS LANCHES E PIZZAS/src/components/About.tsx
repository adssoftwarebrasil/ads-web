const aboutImages = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Quem%20somos1.webp',
    alt: 'Kangas - Nossa História',
    className: 'rounded-2xl shadow-xl w-full h-64 object-cover',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Quem%20somos2.webp',
    alt: 'Kangas - Nossa Tradição',
    className: 'rounded-2xl shadow-xl w-full h-64 object-cover mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Quem%20somos3.webp',
    alt: 'Kangas - Nossa Equipe',
    className: 'rounded-2xl shadow-xl w-full h-64 object-cover col-span-2',
  },
];

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Referência em qualidade',
    desc: 'Produtos que conquistam pela excelência',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Praticidade digital',
    desc: 'Pedidos simples e rápidos pelo WhatsApp',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Atendimento humanizado',
    desc: 'Resolvemos tudo com cuidado e atenção',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#FDF7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A77] mb-4">Quem Somos</h2>
          <div className="w-24 h-1 bg-[#FF3333] mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              O <span className="font-bold text-[#2A2A77]">Kangas Lanches e Pizzaria</span> é uma
              referência em sabor e qualidade no bairro Coophamil, em Cuiabá, desde 1990. Iniciado
              como um pequeno negócio de lanches, o Kangas rapidamente conquistou o público pela
              excelência de seus produtos e atendimento diferenciado.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Em 2007, sob o comando de{' '}
              <span className="font-semibold text-[#2A2A77]">Adilson Pereira</span>, a empresa passou
              por grandes transformações, incorporando pratos à la carte e investindo em melhorias
              que elevaram ainda mais o padrão de qualidade.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Hoje, com <span className="font-bold text-[#FF3333]">34 anos de história</span>, o
              Kangas é sinônimo de tradição e inovação, mantendo um relacionamento sólido com os
              clientes, resolvendo divergências de forma humanizada e garantindo uma experiência
              gastronômica inesquecível.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((img) => (
              <img key={img.alt} src={img.src} alt={img.alt} className={img.className} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="w-16 h-16 bg-[#FF3333] rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2A2A77]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
