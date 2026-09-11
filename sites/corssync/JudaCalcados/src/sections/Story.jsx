import { Gem, HeartHandshake, RefreshCw, Tags } from 'lucide-react'
import rasteiraMolecaPreta from '../assets/products/catalogo-agosto/rasteira-moleca-preta-detalhe-dourado.png'
import rasteiraMolecaOffWhite from '../assets/products/catalogo-agosto/rasteira-moleca-off-white.png'

const differentials = [
  { icon: HeartHandshake, title: 'Atendimento próximo', text: 'Uma experiência humanizada para ajudar você a escolher bem.' },
  { icon: Gem, title: 'Qualidade e estilo', text: 'Produtos selecionados para unir conforto, beleza e personalidade.' },
  { icon: RefreshCw, title: 'Novidades frequentes', text: 'Lançamentos e tendências para renovar suas escolhas.' },
  { icon: Tags, title: 'Condições especiais', text: 'Preços competitivos e condições de pagamento pensadas para você.' },
]

export default function Story() {
  return (
    <section className="story" id="nossa-historia">
      <div className="container story__grid">
        <div className="story__visual" data-reveal>
          <img className="story__image story__image--back" src={rasteiraMolecaPreta} alt="Rasteira Moleca preta com detalhe dourado da Judá Calçados" loading="lazy" />
          <img className="story__image story__image--front" src={rasteiraMolecaOffWhite} alt="Rasteira Moleca off-white da Judá Calçados" loading="lazy" />
          <div className="story__caption">Professor Jamil · Goiás</div>
        </div>

        <div className="story__content" data-reveal>
          <p className="eyebrow eyebrow--gold">Nossa essência</p>
          <h2>A loja que caminha com você.</h2>
          <p className="story__quote">“Cada passo merece conforto, qualidade e elegância.”</p>
          <p>
            A Judá Calçados e Acessórios nasceu com o propósito de oferecer escolhas de qualidade, conforto e estilo para toda a família. Em Professor Jamil, reunimos calçados femininos, masculinos e infantis, além de roupas, bolsas e acessórios.
          </p>
          <p>
            Nosso compromisso é tornar cada visita especial, com atendimento personalizado, variedade e novidades que acompanham as tendências.
          </p>
        </div>
      </div>

      <div className="container differentials">
        {differentials.map(({ icon: Icon, title, text }) => (
          <article className="differential" key={title} data-reveal>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
