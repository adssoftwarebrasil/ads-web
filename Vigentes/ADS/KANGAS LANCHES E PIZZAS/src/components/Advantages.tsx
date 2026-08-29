const advantages = [
  {
    number: '01',
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Tradic%CC%A7a%CC%83o%20consolidada.webp',
    title: 'Tradição consolidada',
    desc: 'Mais de 30 anos de experiência no mercado',
  },
  {
    number: '02',
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Sabor%20incompara%CC%81vel.webp',
    title: 'Sabor incomparável',
    desc: 'Receitas exclusivas que conquistam qualquer paladar',
  },
  {
    number: '03',
    img: 'https://storage.lucasmendes.dev/site-sp/kangaslanches/Atendimento%20a%CC%81gil.webp',
    title: 'Atendimento ágil',
    desc: 'Serviço rápido e eficiente, seja presencial ou digital',
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2A2A77] mb-4">
            Por que escolher o Kangas?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Aqui você encontra tradição, sabor e atendimento de qualidade, aliados a um serviço
            prático e humanizado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3333]/5 rounded-bl-full"></div>
              <div className="relative p-8">
                <div className="mb-6">
                  <span className="text-7xl md:text-8xl font-bold text-[#FF3333]/10 group-hover:text-[#FF3333]/20 transition-colors duration-300">
                    {adv.number}
                  </span>
                </div>
                <div className="mb-6 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={adv.img}
                    alt={adv.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#2A2A77] mb-4">{adv.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{adv.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3333] to-[#2A2A77] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#2A2A77] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Seu lugar para momentos especiais
          </h3>
          <p className="text-lg md:text-xl text-[#FDF7E7] mb-8 max-w-3xl mx-auto">
            Oferecemos mais do que refeições, entregamos experiências marcantes que unem sabor,
            qualidade e um atendimento diferenciado
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=55556536254300&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF3333] hover:bg-[#d01620] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
