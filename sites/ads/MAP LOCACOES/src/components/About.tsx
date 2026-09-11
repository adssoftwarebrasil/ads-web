import { Shield, Star, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const pillars = [
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Desde 2018 no mercado',
    },
    {
      icon: Star,
      title: 'Qualidade',
      description: 'Manutenção preventiva constante',
    },
    {
      icon: Users,
      title: 'Humanização',
      description: 'Atendimento personalizado',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              A História da MAP Locações
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Fundada em 2018, a MAP Locações nasceu da percepção do crescimento da demanda por locação de
              veículos em São Luís. Começamos com carros e expandimos para motos, sempre com foco em
              excelência no atendimento humanizado. Nossa missão é proporcionar liberdade de locomoção com
              segurança, oferecendo manutenção preventiva rápida e eficiente. Atendemos em toda grande São Luís.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-3">
                    <pillar.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-black mb-1">{pillar.title}</h3>
                  <p className="text-sm text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/map-locacoes%2Flocadora-veiculos-fachada.webp"
              alt="Fachada da MAP Locações"
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
