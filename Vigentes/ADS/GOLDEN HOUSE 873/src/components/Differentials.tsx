import { Brain, Heart, ShieldCheck, MapPin, Eye, Clock } from 'lucide-react';

const differentials = [
  {
    icon: Brain,
    title: 'Inteligência Imobiliária',
    description: 'Visão consultiva estratégica e análise profunda em cada etapa, garantindo decisões precisas e resultados sólidos.'
  },
  {
    icon: Heart,
    title: 'Atendimento Sob Medida',
    description: 'Cada cliente é único. Desenvolvemos estratégias personalizadas que respeitam suas necessidades, sonhos e momento de vida.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Total',
    description: 'Análise contratual minuciosa e regularização completa. Seu patrimônio protegido em cada etapa da transação.'
  },
  {
    icon: MapPin,
    title: 'Atuação Nacional',
    description: 'Atendimento especializado em todo o Brasil com conhecimento local e visão estratégica.'
  },
  {
    icon: Eye,
    title: 'Clareza em Tudo',
    description: 'Processos transparentes, sem surpresas. Você acompanha cada passo da negociação com relatórios claros e comunicação constante.'
  },
  {
    icon: Clock,
    title: 'Suporte Integral',
    description: 'Da documentação à entrega de chaves. Cuidamos de toda burocracia para você ter uma experiência tranquila e segura.'
  }
];

export default function Differentials() {
  return (
    <section id="differentials" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Profissionais"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por Que Escolher a Golden House 873?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Estratégia, segurança jurídica e compromisso com resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#cfa165]/10 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-[#cfa165]" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
