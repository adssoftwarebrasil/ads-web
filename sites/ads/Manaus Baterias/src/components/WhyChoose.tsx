import { Medal, Handshake, Truck, Award, Heart, LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Medal,
    title: 'Experiência Comprovada',
    description: 'Mais de 4 décadas de dedicação e confiança',
  },
  {
    icon: Handshake,
    title: 'Atendimento Personalizado e Próximo',
    description: 'Trabalhamos com foco em cada cliente',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida e Conveniente',
    description: 'Nossa entrega vai até você, a qualquer hora',
  },
  {
    icon: Award,
    title: 'Alta Qualidade de Produtos',
    description: 'Trabalhamos com marcas que garantem eficiência',
  },
  {
    icon: Heart,
    title: 'Comprometimento com o Cliente',
    description: 'Nosso foco é sempre a sua satisfação',
  },
];

const WHATSAPP_NUMBER = '5592981059681';
const IMAGE_URL = 'https://storage.lucasmendes.dev/site-sp/sos-baterias%2Fbateria-nova-posicionada.jpg';

interface AdvantageCardProps {
  advantage: Advantage;
}

function AdvantageCard({ advantage }: AdvantageCardProps) {
  const Icon = advantage.icon;
  
  return (
    <div className="border-l-4 border-[#FF6B00] bg-[#FF6B00]/5 p-6 rounded-r-lg hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <Icon className="w-6 h-6 text-[#FF6B00] flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">
            {advantage.title}
          </h3>
          <p className="text-[#334155]">
            {advantage.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CTAButton() {
  return (
    
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#059669] text-white px-8 py-5 rounded-lg hover:brightness-110 transition-all transform hover:scale-105 font-bold text-lg"
    >
      <div className="text-center">
        <div className="text-xl mb-1">SOLICITE SEU ORÇAMENTO</div>
        <div className="text-sm opacity-90">
          Entre em contato e conheça nossos preços
        </div>
      </div>
    </a>
  );
}

export function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-[#FF6B00] font-bold tracking-wide uppercase text-sm mb-4 block">
            POR QUE CONTRATAR?
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Por Que Escolher a Manaus Baterias?
          </h2>
          
          <p className="text-[#334155] text-lg max-w-3xl mx-auto">
            Oferecemos uma solução completa para suas necessidades em baterias e radiadores
          </p>
        </div>

        {/* Imagem */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <img
            src={IMAGE_URL}
            alt="Bateria Nova Posicionada"
            className="rounded-2xl shadow-2xl w-full"
            loading="lazy"
          />
        </div>

        {/* Primeiros 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {ADVANTAGES.slice(0, 3).map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} />
          ))}
        </div>

        {/* Últimos 2 cards centralizados */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {ADVANTAGES.slice(3).map((advantage, index) => (
            <AdvantageCard key={index + 3} advantage={advantage} />
          ))}
        </div>

        {/* CTA centralizado */}
        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}