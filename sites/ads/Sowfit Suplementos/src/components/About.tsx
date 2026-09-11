import { Trophy, Users, CheckCircle, DollarSign, LucideIcon } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Produtos Disponíveis' },
  { value: '1000+', label: 'Clientes Satisfeitos' },
  { value: '#1', label: 'Em Uberaba' },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: Trophy, title: 'Eleita Melhor Loja 2023', desc: 'Reconhecida pela comunidade de Uberaba' },
  { icon: Users, title: 'Atendimento Humanizado', desc: 'Cada cliente é único e merece atenção especial' },
  { icon: CheckCircle, title: 'Produtos Certificados', desc: 'Apenas marcas com selo de qualidade comprovada' },
  { icon: DollarSign, title: 'Preço Justo', desc: 'Transparência e honestidade em cada venda' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="mb-6">Por Que Escolher a SowFit?</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Desde 2022, a SowFit Suplementos nasceu com um propósito claro: revolucionar a
                experiência de compra de suplementos em Uberaba. Nossa equipe, com mais de 10 anos de
                experiência no mercado, trabalha com paixão para construir relacionamentos de confiança
                com cada cliente.
              </p>
              <p className="font-semibold text-xl text-primary">
                Não somos apenas uma loja — somos seu parceiro na jornada fitness.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
