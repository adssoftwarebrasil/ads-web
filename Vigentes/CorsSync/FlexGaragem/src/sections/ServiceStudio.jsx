import { useState } from 'react'
import { ArrowRight, Eraser, ShieldCheck, Sparkles, Wind } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import interiorImage from '../assets/media/interior-higienizado.webp'
import seatsImage from '../assets/media/bancos-higienizacao.webp'
import motorImage from '../assets/media/motor-detalhado.webp'

const services = [
  {
    number: '01',
    title: 'Higienização automotiva completa',
    short: 'Renovação profunda do interior',
    description: 'Limpeza cuidadosa para recuperar a sensação de frescor, conforto e cuidado dentro do veículo.',
    image: interiorImage,
    alt: 'Interior de veículo higienizado pela Flex Garagem',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Impermeabilização completa',
    short: 'Bancos, carpetes e teto protegidos',
    description: 'Proteção das superfícies internas contra líquidos e sujeiras, ajudando a conservar o acabamento por mais tempo.',
    image: seatsImage,
    alt: 'Bancos removidos durante serviço de higienização e impermeabilização',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Limpeza técnica e oxi-sanitização',
    short: 'Cuidado além do que os olhos veem',
    description: 'Técnicas avançadas para combater odores, fungos e bactérias e deixar o interior mais seguro e agradável.',
    image: motorImage,
    alt: 'Área do motor limpa com acabamento técnico',
    icon: Wind,
  },
  {
    number: '04',
    title: 'Remoção de manchas e odores',
    short: 'Tratamento direcionado para o interior',
    description: 'Ação específica sobre marcas e odores indesejados, com produtos profissionais e atenção ao material tratado.',
    image: interiorImage,
    alt: 'Interior de veículo limpo e renovado pela Flex Garagem',
    icon: Eraser,
  },
]

function ServiceStudio() {
  const [activeService, setActiveService] = useState(0)
  const selected = services[activeService]

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <Reveal className="section-intro section-intro--split">
          <div>
            <p className="eyebrow"><span /> Serviços</p>
            <h2>Seu carro merece mais do que uma limpeza rápida.</h2>
          </div>
          <p>
            Cada serviço é pensado para devolver bem-estar ao interior e preservar o que faz o seu veículo continuar especial.
          </p>
        </Reveal>

        <div className="services__studio">
          <div className="services__list" role="list" aria-label="Serviços da Flex Garagem">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeService
              return (
                <Reveal as="div" key={service.number} delay={index * 55}>
                  <button
                    className={`service-option${isActive ? ' is-active' : ''}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveService(index)}
                  >
                    <span className="service-option__number">{service.number}</span>
                    <span className="service-option__icon"><Icon aria-hidden="true" /></span>
                    <span className="service-option__text">
                      <strong>{service.title}</strong>
                      <small>{service.short}</small>
                    </span>
                    <ArrowRight className="service-option__arrow" aria-hidden="true" />
                  </button>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="services__feature" delay={140}>
            <img key={selected.image} src={selected.image} alt={selected.alt} />
            <div className="services__feature-overlay" />
            <div className="services__feature-copy" aria-live="polite">
              <span>{selected.number}</span>
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <a
                href={`https://wa.me/5511911396107?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${selected.title.toLowerCase()} na Flex Garagem.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar pelo WhatsApp <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ServiceStudio
