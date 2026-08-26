import { MessageCircle } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section
      className="py-20 lg:py-24 px-6 lg:px-16 text-center"
      style={{ background: 'linear-gradient(135deg, rgb(42, 69, 94) 0%, rgb(191, 145, 85) 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-3xl lg:text-5xl text-off-white mb-6">
          Você Merece Ter Seus Direitos Garantidos
        </h2>
        <p className="font-serif text-xl lg:text-2xl text-beige mb-10">
          Entre em contato agora e receba orientação especializada para o seu caso
        </p>
        <a
          href="https://wa.me/5562999714722?text=Olá"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-off-white px-12 py-5 rounded-full font-bold text-lg hover:from-whatsapp-dark hover:to-whatsapp hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-whatsapp/50"
        >
          <MessageCircle />
          Falar com a Dra. Kelly no WhatsApp
        </a>
      </div>
    </section>
  );
}
