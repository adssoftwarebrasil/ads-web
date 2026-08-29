import { Star, Users, DollarSign, Truck, Award, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

interface Advantage {
  Icon: LucideIcon;
  title: string;
  text: string;
  bar: string;
  iconBg: string;
}

const advantages: Advantage[] = [
  {
    Icon: Star,
    title: 'Alta Qualidade dos Produtos',
    text: 'Trabalhamos com materiais confiáveis e duráveis.',
    bar: 'from-blue-500 to-blue-600',
    iconBg: 'from-blue-500 to-blue-600',
  },
  {
    Icon: Users,
    title: 'Atendimento Especializado',
    text: 'Nossa equipe está preparada para te ajudar em cada detalhe.',
    bar: 'from-green-500 to-green-600',
    iconBg: 'from-green-500 to-green-600',
  },
  {
    Icon: DollarSign,
    title: 'Preços Competitivos',
    text: 'Oferecemos os melhores preços do mercado.',
    bar: 'from-yellow-500 to-yellow-600',
    iconBg: 'from-yellow-500 to-yellow-600',
  },
  {
    Icon: Truck,
    title: 'Rapidez na Entrega',
    text: 'Entrega rápida e segura dos seus produtos.',
    bar: 'from-red-500 to-red-600',
    iconBg: 'from-red-500 to-red-600',
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(45,48,145)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(248,232,48)]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[rgb(45,48,145)] font-bold tracking-widest uppercase text-sm mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[rgb(45,48,145)] mb-6">
            Vantagens de Escolher a <span className="text-blue-600">RA Loja das Conexões</span>
          </h2>
          <div className="w-24 h-1.5 bg-[rgb(248,232,48)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os benefícios de adquirir produtos conosco, focados na qualidade e no atendimento que sua empresa merece.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map(({ Icon, title, text, bar, iconBg }) => (
            <div
              key={title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${bar} rounded-t-3xl`}></div>
              <div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${iconBg} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(45,48,145)] mb-4 leading-tight">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="relative bg-gradient-to-br from-[rgb(45,48,145)] via-blue-800 to-[rgb(45,48,145)] rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-[rgb(248,232,48)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">Solicite um Orçamento</h3>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Fale conosco e solicite seu orçamento sem compromisso. Nossa equipe está pronta para atender você!
            </p>
            <a
              href={WHATSAPP_ACCENTED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(248,232,48)] text-[rgb(45,48,145)] px-10 py-5 rounded-full text-lg font-black hover:bg-white transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Enviar WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[rgb(45,48,145)]">
            <div className="flex items-start gap-6">
              <div className="bg-[rgb(45,48,145)]/10 p-4 rounded-2xl group-hover:bg-[rgb(45,48,145)] transition-colors">
                <Award size={32} className="text-[rgb(45,48,145)] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[rgb(45,48,145)] mb-3">Experiência Reconhecida</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Oferecemos uma gama completa de soluções industriais com mais de 9 anos de expertise.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[rgb(248,232,48)]">
            <div className="flex items-start gap-6">
              <div className="bg-[rgb(248,232,48)]/20 p-4 rounded-2xl group-hover:bg-[rgb(248,232,48)] transition-colors">
                <Package size={32} className="text-[rgb(45,48,145)] group-hover:text-[rgb(45,48,145)] transition-colors" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[rgb(45,48,145)] mb-3">Variedade de Produtos</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mais de 80 produtos em estoque, prontos para atender suas necessidades imediatas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
