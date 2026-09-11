import { differentials } from '../data'
import { Reveal } from '../components/Reveal'

export function Differentials() {
  return (
    <section className="differentials" aria-label="Diferenciais da Telas Confiança">
      <div className="container differentials__grid">
        {differentials.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} className="differential" delay={index * 70}>
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

