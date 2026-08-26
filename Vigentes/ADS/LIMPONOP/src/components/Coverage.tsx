import { MapPin, CheckCircle } from 'lucide-react';
import { coverage } from '../data';

export default function Coverage() {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Área de Atendimento
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight mb-5">
              Levamos qualidade até você em <span className="text-brand-blue">toda a região</span>
            </h2>
            <p className="text-brand-gray leading-relaxed mb-10">
              Nossa área de atendimento abrange Sinop e cidades da região norte de Mato Grosso. Entre
              em contato e verifique a disponibilidade para seu município.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coverage.map((c) =>
                c.isHead ? (
                  <div
                    key={c.city}
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 border-brand-pink bg-brand-pink/5"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-brand-pink">
                      <MapPin width={16} height={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-pink">{c.city}</p>
                      <p className="text-xs text-brand-gray">{c.state}</p>
                    </div>
                    <span className="ml-auto text-xs bg-brand-pink text-white px-2 py-0.5 rounded-full font-medium">
                      Sede
                    </span>
                  </div>
                ) : (
                  <div
                    key={c.city}
                    className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 border-gray-200 bg-white hover:border-brand-blue hover:bg-brand-blue/5"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle width={16} height={16} className="text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-brand-dark">{c.city}</p>
                      <p className="text-xs text-brand-gray">{c.state}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80 lg:h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.365748489223!2d-55.515355224941594!3d-11.879600388344324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fdd4bbf321d%3A0x6873869d132384f4!2sLimponop%20Solu%C3%A7%C3%B5es%20em%20Limpeza!5e0!3m2!1spt-BR!2sbr!4v1771527309690!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Limponop"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
