import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5508005552569?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#5ca57a] to-[#06367a] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/quiteimeucarro%2Fcarro-branco-compacto.webp)'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        <div className="text-center text-white">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-6">
            Pronto para Quitar Seu Veículo?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Não deixe os juros aumentarem. Faça sua simulação agora!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={openWhatsApp}
              className="bg-white text-[#06367a] px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-3"
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </button>

            <a
              href="tel:08005552569"
              className="border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white hover:text-[#06367a] transition-all flex items-center gap-3"
            >
              <Phone size={24} />
              Ligue Agora: (0800) 555-2569
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
