import { Shield, Award, Clock, Users } from 'lucide-react';

const IMG = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg2%2Fquem-somos.webp';

const features = [
  { icon: Shield, title: 'Segurança', desc: 'Veículos revisados e verificados' },
  { icon: Award, title: 'Qualidade', desc: 'Procedência garantida' },
  { icon: Clock, title: 'Agilidade', desc: 'Processo rápido e eficiente' },
  { icon: Users, title: 'Atendimento', desc: 'Personalizado e direto' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[rgb(254,240,115)] text-[rgb(16,16,16)] rounded-full text-sm font-semibold">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(16,16,16)] mb-6 leading-tight">
              Transparência e Confiança em Cada Negócio
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <span className="font-bold text-[rgb(193,148,35)]">Taquaral Veículos</span> nasceu com um propósito claro: transformar a experiência de compra e venda de veículos, oferecendo transparência, segurança e soluções acessíveis para cada cliente.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com <span className="font-bold">1 ano de atuação</span> no mercado, já conquistamos a confiança de centenas de clientes, sempre buscando crescimento contínuo e excelência no atendimento. Nosso compromisso é oferecer veículos de procedência com toda a assessoria necessária para uma negociação justa e segura.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(254,240,115)] rounded-lg flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-[rgb(16,16,16)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[rgb(16,16,16)] mb-1">{f.title}</div>
                    <div className="text-sm text-gray-600">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[rgb(193,148,35)]/20 rounded-2xl transform rotate-3"></div>
              <img
                src={IMG}
                alt="Taquaral Veículos - Concessionária"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
