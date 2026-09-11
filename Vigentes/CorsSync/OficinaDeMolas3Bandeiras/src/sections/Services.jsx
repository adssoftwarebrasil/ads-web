import {
  AirVent,
  BadgeCheck,
  Brackets,
  CarFront,
  CircleDot,
  Cog,
  ScanLine,
  Sparkles,
  Zap,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const services = [
  {
    icon: Brackets,
    number: '01',
    title: 'Molas e suspensão',
    description: 'Manutenção de componentes da suspensão para recuperar estabilidade e segurança.',
  },
  {
    icon: CircleDot,
    number: '02',
    title: 'Freios e cubos',
    description: 'Revisão e reparos essenciais para uma condução segura e confiável.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Reparo de válvulas',
    description: 'Avaliação e reparo de válvulas pneumáticas para veículos pesados.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Solda em geral',
    description: 'Serviços de solda aplicados às necessidades da linha média e pesada.',
  },
  {
    icon: CarFront,
    number: '05',
    title: 'Alinhamento de eixo',
    description: 'Alinhamento e balanceamento de eixo para rodar com mais equilíbrio.',
  },
  {
    icon: ScanLine,
    number: '06',
    title: 'Diagnóstico eletrônico',
    description: 'Leitura computadorizada para identificar falhas com mais precisão.',
  },
  {
    icon: Zap,
    number: '07',
    title: 'Elétrica automotiva',
    description: 'Soluções elétricas para manter os sistemas do veículo funcionando corretamente.',
  },
  {
    icon: AirVent,
    number: '08',
    title: 'Ar-condicionado',
    description: 'Manutenção do ar-condicionado automotivo para mais conforto na cabine.',
  },
]

function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <Reveal className="section-heading services-heading">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> Peças e serviços</p>
            <h2>Do eixo à cabine, serviço que resolve.</h2>
          </div>
          <p>
            Uma oficina preparada para cuidar dos pontos que fazem seu veículo trabalhar com
            segurança, desempenho e conforto.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={(index % 4) * 70}>
                <article className="service-card">
                  <div className="service-card-top">
                    <span className="service-icon"><Icon aria-hidden="true" /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="parts-callout">
          <BadgeCheck size={30} aria-hidden="true" />
          <div>
            <strong>Também trabalhamos com autopeças</strong>
            <span>Molas, cubos, componentes de freio e peças para as necessidades do seu veículo.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Services
