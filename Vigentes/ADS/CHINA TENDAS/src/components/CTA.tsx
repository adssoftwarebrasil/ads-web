import WhatsAppIcon from './WhatsAppIcon';

export default function CTA() {
  return (
    <section className="py-20 bg-[rgb(211,14,9)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Pronto para Transformar Seu Evento ou Projeto?
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto">
          Entre em contato e receba seu orçamento personalizado
        </p>
        <button className="inline-flex items-center gap-3 bg-white text-[rgb(211,14,9)] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
          <WhatsAppIcon size={28} />
          SOLICITAR ORÇAMENTO VIA WHATSAPP
        </button>
      </div>
    </section>
  );
}
