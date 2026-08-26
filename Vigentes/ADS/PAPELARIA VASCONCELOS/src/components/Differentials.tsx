const items = [
  {
    number: '01',
    title: 'Variedade Incomparável',
    text: 'Milhares de produtos em estoque. Do básico ao especializado, temos o que você procura em um só lugar.',
  },
  {
    number: '02',
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é único para nós. Nossa equipe está sempre pronta para ajudar você a encontrar a solução perfeita.',
  },
  {
    number: '03',
    title: 'Flexibilidade Total',
    text: 'Horários amplos, facilidades de pagamento e soluções sob medida para suas necessidades.',
  },
  {
    number: '04',
    title: 'Tradição e Confiança',
    text: '26 anos servindo a comunidade com qualidade, honestidade e compromisso com sua satisfação.',
  },
];

export default function Differentials() {
  return (
    <section className="bg-gradient-to-br from-[rgb(45,52,142)] via-[rgb(18,70,156)] to-[rgb(45,52,142)] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-white font-semibold text-sm tracking-wide">NOSSOS DIFERENCIAIS</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            O Que Nos Torna Especiais
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Descubra por que somos a escolha de milhares de clientes em Recife
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.number}
              className="group bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-7xl md:text-8xl font-extrabold bg-gradient-to-br from-white to-[rgb(0,148,216)] bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/90 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
