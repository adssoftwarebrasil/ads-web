import { AtSign, BriefcaseBusiness, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo-conexao-acessivel.jpg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Conexão Acessível" />
          <p>Acessibilidade com autonomia, conforto e segurança.</p>
        </div>

        <div>
          <h2>Contato</h2>
          <a href="tel:+5562982760874"><Phone aria-hidden="true" /> +55 62 98276-0874</a>
          <a href="mailto:eliana.trevisan@conexaoacessivel.com.br"><Mail aria-hidden="true" /> E-mail profissional</a>
          <a href="https://www.instagram.com/conexaoacessivel" target="_blank" rel="noreferrer">
            <AtSign aria-hidden="true" /> @conexaoacessivel
          </a>
          <a href="https://www.instagram.com/estrevisan" target="_blank" rel="noreferrer">
            <AtSign aria-hidden="true" /> @estrevisan
          </a>
          <a href="https://www.linkedin.com/in/elianatrevisan1979/" target="_blank" rel="noreferrer">
            <BriefcaseBusiness aria-hidden="true" /> Eliana Trevisan no LinkedIn
          </a>
        </div>

        <div>
          <h2>Atendimento</h2>
          <p>Segunda a sexta, das 8h às 17h.</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+J38+Quadra+66+Lote+18+Setor+Ja%C3%B3+74673-560"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" /> Rua J38, Quadra 66, Lote 18 — Setor Jaó
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Conexão Acessível.</p>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  )
}

export default Footer
