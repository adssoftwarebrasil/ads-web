import { Users, Package, Zap, Clock, Shield, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  gradient: string;
  title: string;
  text: string;
}

const differentials: Differential[] = [
  {
    Icon: Users,
    gradient: 'from-blue-500 to-blue-600',
    title: 'Atendimento Especializado',
    text: 'Equipe técnica qualificada pronta para orientar você na escolha certa das peças',
  },
  {
    Icon: Package,
    gradient: 'from-red-500 to-red-600',
    title: 'Ampla Variedade',
    text: 'Mais de 100 marcas parceiras e milhares de itens em estoque permanente',
  },
  {
    Icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    title: 'Entrega Rápida',
    text: 'Sistema logístico eficiente com entrega expressa em toda a região',
  },
  {
    Icon: Clock,
    gradient: 'from-green-500 to-green-600',
    title: 'Pontualidade',
    text: 'Compromisso com prazos. Seu tempo é valioso e respeitamos isso',
  },
  {
    Icon: Shield,
    gradient: 'from-purple-500 to-purple-600',
    title: 'Garantia de Qualidade',
    text: 'Apenas peças originais e similares de procedência garantida',
  },
  {
    Icon: TrendingUp,
    gradient: 'from-pink-500 to-red-500',
    title: 'Preços Competitivos',
    text: 'Melhores condições de pagamento e preços justos para atacado e varejo',
  },
];

const pillars = [
  'Compromisso com prazos e qualidade em todas as entregas',
  'Relacionamento transparente e consultoria técnica especializada',
  'Garantia total em produtos e suporte pós-venda diferenciado',
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgb(216,32,38)]/5 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[rgb(28,58,122)]/5 rounded-r-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
            Por Que Escolher a Megga?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6">
            Nossos Diferenciais Competitivos
          </h2>
          <p className="text-lg text-gray-700">
            Mais de uma década de experiência, compromisso com a excelência e foco
            total na satisfação dos nossos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map(({ Icon, gradient, title, text }) => (
            <div
              key={title}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(216,32,38)]/10 to-transparent rounded-bl-full"></div>
              <div
                className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(28,58,122)] mb-3 relative z-10">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{text}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/equipe-homens-uniforme.webp"
              alt="Equipe Megga Auto Peças"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gradient-to-br from-[rgb(28,58,122)] to-[rgb(26,21,92)] p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ética, Responsabilidade e Transparência
            </h3>
            <p className="text-lg mb-6 leading-relaxed text-gray-100">
              Estes são os pilares que sustentam nossa empresa há mais de uma década.
              Acreditamos que o sucesso vem da confiança construída dia após dia com
              nossos clientes.
            </p>
            <ul className="space-y-4">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[rgb(216,32,38)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-100">{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
