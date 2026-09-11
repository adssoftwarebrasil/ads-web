import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { whatsappUrl } from '../data/siteData'

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-pattern" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">Próximo percurso</p>
          <h2>Seu espaço está pronto para acolher todas as pessoas?</h2>
          <p>Conte o contexto do seu projeto e converse diretamente com uma especialista em acessibilidade arquitetônica.</p>
          <a className="button button--yellow" href={whatsappUrl} target="_blank" rel="noreferrer">
            Iniciar conversa no WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <address className="contact-card" data-reveal>
          <div><Phone aria-hidden="true" /><span><small>Telefone e WhatsApp</small><a href="tel:+5562982760874">+55 62 98276-0874</a></span></div>
          <div><Mail aria-hidden="true" /><span><small>E-mails</small><a href="mailto:eliana.trevisan@conexaoacessivel.com.br">eliana.trevisan@conexaoacessivel.com.br</a><a href="mailto:estrevisan@gmail.com">estrevisan@gmail.com</a></span></div>
          <div><Clock3 aria-hidden="true" /><span><small>Horário</small><p>Segunda a sexta, das 8h às 17h</p></span></div>
          <div><MapPin aria-hidden="true" /><span><small>Endereço</small><p>Rua J38, Quadra 66, Lote 18, sem número<br />Setor Jaó · CEP 74.673-560</p></span></div>
        </address>
      </div>
    </section>
  )
}

export default Contact
