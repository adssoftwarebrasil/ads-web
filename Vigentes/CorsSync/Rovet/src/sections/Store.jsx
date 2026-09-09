import { ArrowRight, Bone, PackageCheck, ShieldPlus, ShoppingBag } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const categories = [
  {
    icon: ShieldPlus,
    title: 'Proteção',
    text: 'Antipulgas, carrapaticidas e coleiras para diferentes necessidades.',
  },
  {
    icon: Bone,
    title: 'Nutrição',
    text: 'Rações e suplementos para apoiar saúde e qualidade de vida.',
  },
  {
    icon: PackageCheck,
    title: 'Orientação',
    text: 'Converse com a equipe para escolher o produto mais adequado ao seu pet.',
  },
]

const brands = ['Bravecto', 'Defenza', 'NexGard', 'Simparic', 'Credeli', 'Leevre', 'Scalibor', 'Seresto', 'Frontmax']

function Store() {
  return (
    <section className="section store-section" id="loja">
      <div className="container store-shell">
        <div className="store-header">
          <div>
            <SectionHeading
              eyebrow="Loja veterinária"
              title="Cuidado também na rotina."
              description="Produtos para proteção, nutrição e bem-estar, com a praticidade de encontrar tudo junto ao hospital."
            />
          </div>
          <div className="store-icon" data-reveal>
            <ShoppingBag aria-hidden="true" />
          </div>
        </div>

        <div className="store-category-grid">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <article key={category.title} data-reveal>
                <Icon aria-hidden="true" />
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            )
          })}
        </div>

        <div className="brand-strip" data-reveal>
          <span className="brand-strip__label">Marcas disponíveis</span>
          <div className="brand-list">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
          <p>Consulte a equipe sobre estoque e indicação de uso.</p>
        </div>

        <a
          className="button button--primary"
          href="https://wa.me/5563999466901?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20um%20produto%20da%20loja%20Rovet."
          target="_blank"
          rel="noreferrer"
        >
          Consultar um produto
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Store

