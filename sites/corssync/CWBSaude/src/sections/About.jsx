import { ArrowUpRight, MapPin } from 'lucide-react'
import facadeImage from '../assets/fachada-cwb.jpg'
import Brand from '../components/Brand.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contact } from '../data/siteData.js'

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img src={facadeImage} alt="Fachada da CWB Corretora de Planos de Saúde em Goiânia" />
          <div className="about__brand-card">
            <Brand />
            <span>Presença local. Atendimento de verdade.</span>
          </div>
          <span className="about__experience"><strong>9</strong> anos de experiência</span>
        </div>

        <div className="about__content">
          <SectionHeading
            eyebrow="CWB Corretora de Planos de Saúde"
            title="Experiência para orientar. Proximidade para cuidar."
            text="A CWB Saúde nasceu para facilitar o acesso à saúde suplementar por meio de um atendimento consultivo e humanizado."
          />
          <p>
            Ao longo de sua trajetória, a corretora conquistou a confiança de milhares de clientes, oferecendo soluções para pessoas físicas, famílias, empresas e entidades de classe.
          </p>
          <blockquote>
            “Nossa missão é ajudar cada cliente a encontrar o plano ideal com segurança, qualidade e excelente custo-benefício.”
          </blockquote>
          <a className="about__address" href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" />
            <span>
              <small>Onde estamos</small>
              {contact.address}
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
