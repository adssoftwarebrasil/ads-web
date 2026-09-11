import { Pill, Leaf, Dumbbell, Sparkles, Heart, Smile } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Category {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const categories: Category[] = [
  {
    icon: Pill,
    title: 'Emagrecedores',
    items: [
      'Modulador de Apetite',
      'Termogênico',
      'Vontade de Doce',
      'Diurético',
      'Redutor de Medidas',
      'Queima de Calorias',
      'Drenagem Linfática',
    ],
  },
  {
    icon: Leaf,
    title: 'Suplementos & Vitaminas',
    items: [
      'Vitaminas e Minerais',
      'Antioxidantes',
      'Pré e Pós-treino',
      'Controle Glicêmico',
      'Saúde do Intestino',
      'Imunidade',
      'Sono e Ansiedade',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Performance Esportiva',
    items: [
      'Massa Muscular',
      'Hipertrofia',
      'Vasodilatador',
      'Absorção de Gordura',
      'Saúde Muscular',
      'Energia e Foco',
      'Força',
    ],
  },
  {
    icon: Sparkles,
    title: 'Beleza & Cosméticos',
    items: [
      'Skin Care Personalizado',
      'Antienvelhecimento',
      'Clareamento de Manchas',
      'Filtro Solar',
      'Tratamento Capilar',
      'Hidratação Profunda',
      'Acne e Oleosidade',
    ],
  },
  {
    icon: Heart,
    title: 'Bem-Estar Geral',
    items: ['Libido', 'Menopausa', 'Lipedema', 'Celulite', 'Saúde Íntima', 'Gastro', 'Anti-inflamatório'],
  },
  {
    icon: Smile,
    title: 'Saúde Masculina',
    items: [
      'Energia e Vitalidade',
      'Testosterona',
      'Probióticos',
      'Cognição e Memória',
      'Circulação',
      'Articulações',
      'Fitoterápicos',
    ],
  },
];

export default function Products() {
  return (
    <section id="servicos" className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-red"></span>
            <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">Nossos Produtos</span>
            <span className="h-px w-8 bg-brand-red"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Fórmulas para Cada <span className="text-brand-red">Objetivo</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Do emagrecimento à performance esportiva, da beleza ao bem-estar — manipulamos a fórmula certa para você,
            com a precisão que o seu protocolo exige.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isRed = i % 2 === 0;
            return (
              <div
                key={cat.title}
                className={`group rounded-2xl border ${
                  isRed ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'
                } bg-white p-7 hover:border-brand-red/50 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-300 cursor-default opacity-100 translate-y-0`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-12 h-12 ${
                      isRed ? 'bg-brand-red' : 'bg-brand-black-soft'
                    } rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Icon width={22} height={22} strokeWidth={2} className="text-white" />
                  </div>
                  <h3 className="font-bold text-brand-black text-lg leading-tight pt-1.5">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-brand-gray-dark text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red font-semibold text-sm hover:underline transition-all"
                  >
                    Solicitar esta categoria →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <p className="text-white/50 text-sm mb-6">
            Não encontrou o que precisa? Temos centenas de fórmulas disponíveis.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-0.5"
          >
            Consultar Farmacêutico
          </a>
        </div>
      </div>
    </section>
  );
}
