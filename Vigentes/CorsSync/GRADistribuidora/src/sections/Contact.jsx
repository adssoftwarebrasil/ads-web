import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua José Braz, Qd. 06, Lt. 52, nº 588 — Residencial Garavelo, Trindade — GO, 75386-500',
    href: 'https://www.google.com/maps/search/?api=1&query=Rua%20Jos%C3%A9%20Braz%2C%20588%2C%20Residencial%20Garavelo%2C%20Trindade%20GO%2C%2075386-500',
    action: 'Abrir no mapa',
  },
  {
    icon: Clock3,
    label: 'Horário de atendimento',
    value: '08h às 12h e 13h às 18h',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'gradistribuidoradepecas@gmail.com',
    href: 'mailto:gradistribuidoradepecas@gmail.com',
    action: 'Enviar e-mail',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@gradistribuidoradepecas',
    href: 'https://www.instagram.com/gradistribuidoradepecas/',
    action: 'Acompanhar',
  },
]

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container contact-shell">
        <div className="contact-callout" data-reveal>
          <p className="eyebrow"><span /> Fale com a GRA</p>
          <h2>Seu veículo precisa seguir. A gente ajuda a colocar ele no caminho.</h2>
          <p>
            Chame no WhatsApp para consultar peças, serviços mecânicos ou atendimento de guincho.
          </p>
          <a
            className="button button-yellow"
            href="https://wa.me/5562991073396?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20GRA%20e%20gostaria%20de%20atendimento."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <a className="phone-link" href="tel:+5562991073396">(62) 99107-3396</a>
        </div>

        <div className="contact-details">
          {contactItems.map(({ icon: Icon, label, value, href, action }) => (
            <article className="contact-item" key={label} data-reveal>
              <Icon aria-hidden="true" />
              <div>
                <span>{label}</span>
                <p>{value}</p>
                {href && (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                    {action} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
