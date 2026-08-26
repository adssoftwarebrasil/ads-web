import { Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'WhatsApp / Telefone',
    value: '(84) 3223-9388',
    href: 'https://wa.me/558432239388',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'financeirodiviaco@hotmail.com',
    href: 'mailto:financeirodiviaco@hotmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@diviaco_divisorias_forros',
    href: 'https://www.instagram.com/diviaco_divisorias_forros',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: 'Seg–Sex: 7:30–12:00 e 13:30–17:00\nSáb: 8:00–12:00',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#E76012] text-xs font-semibold tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Entre em <span className="text-[#E76012]">Contato</span>
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl mx-auto">
            Estamos prontos para atender você. Solicite seu orçamento ou tire suas dúvidas pelos nossos canais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="bg-neutral-900 border border-white/5 hover:border-[#E76012]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/15 flex gap-4 items-start h-full">
                <div className="w-12 h-12 bg-[#E76012]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#E76012]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/558432239388"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E76012] hover:bg-[#c9520f] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-2xl shadow-orange-900/30"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
