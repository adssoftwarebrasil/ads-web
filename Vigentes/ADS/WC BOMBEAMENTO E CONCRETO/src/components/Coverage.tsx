import { Navigation, MapPin } from 'lucide-react';

const cities = [
  'Contagem',
  'Igarapé',
  'São Joaquim de Bicas',
  'Mateus Leme',
  'Mário Campos',
  'Sarzedo',
  'Juatuba',
];

export default function Coverage() {
  return (
    <section id="cobertura" className="bg-brand-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Área de Cobertura
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white leading-tight">
              Atendemos até <span className="text-brand-orange">30 km</span> de Betim
            </h2>
            <p className="mt-4 text-brand-gray leading-relaxed">
              Nossa frota e equipe estão prontas para atender sua obra em toda a Grande Betim e cidades do
              entorno. Consulte disponibilidade para sua região.
            </p>
            <div className="mt-8 flex items-center gap-3 p-4 bg-brand-surface rounded-xl border border-white/6">
              <Navigation size={20} className="text-brand-orange flex-shrink-0" />
              <div>
                <p className="text-xs text-brand-gray">Sede da empresa</p>
                <p className="text-sm font-semibold text-brand-white">R. Tavira, 54 — São João, Betim - MG</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all duration-500 bg-brand-orange/10 border-brand-orange/35 opacity-100 translate-y-0"
                style={{ transitionDelay: '200ms' }}
              >
                <MapPin size={14} className="text-brand-orange" />
                <span className="text-sm font-medium text-brand-orange">
                  Betim<span className="ml-1 text-xs text-brand-gray font-normal">• Sede</span>
                </span>
              </div>
              {cities.map((city, i) => (
                <div
                  key={city}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all duration-500 bg-brand-surface border-white/6 hover:border-white/15 opacity-100 translate-y-0"
                  style={{ transitionDelay: `${260 + i * 60}ms` }}
                >
                  <MapPin size={14} className="text-brand-green" />
                  <span className="text-sm font-medium text-brand-white">{city}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/553199292900?text=Olá!%20Quero%20verificar%20se%20vocês%20atendem%20na%20minha%20cidade."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange text-brand-dark font-bold rounded-xl hover:bg-amber-400 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Verificar minha cidade
            </a>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl"
              style={{ height: '420px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.7712689087057!2d-44.16846472477176!3d-19.97611928142265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c110ed40726b%3A0x46be2990c45d6b5d!2sWC%20Concreto%20e%20Bombeamento!5e0!3m2!1spt-BR!2sbr!4v1776848809166!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização WC Concreto"
                style={{ border: '0px', filter: 'grayscale(0.2) contrast(1.1)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
