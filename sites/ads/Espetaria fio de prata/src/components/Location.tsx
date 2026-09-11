import { MapPin, Clock, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Location() {
  return (
    <section className="bg-[#161616] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">Onde estamos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(230,232,234)] leading-tight">Localização &amp; Horários</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1e1e1e] border border-white/6 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-amber-500/15 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <MapPin size={16} className="text-amber-400" />
                </div>
                <h3 className="text-[rgb(230,232,234)] font-semibold">Endereço</h3>
              </div>
              <p className="text-[rgb(230,232,234)]/65 text-sm leading-relaxed mb-4">
                Av. das Sibipirunas, 954<br />
                Jardim Jacarandás, Sinop – MT<br />
                CEP 78557-694
              </p>
              <a
                href="https://maps.google.com/?q=Espetaria+Fio+de+Prata,+Sinop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                <Navigation size={13} />
                Como chegar
              </a>
            </div>
            <div className="bg-[#1e1e1e] border border-white/6 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-amber-500/15 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <Clock size={16} className="text-amber-400" />
                </div>
                <h3 className="text-[rgb(230,232,234)] font-semibold">Horários</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[rgb(230,232,234)]/60 text-sm">Terça – Domingo</span>
                  <span className="text-amber-400 font-semibold text-sm">18:00 – 23:00</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 text-xs font-medium">Aberto hoje</span>
                </div>
              </div>
            </div>
            <a
              href="http://wa.me/5566996043627"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] font-bold py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              Fale conosco no WhatsApp
            </a>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/6 h-80 lg:h-full min-h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.3767077929388!2d-55.51000887769031!3d-11.878835843126343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f0033aeb565%3A0x692b9a550ac30d1f!2sEspetaria%20Fio%20de%20Prata!5e0!3m2!1spt-BR!2sbr!4v1773323983372!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Fio de Prata Espetaria"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
