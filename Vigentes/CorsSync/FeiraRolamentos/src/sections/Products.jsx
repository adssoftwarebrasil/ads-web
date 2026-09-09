import { ArrowUpRight, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import rolamento from '../assets/rolamento-timken.png'
import mancalPedestal from '../assets/mancal-pedestal.png'
import mancalFlangeado from '../assets/mancal-flangeado.png'
import bucha from '../assets/bucha-gtop.png'
import retentores from '../assets/retentores.png'
import corrente from '../assets/corrente-gtop.png'
import correia from '../assets/correia-continental.png'
import correiaGtop from '../assets/correia-gtop.png'
import acessorios from '../assets/acessorios-montagem.png'
import graxa from '../assets/graxa-skf.png'
import desengripante from '../assets/desengripante-tekbond.png'

const whatsappUrl =
  'https://wa.me/557536250670?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20para%20encontrar%20uma%20pe%C3%A7a.'

const products = [
  {
    title: 'Rolamentos',
    description: 'Soluções para diferentes aplicações, medidas e necessidades de reposição.',
    image: rolamento,
    alt: 'Rolamento com vedação',
  },
  {
    title: 'Mancais',
    description: 'Modelos de pedestal e flangeados para apoiar sua operação.',
    image: mancalPedestal,
    alt: 'Mancal de pedestal',
  },
  {
    title: 'Mancais flangeados',
    description: 'Componentes robustos para montagens com fixação por flange.',
    image: mancalFlangeado,
    alt: 'Mancal flangeado quadrado',
  },
  {
    title: 'Buchas para rolamento',
    description: 'Itens para montagem, fixação e ajuste de rolamentos.',
    image: bucha,
    alt: 'Bucha para rolamento sobre embalagem',
  },
  {
    title: 'Retentores',
    description: 'Vedação para ajudar a proteger conjuntos e equipamentos.',
    image: retentores,
    alt: 'Retentores de diferentes medidas',
  },
  {
    title: 'Correntes e emendas',
    description: 'Correntes de transmissão, emendas e reduções para reposição.',
    image: corrente,
    alt: 'Corrente de transmissão',
  },
  {
    title: 'Correias industriais',
    description: 'Correias para transmissão de força em diferentes perfis e medidas.',
    image: correia,
    alt: 'Conjunto de correias industriais',
  },
  {
    title: 'Correias de transmissão',
    description: 'Opções para reposição e manutenção de diferentes conjuntos mecânicos.',
    image: correiaGtop,
    alt: 'Correias de transmissão Gtop',
  },
  {
    title: 'Componentes e acessórios',
    description: 'Anéis elásticos, O-rings e outros itens para completar sua manutenção.',
    image: acessorios,
    alt: 'Componentes metálicos para montagem',
  },
  {
    title: 'Graxas para rolamentos',
    description: 'Lubrificação para apoiar a conservação e o desempenho dos componentes.',
    image: graxa,
    alt: 'Graxa para rolamentos SKF',
  },
  {
    title: 'Lubrificantes e desengripantes',
    description: 'Produtos multiuso para proteção e manutenção no dia a dia.',
    image: desengripante,
    alt: 'Lubrificante multiuso Tekbond',
  },
]

export default function Products() {
  return (
    <section className="products section" id="produtos" aria-labelledby="products-title">
      <div className="container">
        <Reveal className="products__intro">
          <SectionHeading
            eyebrow="Linha de produtos"
            title={<span id="products-title">A solução certa para cada movimento.</span>}
            text="Do item de reposição ao componente que mantém a rotina rodando, nossa equipe ajuda você a encontrar o que precisa com agilidade."
          />
          <a
            className="text-link"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Consultar uma peça <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </Reveal>

        <div className="product-grid">
          {products.map((product, index) => (
            <Reveal
              className="product-card"
              delay={(index % 4) * 70}
              key={product.title}
            >
              <article>
                <div className="product-card__image">
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="product-card__content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="product-callout" delay={120}>
            <div>
              <span className="product-callout__icon" aria-hidden="true">
                <MessageCircle />
              </span>
              <p className="eyebrow eyebrow--yellow">Atendimento direto</p>
              <h3>Não encontrou a medida que procura?</h3>
              <p>Envie os dados da peça. Nossa equipe ajuda a identificar a melhor opção.</p>
              <a
                className="button button--yellow"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Falar com a equipe
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
