import { useState } from 'react'
import { ArrowRight, CircuitBoard, Cpu, Gauge, Play, ScanLine } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { contact } from '../data/siteData'
import laboratorioAnalise from '../assets/modules/laboratorio-analise.jpeg'
import laboratorioOficina from '../assets/modules/laboratorio-oficina.jpeg'
import bancadaEletronica from '../assets/modules/bancada-eletronica.jpeg'
import programacaoModulos from '../assets/modules/programacao-modulos.jpeg'
import processoModulos01 from '../assets/modules/processo-modulos-01.mp4'
import processoModulos02 from '../assets/modules/processo-modulos-02.mp4'

const media = [
  {
    type: 'video',
    src: processoModulos01,
    poster: laboratorioAnalise,
    label: 'Processo em bancada',
    alt: 'Trabalho técnico no setor de módulos da Mecânica 277',
  },
  {
    type: 'image',
    src: laboratorioOficina,
    label: 'Integrado à oficina',
    alt: 'Laboratório de módulos com visão para a área da oficina',
  },
  {
    type: 'image',
    src: bancadaEletronica,
    label: 'Bancada eletrônica',
    alt: 'Bancada organizada com ferramentas para trabalho eletrônico',
  },
  {
    type: 'video',
    src: processoModulos02,
    poster: programacaoModulos,
    label: 'Rotina técnica',
    alt: 'Rotina de análise no laboratório de módulos da Mecânica 277',
  },
  {
    type: 'image',
    src: laboratorioAnalise,
    label: 'Análise e programação',
    alt: 'Profissional analisando dados no laboratório de módulos',
  },
  {
    type: 'image',
    src: programacaoModulos,
    label: 'Equipe especializada',
    alt: 'Profissional da Mecânica 277 trabalhando no setor eletrônico',
  },
]

const processes = [
  {
    icon: ScanLine,
    title: 'Diagnóstico eletrônico',
    copy: 'Leitura técnica para identificar falhas e orientar o serviço com mais precisão.',
  },
  {
    icon: Cpu,
    title: 'Programação de módulos',
    copy: 'Intervenção especializada nos módulos e sistemas eletrônicos do veículo.',
  },
  {
    icon: Gauge,
    title: 'Remapeamento',
    copy: 'Ajustes de software realizados conforme a necessidade identificada no diagnóstico.',
  },
]

function ModuleRemap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMedia = media[activeIndex]

  return (
    <section className="module-lab section" id="modulos">
      <div className="module-lab__circuit" aria-hidden="true" />
      <div className="container">
        <div className="module-lab__heading">
          <Reveal>
            <SectionHeading
              eyebrow="Núcleo eletrônico 277"
              title={<>Módulos e remapeamento em um <em>setor dedicado.</em></>}
              description="Um ambiente organizado para leitura, programação e trabalho eletrônico, conectado à rotina da oficina e equipado para análises de bancada."
            />
          </Reveal>
          <Reveal className="module-lab__stamp" delay={100}>
            <CircuitBoard aria-hidden="true" />
            <span>Eletrônica<br /><strong>automotiva</strong></span>
          </Reveal>
        </div>

        <div className="module-lab__showcase">
          <Reveal className="module-lab__viewer">
            <div className={`module-lab__screen ${activeMedia.type === 'video' ? 'module-lab__screen--video' : ''}`} aria-live="polite">
              {activeMedia.type === 'video' ? (
                <video
                  key={activeMedia.src}
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  aria-label={activeMedia.alt}
                  controls
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img key={activeMedia.src} src={activeMedia.src} alt={activeMedia.alt} />
              )}
              <div className="module-lab__screen-bar">
                <span><i /> Setor em operação</span>
                <span>{String(activeIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}</span>
              </div>
              <p className="module-lab__screen-caption">{activeMedia.label}</p>
            </div>
          </Reveal>

          <Reveal className="module-lab__process" delay={100}>
            <div className="module-lab__process-title">
              <span>Do diagnóstico à intervenção</span>
              <strong>Precisão também passa pela eletrônica.</strong>
            </div>
            <ol>
              {processes.map((process, index) => {
                const Icon = process.icon
                return (
                  <li key={process.title}>
                    <span className="module-lab__process-number">0{index + 1}</span>
                    <Icon aria-hidden="true" />
                    <div><h3>{process.title}</h3><p>{process.copy}</p></div>
                  </li>
                )
              })}
            </ol>
            <a className="button button--yellow" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Falar sobre módulos <ArrowRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="module-lab__media-nav" delay={120}>
          {media.map((item, index) => (
            <button
              className={activeIndex === index ? 'is-active' : ''}
              type="button"
              key={`${item.label}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-pressed={activeIndex === index}
              aria-label={`Ver ${item.label}`}
            >
              <img src={item.type === 'video' ? item.poster : item.src} alt="" />
              <span className="module-lab__media-index">{String(index + 1).padStart(2, '0')}</span>
              {item.type === 'video' && <span className="module-lab__play"><Play aria-hidden="true" /></span>}
              <strong>{item.label}</strong>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default ModuleRemap
