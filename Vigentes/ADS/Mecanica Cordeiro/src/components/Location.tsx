import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-[#30312C] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="inline-block text-[#E32626] text-xs font-bold tracking-widest uppercase mb-3">
                Nossa Localização
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#FDFDFD] leading-tight">
                Fácil de Encontrar em Sinop
              </h2>
            </div>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#E32626]/20 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Endereço</div>
                  <div className="text-white/60 text-sm mt-0.5 leading-relaxed">
                    Rua Ema Kunch, 167
                    <br />
                    Jardim Safira, Sinop – MT
                    <br />
                    CEP: 78551-373
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#E32626]/20 rounded-xl flex items-center justify-center text-[#E32626] flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Horários</div>
                  <div className="text-white/60 text-sm mt-0.5 leading-relaxed">
                    Segunda a Sexta
                    <br />
                    07:30 – 11:30 | 13:30 – 18:00
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Rua+Ema+Kunch,167+Jardim+Safira+Sinop+MT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E32626] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#c41e1e] transition-colors text-sm"
            >
              <Navigation size={16} />
              Traçar Rota
            </a>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11044.049885589013!2d-55.506623115588475!3d-11.85896624418595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93082bca5c3db3c3%3A0x5cda8250d0f897ed!2sMec%C3%A2nica%20Cordeiro!5e0!3m2!1spt-BR!2sbr!4v1771522791667!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Mecânica Cordeiro"
              style={{ border: '0px', display: 'block' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
