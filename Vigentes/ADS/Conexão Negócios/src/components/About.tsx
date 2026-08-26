import { CheckCircle2, Lightbulb, Wrench, Headset } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Lightbulb,
    title: 'Soluções de Alta Qualidade',
    text: 'Produtos originais e equipe capacitada buscando o melhor custo-benefício para nossos clientes.',
  },
  {
    Icon: Wrench,
    title: 'Especialistas em Turbocompressores',
    text: 'Recuperação e venda de turbos compressores para linha leve, diesel leve e sistema hidráulico.',
  },
  {
    Icon: Headset,
    title: 'Atendimento Completo',
    text: 'Atendemos concessionárias, transportadores, oficinas e consumidor final com excelência.',
  },
];

export default function About() {
  return (
    <section id="sobre">
      <section id="sobre" className="bg-white py-20 sm:py-28 px-4 sm:px-6 w-full overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-gray-100 rounded-3xl -z-10"></div>
              <div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 border border-gray-200 rounded-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=conexao%20hidrau%20turbo%2FWhatsApp%20Image%202026-04-23%20at%2014.15.52%20(1).jpeg&version_id=null"
                    alt="Nossa estrutura"
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/about-fachada.jpeg"
                    alt="Fachada Conexão Negócios"
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover object-left transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/about-caminhao.jpeg"
                    alt="Atendimento a veículos"
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/about-dono.jpeg"
                    alt="Especialista em turbinas"
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur shadow-xl py-3 px-6 rounded-full flex items-center gap-3 border border-gray-100">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <CheckCircle2 size={20} strokeWidth={2} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Desde</p>
                    <p className="text-lg font-bold text-gray-900 leading-none">2011</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block py-1 px-3 rounded-md bg-blue-50 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.15] mb-6">
                Conexão Negócios <br className="hidden sm:block" />
                <span className="text-primary-blue">Turbina e Sistema Hidráulico</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 text-justify sm:text-left">
                Conexão Negócios foi fundada em 2011, somos uma oficina referência em Goiânia. Especializados em recuperação e venda de turbos compressores. Atendemos concessionárias, transportadores, oficinas até o consumidor final. Nossa missão é fornecer soluções de alta qualidade, sempre com produtos originais e uma equipe capacitada, buscando o melhor custo-benefício para nossos clientes. Se você procura excelência, aqui é o lugar certo!
              </p>
              <div className="flex flex-col gap-6">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
                      <f.Icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-[15px] text-gray-600 leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
