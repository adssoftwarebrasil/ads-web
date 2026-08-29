import { WHATSAPP_URL } from '../constants';

export default function QuoteCTA() {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FSolicite%20um%20Orc%CC%A7amento.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(122,21,25)]/80 to-[rgb(122,21,25)]/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Solicite um Orçamento</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Conheça nossos preços e condições especiais. Conectando qualidade, tradição e inovação.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[rgb(122,21,25)] px-10 py-5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-2xl"
        >
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
