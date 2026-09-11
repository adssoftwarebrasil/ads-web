import { ShoppingBag } from 'lucide-react';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[rgb(253,118,22)] mr-2 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const products = [
  {
    emoji: '🐾',
    title: 'Rações Premium',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    items: [
      'Rações Super Premium',
      'Dietas Específicas',
      'Alimentos Naturais',
      'Petiscos Saudáveis',
    ],
  },
  {
    emoji: '💊',
    title: 'Medicamentos',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    items: ['Vermífugos', 'Antipulgas', 'Suplementos', 'Vitaminas'],
  },
  {
    emoji: '🎀',
    title: 'Acessórios',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    items: ['Coleiras e Guias', 'Caminhas', 'Comedouros', 'Bebedouros'],
  },
  {
    emoji: '🧸',
    title: 'Brinquedos',
    bg: 'bg-green-50',
    border: 'border-green-200',
    items: [
      'Brinquedos Interativos',
      'Bolas e Frisbees',
      'Arranhadores',
      'Mordedores',
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600">
            Produtos de alta qualidade para o seu pet
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} rounded-2xl p-8 border-2 ${p.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5591985220505"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(253,118,22)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[rgb(233,98,2)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ShoppingBag size={20} />
            Consulte Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
