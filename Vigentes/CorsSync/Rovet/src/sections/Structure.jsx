import { Activity, FlaskConical, HeartPulse, ScanLine, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import surgery from '../assets/equipe-cirurgia.jpg'
import anesthesia from '../assets/anestesia-inalatoria.jpg'
import hospitalization from '../assets/internacao.jpg'
import puppyHospitalization from '../assets/galeria-filhote-internacao.jpg'
import maternalCare from '../assets/galeria-cuidado-materno.jpg'
import surgicalProcedure from '../assets/galeria-procedimento-cirurgico.jpg'
import tutorPatients from '../assets/galeria-tutor-pacientes.jpg'
import patientWelcome from '../assets/galeria-acolhimento-paciente.jpg'
import teamPatients from '../assets/galeria-equipe-pacientes.jpg'
import newbornPuppies from '../assets/galeria-filhotes-recem-nascidos.jpg'
import surgicalCenter from '../assets/galeria-centro-cirurgico.jpg'
import preventiveCare from '../assets/galeria-cuidado-preventivo.jpg'

const equipment = [
  { icon: ScanLine, title: 'Diagnóstico por imagem', text: 'Raio-X e ultrassom no hospital.' },
  { icon: Activity, title: 'Avaliação cardíaca', text: 'Eletrocardiograma para apoiar o diagnóstico.' },
  { icon: FlaskConical, title: 'Laboratório', text: 'Exames hematológicos com mais agilidade.' },
  { icon: HeartPulse, title: 'Anestesia inalatória', text: 'Monitoramento e acompanhamento por anestesista.' },
]

const gallery = [
  {
    image: surgicalProcedure,
    alt: 'Profissional da Rovet realizando um procedimento cirúrgico',
    caption: 'Precisão, segurança e cuidado em cada procedimento',
    className: 'structure-gallery__feature',
  },
  {
    image: puppyHospitalization,
    alt: 'Filhote sendo acompanhado durante a internação na Rovet',
    caption: 'Acompanhamento atento durante a internação',
  },
  {
    image: maternalCare,
    alt: 'Profissional da Rovet acolhendo uma cadela e seu filhote recém-nascido',
    caption: 'Cuidado desde os primeiros instantes',
  },
  {
    image: surgicalCenter,
    alt: 'Equipe da Rovet atendendo um paciente no centro cirúrgico',
    caption: 'Estrutura completa para procedimentos e monitoramento',
  },
  {
    image: newbornPuppies,
    alt: 'Duas profissionais da Rovet segurando filhotes recém-nascidos',
    caption: 'Toda vida merece um começo bem cuidado',
  },
  {
    image: patientWelcome,
    alt: 'Veterinária da Rovet abraçando um paciente durante o atendimento',
    caption: 'Acolhimento que também faz parte do tratamento',
  },
  {
    image: teamPatients,
    alt: 'Equipe Rovet reunida com dois pacientes após o atendimento',
    caption: 'Uma equipe unida pelo amor aos animais',
    className: 'structure-gallery__wide',
  },
  {
    image: tutorPatients,
    alt: 'Tutor acompanhado por quatro cães na recepção da Rovet',
    caption: 'Tutores e pacientes são sempre bem-vindos',
  },
  {
    image: preventiveCare,
    alt: 'Filhote em consulta veterinária para cuidado preventivo',
    caption: 'Prevenção para uma vida mais saudável',
  },
  {
    image: surgery,
    alt: 'Equipe Rovet durante procedimento cirúrgico',
    caption: 'Equipe preparada para procedimentos cirúrgicos',
  },
  {
    image: anesthesia,
    alt: 'Anestesista acompanhando paciente na Rovet',
    caption: 'Anestesia inalatória e monitoramento',
  },
  {
    image: hospitalization,
    alt: 'Paciente em ambiente de internação veterinária',
    caption: 'Internação com acompanhamento contínuo',
  },
]

function Structure() {
  return (
    <section className="section structure-section" id="estrutura">
      <div className="container">
        <div className="structure-heading-row">
          <SectionHeading
            eyebrow="Estrutura hospitalar"
            title="Tecnologia que apoia decisões. Pessoas que cuidam de verdade."
            description="Recursos clínicos, cirúrgicos e de diagnóstico reunidos para oferecer um cuidado mais completo na região."
            light
          />
          <div className="structure-badge" data-reveal>
            <ShieldCheck aria-hidden="true" />
            <span>
              <strong>24 horas</strong>
              com presença no hospital
            </span>
          </div>
        </div>

        <div className="equipment-grid">
          {equipment.map((item) => {
            const Icon = item.icon
            return (
              <article className="equipment-card" key={item.title} data-reveal>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>

        <div className="gallery-intro" id="galeria" data-reveal>
          <span className="eyebrow">Por dentro da Rovet</span>
          <h3>Histórias de cuidado que fazem parte da nossa rotina.</h3>
          <p>Conheça alguns dos pacientes, tutores e profissionais que dão vida ao hospital todos os dias.</p>
        </div>

        <div className="structure-gallery" data-reveal>
          {gallery.map((item) => (
            <figure className={item.className || ''} key={item.image}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Structure
