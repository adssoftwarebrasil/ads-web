import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import fachada from '../assets/fachada-feira.png'

export default function Story() {
  return (
    <section className="story section" id="historia" aria-labelledby="story-title">
      <div className="container story__grid">
        <Reveal className="story__image-wrap">
          <img
            className="story__image"
            src={fachada}
            alt="Loja Feira Rolamentos em Feira de Santana"
            loading="lazy"
          />
          <div className="story__stamp" aria-label="60 anos de história">
            <strong>60</strong>
            <span>anos de história</span>
          </div>
          <div className="story__location">
            <span>Feira de Santana</span>
            <ArrowUpRight aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal className="story__content" delay={100}>
          <p className="eyebrow">Nossa história</p>
          <h2 id="story-title">Uma empresa familiar que atravessa gerações.</h2>
          <p className="story__lead">
            A Feira Rolamentos nasceu na década de 60 e construiu sua trajetória ao lado de quem
            precisa manter máquinas, equipamentos e negócios em funcionamento.
          </p>
          <p>
            São seis décadas de experiência prática, relacionamento próximo e compromisso com cada
            pedido — dos atendimentos do dia a dia às necessidades que exigem uma solução rápida.
          </p>

          <div className="story__values" aria-label="Valores da Feira Rolamentos">
            <div>
              <span>01</span>
              <strong>Experiência que orienta</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Proximidade que resolve</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

