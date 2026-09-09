import { ArrowUpRight, Clock3, MapPin, MessageCircle } from 'lucide-react'

const quickItems = [
  {
    icon: Clock3,
    label: 'Emergência',
    title: 'Atendimento 24h',
    text: 'Equipe presente no RoVet Hospital Veterinário durante todo o dia e toda a noite.',
    href: 'tel:+5563999466901',
    action: 'Ligar agora',
  },
  {
    icon: MessageCircle,
    label: 'Contato direto',
    title: 'Fale com a Rovet',
    text: 'Converse com a equipe e receba orientação para chegar ao hospital.',
    href: 'https://wa.me/5563999466901?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20veterin%C3%A1rio.',
    action: 'Abrir WhatsApp',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Fácil acesso',
    title: 'No centro da cidade',
    text: 'Av. Bernardo Sayão, esquina com a Rua 21 de Abril.',
    href: 'https://www.google.com/maps/search/?api=1&query=Avenida+Bernardo+Sayao+416+Centro+Paraiso+do+Tocantins+TO',
    action: 'Traçar rota',
    external: true,
  },
]

function QuickAccess() {
  return (
    <section className="quick-access" aria-label="Acessos rápidos">
      <div className="container quick-access-grid">
        {quickItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              className="quick-card"
              href={item.href}
              key={item.title}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              data-reveal
            >
              <span className="quick-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="quick-card__content">
                <small>{item.label}</small>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </span>
              <span className="quick-card__action">
                {item.action}
                <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default QuickAccess
