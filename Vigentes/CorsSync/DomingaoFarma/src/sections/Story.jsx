import { BadgeCheck, HeartHandshake } from 'lucide-react'
import facade from '../assets/photos/fachada-domingao-farma.jpg'
import totem from '../assets/photos/totem-domingao-farma.jpg'

export function Story() {
  return (
    <section className="story section" id="historia">
      <div className="container story-grid">
        <div className="story-collage" data-reveal>
          <img className="story-collage__main" src={facade} alt="Fachada da Domingão Farma no Bairro Brasil" loading="lazy" />
          <img className="story-collage__detail" src={totem} alt="Totem vermelho da Domingão Farma em frente à loja" loading="lazy" />
          <span className="story-year"><small>Fundada em</small>2009</span>
        </div>

        <div className="story-copy" data-reveal>
          <span className="eyebrow">Uma história feita no bairro</span>
          <h2>Presença próxima, atendimento que conhece você.</h2>
          <p>
            A Domingão Farma foi fundada em 2009. Desde 2020, vive uma nova fase sob a atual gestão, mantendo o compromisso de cuidar das pessoas com atenção, bons preços e variedade.
          </p>
          <p>
            Aqui você encontra medicamentos, perfumaria, fraldas, leites e suplementos em um atendimento simples, humano e direto.
          </p>
          <div className="story-values">
            <div>
              <BadgeCheck size={23} aria-hidden="true" />
              <span><strong>Preço e variedade</strong> para as necessidades do dia a dia.</span>
            </div>
            <div>
              <HeartHandshake size={23} aria-hidden="true" />
              <span><strong>Atendimento próximo</strong> para orientar sua compra.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
