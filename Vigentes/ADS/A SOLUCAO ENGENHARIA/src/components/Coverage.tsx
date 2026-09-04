import { MapPin } from 'lucide-react';

const cities = [
  'Aracaju',
  'Nossa Senhora do Socorro',
  'Itabaiana',
  'Lagarto',
  'Estância',
  'Propriá',
  'Tobias Barreto',
];

export default function Coverage() {
  return (
    <section className="py-20 lg:py-28 bg-[#090B4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block bg-[#92AA40]/20 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Área de Atendimento
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Atendemos em Todo{' '}
              <span className="text-[#92AA40]">o Estado de Sergipe</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Nossos serviços e produtos chegam até você em diversas cidades
              sergipanas. Com logística eficiente, garantimos entrega e
              instalação nos principais municípios.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5"
                >
                  <MapPin size={14} className="text-[#92AA40] shrink-0" />
                  <span className="text-white/80 text-sm font-medium">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="http://wa.me/5579998705409?text=Olá! Gostaria de verificar atendimento na minha cidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Verificar atendimento na minha cidade
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-72 sm:h-96 lg:h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6613385160567!2d-37.05855997495609!3d-10.913321739243871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3001b3149ab%3A0x27e453c17a8079a2!2sA%20SOLU%C3%87%C3%83O%20ENGENHARIA!5e0!3m2!1spt-BR!2sbr!4v1776947717677!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização A Solução Engenharia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
