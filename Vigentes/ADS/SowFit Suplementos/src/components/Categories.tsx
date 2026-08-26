import { Dumbbell, Flame, Pill, Zap, TrendingDown, Heart, LucideIcon } from 'lucide-react';

interface Category {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const categories: Category[] = [
  { icon: Dumbbell, title: 'Proteínas', desc: 'Whey, Beef, Veganas e mais' },
  { icon: Flame, title: 'Aminoácidos', desc: 'Creatina, BCAA, Glutamina' },
  { icon: Pill, title: 'Vitaminas & Minerais', desc: 'Zinco, Vitamina C, D3, Colágeno' },
  { icon: Zap, title: 'Pré-Treinos', desc: 'Energia e foco para treinos intensos' },
  { icon: TrendingDown, title: 'Emagrecimento', desc: 'Termogênicos e queimadores' },
  { icon: Heart, title: 'Saúde Integral', desc: 'Fitoterápicos e antioxidantes' },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Encontre Exatamente o Que Você Precisa</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore nossa ampla variedade de categorias com produtos selecionados para cada objetivo
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary border-2 border-transparent cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600 text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
