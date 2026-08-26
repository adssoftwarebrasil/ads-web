import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const FACHADA =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/caroba/objects/download?preview=true&prefix=scorpionxpress%2FFachada.jpeg&version_id=null';

const HOURS = [
  { day: 'Segunda a Sexta', time: '08:00 – 18:00', accent: 'text-[#fcc209]' },
  { day: 'Sábado', time: '08:00 – 13:00', accent: 'text-[#fcc209]' },
  { day: 'Domingo', time: 'Fechado', accent: 'text-[#b31115]' },
];

const AREAS = ['Lins - SP', 'Guaiçara - SP', 'Região'];

export default function Store() {
  return (
    <section id="loja" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#fcc209] text-sm font-semibold tracking-widest uppercase mb-3">
            Nossa Loja
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Venha nos <span className="text-[#fcc209]">visitar</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Estamos localizados em Lins-SP, prontos para te atender com a melhor solução em baterias
            automotivas.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={FACHADA}
              alt="Fachada Scorpion Xpress"
              className="w-full h-full object-cover min-h-64 sm:min-h-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 bg-[#fcc209] text-black font-black text-sm px-4 py-2 rounded-full w-fit">
                <MapPin size={14} className="lucide lucide-map-pin " />
                Lins - SP
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#fcc209]/10 flex items-center justify-center">
                  <Clock size={20} className="lucide lucide-clock text-[#fcc209]" />
                </div>
                <h3 className="text-white font-bold text-base">Horário de Funcionamento</h3>
              </div>
              <div className="flex flex-col gap-3">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-white/60 text-sm">{h.day}</span>
                    <span className={`text-sm font-semibold ${h.accent}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#fcc209]/10 flex items-center justify-center">
                  <Phone size={20} className="lucide lucide-phone text-[#fcc209]" />
                </div>
                <h3 className="text-white font-bold text-base">Contato e Redes Sociais</h3>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5514996487352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#fcc209] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <WhatsAppIcon size={16} fill="#22c55e" />
                  </div>
                  <span className="text-sm">(14) 99648-7352 — WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/scorpion_lins.sp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#fcc209] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                    <Instagram size={16} className="lucide lucide-instagram text-pink-400" />
                  </div>
                  <span className="text-sm">@scorpion_lins.sp</span>
                </a>
                <a
                  href="https://www.facebook.com/scorpionbaterias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#fcc209] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Facebook size={16} className="lucide lucide-facebook text-blue-400" />
                  </div>
                  <span className="text-sm">Scorpion Baterias</span>
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#fcc209]/10 flex items-center justify-center">
                  <MapPin size={20} className="lucide lucide-map-pin text-[#fcc209]" />
                </div>
                <h3 className="text-white font-bold text-base">Área de Atendimento</h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                {AREAS.map((area) => (
                  <span
                    key={area}
                    className="bg-[#fcc209]/10 border border-[#fcc209]/30 text-[#fcc209] text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
