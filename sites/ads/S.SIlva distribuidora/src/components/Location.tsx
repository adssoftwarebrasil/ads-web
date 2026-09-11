import { MapPin, Clock, Phone, Mail, LucideIcon } from 'lucide-react';

interface Info {
  icon: LucideIcon;
  iconCls: string;
  title: string;
  text: string;
  delay: string;
}

const infos: Info[] = [
  { icon: MapPin, iconCls: 'lucide-map-pin', title: 'Endereço', text: 'Av. Sr. dos Passos, 1723A - Centro, Feira de Santana - BA, 44002-375', delay: '0ms' },
  { icon: Clock, iconCls: 'lucide-clock', title: 'Horário de funcionamento', text: 'Seg a Sex: 07h30 às 18h  ·  Sáb: 07h30 às 12h', delay: '80ms' },
  { icon: Phone, iconCls: 'lucide-phone', title: 'Telefones', text: '(75) 3603-8100  ·  (75) 98196-0232', delay: '160ms' },
  { icon: Mail, iconCls: 'lucide-mail', title: 'E-mail', text: 'pedro.nunes@ssilvadistribuidora.com.br', delay: '240ms' },
];

export default function Location() {
  return (
    <section id="localizacao" className="relative py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-navy text-xs font-bold uppercase tracking-[0.2em] mb-5">Onde estamos</span>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.05]">
            Venha nos visitar em <span className="text-gradient-brand">Feira de Santana.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            {infos.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="reveal group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-blue/40 hover:shadow-lg transition-all flex items-start gap-4"
                  style={{ transitionDelay: info.delay }}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition">
                    <Icon className={`lucide ${info.iconCls} w-5 h-5`} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-brand-navy mb-1">{info.title}</p>
                    <p className="text-sm text-slate-600 break-words">{info.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-3 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/15 border border-slate-200/80 h-[420px] lg:h-full min-h-[420px]">
              <iframe
                title="Localização S. Silva Distribuidora"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.9949811288825!2d-38.96799572493554!3d-12.248618588004298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714378b63823493%3A0x4d6fa91322b086f0!2sS.%20Silva%20Distribuidora!5e0!3m2!1spt-BR!2sbr!4v1776708312095!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
