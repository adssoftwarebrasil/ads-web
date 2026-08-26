import { WHATSAPP_URL } from '../constants';

export default function ContactCTA() {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/casadoserralheirolavras%2Fcasadoserralheirolavras%2FFale%20Conosco-efeitoparalax.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">Fale Conosco</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Entre em contato para mais informações
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-10 py-5 rounded-lg hover:bg-green-600 transition-all duration-300 font-bold text-lg shadow-2xl"
        >
          Enviar WhatsApp
        </a>
      </div>
    </section>
  );
}
