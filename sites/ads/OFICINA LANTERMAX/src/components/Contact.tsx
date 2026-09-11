import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  iconClass: string;
  label: string;
  value: string;
  href: string;
  breakAll?: boolean;
}

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    iconClass: 'lucide lucide-phone',
    label: 'Telefone / WhatsApp',
    value: '(81) 99645-7782',
    href: 'tel:+5581996457782',
  },
  {
    icon: Phone,
    iconClass: 'lucide lucide-phone',
    label: 'Telefone Alternativo',
    value: '(81) 98629-4567',
    href: 'tel:+5581986294567',
  },
  {
    icon: Mail,
    iconClass: 'lucide lucide-mail',
    label: 'E-mail',
    value: 'nelson-lantermax@hotmail.com',
    href: 'mailto:nelson-lantermax@hotmail.com',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin',
    label: 'Endereço',
    value: 'Av. Márcia de Windsor, 23 - Camaragibe/PE',
    href: 'https://maps.google.com/?q=LANTERMAX-CAR',
  },
];

const whatsappBenefits = [
  'Atendimento rápido e humanizado',
  'Envie fotos do dano pelo chat',
  'Orçamento sem compromisso',
  'Aceito seguro das credenciadas',
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-[#c0392b] font-bold text-sm uppercase tracking-widest">
            Entre em contato
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-black text-[#0d1f3c] leading-tight">
            Fale com a LanterMAX
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c0392b]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-[#0d1f3c] group-hover:bg-[#c0392b] rounded-xl p-3 transition-colors duration-300 flex-shrink-0">
                    <Icon className={`${item.iconClass} w-6 h-6 text-[#f39c12]`} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-[#0d1f3c] font-semibold">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="bg-[#0d1f3c] rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="lucide lucide-message-circle w-8 h-8 text-[#f39c12]" />
                <h3 className="text-white text-2xl font-black">Orçamento pelo WhatsApp</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                O jeito mais rápido de falar com a nossa equipe é pelo WhatsApp. Envie fotos do seu veículo e receba um orçamento ágil e sem sair de casa.
              </p>
              <ul className="space-y-3 mb-8">
                {whatsappBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f39c12] flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/5581996457782?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-black py-5 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-900/30"
            >
              <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
