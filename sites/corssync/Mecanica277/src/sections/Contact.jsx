import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Brand from '../components/Brand'
import Reveal from '../components/Reveal'
import { contact, facadeImage } from '../data/siteData'

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', value: contact.whatsappLabel, href: contact.whatsapp, external: true },
  { icon: Phone, label: 'Telefone', value: contact.phoneLabel, href: contact.phone },
  { icon: Mail, label: 'E-mail', value: contact.emailLabel, href: contact.email },
  { icon: AtSign, label: 'Instagram', value: '@mecanica277foz', href: contact.instagram, external: true },
]

function Contact() {
  return (
    <>
      <section className="contact" id="contato">
        <img className="contact__bg" src={facadeImage} alt="" aria-hidden="true" />
        <div className="contact__overlay" aria-hidden="true" />
        <div className="container contact__inner">
          <Reveal className="contact__headline">
            <p className="eyebrow eyebrow--light"><span />Vamos cuidar do seu veículo?</p>
            <h2>Fale com a 277 e coloque sua rotina <em>de volta na estrada.</em></h2>
            <a className="button button--yellow" href={contact.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp <ArrowUpRight />
            </a>
          </Reveal>

          <Reveal className="contact__panel" delay={100}>
            <div className="contact__location">
              <MapPin aria-hidden="true" />
              <div><span>Atendimento em</span><strong>Foz do Iguaçu — PR</strong></div>
            </div>
            <div className="contact__hours">
              <Clock3 aria-hidden="true" />
              <div><span>Horário</span><strong>Segunda a sexta, das 8h às 18h</strong></div>
            </div>
            <div className="contact__channels">
              {channels.map((channel) => {
                const Icon = channel.icon
                return (
                  <a key={channel.label} href={channel.href} target={channel.external ? '_blank' : undefined} rel={channel.external ? 'noreferrer' : undefined}>
                    <Icon aria-hidden="true" />
                    <span><small>{channel.label}</small><strong>{channel.value}</strong></span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <Brand compact />
          <p>Manutenção automotiva com precisão, agilidade e respeito pelo cliente.</p>
          <nav aria-label="Navegação do rodapé">
            <a href="#servicos">Serviços</a><a href="#modulos">Módulos</a><a href="#frotas">Frotas</a><a href="#estrutura">Estrutura</a><a href="#sobre">Sobre</a><a href="#inicio">Voltar ao topo</a>
          </nav>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Mecânica 277. Todos os direitos reservados.</span>
          <span>Foz do Iguaçu — PR</span>
        </div>
      </footer>
    </>
  )
}

export default Contact
