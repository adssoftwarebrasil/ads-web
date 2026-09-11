import Icon from '../components/Icon.jsx'

const highlights = [
  { icon: 'clock', title: 'Recepção 24 horas', text: 'Chegue no seu ritmo, em qualquer horário.' },
  { icon: 'coffee', title: 'Café da manhã', text: 'Um começo gostoso para o seu dia.' },
  { icon: 'car', title: 'Amplo estacionamento', text: 'Mais praticidade durante a sua passagem.' },
  { icon: 'pin', title: 'Fácil acesso', text: 'No bairro Carrilho, em Goianésia.' },
]

function Highlights() {
  return (
    <section className="highlights" id="destaques" aria-label="Diferenciais do hotel">
      <div className="container highlights__grid">
        {highlights.map((item, index) => (
          <article className="highlight" key={item.title} data-reveal style={{ '--delay': `${index * 70}ms` }}>
            <span className="highlight__icon"><Icon name={item.icon} /></span>
            <div><h2>{item.title}</h2><p>{item.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights
