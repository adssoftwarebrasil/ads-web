import { ShieldCheck, Heart, Sparkles, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = { Icon: LucideIcon; iconClass: string; title: string; text: string };

const features: Feature[] = [
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[rgb(197,46,52)]',
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com produtos certificados e marcas de confiança no mercado óptico.',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart text-[rgb(197,46,52)]',
    title: 'Atendimento Humanizado',
    text: 'Cada cliente é único. Ouvimos suas necessidades e indicamos a melhor solução para você.',
  },
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles text-[rgb(197,46,52)]',
    title: 'Moda e Estilo',
    text: 'Modelos que acompanham as tendências globais para você expressar sua personalidade.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-[rgb(197,46,52)]',
    title: 'Agilidade no Serviço',
    text: 'Agilidade na entrega das lentes sem abrir mão da precisão e do cuidado com sua visão.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/sobre-nos.webp"
                alt="Sobre a Ótica Brilhar"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(197,46,52)] text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <div className="text-4xl font-bold">16+</div>
              <div className="text-sm mt-1 opacity-90">Anos no mercado</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-[rgb(13,111,69)] text-white rounded-xl px-4 py-3 shadow-lg hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-300 text-lg">★★★★★</span>
              </div>
              <div className="text-xs mt-0.5 opacity-90">5.0 no Google</div>
            </div>
          </div>
          <div>
            <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Sobre a Ótica Brilhar</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Cuidando da sua visão com <span className="text-[rgb(13,111,69)]">dedicação e expertise</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Ótica Brilhar nasceu com um propósito claro: oferecer qualidade, confiança e cuidado verdadeiro com a
              saúde visual de cada cliente. Com mais de 16 anos de experiência no mercado óptico de Rondonópolis – MT,
              somos referência em atendimento personalizado.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Com duas unidades estrategicamente localizadas, trabalhamos com uma ampla variedade de armações, lentes
              oftálmicas de alta tecnologia, óculos de sol, acessórios e soluções visuais completas. Nosso diferencial
              está na combinação de tecnologia, moda e um atendimento que vai muito além do funcional — valoriza a
              personalidade e o bem-estar de quem nos visita.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const { Icon } = f;
                return (
                  <div key={f.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgb(197,46,52)]/10 flex items-center justify-center">
                      <Icon className={f.iconClass} width={18} height={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{f.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{f.text}</div>
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
