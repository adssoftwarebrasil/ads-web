import { CheckCircle, Headphones, Shield, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: 'Confiabilidade nas Entregas',
    description: 'Compromisso com prazos e qualidade nas peças.',
    Icon: CheckCircle,
  },
  {
    title: 'Suporte ao Cliente',
    description: 'Estamos sempre prontos para atender suas solicitações.',
    Icon: Headphones,
  },
  {
    title: 'Qualidade Garantida',
    description: 'Peças que garantem desempenho e segurança.',
    Icon: Shield,
  },
  {
    title: 'Condições Especiais',
    description: 'Condições especiais para compras em grande escala.',
    Icon: TrendingUp,
  },
];

export default function WhyHire() {
  return (
    <section id="contratar" className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/motosilv/Por%20que%20contratar-paralax.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Por que contratar?</h2>
          <div className="w-24 h-1 bg-[#FFE600] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Escolha MotoSilva para sua Oficina. Nossos diferenciais fazem a diferença na sua
            operação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="w-16 h-16 bg-[#FFE600] rounded-full flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
