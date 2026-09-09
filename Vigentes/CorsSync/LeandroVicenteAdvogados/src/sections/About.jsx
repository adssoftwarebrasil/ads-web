import { ArrowUpRight, GraduationCap, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo-leandro-vicente.webp'
import { defaultWhatsAppLink } from '../data/siteData'

export default function About() {
  return (
    <section id="escritorio" className="about section">
      <div className="container about__grid">
        <div className="about__visual" data-reveal>
          <div className="about__logo-card">
            <span className="about__year">2006</span>
            <img src={logo} alt="Leandro Vicente Advocacia e Consultoria Jurídica" />
            <span className="about__caption">Experiência jurídica construída com técnica e responsabilidade.</span>
          </div>
          <div className="about__seal" aria-hidden="true">
            <span>LV</span>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <span className="eyebrow">O escritório</span>
          <h2>Experiência que se traduz em orientação segura.</h2>
          <p className="about__lead">
            O escritório Leandro Vicente Advocacia e Consultoria Jurídica atua desde 2006, oferecendo serviços
            jurídicos em todo o Brasil.
          </p>
          <p>
            Fundado com o propósito de oferecer soluções jurídicas eficientes e personalizadas, desenvolve
            atividades de consultoria e atuação contenciosa, sempre voltado à defesa dos interesses de seus clientes.
          </p>

          <div className="about__credentials">
            <div>
              <GraduationCap size={24} strokeWidth={1.6} />
              <span>
                <strong>Qualificação profissional</strong>
                Pós-graduação em Prática Jurídica pela PUC Goiás
              </span>
            </div>
            <div>
              <ShieldCheck size={24} strokeWidth={1.6} />
              <span>
                <strong>Atuação atualizada</strong>
                Técnica alinhada às exigências do ordenamento jurídico
              </span>
            </div>
          </div>

          <a className="text-link" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
            Conversar com o escritório
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
