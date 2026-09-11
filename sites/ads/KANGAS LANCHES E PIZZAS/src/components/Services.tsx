interface Service {
  img: string;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Pizzas%20Artesanais.webp',
    title: 'Pizzas Artesanais',
    desc: 'Receitas tradicionais com massas leves e recheios irresistíveis.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Pizzas%20dois%20sabores.webp',
    title: 'Pizzas dois sabores',
    desc: 'Combine seus sabores favoritos em uma única pizza!',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Pizzas%20Doce.webp',
    title: 'Pizzas Doce',
    desc: 'Pizzas doces irresistíveis com borda recheada. Pura tentação!',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Bordas%20Especiais.webp',
    title: 'Bordas Especiais',
    desc: 'Perfeito para quem ama saborear cada pedacinho',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Porc%CC%A7o%CC%83es.webp',
    title: 'Porções',
    desc: 'Batatas crocantes por fora e cremosa por dentro, mais opcionais!',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Refeic%CC%A7a%CC%83o%20completa.webp',
    title: 'Refeição completa',
    desc: 'Arroz soltinho, batatas fritas crocantes e um delicioso bife acebolado.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Pratos%20a%CC%80%20La%20Carte.webp',
    title: 'Pratos à La Carte',
    desc: 'Variedade em refeições completas para ocasiões especiais.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Lanches%20Especiais.webp',
    title: 'Lanches Especiais',
    desc: 'Lanches preparados com ingredientes frescos e sabores únicos.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A77] mb-4">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos lanches, pizzas e pratos à la carte com qualidade e dedicação para você e sua
            família
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#2A2A77] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://api.whatsapp.com/send?phone=55556536254300&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF3333] hover:bg-[#d01620] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Fazer Pedido pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
