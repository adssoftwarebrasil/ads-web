import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { assets, contact } from '../data/siteData.js'

function Story() {
  return (
    <section className="story section" id="historia">
      <div className="container story__grid">
        <Reveal className="story__visual">
          <div className="story__image-wrap">
            <img src={assets.fachadaPadaria} alt="Fachada amarela e vermelha da Padaria A Moderna" />
            <span className="story__caption">Uma história que mora no bairro</span>
          </div>
          <div className="story__seal" aria-hidden="true">
            <span>mais de</span>
            <strong>43</strong>
            <span>anos</span>
          </div>
        </Reveal>

        <Reveal className="story__content" delay={120}>
          <SectionHeading
            eyebrow="Nossa história"
            title="Da nossa família para a sua. Todos os dias."
          />
          <p className="story__lead">
            Há mais de quatro décadas, a Padaria A Moderna faz parte da rotina de famílias que reconhecem
            o valor de uma receita bem cuidada.
          </p>
          <p>
            Preservamos a essência de uma padaria artesanal: sem pré-misturas, com ingredientes
            selecionados, receitas próprias e processos que respeitam o tempo de cada preparo. É assim que
            pães, roscas, bolos, doces e pudins chegam fresquinhos à vitrine.
          </p>
          <blockquote>“Ingredientes simples. Sabores inesquecíveis.”</blockquote>
          <a className="inline-link" href={contact.mapsHref} target="_blank" rel="noreferrer">
            Conheça a nossa casa
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Story
