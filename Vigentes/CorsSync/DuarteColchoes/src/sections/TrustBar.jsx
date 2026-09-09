import { Handshake, ShieldCheck, Truck } from 'lucide-react'
import Reveal from '../components/Reveal'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Transparência',
    copy: 'Informação clara para você decidir com tranquilidade.',
  },
  {
    icon: Handshake,
    title: 'Atendimento próximo',
    copy: 'Uma conversa cuidadosa para entender o que você procura.',
  },
  {
    icon: Truck,
    title: 'Entrega rápida',
    copy: 'Agilidade para o conforto chegar logo à sua casa.',
  },
]

export default function TrustBar() {
  return (
    <section className="trust" id="confiança" aria-label="Diferenciais da Duarte Colchões">
      <div className="container trust__grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <Reveal className="trust__item" key={benefit.title} delay={index * 70}>
              <span className="trust__icon" aria-hidden="true"><Icon size={23} /></span>
              <div>
                <h2>{benefit.title}</h2>
                <p>{benefit.copy}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

