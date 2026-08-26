import type { ReactNode } from 'react';
import { Sparkles, Flame, BookOpen, Gift, Heart, Star } from 'lucide-react';

const RosaryIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <circle cx="12" cy="12" r="2"></circle>
    <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="7" cy="17" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
    <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"></circle>
    <line x1="12" y1="7" x2="12" y2="10"></line>
  </svg>
);

const CrossIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <line x1="5" y1="9" x2="19" y2="9"></line>
  </svg>
);

const products: { icon: ReactNode; title: string; text: string; delay: string }[] = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Imagens Sacras',
    text: 'Belas imagens de santos e Nossa Senhora esculpidas com riqueza de detalhes, para altar, presentes e devoção pessoal.',
    delay: 'section-reveal-delay-1',
  },
  {
    icon: RosaryIcon,
    title: 'Terços e Rosários',
    text: 'Terços artesanais em variados materiais, cores e tamanhos. Perfeitos para oração, presentes e lembranças de romaria.',
    delay: 'section-reveal-delay-2',
  },
  {
    icon: CrossIcon,
    title: 'Crucifixos',
    text: 'Crucifixos em diferentes tamanhos e acabamentos para parede, mesa ou uso pessoal. Symbolo máximo da fé cristã.',
    delay: 'section-reveal-delay-3',
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: 'Velas Religiosas',
    text: 'Velas votivas, de promessa e decorativas para altares, novenas e celebrações. Luz e devoção em cada chama.',
    delay: 'section-reveal-delay-4',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Livros Religiosos',
    text: 'Bíblias, novenas, livros de oração e literatura católica para aprofundar a fé e espiritualidade.',
    delay: 'section-reveal-delay-5',
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Lembranças de Romaria',
    text: 'Souvenirs exclusivos de Juazeiro do Norte para peregrinos e turistas. Leve a bênção do Padre Cícero para casa.',
    delay: 'section-reveal-delay-5',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Artigos Devocionais',
    text: 'Medalhões, escapulários, benditos, água benta e muito mais. Artigos para expressão da fé cotidiana.',
    delay: 'section-reveal-delay-5',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Presentes Religiosos',
    text: 'Caixas de presente personalizadas, kits devocionais e itens especiais para batizados, primeiras comunhões e mais.',
    delay: 'section-reveal-delay-5',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-16">
          <span className="text-brand-gold-dark text-sm font-semibold uppercase tracking-widest mb-3 block">
            O que oferecemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Nossos Produtos
          </h2>
          <div className="gold-divider-center mb-5"></div>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Uma curadoria completa de artigos religiosos para atender sua fé, sua devoção e quem
            você ama. Qualidade e variedade em um só lugar.
          </p>
        </div>
        <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.title}
              className={`group bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/40 shadow-sm hover:shadow-xl transition-all duration-400 cursor-default ${p.delay}`}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-dark flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-dark mb-2 group-hover:text-brand-gold-dark transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-brand-dark/55 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
