import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const states = [
  { uf: 'SP', name: 'São Paulo', cities: ['Cordeirópolis', 'Santa Gertrudes', 'Rio Claro', 'Limeira', 'Jundiaí', 'Campinas'] },
  { uf: 'RJ', name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Niterói', 'São Gonçalo', 'Volta Redonda'] },
  { uf: 'MT', name: 'Mato Grosso', cities: ['Cuiabá', 'Rondonópolis', 'Sinop', 'Várzea Grande'] },
  { uf: 'MS', name: 'Mato Grosso do Sul', cities: ['Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá'] },
  { uf: 'GO', name: 'Goiás', cities: ['Goiânia', 'Anápolis', 'Aparecida de Goiânia', 'Rio Verde'] },
];

export default function Coverage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cobertura" className="py-20 md:py-28 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
          <span className="inline-block text-brand-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Área de Cobertura
          </span>
          <h2 className="section-title mb-4">
            Presente em todo o{' '}
            <span className="text-brand-blue">Brasil</span>
          </h2>
          <p className="section-subtitle">
            Com base em Cordeirópolis (SP), operamos com eficiência para os principais
            estados e cidades do território nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          <div className="animate-on-scroll-left">
            <div className="bg-brand-blue rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-amber/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <h3 className="text-white font-bold text-xl mb-6 relative">
                Estados Atendidos
              </h3>
              <div className="space-y-4 relative">
                {states.map((state) => (
                  <div key={state.uf} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-amber transition-colors duration-300">
                      <span className="text-white text-xs font-bold">{state.uf}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{state.name}</p>
                      <p className="text-white/55 text-xs mt-0.5">
                        {state.cities.slice(0, 4).join(' • ')}
                        {state.cities.length > 4 ? ' e mais...' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/15 relative">
                <p className="text-white/65 text-sm text-center">
                  Atendemos também a todo o território nacional sob consulta
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll-right space-y-5">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Base Principal</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                R. Dr. José Antonio Levy, 262 — Distrito Industrial Flaminio de Freitas Levy
                <br />
                <strong className="text-gray-800">Cordeirópolis — SP, 13494-018</strong>
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.453386804038!2d-47.47040462470204!3d-22.487166379552598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d70013146bb1%3A0x167ad068c413562e!2sMADRE%20TRANSPORTES!5e0!3m2!1spt-BR!2sbr!4v1775155430021!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Madre Transportes"
              />
            </div>

            <div className="bg-brand-amber/10 border border-brand-amber/20 rounded-2xl p-5">
              <p className="text-gray-800 font-semibold text-sm mb-1">
                Precisa de coleta ou entrega em outra região?
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Entre em contato e verificamos a cobertura para sua necessidade.
              </p>
              <a
                href="https://wa.me/5519981211908?text=Ol%C3%A1%21+Preciso+verificar+a+cobertura+de+frete+para+minha+regi%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-md"
              >
                Consultar Minha Região
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
