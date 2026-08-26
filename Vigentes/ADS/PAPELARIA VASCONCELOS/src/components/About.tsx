const images = [
  { src: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcaixa-canetas-bic.webp', extra: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcanetas-coloridas-neon.webp', extra: ' mt-8' },
  { src: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fcalculadora-branca-numeros.webp', extra: '' },
  { src: 'https://storage.lucasmendes.dev/site-sp/papelaria-vesconcelos%2Fborrachas-coloridas.webp', extra: ' mt-8' },
];

export default function About() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block bg-[rgb(0,148,216)]/10 px-5 py-2 rounded-full mb-6">
              <p className="text-[rgb(0,148,216)] font-semibold text-sm tracking-wide">NOSSA HISTÓRIA</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgb(45,52,142)] mb-8 leading-tight">
              Conheça a Papelaria Vasconcelos
            </h2>
            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Há 26 anos, a Papelaria Vasconcelos é referência em Afogados e toda região de Recife. Nascemos com o
                propósito de oferecer não apenas produtos, mas soluções completas para estudantes, profissionais e
                empresas.
              </p>
              <p>
                Nossa trajetória é marcada pela dedicação em manter um estoque variado e de qualidade, sempre com
                atendimento personalizado que nos diferencia no mercado. Acreditamos que cada cliente merece atenção
                especial e flexibilidade para encontrar exatamente o que precisa.
              </p>
              <p>
                Do material escolar básico aos serviços especializados de impressão, xerox e recarga, estamos aqui para
                facilitar seu dia a dia com produtos de qualidade e preços justos.
              </p>
            </div>
            <a
              href="#contato"
              className="inline-block mt-10 bg-gradient-to-r from-[rgb(0,148,216)] to-[rgb(18,70,156)] text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Conheça Nossa Loja
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt="Produtos"
                className={`rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500${img.extra} w-full h-full object-cover`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
