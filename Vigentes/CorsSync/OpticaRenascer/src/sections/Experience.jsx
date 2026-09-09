import { BadgeCheck, CalendarCheck, Compass, Eye, Glasses, Heart, HeartHandshake, UserRoundCheck, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import portraitProfessional from '../assets/photos/portrait-professional.jpeg'
import storeInterior from '../assets/photos/store-interior.jpeg'
import { faqs, links } from '../data/siteData.js'

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'Agende seu exame',
    text: 'Consulte os horários disponíveis para o exame de vista pelo WhatsApp.',
  },
  {
    icon: Glasses,
    number: '02',
    title: 'Encontre seu modelo',
    text: 'Compare formatos, cores e lentes com ajuda para escolher o que funciona para você.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Conte com o pós-escolha',
    text: 'Ajuste e manutenção para seus óculos continuarem confortáveis no dia a dia.',
  },
]

const principles = [
  {
    icon: Compass,
    label: 'Missão',
    text: 'Proporcionar uma experiência única de escolha de óculos, combinando tecnologia, design e saúde visual.',
  },
  {
    icon: Eye,
    label: 'Visão',
    text: 'Ser referência em qualidade e inovação no mercado óptico brasileiro.',
  },
  {
    icon: Heart,
    label: 'Valores',
    text: 'Nossos valores estão firmados em Deus, pois até aqui nos ajudou o Senhor, Deus de Abraão, Isaque e Jacó.',
  },
]

function Experience() {
  return (
    <section className="experience section" id="renascer">
      <div className="container">
        <div className="experience__story">
          <div className="experience__portrait" data-reveal>
            <img src={portraitProfessional} alt="Profissional usando armação de grau da Óptica Renascer" loading="lazy" />
            <div className="experience__portrait-note">
              <HeartHandshake aria-hidden="true" />
              <span>Escolhas com atenção a cada detalhe</span>
            </div>
          </div>

          <div className="experience__copy" data-reveal>
            <SectionHeading
              eyebrow="A Renascer"
              title="Seu novo olhar começa com uma boa conversa."
              text="Na Óptica Renascer, cada cliente encontra atendimento personalizado para escolher óculos e lentes adequados às suas necessidades, unindo conforto, qualidade e estilo."
            />
            <p>
              Atendemos Trindade e região com variedade de armações, lentes oftálmicas e óculos de sol para diferentes idades, estilos e faixas de preço.
            </p>
            <ul className="experience__checks" aria-label="Diferenciais da Óptica Renascer">
              <li>Atendimento próximo e personalizado</li>
              <li>Modelos femininos, masculinos e infantis</li>
              <li>Acompanhamento da escolha à entrega</li>
            </ul>
            <a className="button button--dark" href={links.whatsapp} target="_blank" rel="noreferrer">
              Receber atendimento
            </a>
          </div>
        </div>

        <div className="purpose-block" aria-labelledby="purpose-title">
          <div className="purpose-block__head" data-reveal>
            <div>
              <p className="eyebrow">O que nos move</p>
              <h2 id="purpose-title">Propósito firme. Olhar para o futuro.</h2>
            </div>
            <p>
              Cada escolha da Óptica Renascer nasce do compromisso com a saúde visual, a inovação e um atendimento que valoriza cada pessoa.
            </p>
          </div>

          <div className="purpose-block__grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <article key={principle.label} data-reveal style={{ '--delay': index * 90 + 'ms' }}>
                  <div className="purpose-block__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{principle.label}</h3>
                  <p>{principle.text}</p>
                </article>
              )
            })}
          </div>

          <div className="purpose-block__highlights">
            <article data-reveal>
              <BadgeCheck aria-hidden="true" />
              <div>
                <p>Produtos de qualidade</p>
                <h3>Trabalhamos com as marcas mais renomadas do mercado mundial.</h3>
              </div>
            </article>
            <article data-reveal style={{ '--delay': '90ms' }}>
              <UserRoundCheck aria-hidden="true" />
              <div>
                <p>Atendimento personalizado</p>
                <h3>Nossa equipe está pronta para ajudar na escolha perfeita. O melhor atendimento, você tem aqui, na Óptica Renascer!</h3>
              </div>
            </article>
          </div>
        </div>

        <div className="care-path">
          <div className="care-path__head" data-reveal>
            <p className="eyebrow">Do exame ao ajuste</p>
            <h2>Um cuidado que acompanha todo o processo.</h2>
          </div>
          <div className="care-path__grid">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <article key={step.title} data-reveal style={{ '--delay': index * 100 + 'ms' }}>
                  <div>
                    <Icon aria-hidden="true" />
                    <span>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="store-proof">
          <div className="store-proof__image" data-reveal>
            <img src={storeInterior} alt="Interior da Óptica Renascer com expositores de armações" loading="lazy" />
          </div>
          <div className="store-proof__copy" data-reveal>
            <p className="eyebrow">Experimente com calma</p>
            <h2>Variedade para comparar de perto.</h2>
            <p>
              Visite a loja, prove diferentes formatos e descubra o que valoriza seu rosto e acompanha melhor a sua rotina.
            </p>
            <a className="text-link" href="#visite">
              Ver endereço e horários
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="faq" data-reveal>
          <div className="faq__intro">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2>Antes de visitar a Renascer</h2>
            <p>Informações rápidas para facilitar seu atendimento.</p>
          </div>
          <div className="faq__list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
