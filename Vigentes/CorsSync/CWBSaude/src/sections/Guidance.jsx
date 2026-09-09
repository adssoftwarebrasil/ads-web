import { Check, MessageCircle } from 'lucide-react'
import carlaBueno from '../assets/corretora-carla-bueno.png'
import dalilaBarros from '../assets/corretora-dalila-barros.png'
import ivanRoldan from '../assets/corretor-ivan-roldan.png'
import SectionHeading from '../components/SectionHeading.jsx'

const salesTeam = [
  {
    name: 'Dalila Barros',
    image: dalilaBarros,
    whatsapp: 'https://wa.me/message/G76ZWUY2CKIQK1',
  },
  {
    name: 'Ivan Roldan',
    image: ivanRoldan,
    whatsapp: 'https://wa.me/556293573932',
  },
  {
    name: 'Carla Bueno',
    image: carlaBueno,
    whatsapp: 'https://wa.me/556291928024',
  },
]

function Guidance() {
  return (
    <section className="section guidance" id="consultoria">
      <div className="guidance__pattern" aria-hidden="true" />
      <div className="container guidance__layout">
        <div className="guidance__copy">
          <SectionHeading
            eyebrow="Consultoria que simplifica"
            title="Fale diretamente com um corretor Hapvida"
            text="Escolha um dos nossos corretores autorizados e receba orientação para encontrar o plano adequado ao seu perfil."
            tone="light"
          />
          <ul className="guidance__checks">
            <li><Check aria-hidden="true" /> Atendimento rápido e personalizado</li>
            <li><Check aria-hidden="true" /> Transparência nas orientações</li>
            <li><Check aria-hidden="true" /> Suporte antes e depois da contratação</li>
          </ul>
        </div>

        <div className="sales-team" aria-label="Corretores Hapvida">
          {salesTeam.map((seller, index) => (
            <article className="seller-card" data-reveal style={{ '--delay': `${index * 90}ms` }} key={seller.name}>
              <img src={seller.image} alt={`Material de contato de ${seller.name}, corretor autorizado Hapvida`} loading="lazy" />
              <div className="seller-card__footer">
                <div>
                  <span>Corretor autorizado</span>
                  <h3>{seller.name}</h3>
                </div>
                <a href={seller.whatsapp} target="_blank" rel="noreferrer" aria-label={`Conversar com ${seller.name} pelo WhatsApp`}>
                  <MessageCircle aria-hidden="true" />
                  Falar agora
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guidance
