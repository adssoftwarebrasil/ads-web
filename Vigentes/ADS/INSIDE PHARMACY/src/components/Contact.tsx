import { ExternalLink, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/scroll';

const hours = [
  { day: 'Segunda a Sexta', time: '08:00 às 19:00', closed: false },
  { day: 'Sábado', time: '08:00 às 14:00', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">
              Localização &amp; Contato
            </span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Venha nos <span className="text-brand-red">Visitar</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Atendemos presencialmente na Asa Sul e também realizamos entregas em toda Brasília e região com agilidade e
            segurança.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0520702715676!2d-47.893235324869686!3d-15.801208184840123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ba4343a6b63%3A0x62e6d3754a9bfd3c!2sInside%20Pharmacy%20-%20Farm%C3%A1cia%20de%20Manipula%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1774975110401!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Inside Pharmacy"
                style={{ border: '0px', display: 'block' }}
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Inside+Pharmacy+Farmácia+de+Manipulação+Brasília"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-red hover:text-brand-red-light text-sm font-medium mt-4 transition-colors"
            >
              <ExternalLink width={14} height={14} strokeWidth={2} />
              Abrir no Google Maps
            </a>
          </div>
          <div className="space-y-6 transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-5">
              <h3 className="text-white font-bold text-xl mb-5">Informações de Contato</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} strokeWidth={2} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Endereço</p>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    CLS 302 Bloco A Loja 15 e 19<br />
                    Asa Sul, Brasília — DF
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone width={18} height={18} strokeWidth={2} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Telefones</p>
                  <a
                    href="tel:6132028296"
                    className="text-white font-medium text-sm block hover:text-brand-red transition-colors"
                  >
                    (61) 3202-8296
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium text-sm block hover:text-brand-red transition-colors"
                  >
                    (61) 9 9562-8587 — WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail width={18} height={18} strokeWidth={2} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-1">E-mail</p>
                  <a
                    href="mailto:contatoinsiepharmacy@gmail.com"
                    className="text-white font-medium text-sm hover:text-brand-red transition-colors break-all"
                  >
                    contatoinsiepharmacy@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} strokeWidth={2} className="text-brand-red" />
                </div>
                <h3 className="text-white font-bold text-base">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.closed ? 'text-brand-gray-dark' : 'text-white'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-4 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5 w-full"
            >
              <WhatsAppIcon width={20} height={20} />
              Falar pelo WhatsApp Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
