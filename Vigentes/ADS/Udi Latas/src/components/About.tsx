import { Fragment } from 'react';
import { Shield, Clock, TrendingUp, Award, Users, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  desc: string;
}

const cards: Card[] = [
  {
    icon: Shield,
    iconBg: 'bg-blue-500',
    title: 'Qualidade Garantida',
    desc: 'Peças originais e paralelas de fornecedores certificados, com garantia de procedência e qualidade.',
  },
  {
    icon: Clock,
    iconBg: 'bg-green-500',
    title: 'Entrega no Mesmo Dia',
    desc: 'Agilidade no atendimento com entrega rápida em Uberlândia e região para você não perder tempo.',
  },
  {
    icon: TrendingUp,
    iconBg: 'bg-[#F2CD00]',
    title: 'Melhor Custo-Benefício',
    desc: 'Preços competitivos sem abrir mão da qualidade. Condições especiais para oficinas e revendedores.',
  },
  {
    icon: Award,
    iconBg: 'bg-[#28156F]',
    title: '31 Anos de Tradição',
    desc: 'Desde 1993 atendendo com excelência, conquistando a confiança de milhares de clientes.',
  },
  {
    icon: Users,
    iconBg: 'bg-orange-500',
    title: 'Atendimento Personalizado',
    desc: 'Equipe experiente e dedicada para atender você, sua oficina ou empresa com atenção especial.',
  },
  {
    icon: Wrench,
    iconBg: 'bg-red-500',
    title: 'Amplo Estoque',
    desc: 'Grande variedade de peças e acessórios para diversos modelos e marcas de veículos.',
  },
];

const clientTypes = [
  'Motoristas e proprietários de veículos',
  'Mecânicos autônomos',
  'Oficinas mecânicas e funilarias',
  'Frotistas e empresas',
  'Revendedores de autopeças',
];

const bigStats = [
  { value: '10.000+', label: 'Peças vendidas mensalmente' },
  { value: '500+', label: 'Oficinas parceiras' },
  { value: '98%', label: 'Taxa de satisfação' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-[#FEFEFF] to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#28156F] text-[#F2CD00] px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Sobre Nós
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#28156F] mb-6">
            Sua Referência em Autopeças desde 1993
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Udi Latas nasceu com o compromisso de oferecer as melhores soluções em autopeças para Uberlândia e região.
            Com mais de três décadas de experiência, nos tornamos referência no mercado, atendendo desde motoristas
            individuais até grandes oficinas e frotistas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`${card.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#28156F] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-20 bg-[#28156F] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2CD00]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F2CD00]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Atendemos Todo Tipo de Cliente</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Sejam motoristas que buscam peças para seus veículos, mecânicos que precisam de fornecedores confiáveis,
                ou oficinas que necessitam de um parceiro para seu negócio - a Udi Latas está pronta para atender.
              </p>
              <ul className="space-y-3">
                {clientTypes.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F2CD00] rounded-full"></div>
                    <span className="text-gray-200">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="space-y-6">
                {bigStats.map((s, i) => (
                  <Fragment key={s.label}>
                    {i > 0 && <div className="h-px bg-white/20"></div>}
                    <div>
                      <div className="text-5xl font-bold text-[#F2CD00] mb-2">{s.value}</div>
                      <div className="text-gray-200">{s.label}</div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
