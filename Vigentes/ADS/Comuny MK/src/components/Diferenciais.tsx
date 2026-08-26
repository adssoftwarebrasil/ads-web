import { Target, Globe, Users, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Card {
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  radial: string;
  shadow: string;
  translate: string;
  delay: string;
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    Icon: Target,
    iconColor: 'text-comuny-purple',
    iconBg: 'linear-gradient(135deg, rgba(124, 7, 216, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(124, 7, 216, 0.1), transparent)',
    shadow: 'rgba(124, 7, 216, 0.4) 0px 10px 40px',
    translate: '-translate-x-10',
    delay: '0s',
    title: 'Estratégias que vendem',
    text: 'Personalizamos cada ação com foco nas suas necessidades e no que traz resultados reais.',
  },
  {
    Icon: Globe,
    iconColor: 'text-comuny-blue',
    iconBg: 'linear-gradient(135deg, rgba(16, 44, 246, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(16, 44, 246, 0.1), transparent)',
    shadow: 'rgba(16, 44, 246, 0.4) 0px 10px 40px',
    translate: 'translate-x-10',
    delay: '0.15s',
    title: 'Presença em todos os canais',
    text: 'Integramos redes sociais, publicidade e outros meios para alcançar seu público onde ele estiver.',
  },
  {
    Icon: Users,
    iconColor: 'text-comuny-green',
    iconBg: 'linear-gradient(135deg, rgba(1, 255, 106, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(1, 255, 106, 0.1), transparent)',
    shadow: 'rgba(1, 255, 106, 0.4) 0px 10px 40px',
    translate: '-translate-x-10',
    delay: '0.3s',
    title: 'Time de especialistas',
    text: 'Designers, redatores, analistas e estrategistas unidos para potencializar o seu sucesso.',
  },
  {
    Icon: Lightbulb,
    iconColor: 'text-comuny-purple',
    iconBg: 'linear-gradient(135deg, rgba(124, 7, 216, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(124, 7, 216, 0.1), transparent)',
    shadow: 'rgba(124, 7, 216, 0.4) 0px 10px 40px',
    translate: 'translate-x-10',
    delay: '0.45s',
    title: 'Inovação que transforma',
    text: 'Estamos sempre um passo à frente, aplicando as tendências e tecnologias mais avançadas.',
  },
  {
    Icon: TrendingUp,
    iconColor: 'text-comuny-blue',
    iconBg: 'linear-gradient(135deg, rgba(16, 44, 246, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(16, 44, 246, 0.1), transparent)',
    shadow: 'rgba(16, 44, 246, 0.4) 0px 10px 40px',
    translate: '-translate-x-10',
    delay: '0.6s',
    title: 'Decisões baseadas em dados',
    text: 'Transformamos números em estratégias poderosas que impulsionam seus resultados.',
  },
  {
    Icon: CheckCircle,
    iconColor: 'text-comuny-green',
    iconBg: 'linear-gradient(135deg, rgba(1, 255, 106, 0.2), transparent)',
    radial: 'radial-gradient(circle, rgba(1, 255, 106, 0.1), transparent)',
    shadow: 'rgba(1, 255, 106, 0.4) 0px 10px 40px',
    translate: 'translate-x-10',
    delay: '0.75s',
    title: 'Acompanhamento completo',
    text: 'Não soltamos sua mão. Ajustamos e otimizamos até garantir o sucesso da sua campanha.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-comuny-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, transparent 48%, rgba(124, 7, 216, 0.3) 49%, rgba(124, 7, 216, 0.3) 51%, transparent 52%)',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            O QUE VOCÊ ENCONTRA AQUI QUE <span className="text-gradient">NÃO ENCONTRARÁ EM OUTROS LUGARES</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`group glassmorphism gradient-border rounded-2xl p-8 transition-all duration-500 hover:scale-105 opacity-100 translate-x-0 ${c.translate}`}
              style={{ transitionDelay: c.delay }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0" style={{ background: c.radial }}></div>
              </div>
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  style={{ background: c.iconBg }}
                >
                  <c.Icon
                    className={`w-7 h-7 transition-all duration-500 ${c.iconColor} group-hover:text-comuny-green`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-comuny-green transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{c.text}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: c.shadow }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
