const advantages = [
  {
    number: '01',
    img: 'https://storage.lucasmendes.dev/site-sp/guiautos/Atendimento%20Personalizado.jpeg',
    title: 'Atendimento Personalizado',
    text: 'Nosso time é treinado para atender cada cliente de forma única.',
  },
  {
    number: '02',
    img: 'https://storage.lucasmendes.dev/site-sp/guiautos/Tecnologia%20Avanc%CC%A7ada.webp',
    title: 'Tecnologia Avançada',
    text: 'Utilizamos equipamentos modernos para diagnósticos precisos.',
  },
  {
    number: '03',
    img: 'https://storage.lucasmendes.dev/site-sp/guiautos/Pec%CC%A7as%20Originais.jpeg',
    title: 'Peças Originais',
    text: 'Trabalhamos apenas com peças de qualidade garantida.',
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-20 md:py-28 bg-gradient-to-br from-[#00335F] to-[#00335F]/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2BA2CC] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D7282A] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#2BA2CC] font-bold text-sm uppercase tracking-wider">Vantagens</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Vantagens de Escolher a Guiauto
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Descubra como podemos atender suas necessidades automotivas com qualidade e confiança.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((a) => (
            <div
              key={a.number}
              className="group relative rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <div className="relative h-80">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00335F]/95 via-[#00335F]/70 to-transparent"></div>
                <div className="absolute top-6 left-6 text-6xl font-bold text-[#D7282A]/30">{a.number}</div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{a.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
