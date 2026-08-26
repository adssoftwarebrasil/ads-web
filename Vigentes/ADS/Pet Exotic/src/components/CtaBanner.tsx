import { Phone, Calendar } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/petexotic%2FWhatsApp%20Image%202025-12-10%20at%2016.57.49.jpeg"
          alt="Pet Exotic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A9E3E]/95 to-[#2E7D32]/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Seu Pet Exótico Merece o Melhor Cuidado
        </h2>
        <p className="text-xl md:text-2xl text-green-50 mb-12 max-w-3xl mx-auto">
          Agende agora mesmo uma consulta e proporcione saúde e bem-estar para seu companheiro
          especial
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/556283177646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#3A9E3E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Phone className="lucide lucide-phone" width={24} height={24} />
            WhatsApp: (62) 98317-7646
          </a>
          <a
            href="https://wa.me/556283177646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
          >
            <Calendar className="lucide lucide-calendar" width={24} height={24} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
