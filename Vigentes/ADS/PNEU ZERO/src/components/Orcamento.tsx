const WHATSAPP_ORC_URL =
  'https://wa.me/5599991458080?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento';

export default function Orcamento() {
  return (
    <section
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Fimg%2FSolicite%20um%20Orçamento-paralax.jpg")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Solicite um Orçamento</h2>
        <p className="text-xl text-white/90 mb-8">Obtenha uma cotação personalizada</p>
        <a
          href={WHATSAPP_ORC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(227,17,35)] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}
