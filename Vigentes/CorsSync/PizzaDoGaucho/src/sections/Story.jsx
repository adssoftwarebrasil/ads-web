import { ChefHat, HeartHandshake, Wheat } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import storyMural from '../assets/mural-pizza-do-gaucho.jpeg'

const pillars = [
  { icon: ChefHat, title: 'Cuidado no preparo' },
  { icon: Wheat, title: 'Escolha dos ingredientes' },
  { icon: HeartHandshake, title: 'Sabor que conquista' },
]

function Story() {
  return (
    <section className="story section-pad" id="historia">
      <div className="container story-grid">
        <div className="story-visual" data-reveal>
          <div className="year-stamp">
            <small>Desde</small>
            <strong>2021</strong>
          </div>
          <img src={storyMural} alt="Mural da Pizza do Gaúcho com a marca e a ilustração do pizzaiolo" loading="lazy" />
        </div>

        <div className="story-copy" data-reveal>
          <SectionTitle
            eyebrow="Nossa história"
            title="Um sabor que encontrou seu lugar em Trindade."
          />
          <p>
            A Pizza do Gaúcho iniciou suas atividades em Trindade em 2021. Desde então, conquistou seu espaço pelo sabor, pela escolha dos ingredientes e pelo cuidado no preparo.
          </p>
          <p>
            As bordas recheadas se tornaram uma especialidade da casa, com formatos e recheios diferenciados que encantam quem experimenta.
          </p>
          <div className="story-pillars">
            {pillars.map(({ icon: Icon, title }) => (
              <div key={title}>
                <Icon aria-hidden="true" />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
