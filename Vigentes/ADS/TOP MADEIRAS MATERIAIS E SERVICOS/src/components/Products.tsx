import { Leaf, TreePine, Layers } from 'lucide-react'

const GREEN = '#004a27'
const RED = 'rgb(236,28,36)'

const products = [
  {
    icon: TreePine,
    title: 'Madeira de Pinus',
    description:
      'Madeira leve, versátil e de fácil trabalhabilidade. Ideal para construção civil, móveis, embalagens e projetos em geral. Proveniente de reflorestamento certificado.',
    image:
      'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-madeira-pinus-crua-ao-ar-livre_1200x1600.webp',
    tags: ['Construção Civil', 'Móveis', 'Embalagens'],
  },
  {
    icon: Layers,
    title: 'Madeiriti',
    description:
      'Compensado de alta resistência com acabamento superior. Excelente para fôrmas, construção, divisórias e acabamentos internos e externos.',
    image:
      'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-compensado-vermelho-com-fita-adesiva_1600x720.webp',
    tags: ['Fôrmas', 'Construção', 'Acabamentos'],
  },
  {
    icon: Leaf,
    title: 'Eucalipto Tratado',
    description:
      'Alta durabilidade e resistência à umidade e pragas. Perfeito para estruturas, cercas, estacas, postes e obras que exigem madeira de longa vida útil.',
    image:
      'https://storage.lucasmendes.dev/site-sp/topmadeiraspva/pilha-de-madeira-vermelha-com-fitas-verdes_1200x1600.webp',
    tags: ['Estruturas', 'Cercas', 'Postes'],
  },
]

export default function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14 md:mb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
          >
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: GREEN }}>
            Madeiras para Todo Tipo<br />de Projeto
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Trabalhamos exclusivamente com madeiras de reflorestamento, garantindo qualidade,
            sustentabilidade e o melhor custo-benefício para sua obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden h-56 md:h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className="absolute top-4 left-4 p-2.5 rounded-xl"
                    style={{ backgroundColor: GREEN }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: GREEN }}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${GREEN}12`, color: GREEN }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/5566999371417?text=Olá!%20Tenho%20interesse%20neste%20produto%20e%20gostaria%20de%20um%20orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{ backgroundColor: RED }}
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
