import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Fale Conosco</p>
          <h2 className="section-title text-stone-950 mb-5">Solicite seu Orçamento</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Atendemos Aparecida de Goiânia, Grande Goiânia e região. Entre em contato e peça já seu orçamento gratuito.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex gap-5 p-6 bg-white">
              <div className="p-3 bg-gold-100 flex-shrink-0 h-fit">
                <MapPin className="lucide lucide-map-pin text-gold-600" width={20} height={20} />
              </div>
              <div>
                <p className="font-semibold text-stone-950 mb-1.5">Endereço</p>
                <p className="text-gray-500 text-sm leading-relaxed">Av. 12 com Rua 101, Qd. 110 Lt. 09</p>
                <p className="text-gray-500 text-sm leading-relaxed">Bairro Itapuã — Aparecida de Goiânia - GO</p>
                <p className="text-gray-500 text-sm leading-relaxed">CEP: 74940-200</p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white">
              <div className="p-3 bg-gold-100 flex-shrink-0 h-fit">
                <Clock className="lucide lucide-clock text-gold-600" width={20} height={20} />
              </div>
              <div>
                <p className="font-semibold text-stone-950 mb-1.5">Horário de Funcionamento</p>
                <p className="text-gray-500 text-sm leading-relaxed">Segunda a Sábado</p>
                <p className="text-gray-500 text-sm leading-relaxed">7:30 às 17:30</p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white">
              <div className="p-3 bg-gold-100 flex-shrink-0 h-fit">
                <Phone className="lucide lucide-phone text-gold-600" width={20} height={20} />
              </div>
              <div>
                <p className="font-semibold text-stone-950 mb-1.5">Telefone / WhatsApp</p>
                <a
                  href="https://wa.me/5562992861117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 font-medium transition-colors"
                >
                  +55 62 99286-1117
                </a>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/marquesmarmoraria23/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-stone-200 text-stone-700 hover:border-gold-300 hover:text-gold-500 transition-colors text-sm font-medium"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
                @marquesmarmoraria23
              </a>
            </div>
          </div>
          <div className="bg-stone-950 p-10 text-center">
            <div className="w-16 h-16 bg-gold-300/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="lucide lucide-message-circle text-gold-300" width={28} height={28} />
            </div>
            <h3 className="font-serif text-white text-3xl font-bold mb-4">Orçamento Rápido</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Envie uma mensagem pelo WhatsApp agora mesmo. Nossa equipe responde rapidamente e agenda uma visita técnica gratuita.
            </p>
            <a
              href="https://wa.me/5562992861117?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center text-base mb-6"
            >
              <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
              Chamar no WhatsApp
            </a>
            <p className="text-white/30 text-xs">+55 62 99286-1117 — Seg. a Sáb. das 7:30 às 17:30</p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="gallery-item overflow-hidden h-40">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/marquesmarmoraria/pia-granito-cinza-torneira-metais-moderna_780x500.webp"
                  alt="Marques Marmoraria"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
