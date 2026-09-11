import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red text-xs font-semibold uppercase tracking-widest mb-3">
            Onde estamos
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
            LOCALIZAÇÃO<span className="text-brand-yellow"> &amp; CONTATO</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin width={18} height={18} className="lucide lucide-map-pin text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Av. Maranhão, Qd 13 A, Lote 10
                    <br />
                    Minaçu – Goiás
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock width={18} height={18} className="lucide lucide-clock text-white" />
                </div>
                <div className="w-full">
                  <h3 className="text-white font-semibold mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Segunda – Sexta</span>
                      <span className="text-sm font-medium text-brand-yellow">07:00 – 18:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Sábado</span>
                      <span className="text-sm font-medium text-brand-yellow">07:00 – 12:00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Domingo</span>
                      <span className="text-sm font-medium text-gray-600">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-semibold">Contato</h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-yellow transition-colors text-sm group"
              >
                <Phone width={16} height={16} className="lucide lucide-phone text-brand-red" />
                <span>+55 (62) 98553-8497</span>
              </a>
              <a
                href="mailto:eslei@hotmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-yellow transition-colors text-sm"
              >
                <Mail width={16} height={16} className="lucide lucide-mail text-brand-red" />
                <span>eslei@hotmail.com</span>
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone width={18} height={18} className="lucide lucide-phone " />
              Falar pelo WhatsApp
            </a>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-video lg:aspect-auto lg:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5010.533309183513!2d-48.210774199999996!3d-13.5280692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93468543ca059e87%3A0xff0d7dae9ce17272!2sEslei%20Auto%20Pe%C3%A7as!5e1!3m2!1spt-BR!2sbr!4v1772209402974!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Eslei Auto Peças"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
