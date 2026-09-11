import { MessageCircle, Phone } from 'lucide-react';
import { waLink } from '../lib/site';

const PARALLAX =
  'https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Flocacao-de-equipamentos-para-sua-obra-paralax.webp';

export default function CtaBanner() {
  return (
    <section
      className="py-20 px-4 relative min-h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url("${PARALLAX}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tudo Para Sua Obra!</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          O equipamento que você precisa está aqui. Locação com o melhor custo-benefício de Cuiabá
          e Várzea Grande.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink('Olá! Gostaria de falar com um especialista.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[rgb(13,133,77)] text-white px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-2xl text-lg font-semibold w-full sm:w-auto justify-center"
          >
            <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
            <span>Falar com Especialista</span>
          </a>
          <a
            href="tel:6539274720"
            className="flex items-center space-x-2 bg-[rgba(237,53,55,0.99)] text-white px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-2xl text-lg font-semibold w-full sm:w-auto justify-center"
          >
            <Phone className="lucide lucide-phone w-6 h-6" />
            <span>Ligar Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
}
