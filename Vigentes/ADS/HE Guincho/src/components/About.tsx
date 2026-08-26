import { Clock, Shield, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Highlight {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const highlights: Highlight[] = [
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[rgb(68,235,21)] flex-shrink-0',
    title: 'Rapidez',
    description: 'Atendimento emergencial em minutos',
    delay: '0.6s',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield text-[rgb(68,235,21)] flex-shrink-0',
    title: 'Confiança',
    description: 'Equipamentos seguros e equipe treinada',
    delay: '0.7s',
  },
  {
    Icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle text-[rgb(68,235,21)] flex-shrink-0',
    title: 'Disponibilidade',
    description: '24h por dia, 7 dias por semana',
    delay: '0.8s',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 px-4" style={{ background: 'rgb(247, 247, 249)' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="opacity-0">
            <div className="relative group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/heguincho%2Fimgi_25_508400347_17847444585500277_7764651268595344145_n.webp"
                alt="HE Guincho"
                className="w-full rounded-3xl shadow-2xl image-hover"
                loading="lazy"
                style={{ boxShadow: 'rgba(68, 235, 21, 0.25) 0px 25px 70px' }}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[rgb(68,235,21)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
          <div>
            <h2
              className="text-black font-black text-4xl lg:text-6xl mb-6 opacity-0"
              style={{ animationDelay: '0.2s', letterSpacing: '0.02em' }}
            >
              QUEM SOMOS
            </h2>
            <div
              className="w-20 h-1.5 bg-gradient-to-r from-[rgb(68,235,21)] to-[rgb(40,180,0)] mb-8 rounded-full opacity-0"
              style={{ animationDelay: '0.3s', boxShadow: 'rgba(68, 235, 21, 0.5) 0px 0px 20px' }}
            ></div>
            <div
              className="space-y-6 text-gray-700 text-lg leading-relaxed opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <p>
                Com 1 ano no mercado, o <strong>HE Guincho</strong> nasceu do esforço e empenho em
                oferecer o melhor serviço de remoção de veículos em Ituiutaba-MG.
              </p>
              <p>
                Somos uma empresa que garante serviços com{' '}
                <strong>responsabilidade e rapidez</strong>, trabalhando com eficiência e qualidade
                em cada atendimento.
              </p>
              <p>
                Nossa missão é proporcionar tranquilidade aos nossos clientes em momentos de
                necessidade, oferecendo atendimento 24 horas com profissionalismo.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              {highlights.map((h) => {
                const { Icon } = h;
                return (
                  <div
                    key={h.title}
                    className="bg-white border-l-4 border-[rgb(68,235,21)] p-7 rounded-2xl card-hover group opacity-0"
                    style={{ animationDelay: h.delay, boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 20px' }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgb(68,235,21)]/20 to-[rgb(40,180,0)]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <Icon
                          width={28}
                          height={28}
                          className={h.iconClass}
                          style={{ filter: 'drop-shadow(rgba(68, 235, 21, 0.3) 0px 2px 4px)' }}
                        />
                      </div>
                      <div>
                        <h3 className="text-black font-bold text-xl mb-2">{h.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{h.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
