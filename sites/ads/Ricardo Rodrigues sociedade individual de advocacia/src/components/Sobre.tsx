const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Sobre%20o%20escrito%CC%81rio.webp',
    extra: '',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Sobre%20o%20escrito%CC%81rio2.webp',
    extra: 'mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Sobre%20o%20escrito%CC%81rio3.webp',
    extra: '-mt-8',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/ricardorodrigues/Sobre%20o%20escrito%CC%81rio4.webp',
    extra: '',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(47,44,34)] mb-4">Sobre o Escritório</h2>
          <p className="text-xl text-gray-600">Aconselhamento jurídico profissional</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt="Escritório"
                className={`w-full h-64 object-cover rounded-2xl shadow-xl ${img.extra}`.trim()}
              />
            ))}
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              O grupo foi fundado em <span className="font-semibold text-[#d9b33c]">2017</span>, erigido
              sobre os princípios da honestidade, trabalho duro, dedicação e criatividade em busca de
              soluções inspiradoras às demandas que nos são confiadas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Temos atuado em Sergipe e garantido grande sucesso em cada caso que representa. Somos
              consistentes, pacientes e profissionais. Damos a cada novo caso a atenção necessária,
              acompanhando cada etapa do processo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos um novo tipo de escritório de advocacia, sensíveis às mudanças tecnológicas em um
              mercado desafiador e em constante desenvolvimento, ajudando os clientes a superarem seus
              problemas jurídicos mais complexos.
            </p>
            <div className="bg-[rgb(47,44,34)] p-6 rounded-2xl shadow-xl">
              <blockquote className="text-white italic text-lg leading-relaxed">
                "O advogado deve mesmo estar convencido da tese que sustenta. Senão, a quem pretende ele
                convencer, quando esvaziado em si mesmo, embatucar convencimento!"
              </blockquote>
              <p className="text-[#d9b33c] font-semibold mt-4">Dr. Ricardo Rodrigues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
