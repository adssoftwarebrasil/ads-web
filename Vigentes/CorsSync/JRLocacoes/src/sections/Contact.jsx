import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const whatsappNumbers = [
  { label: '(62) 98164-8938', value: '5562981648938' },
  { label: '(62) 98402-7256', value: '5562984027256' },
  { label: '(62) 99874-5506', value: '5562998745506' },
]

const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento com a JR Locações.')

function Contact() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-main">
        <div className="container contact-main-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow eyebrow--light">Fale com a equipe</span>
            <h2 id="contact-title">Conte o que você precisa mover.</h2>
            <p>
              Envie os detalhes da sua demanda e consulte disponibilidade para caminhão munck,
              içamento, transporte ou contêineres.
            </p>
            <span className="contact-note">Atendimento das 08h às 18h.</span>
          </div>

          <div className="contact-whatsapps reveal">
            <span>Escolha um número</span>
            {whatsappNumbers.map((number, index) => (
              <a
                key={number.value}
                href={`https://wa.me/${number.value}?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-phone-index">0{index + 1}</span>
                <MessageCircle aria-hidden="true" />
                <strong>{number.label}</strong>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="container contact-details-grid">
          <article>
            <MapPin aria-hidden="true" />
            <div>
              <span>Endereço</span>
              <p>Av. Juscelino Kubitscheck, Qd. 108, Lt. 11, nº 435 — Vila Pai Eterno — Trindade/GO</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av.%20Juscelino%20Kubitscheck%20435%20Vila%20Pai%20Eterno%20Trindade%20GO"
                target="_blank"
                rel="noreferrer"
              >
                Ver no mapa
              </a>
            </div>
          </article>
          <article>
            <Mail aria-hidden="true" />
            <div>
              <span>E-mails</span>
              <a href="mailto:comercial@jrlocacoeseequipamentos.com.br">comercial@jrlocacoeseequipamentos.com.br</a>
              <a href="mailto:silvan.marquesjr@gmail.com">silvan.marquesjr@gmail.com</a>
            </div>
          </article>
          <article>
            <Clock3 aria-hidden="true" />
            <div>
              <span>Atendimento</span>
              <p>08:00 às 18:00</p>
              <p>Trindade e região</p>
            </div>
          </article>
          <article>
            <Instagram aria-hidden="true" />
            <div>
              <span>Instagram</span>
              <a href="https://www.instagram.com/jrlocacoes.br/" target="_blank" rel="noreferrer">
                @jrlocacoes.br
              </a>
              <a href="tel:+5562981648938">
                <Phone size={17} aria-hidden="true" />
                (62) 98164-8938
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
