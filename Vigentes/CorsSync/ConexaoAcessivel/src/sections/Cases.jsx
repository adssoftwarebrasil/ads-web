import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Ruler,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import passarela from '../assets/passarela-acessivel.jpg'
import apae from '../assets/edificacao-institucional.webp'
import pisoTatil from '../assets/piso-tatil-interno.jpg'
import { regionalProjects } from '../data/portfolioData'

const congonhasTags = ['Sinalização tátil']

const congonhasArchDailyUrl = 'https://www.archdaily.com.br/br/901291/passarela-do-aeroporto-de-congonhas-estudio-artigas-plus-h2c-arquitetura'

function Cases() {
  return (
    <section className="section cases-section" id="projetos">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Acessibilidade que muda a experiência do espaço."
            text="Projetos de diferentes escalas mostram como diagnóstico, desenho e implantação precisam funcionar como um percurso contínuo."
          />
        </div>

        <article className="case-featured" data-reveal>
          <div className="case-featured__visual">
            <img
              src={passarela}
              alt="Passarela acessível do Aeroporto de Congonhas com rampas, escadas e corrimãos"
              loading="lazy"
            />
            <span>Mobilidade urbana inclusiva</span>
          </div>

          <div className="case-featured__content">
            <p className="case-kicker">Case 01</p>
            <h3>Passarela do Aeroporto de Congonhas</h3>
            <div className="case-meta" aria-label="Dados do projeto">
              <span><MapPin aria-hidden="true" /> São Paulo, SP</span>
              <span><CalendarDays aria-hidden="true" /> 2018</span>
              <span><Ruler aria-hidden="true" /> 600 m²</span>
            </div>

            <div className="case-narrative">
              <div>
                <strong>O desafio</strong>
                <p>Desenvolver um percurso tátil que proporcionasse autonomia às pessoas com deficiência visual sem interferir na mobilidade dos demais usuários, como pessoas com malas ou carrinhos de bebê e pessoas que utilizam cadeira de rodas.</p>
              </div>
              <div>
                <strong>A solução</strong>
                <p>Um projeto de paginação com rota contínua e segura para todos os usuários, com informações táteis nos pontos de decisão direcional.</p>
              </div>
            </div>

            <div className="case-tags" aria-label="Soluções incorporadas">
              {congonhasTags.map((tag) => <span key={tag}><CheckCircle2 aria-hidden="true" /> {tag}</span>)}
            </div>

            <div className="case-recognition">
              <ExternalLink aria-hidden="true" />
              <div>
                <strong>Ficha técnica e créditos</strong>
                <p>Arquitetura: Estúdio Artigas + H2C Arquitetura · Acessibilidade: Eliana Trevisan · Fotografia: Pedro Napolitano Prata.</p>
                <a href={congonhasArchDailyUrl} target="_blank" rel="noreferrer">
                  Ver projeto e fonte no ArchDaily Brasil <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="case-secondary" data-reveal>
          <div className="case-secondary__content">
            <p className="case-kicker">Case 02 · Anápolis, Goiás</p>
            <h3>APAE Anápolis: espaço inclusivo para atendimento especializado.</h3>
            <p className="case-secondary__scope">
              Adequação de infraestrutura e projetos de acessibilidade para criar ambientes seguros, funcionais e compatíveis com diferentes necessidades de uso.
            </p>

            <div className="case-secondary__results">
              <div>
                <strong>Intervenções</strong>
                <p>Salas multidisciplinares, circulação acessível, sinalização inclusiva e mobiliário adaptado.</p>
              </div>
              <div>
                <strong>Resultado</strong>
                <p>Ampliação da capacidade de atendimento com mais qualidade e segurança para usuários e profissionais.</p>
              </div>
            </div>
          </div>

          <div className="case-secondary__visual">
            <img className="case-secondary__main-image" src={apae} alt="Fachada da APAE Anápolis" loading="lazy" />
            <img className="case-secondary__detail-image" src={pisoTatil} alt="Piso tátil instalado em circulação interna" loading="lazy" />
          </div>
        </article>

        <div className="regional-portfolio" data-reveal>
          <div className="regional-portfolio__heading">
            <div>
              <p className="eyebrow">Portfólio em Goiás</p>
              <h3>Escopos técnicos em diferentes contextos.</h3>
            </div>
            <Building2 aria-hidden="true" />
          </div>

          <div className="regional-projects">
            {regionalProjects.map((project, index) => (
              <article key={project.client}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h4>{project.client}</h4>
                <p>{project.scope}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="portfolio-link" data-reveal>
          <div>
            <strong>Conheça a trajetória completa</strong>
            <span>Cases, serviços, experiência e atuação profissional em um único documento.</span>
          </div>
          <a href="/portfolio-eliana-trevisan-conexao-acessivel.pdf" target="_blank" rel="noreferrer">
            Abrir portfólio completo <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cases
