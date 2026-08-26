import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Localização
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-slate-dark mt-3 mb-5">
            Onde Nos Encontrar
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Estamos localizados em Ribeirão Preto — SP. Entre em contato e agende sua avaliação capilar
            personalizada.
          </p>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-brand-slate-dark/5 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/25 transition-colors duration-200">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">
                    Endereço
                  </p>
                  <p className="font-body text-brand-slate-dark text-sm leading-relaxed whitespace-pre-line">
                    {'Rua Luis José de Mattos, 437 — Salas 02 e 03\nNova Ribeirânia, CEP 14096-680\nRibeirão Preto — SP'}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-brand-slate-dark/5 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/25 transition-colors duration-200">
                  <Clock size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">
                    Horário de Atendimento
                  </p>
                  <p className="font-body text-brand-slate-dark text-sm leading-relaxed whitespace-pre-line">
                    {'Segunda a Sexta: 08h às 19h\nSábados mediante agendamento'}
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/5516991998208"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-brand-slate-dark/5 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/25 transition-colors duration-200">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body text-brand-slate-dark text-sm leading-relaxed whitespace-pre-line">
                    +55 (16) 99199-8208
                  </p>
                </div>
              </div>
            </a>
            <a
              href="mailto:silviaelisaruivo@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-brand-slate-dark/5 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/25 transition-colors duration-200">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">
                    E-mail
                  </p>
                  <p className="font-body text-brand-slate-dark text-sm leading-relaxed whitespace-pre-line">
                    silviaelisaruivo@hotmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://instagram.com/sr.fiosilviaruivo"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-brand-slate-dark/5 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/25 transition-colors duration-200">
                  <Instagram size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-brand-gold tracking-widest uppercase mb-1">
                    Instagram
                  </p>
                  <p className="font-body text-brand-slate-dark text-sm leading-relaxed whitespace-pre-line">
                    @sr.fiosilviaruivo
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/5516991998208?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20capilar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 gold-gradient text-white font-body font-semibold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-brand-gold/30 transition-all duration-300 hover:scale-105 w-full"
            >
              <WhatsAppIcon size={20} />
              Agendar pelo WhatsApp
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-[450px] lg:h-full min-h-[400px]">
            <iframe
              title="Localização SR FIO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.8!2d-47.85!3d-21.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzM2LjAiUyA0N8KwNTEnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Rua+Luis+Jos%C3%A9+de+Mattos+437+Nova+Ribeirania+Ribeirao+Preto+SP"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
