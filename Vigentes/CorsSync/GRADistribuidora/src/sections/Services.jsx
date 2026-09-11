import { Boxes, CarFront, Route, Truck } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Boxes,
    title: 'Distribuidora de peças',
    description: 'Peças para diferentes categorias automotivas, da linha leve à pesada.',
  },
  {
    number: '02',
    icon: CarFront,
    title: 'Mecânica em geral',
    description: 'Mão de obra automotiva com atenção à qualidade em cada atendimento.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Linha leve e pesada',
    description: 'Serviços mecânicos para carros, ônibus, máquinas e veículos pesados.',
  },
  {
    number: '04',
    icon: Route,
    title: 'Guincho 24 horas',
    description: 'Suporte quando o veículo para e você precisa retomar o caminho.',
  },
]

function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow dark"><span /> Soluções automotivas</p>
            <h2>Da peça certa ao veículo de volta à estrada.</h2>
          </div>
          <p>
            Uma estrutura preparada para atender diferentes necessidades automotivas em um só lugar.
          </p>
        </div>

        <div className="service-list">
          {services.map(({ number, icon: Icon, title, description }) => (
            <article className="service-card" key={title} data-reveal>
              <div className="service-topline">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-line" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="service-region" data-reveal>
          <Route aria-hidden="true" />
          <p>
            <strong>Atendimento que vai além de Trindade.</strong>
            Goiânia, Aparecida de Goiânia e cidades vizinhas também fazem parte da nossa rota.
          </p>
          <a
            href="https://wa.me/5562991073396?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20um%20atendimento%20na%20minha%20regi%C3%A3o."
            target="_blank"
            rel="noreferrer"
          >
            Consultar atendimento <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
  return <span aria-hidden="true">↗</span>
}

export default Services
