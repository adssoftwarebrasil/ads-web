const stats = [
  { value: '1990', label: 'Ano de Fundação' },
  { value: '4.9★', label: 'Nota no iFood' },
  { value: '12km', label: 'Raio de Entrega' },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/forno-pizza-portuguesa-calabresa-ovos-cebola_3024x4032.webp"
                alt="Forno a lenha Pizza na Pedra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src="https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/fatia-de-pizza-sendo-levantada-com-queijo-derretido_3024x4032.webp"
                alt="Fatia de pizza com queijo derretido"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-brand-red text-white rounded-2xl p-4 shadow-xl hidden sm:flex flex-col items-center justify-center text-center w-28 h-28">
              <span className="font-serif font-bold text-3xl leading-none">34</span>
              <span className="text-xs font-semibold mt-1 leading-tight">
                Anos de
                <br />
                Tradição
              </span>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <span className="text-brand-red text-sm font-semibold tracking-[0.25em] uppercase">
              Nossa História
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-black mt-3 leading-tight">
              Um Legado de <span className="text-brand-red italic">Sabor e Tradição</span>
            </h2>
            <div className="w-16 h-1 bg-brand-red mt-5 rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Bem-vindo à <strong className="text-brand-black">Pizza na Pedra</strong>! Desde 21 de
              dezembro de 1990, somos um verdadeiro patrimônio gastronômico de Goiânia. Mais de três
              décadas dedicadas a transformar ingredientes frescos e selecionados em momentos
              inesquecíveis.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Nosso diferencial está no{' '}
              <strong className="text-brand-black">capricho dos recheios</strong>, na massa artesanal
              assada na hora em forno a lenha e no atendimento caloroso que faz você se sentir em
              casa. Uma receita que conquistou gerações e continua a encantar novos paladares todos
              os dias.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif font-bold text-2xl text-brand-red">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="http://wa.me/556292358068"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-brand-red-light text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5 text-center"
              >
                Fazer Pedido
              </a>
              <a
                href="tel:6232785151"
                className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 text-center"
              >
                (62) 3278-5151
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
