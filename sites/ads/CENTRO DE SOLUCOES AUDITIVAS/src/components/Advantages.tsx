import { Award, Headphones, Users, Wrench, MapPin, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Advantage {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award w-8 h-8 text-white',
    title: 'Experiência e Credibilidade',
    text: 'Com anos de atuação no mercado, a CSA possui expertise comprovada, garantindo soluções auditivas confiáveis e de alta qualidade.',
  },
  {
    Icon: Headphones,
    iconClass: 'lucide lucide-headphones w-8 h-8 text-white',
    title: 'Aparelhos Auditivos de Ponta',
    text: 'Linha completa de aparelhos auditivos com tecnologia de última geração, proporcionando conforto, discrição e alta performance.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-8 h-8 text-white',
    title: 'Atendimento Personalizado',
    text: 'Profissionais qualificados realizam avaliações detalhadas e indicam a melhor solução para as necessidades auditivas de cada cliente.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-8 h-8 text-white',
    title: 'Manutenção e Suporte Contínuos',
    text: 'Além da venda, oferecemos manutenção, ajustes e acompanhamento regular para garantir o bom funcionamento dos aparelhos.',
  },
  {
    Icon: MapPin,
    iconClass: 'lucide lucide-map-pin w-8 h-8 text-white',
    title: 'Facilidade de Acesso',
    text: 'Localização estratégica e de fácil acesso, oferecendo praticidade e excelência no cuidado auditivo.',
  },
];

const stats: { value: string; label: string }[] = [
  { value: '34', label: 'anos de experiência' },
  { value: '15000', label: 'clientes atendidos' },
  { value: '100', label: 'produtos disponíveis' },
  { value: '4', label: 'anos de garantia' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Vantagens
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vantagens de Escolher Nossos Serviços
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra os benefícios de contar com soluções auditivas especializadas, desenvolvidas
            para oferecer qualidade, conforto e confiança.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <Icon className={iconClass} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-white">{s.value}</span>
                  <TrendingUp className="lucide lucide-trending-up w-8 h-8 text-white/80 ml-2" />
                </div>
                <p className="text-white/90 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Fale Conosco
          </a>
          <p className="text-gray-600 mt-4">Estamos disponíveis pelo WhatsApp</p>
          <p className="text-gray-500 text-sm mt-2">
            Suporte contínuo após a compra para garantir sua satisfação.
          </p>
        </div>
      </div>
    </section>
  );
}
