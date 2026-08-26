import { CheckCircle2, Users, Award, Heart } from 'lucide-react';

const IMG_CAMINHAO =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/caminhao-branco-sendo-lavado-em-garagem_640x1138.webp';
const IMG_CAMINHONETE =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/lavagem-de-caminhonete-preta-sob-telhado-metalico_640x1136.webp';

const features = [
  'Atendimento personalizado e ágil',
  'Produtos de alta qualidade e seguros para a pintura',
  'Experiência com frotas e veículos de grande porte',
  'Estrutura coberta e organizada',
  'Localização estratégica no Distrito Industrial de Sinop',
  'Transparência no serviço e no preço',
];

const values = [
  { icon: Users, iconClass: 'lucide lucide-users text-brand-blue', label: 'Foco no Cliente' },
  { icon: Award, iconClass: 'lucide lucide-award text-brand-blue', label: 'Qualidade Total' },
  { icon: Heart, iconClass: 'lucide lucide-heart text-brand-blue', label: 'Comprometimento' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-brand-black via-[rgb(12,14,18)] to-brand-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgb(169, 199, 209), transparent 60%)',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
              Nossa História
            </span>
            <h2 className="section-title mb-6">
              Nascemos de um Sonho,{' '}
              <span style={{ color: 'rgb(169, 199, 209)' }}>Crescemos com Propósito</span>
            </h2>
            <div className="space-y-4 text-white/65 leading-relaxed mb-8">
              <p>
                A <strong className="text-white font-semibold">Dois Irmãos Car</strong> nasceu em
                2022 da determinação de dois irmãos que queriam mais do que um emprego — queriam
                construir algo com as próprias mãos. Com poucos recursos e muita dedicação,
                começaram atendendo vizinhos e clientes próximos, ganhando confiança pelo capricho
                em cada lavagem.
              </p>
              <p>
                Em menos de três anos, o que era um sonho modesto cresceu para se tornar referência
                em estética automotiva no Distrito Industrial de Sinop-MT. Hoje, a empresa atende
                carros, caminhões e máquinas pesadas, servindo motoristas particulares,
                transportadoras e o agronegócio local.
              </p>
              <p>
                Mais do que limpar veículos, entregamos{' '}
                <strong className="text-white font-semibold">
                  confiança, cuidado e valorização
                </strong>{' '}
                de cada veículo que passa por nossas mãos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2
                    width={16}
                    height={16}
                    className="lucide lucide-check-circle2 text-brand-blue mt-0.5 shrink-0"
                  />
                  <span className="text-white/70 text-sm leading-snug">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.label} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center border border-brand-blue/20">
                      <Icon width={22} height={22} className={value.iconClass} />
                    </div>
                    <span className="text-white/60 text-xs text-center font-medium">
                      {value.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
                    <img
                      src={IMG_CAMINHAO}
                      alt="Lavagem de caminhão"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="card-glass p-4 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white mb-1">2022</div>
                    <div className="text-brand-blue text-xs font-medium">Ano de Fundação</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card-glass p-4 rounded-2xl text-center">
                    <div className="text-3xl font-black text-white mb-1">100%</div>
                    <div className="text-brand-blue text-xs font-medium">Satisfação Garantida</div>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
                    <img
                      src={IMG_CAMINHONETE}
                      alt="Lavagem de caminhonete"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: 'rgb(169, 199, 209)' }}
              ></div>
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-15 blur-2xl"
                style={{ backgroundColor: 'rgb(203, 230, 234)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
