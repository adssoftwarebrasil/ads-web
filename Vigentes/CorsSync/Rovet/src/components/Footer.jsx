import { Instagram, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo-rovet.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Rovet Hospital Veterinário" />
          <p>Cuidado clínico e cirúrgico com presença, estrutura e respeito à vida.</p>
        </div>

        <div>
          <h2>Atendimento</h2>
          <p>24 horas, todos os dias</p>
          <a href="tel:+5563999466901">
            <Phone aria-hidden="true" />
            (63) 99946-6901
          </a>
        </div>

        <div>
          <h2>Encontre a Rovet</h2>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+Bernardo+Sayao+416+Centro+Paraiso+do+Tocantins+TO"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" />
            Av. Bernardo Sayão, 416, Centro
          </a>
          <a
            href="https://www.instagram.com/rovethospital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <Instagram aria-hidden="true" />
            @rovethospital
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Rovet Hospital Veterinário.</p>
        <p>CNPJ 48.888.707/0001-02</p>
      </div>
    </footer>
  )
}

export default Footer
