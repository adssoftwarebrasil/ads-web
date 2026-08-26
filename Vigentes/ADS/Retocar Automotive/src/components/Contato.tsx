import { MessageCircle, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

const cards = [
  { title: 'Orçamento', desc: 'Solicite sem compromisso' },
  { title: 'Agendamento', desc: 'Escolha o melhor horário' },
  { title: 'Atendimento', desc: 'Rápido e personalizado' },
];

export default function Contato() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DB151F]/5 via-transparent to-[#0D1B2A]/50"></div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block text-[#DB151F] text-xs font-bold tracking-widest uppercase mb-6">
          Fale com a Gente
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Seu Veículo Merece
          <br />
          o Melhor Cuidado
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Entre em contato agora mesmo e agende seu serviço. Nossa equipe especializada está pronta
          para atender você com agilidade e qualidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#DB151F] hover:bg-[#b8101a] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-0.5 text-base"
          >
            <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
            Chamar no WhatsApp
          </a>
          <a
            href="tel:+556233396922"
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            <Phone className="lucide lucide-phone" width={20} height={20} />
            Ligar Agora
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#111111] border border-white/5 rounded-2xl px-6 py-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#DB151F] mx-auto mb-4"></div>
              <h4 className="text-white font-bold text-lg mb-1">{card.title}</h4>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
