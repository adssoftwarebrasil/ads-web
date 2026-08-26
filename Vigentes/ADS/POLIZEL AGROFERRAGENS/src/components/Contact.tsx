import { MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Fale Conosco
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-[#663300] mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-[#663300] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Mande uma mensagem no WhatsApp ou ligue diretamente para nós.
            Atendemos com agilidade e atenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <a
            href="https://wa.me/5566999996760"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-5 bg-[#006633] hover:bg-[#005a2d] rounded-3xl p-10 text-white shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageCircle size={32} className="text-white" />
            </div>
            <div className="text-center">
              <p className="font-heading font-black text-2xl mb-1">WhatsApp</p>
              <p className="text-white/70 text-sm mb-3">Resposta rápida e direta</p>
              <p className="font-bold text-xl">(66) 99999-6760</p>
            </div>
            <span className="flex items-center gap-2 bg-white/15 px-6 py-2.5 rounded-xl text-sm font-semibold">
              Chamar Agora
            </span>
          </a>

          <a
            href="tel:+5566999996760"
            className="group flex flex-col items-center justify-center gap-5 bg-[#663300] hover:bg-[#5a2d00] rounded-3xl p-10 text-white shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Phone size={32} className="text-white" />
            </div>
            <div className="text-center">
              <p className="font-heading font-black text-2xl mb-1">Telefone</p>
              <p className="text-white/70 text-sm mb-3">Ligue diretamente para nós</p>
              <p className="font-bold text-xl">(66) 99999-6760</p>
            </div>
            <span className="flex items-center gap-2 bg-white/15 px-6 py-2.5 rounded-xl text-sm font-semibold">
              Ligar Agora
            </span>
          </a>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #663300 0%, #006633 100%)' }}
        >
          <h3 className="font-heading font-black text-2xl md:text-3xl mb-4">
            Visite Nossa Loja Física
          </h3>
          <p className="text-white/80 text-base md:text-lg mb-6 max-w-lg mx-auto">
            Venha conhecer nosso estoque completo pessoalmente. Nossa equipe está pronta para te
            atender de segunda a sábado, das 7h às 17h.
          </p>
          <p className="text-white/90 font-semibold mb-6">
            Rua Exuperio Alves Pereira, 482 — Vila Mineira, Rondonópolis MT
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Polizel+Agroferragens+Rondonopolis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#663300] font-bold px-7 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors shadow-md"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
