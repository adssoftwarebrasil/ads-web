import { ArrowUpRight, Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const contactItems = [
  {
    icon: MapPin,
    label: 'Localização',
    value: 'R. do Bosque, 660 · Barra Funda',
    href: 'https://www.google.com/maps/search/?api=1&query=Flex+Garagem+Rua+do+Bosque+660+Barra+Funda+S%C3%A3o+Paulo',
    external: true,
  },
  { icon: Clock3, label: 'Atendimento', value: 'Segunda a sexta · 08:30–18:00' },
  { icon: Mail, label: 'E-mail', value: 'flexgaragem01@gmail.com', href: 'mailto:flexgaragem01@gmail.com' },
]

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="contact__mark" aria-hidden="true">FG</div>
      <div className="container contact__layout">
        <Reveal className="contact__pitch">
          <p className="eyebrow eyebrow--lime"><span /> Fale com a Flex</p>
          <h2>Pronto para ver seu carro de outro jeito?</h2>
          <p>
            Conte o que o seu veículo precisa. A gente orienta o cuidado ideal e combina o melhor momento para receber você.
          </p>
          <a
            className="button button--lime button--large button--featured"
            href="https://wa.me/5511911396107?text=Ol%C3%A1%2C%20quero%20agendar%20um%20servi%C3%A7o%20na%20Flex%20Garagem."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            Chamar no WhatsApp
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="contact__details" delay={100}>
          {contactItems.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <span className="contact-detail__icon"><Icon aria-hidden="true" /></span>
                <span><small>{item.label}</small><strong>{item.value}</strong></span>
                {item.href && <ArrowUpRight className="contact-detail__arrow" aria-hidden="true" />}
              </>
            )

            return item.href ? (
              <a
                className="contact-detail"
                href={item.href}
                key={item.label}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <div className="contact-detail" key={item.label}>{content}</div>
            )
          })}

          <div className="contact__socials">
            <p>Siga @flexgaragem</p>
            <div>
              <a href="https://www.instagram.com/flexgaragem/" target="_blank" rel="noreferrer" aria-label="Instagram da Flex Garagem">
                <Instagram aria-hidden="true" /> Instagram
              </a>
              <a href="https://www.facebook.com/flexgaragem" target="_blank" rel="noreferrer" aria-label="Facebook da Flex Garagem">
                <Facebook aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
