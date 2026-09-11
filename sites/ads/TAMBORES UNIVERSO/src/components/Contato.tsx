import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="bg-gradient-to-br from-[#034D9B] to-[#0A85E3] py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Entre em Contato Conosco
        </h2>
        <p className="text-lg md:text-xl mb-12 text-white/90">
          Estamos prontos para atender suas necessidades e fornecer as melhores soluções
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <MapPin className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="font-semibold text-base md:text-lg mb-2">Endereço</h3>
            <p className="text-sm md:text-base text-white/90">
              Av. Vera Cruz, 2018 - Jardim Guanabara<br />
              Goiânia - GO, 74675-830
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="font-semibold text-base md:text-lg mb-2">Horário</h3>
            <p className="text-sm md:text-base text-white/90">
              Segunda a Sexta: 08h - 18h<br />
              Sábado: 08h - 12h
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Phone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" />
            <h3 className="font-semibold text-base md:text-lg mb-2">WhatsApp</h3>
            <p className="text-sm md:text-base text-white/90">
              (62) 98416-4141
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5562984164141?text=Olá, gostaria de solicitar um orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#034D9B] px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-2xl"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
          Solicitar Orçamento via WhatsApp
        </a>
      </div>
    </section>
  );
}
