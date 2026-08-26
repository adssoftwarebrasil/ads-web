import { Clock, MapPin } from 'lucide-react';

const days = [
  { name: 'Segunda-feira', hours: '08:00 – 17:30' },
  { name: 'Terça-feira', hours: '08:00 – 17:30' },
  { name: 'Quarta-feira', hours: '08:00 – 17:30' },
  { name: 'Quinta-feira', hours: '08:00 – 17:30' },
  { name: 'Sexta-feira', hours: '08:00 – 17:30' },
  { name: 'Sábado', hours: '08:00 – 14:00' },
];

export default function Hours() {
  return (
    <section id="horarios" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="section-reveal">
            <span className="text-brand-gold-dark text-sm font-semibold uppercase tracking-widest mb-3 block">
              Quando nos visitar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
              Horários de<br />Funcionamento
            </h2>
            <div className="gold-divider mb-8"></div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-semibold bg-red-500/10 border border-red-500/30 text-red-500">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Fechado hoje (Domingo)
            </div>
            <div className="bg-white rounded-2xl border border-brand-gold/15 overflow-hidden shadow-sm">
              {days.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between px-6 py-4 border-b last:border-b-0 border-brand-gold/8 transition-colors duration-200 hover:bg-brand-gold/4"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="flex-shrink-0 text-brand-dark/30" />
                    <span className="text-sm font-medium text-brand-dark/70">{d.name}</span>
                  </div>
                  <span className="text-sm font-medium text-brand-dark/70">{d.hours}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-4 border-b last:border-b-0 border-brand-gold/8 transition-colors duration-200 bg-brand-gold/8">
                <div className="flex items-center gap-3">
                  <Clock size={14} className="flex-shrink-0 text-brand-gold-dark" />
                  <span className="text-sm font-medium text-brand-dark font-semibold">
                    Domingo
                    <span className="ml-2 text-xs font-normal text-brand-gold-dark">(Hoje)</span>
                  </span>
                </div>
                <span className="text-sm font-medium text-red-400">Fechado</span>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-gold/15">
              <MapPin size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-brand-dark font-semibold text-sm mb-0.5">Como chegar</div>
                <div className="text-brand-dark/60 text-sm">
                  R. São José, 179 — Centro, Juazeiro do Norte - CE, 63010-025
                </div>
              </div>
            </div>
          </div>
          <div className="section-reveal section-reveal-delay-2">
            <div className="rounded-2xl overflow-hidden border border-brand-gold/20 shadow-xl h-[420px] lg:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3539432352727!2d-39.32074169178395!3d-7.200397341841566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a17f55cdabba2f%3A0x2b7ca68b9fa9c9a3!2sLoja%20Pe.%20C%C3%ADcero!5e0!3m2!1spt-BR!2sbr!4v1772128878921!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Loja Padre Cícero"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
