import type { ReactNode } from 'react';
import { Users, Star, MapPin, ShieldCheck, MessageCircle, Clock } from 'lucide-react';

const items: { icon: ReactNode; title: string; text: string; delay: string }[] = [
  {
    icon: <Users size={26} />,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente recebe atenção individualizada. Entendemos suas necessidades e ajudamos a encontrar o artigo ideal para sua devoção ou presente.',
    delay: 'section-reveal-delay-1',
  },
  {
    icon: <Star size={26} />,
    title: 'Variedade Incomparável',
    text: 'Das imagens sacras às lembranças de romaria, temos a maior seleção de artigos religiosos de Juazeiro do Norte em um só lugar.',
    delay: 'section-reveal-delay-2',
  },
  {
    icon: <MapPin size={26} />,
    title: 'Localização Estratégica',
    text: 'No coração do Centro de Juazeiro do Norte, facilitando o acesso para romeiros, turistas e moradores da região do Cariri.',
    delay: 'section-reveal-delay-3',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Qualidade e Tradição',
    text: 'Mais de 8 anos oferecendo produtos de qualidade. Somos referência para paróquias e grupos de romeiros em toda a região.',
    delay: 'section-reveal-delay-4',
  },
  {
    icon: <MessageCircle size={26} />,
    title: 'Atendimento via WhatsApp',
    text: 'Não pode visitar a loja? Atendemos pelo WhatsApp com comodidade, tirando dúvidas e realizando pedidos a distância.',
    delay: 'section-reveal-delay-5',
  },
  {
    icon: <Clock size={26} />,
    title: 'Horário Conveniente',
    text: 'De segunda a sábado com horários flexíveis para atender romeiros e visitantes. Sempre disponíveis quando você precisar.',
    delay: 'section-reveal-delay-5',
  },
];

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-gold-dark text-sm font-semibold uppercase tracking-widest mb-3 block">
            Por que nos escolher
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Nossos Diferenciais
          </h2>
          <div className="gold-divider-center mb-5"></div>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Mais do que uma loja, somos um elo entre a sua fé e os artigos que expressam sua
            devoção. Conheça o que nos torna especiais.
          </p>
        </div>
        <div className="section-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative bg-white rounded-2xl p-7 border border-transparent hover:border-brand-gold/30 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden ${item.delay}`}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>
              <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-brand-dark/55 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
