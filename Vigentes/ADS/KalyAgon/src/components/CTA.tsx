import { MessageCircle } from 'lucide-react';

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561996122686?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uniformes%20personalizados.', '_blank');
  };

  return (
    <section className="relative bg-[#012E60] py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D7B46A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D7B46A] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#D7B46A]"/>
            </pattern>
            <rect width="400" height="400" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para elevar o padrão dos seus uniformes?
        </h2>

        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Preencha e faça seu orçamento! Entre em contato agora mesmo.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center space-x-3 bg-[#D7B46A] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#c19e56] transition-colors duration-300"
        >
          <MessageCircle size={28} />
          <span>Falar com Especialista no WhatsApp</span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
