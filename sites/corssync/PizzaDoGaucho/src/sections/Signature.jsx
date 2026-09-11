import { ArrowUpRight, CircleCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import signaturePizza from '../assets/pizza-borda-paozinho.jpeg'
import detailPizza from '../assets/pizza-forno.jpeg'
import { links } from '../data/site'

function Signature() {
  return (
    <section className="signature section-pad" id="especialidade">
      <div className="container">
        <div className="signature-heading" data-reveal>
          <SectionTitle
            eyebrow="Especialidade da casa"
            title="Aqui, a borda também é protagonista."
            text="Formatos e recheios diferenciados transformam cada pedaço — do primeiro ao último." 
            light
          />
        </div>

        <div className="signature-grid">
          <figure className="signature-main-image" data-reveal>
            <img src={signaturePizza} alt="Pizza com borda pãozinho recheada" loading="lazy" />
            <figcaption>Borda pãozinho</figcaption>
          </figure>

          <div className="signature-copy" data-reveal>
            <p className="hand-note">A queridinha da casa</p>
            <h3>Pizza de costela com borda pãozinho</h3>
            <p>
              A combinação mais elogiada por quem passa por aqui: sabor marcante no recheio e uma borda especial para completar cada fatia.
            </p>
            <ul className="check-list">
              <li><CircleCheck aria-hidden="true" /> Bordas recheadas como especialidade</li>
              <li><CircleCheck aria-hidden="true" /> Ingredientes escolhidos com cuidado</li>
              <li><CircleCheck aria-hidden="true" /> Preparo atento em cada pedido</li>
            </ul>
            <a className="button button-sun" href={links.whatsapp} target="_blank" rel="noreferrer">
              Pedir pelo WhatsApp
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>

          <figure className="signature-detail-image" data-reveal>
            <img src={detailPizza} alt="Pizza com borda em formato especial" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Signature

