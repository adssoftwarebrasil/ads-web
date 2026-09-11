import { useEffect, useRef } from 'react';
import { Pill, FlaskConical, Sparkles, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Pill,
    title: 'Medicamentos',
    description:
      'Amplo estoque de medicamentos de referência, genéricos e similares com preços competitivos e disponibilidade imediata.',
    cta: 'Verificar disponibilidade',
    message: 'Olá! Gostaria de verificar a disponibilidade de um medicamento.',
    whatsappNumber: '556493104410',
    features: ['Genéricos e de referência', 'Preços acessíveis', 'Estoque amplo', 'Orientação farmacêutica'],
    accent: 'brand-blue',
    bg: 'from-brand-blue to-brand-blue-dark',
  },
  {
    icon: FlaskConical,
    title: 'Manipulados',
    description:
      'Fórmulas manipuladas personalizadas, referência na região. Produzidas com rigor técnico para atender prescrições individuais.',
    cta: 'Solicitar manipulação',
    message: 'Olá! Gostaria de solicitar um medicamento manipulado.',
    whatsappNumber: '5564932917706',
    features: ['Fórmulas personalizadas', 'Referência regional', 'Atendimento especializado', 'Qualidade garantida'],
    accent: 'brand-red',
    bg: 'from-brand-red to-brand-red-dark',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: 'Perfumaria',
    description:
      'Linha completa de produtos de beleza, higiene pessoal e cosméticos das melhores marcas, com os melhores preços.',
    cta: 'Ver produtos',
    message: 'Olá! Gostaria de informações sobre os produtos de perfumaria.',
    whatsappNumber: '556493104410',
    features: ['Marcas premium', 'Higiene e beleza', 'Cosméticos variados', 'Promoções semanais'],
    accent: 'brand-blue',
    bg: 'from-brand-blue to-brand-blue-dark',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            O que oferecemos
          </span>
          <h2 className="section-title">Nossos Produtos e Serviços</h2>
          <p className="section-subtitle text-center mx-auto">
            Tudo que você precisa para sua saúde e bem-estar em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            const isHighlight = product.highlight;

            return (
              <div
                key={i}
                className={`reveal card-hover rounded-3xl overflow-hidden flex flex-col ${
                  isHighlight
                    ? 'shadow-2xl shadow-red-500/20 ring-2 ring-brand-red'
                    : 'shadow-lg'
                }`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${product.bg} p-8 text-white relative overflow-hidden`}>
                  {isHighlight && (
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      Destaque
                    </div>
                  )}
                  <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={28} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{product.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Card body */}
                <div className="bg-white p-6 flex flex-col flex-1">
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {product.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isHighlight ? 'bg-brand-red' : 'bg-brand-blue'}`} />
                        <span className="text-gray-600 text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(product.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 font-semibold text-sm py-3 px-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 group ${
                      isHighlight
                        ? 'bg-brand-red hover:bg-brand-red-dark text-white hover:shadow-lg'
                        : 'bg-brand-blue hover:bg-brand-blue-dark text-white hover:shadow-lg'
                    }`}
                  >
                    {product.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
