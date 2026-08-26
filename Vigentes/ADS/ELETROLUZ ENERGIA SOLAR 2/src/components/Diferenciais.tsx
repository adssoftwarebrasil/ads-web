import { Award, MapPin, Star, Leaf } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW } from '../theme';
import { useInView } from '../useInView';

const items = [
  {
    Icon: Award,
    title: '48 Anos de Tradição',
    desc: 'Quase meio século servindo Barreiras com qualidade e confiança',
    delay: '0ms',
  },
  {
    Icon: MapPin,
    title: 'Cobertura Regional',
    desc: 'Atendemos um raio de 300km de Barreiras, incluindo toda região oeste da Bahia',
    delay: '200ms',
  },
  {
    Icon: Star,
    title: 'Produtos de Qualidade',
    desc: 'Trabalhamos apenas com marcas reconhecidas e materiais certificados',
    delay: '400ms',
  },
  {
    Icon: Leaf,
    title: 'Energia Sustentável',
    desc: '7 anos de expertise em energia solar fotovoltaica',
    delay: '600ms',
  },
];

export default function Diferenciais() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-semibold tracking-wider mb-4 transition-all duration-600 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE_LIGHT, letterSpacing: '2px' }}
          >
            POR QUE ESCOLHER A ELETROLUZ
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-bold transition-all duration-600 delay-200 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE }}
          >
            Nossos Diferenciais
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className={`text-center transition-all duration-600 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(254, 201, 1, 0.1)' }}
              >
                <item.Icon width={40} height={40} style={{ color: YELLOW }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: BLUE }}>
                {item.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgb(80, 80, 80)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
