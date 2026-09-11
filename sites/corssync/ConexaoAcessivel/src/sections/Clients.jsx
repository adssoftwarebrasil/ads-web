import { ArrowDownRight, Building2, GraduationCap, Landmark, Stethoscope } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { clientHistory, clients } from '../data/clientData'

const segments = [
  { icon: Building2, label: 'Construção e indústria' },
  { icon: GraduationCap, label: 'Educação' },
  { icon: Stethoscope, label: 'Saúde e bem-estar' },
  { icon: Landmark, label: 'Instituições públicas' },
]

function Clients() {
  return (
    <section className="section clients-section" id="clientes">
      <div className="clients-route" aria-hidden="true" />
      <div className="container">
        <div className="clients-heading" data-reveal>
          <SectionHeading
            eyebrow="Confiança construída em diferentes setores"
            title="Empresas e instituições que já escolheram a Conexão Acessível."
            text="Uma trajetória técnica aplicada a organizações de diferentes portes, segmentos e contextos de uso."
          />

          <div className="clients-segments" aria-label="Segmentos atendidos">
            {segments.map((segment) => {
              const Icon = segment.icon
              return (
                <span key={segment.label}>
                  <Icon aria-hidden="true" />
                  {segment.label}
                </span>
              )
            })}
          </div>
        </div>

        <div className="clients-grid" aria-label="Clientes atendidos pela Conexão Acessível">
          {clients.map((client, index) => (
            <figure
              className={`client-logo client-logo--${client.size}`}
              key={client.name}
              data-reveal
              style={{ '--delay': `${(index % 6) * 45}ms` }}
            >
              <span className="client-logo__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <img src={client.logo} alt={`Logotipo ${client.name}`} loading="lazy" />
              <figcaption>{client.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="clients-history" data-reveal>
          <div className="clients-history__copy">
            <span>Experiência multissetorial</span>
            <h3>Acessibilidade conecta pessoas, arquitetura e operação.</h3>
            <p>
              Cada organização traz fluxos, públicos e desafios próprios. Essa diversidade amplia o repertório técnico e torna cada orientação mais precisa.
            </p>
            <a href="#contato">
              Conversar sobre meu espaço <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
          <div className="clients-history__image">
            <img
              src={clientHistory}
              alt="Painel histórico com marcas de organizações atendidas pela Conexão Acessível"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
