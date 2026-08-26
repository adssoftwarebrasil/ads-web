import { CheckCircle2, Lightbulb, Wrench, Headset } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: Lightbulb,
    iconClass: 'lucide lucide-lightbulb ',
    title: 'Soluções Inovadoras',
    desc: 'Laboratório homologado com tecnologia de ponta e expertise técnica avançada.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench ',
    title: 'Serviços Especializados',
    desc: 'Oficina autorizada e referência em reparo de direções hidráulicas e turbinas.',
  },
  {
    Icon: Headset,
    iconClass: 'lucide lucide-headset ',
    title: 'Atendimento Personalizado',
    desc: 'Flexibilidade total: atendimento em nosso pátio estruturado ou suporte externo.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-gray-100 rounded-3xl -z-10"></div>
            <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 border border-gray-200 rounded-3xl -z-10"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="col-span-2 group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2Fhidrau-turbo-centro-de-direcoes-bosch-solucoes-inovadoras.webp"
                  alt="Laboratório Hidrau Turbo"
                  loading="lazy"
                  className="w-full aspect-video object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2Fcaminhao-manutencao-oficina.webp"
                  alt="Peças Especializadas"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/hidrau%20turbo%2Fimg%2Fhidrau-turbo-centro-de-direcoes-bosch-atendimento-personalizado.webp"
                  alt="Atendimento Personalizado"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-xl py-3 px-6 rounded-full flex items-center gap-3 border border-gray-100">
                <div className="bg-green-100 p-1.5 rounded-full">
                  <CheckCircle2 size={20} className="lucide lucide-check-circle2 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Desde</p>
                  <p className="text-lg font-bold text-gray-900 leading-none">2017</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.15] mb-6">
              Hidrau Turbo <br className="hidden sm:block" />
              <span className="text-primary-blue">Centro de Direções Bosch</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 text-justify sm:text-left">
              Somos referência em Aparecida de Goiânia na recuperação e venda de peças para direções
              hidráulicas e turbinas a diesel. Atendemos desde concessionárias e transportadoras até o
              consumidor final, sempre com a garantia de peças originais e mão de obra qualificada.
            </p>
            <div className="flex flex-col gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-5 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
                    <f.Icon size={24} className={f.iconClass} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
