import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5562993240002?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20engate.';

export default function Contact() {
  return (
    <section id="contatos" className="bg-[rgb(175,11,18)] py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Entre em Contato com a União Engates Distribuidora
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Clique no botão abaixo e envie sua mensagem, agende uma visita na União Engates!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[rgb(175,11,18)] hover:bg-[rgb(175,11,18)] hover:text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 border-2 border-white shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          <MessageCircle className="lucide lucide-message-circle " width={24} height={24} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
