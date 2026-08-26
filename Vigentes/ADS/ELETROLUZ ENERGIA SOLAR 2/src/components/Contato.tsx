import { Phone, Headphones, Zap, Instagram } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW, WA_SOLAR_MSG, WA_POSVENDA_MSG, WA_MATERIAL_MSG, INSTAGRAM } from '../theme';
import { useInView } from '../useInView';

const IG_GRADIENT =
  'linear-gradient(45deg, rgb(240, 148, 51) 0%, rgb(230, 104, 60) 25%, rgb(220, 39, 67) 50%, rgb(204, 35, 102) 75%, rgb(188, 24, 136) 100%)';

interface Channel {
  Icon: typeof Phone;
  iconColor: string;
  label: string;
  labelColor: string;
  phone: string;
  phoneColor: string;
  cardStyle: React.CSSProperties;
  href: string;
  btnStyle: React.CSSProperties;
  delay: string;
}

const channels: Channel[] = [
  {
    Icon: Phone,
    iconColor: BLUE,
    label: 'Energia Solar Comercial',
    labelColor: BLUE,
    phone: '(77) 99827-0291',
    phoneColor: BLUE,
    cardStyle: { background: 'linear-gradient(135deg, rgb(254, 201, 1) 0%, rgb(255, 217, 7) 100%)', transitionDelay: '600ms' },
    href: WA_SOLAR_MSG,
    btnStyle: { backgroundColor: BLUE, color: 'white' },
    delay: '600ms',
  },
  {
    Icon: Headphones,
    iconColor: YELLOW,
    label: 'Pós-Venda Energia Solar',
    labelColor: 'white',
    phone: '(77) 99915-0105',
    phoneColor: 'white',
    cardStyle: { background: 'rgb(0, 73, 176)', transitionDelay: '800ms' },
    href: WA_POSVENDA_MSG,
    btnStyle: { backgroundColor: YELLOW, color: BLUE },
    delay: '800ms',
  },
  {
    Icon: Zap,
    iconColor: YELLOW,
    label: 'Material Elétrico',
    labelColor: 'white',
    phone: '(77) 98809-9543',
    phoneColor: 'white',
    cardStyle: { background: 'rgb(96, 174, 220)', transitionDelay: '1000ms' },
    href: WA_MATERIAL_MSG,
    btnStyle: { backgroundColor: YELLOW, color: BLUE },
    delay: '1000ms',
  },
];

export default function Contato() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p
              className={`text-sm font-black tracking-widest mb-4 transition-all duration-600 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: BLUE_LIGHT, textTransform: 'uppercase' }}
            >
              FALE CONOSCO
            </p>
            <h2
              className={`text-3xl lg:text-5xl font-black mb-6 transition-all duration-600 delay-200 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: BLUE }}
            >
              Entre em Contato
            </h2>
            <p
              className={`text-lg mb-10 transition-all duration-600 delay-400 font-medium ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ color: 'rgb(80, 80, 80)' }}
            >
              Escolha o canal ideal para falar com nossa equipe especializada e tire suas dúvidas.
            </p>
            <div className="space-y-5">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className={`group rounded-3xl p-8 transition-all duration-600 hover:shadow-2xl hover:scale-[1.02] ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={c.cardStyle}
                >
                  <c.Icon width={40} height={40} className="mb-4" style={{ color: c.iconColor }} />
                  <p className="text-sm font-black mb-2 uppercase tracking-wider" style={{ color: c.labelColor }}>
                    {c.label}
                  </p>
                  <p className="text-3xl font-black mb-6" style={{ color: c.phoneColor }}>
                    {c.phone}
                  </p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden w-full flex items-center justify-center space-x-2 py-4 rounded-xl font-black text-lg transition-all duration-300 shadow-lg"
                    style={c.btnStyle}
                  >
                    <Phone width={22} height={22} className="lucide lucide-phone fill-current" />
                    <span className="uppercase tracking-tight">Iniciar Conversa</span>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine-fast"></div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`rounded-3xl p-10 border-2 transition-all duration-600 self-start sticky top-24 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              background: 'linear-gradient(rgb(245, 248, 252) 0%, white 100%)',
              borderColor: 'rgb(240, 240, 240)',
              transitionDelay: '800ms',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              style={{ background: IG_GRADIENT }}
            >
              <Instagram width={32} height={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4" style={{ color: BLUE }}>
              Siga no Instagram
            </h3>
            <p className="text-2xl font-black mb-4" style={{ color: BLUE_LIGHT }}>
              @eletroluzbarreiras
            </p>
            <p className="text-lg leading-relaxed mb-8 font-medium" style={{ color: 'rgb(80, 80, 80)' }}>
              Acompanhe nossas novidades, dicas de economia e projetos realizados em tempo real.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-full flex items-center justify-center space-x-3 py-5 rounded-2xl font-black text-white transition-all duration-300 hover:scale-105 shadow-xl"
              style={{ background: IG_GRADIENT }}
            >
              <Instagram width={24} height={24} className="lucide lucide-instagram " />
              <span className="uppercase tracking-tight text-lg">Seguir Agora</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine-fast"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
