import { Armchair, Trophy, Utensils } from 'lucide-react'
import shirtsImage from '../assets/images/ambiente-camisas.jpg'
import roomImage from '../assets/images/salao-barzin.jpg'

const experiences = [
  {
    icon: Utensils,
    title: 'Almoço sem frescura',
    text: 'Prato executivo no dia a dia, com comida gostosa e pausa bem aproveitada.',
  },
  {
    icon: Armchair,
    title: 'Escolha sua mesa',
    text: 'Tem mesa na calçada e área interna para chegar, sentar e ficar à vontade.',
  },
  {
    icon: Trophy,
    title: 'Jogo, amigos e resenha',
    text: 'Um ponto de encontro para torcer, conversar e brindar os bons momentos.',
  },
]

function StorySection() {
  return (
    <section className="story section" id="historia">
      <div className="checker-band" aria-hidden="true" />
      <div className="container story__grid">
        <div className="story__visual" data-reveal>
          <img className="story__image story__image--main" src={shirtsImage} alt="Decoração com camisas históricas de futebol" loading="lazy" />
          <img className="story__image story__image--secondary" src={roomImage} alt="Salão do Barzin de Esquina" loading="lazy" />
          <div className="story__stamp" aria-hidden="true"><span>Barzin</span><strong>Trindade · GO</strong></div>
        </div>

        <div className="story__copy" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Nossa história</p>
          <h2>Um boteco novo.<br /><em>Com alma de sempre.</em></h2>
          <p className="story__lead">
            O Barzin de Esquina nasceu em junho de 2026 para resgatar uma experiência que a gente conhece bem: comida gostosa, mesa na calçada, cerveja trincando e um ambiente descontraído.
          </p>
          <p>
            A proposta é simples e caprichada. Criar um lugar onde você possa chegar para almoçar, tomar uma depois do trabalho, assistir ao jogo ou passar horas conversando com quem gosta.
          </p>
          <blockquote>“O importante é se sentir bem e querer voltar.”</blockquote>
        </div>
      </div>

      <div className="container experience-grid">
        {experiences.map(({ icon: Icon, title, text }, index) => (
          <article key={title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
            <span className="experience-grid__number">0{index + 1}</span>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StorySection
