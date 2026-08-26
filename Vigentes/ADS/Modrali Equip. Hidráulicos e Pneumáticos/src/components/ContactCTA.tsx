import { Phone, ChevronRight } from 'lucide-react';

const STORE_URL = 'https://www.lojamodrali.com.br';
const WHATSAPP_NUMBER = '5519997536768';
const WHATSAPP_MESSAGE = 'Olá! Vim através da landing page e gostaria de mais informações.';

export function ContactCTA() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-[#00476F] to-[#005a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-xl mx-auto">
          Entre em contato e descubra as melhores soluções hidráulicas para o
          seu negócio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#FF8337] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#e67430] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Phone className="mr-2" size={20} /> WhatsApp: (19) 99753-6768
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#00476F] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Visitar Loja Online <ChevronRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
