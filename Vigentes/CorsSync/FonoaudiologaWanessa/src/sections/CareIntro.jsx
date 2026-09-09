import { AudioLines, BookOpen, MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const signs = [
  {
    icon: MessageCircle,
    title: 'Atraso de fala',
    text: 'A intervenção precoce é de extrema importância, fique atento aos sinais, se o seu bebê demorou para iniciar os sons de balbucio, ou talvez, já fez um aninho de idade e ainda não fala as primeiras palavras, não espere, busque um fonoaudiólogo imediatamente para iniciar a intervenção, essa medida vai impedir complicações futuras no desenvolvimento do seu filho(a).',
  },
  {
    icon: AudioLines,
    title: 'Gagueira / Disfluência',
    text: 'Se você notou que seu filho(a) começou a repetir sílabas iniciais de algumas palavras, ou apresenta algum tipo de bloqueio para iniciar a fala, busque atendimento fonoaudiológico especializado. A intervenção antes de 3 meses que a disfluência iniciou, pode impedir que a Gagueira se instale. Não espere!',
  },
  {
    icon: BookOpen,
    title: 'Aprendizagem',
    text: 'Se sua criança apresenta dificuldade escolar, baixo desempenho educacional, busque atendimento fonoaudiológico especializado, faça uma avaliação completa, evitando assim, atraso em seu desenvolvimento educacional.',
  },
]

function CareIntro() {
  return (
    <section className="care-intro section" aria-labelledby="care-title">
      <div className="container">
        <SectionHeading
          eyebrow="Um olhar atento faz diferença"
          title="QUANDO PROCURAR UM FONOAUDIÓLOGO?"
          description="Existem várias causas em que devemos buscar uma avaliação fonoaudiológica, uma delas é o atraso da fala e linguagem, em caso de dúvidas, fique atento aos marcos do desenvolvimento infantil, bem como, outros fatores importantes, citados abaixo que devemos observar!"
          align="center"
        />

        <div className="signs-grid">
          {signs.map(({ icon: Icon, title, text }) => (
            <article className="sign-card" key={title}>
              <span className="sign-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareIntro
