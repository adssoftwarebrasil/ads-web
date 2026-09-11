import { MapPin, Phone } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW, WA_SOLAR_MSG_ACC } from '../theme';
import { useInView } from '../useInView';

const regions = [
  { name: 'Barreiras', uf: 'BA', delay: '600ms' },
  { name: 'Luís Eduardo Magalhães', uf: 'BA', delay: '700ms' },
  { name: 'Região Oeste da Bahia', uf: 'BA', delay: '800ms' },
  { name: 'Serra Gerais', uf: 'TO', delay: '900ms' },
];

export default function AreaAtendimento() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="área-de-atendimento"
      className="py-20 lg:py-28"
      style={{ background: 'radial-gradient(circle, rgba(96, 174, 220, 0.1) 0%, white 70%)' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <p
              className={`text-sm font-semibold tracking-wider mb-4 transition-all duration-600 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: BLUE_LIGHT, letterSpacing: '2px' }}
            >
              ONDE ATUAMOS
            </p>
            <h2
              className={`text-3xl lg:text-5xl font-bold mb-6 transition-all duration-600 delay-200 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: BLUE }}
            >
              Atendimento em Toda Região
            </h2>
            <p
              className={`text-xl mb-10 transition-all duration-600 delay-400 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: 'rgb(60, 60, 60)' }}
            >
              Levamos nossas soluções para um raio de 300km de Barreiras
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className={`bg-white border-2 rounded-xl p-6 transition-all duration-600 hover:scale-105 hover:shadow-lg ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ borderColor: 'rgb(240, 240, 240)', transitionDelay: r.delay }}
                >
                  <MapPin width={28} height={28} className="lucide lucide-map-pin mb-3" style={{ color: YELLOW }} />
                  <h3 className="text-2xl font-bold mb-1" style={{ color: BLUE }}>
                    {r.name}
                  </h3>
                  <p style={{ color: 'rgb(100, 100, 100)' }}>{r.uf}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div
              className={`rounded-3xl p-12 shadow-2xl transition-all duration-600 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgb(254, 201, 1) 0%, rgb(255, 217, 7) 100%)',
                boxShadow: 'rgba(254, 201, 1, 0.3) 0px 15px 50px',
                transitionDelay: '800ms',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(0, 73, 176, 0.15)' }}
              >
                <Phone width={32} height={32} className="lucide lucide-phone " style={{ color: BLUE }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: BLUE }}>
                Atendemos sua região!
              </h3>
              <p className="text-lg mb-8" style={{ color: 'rgba(0, 73, 176, 0.8)' }}>
                Entre em contato e descubra como podemos ajudar
              </p>
              <a
                href={WA_SOLAR_MSG_ACC}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-3 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: BLUE }}
              >
                <Phone width={24} height={24} className="lucide lucide-phone " />
                <span>Falar com Especialista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
