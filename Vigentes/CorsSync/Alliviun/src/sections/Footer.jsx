import { Camera, Users } from 'lucide-react'
import Brand from '../components/Brand.jsx'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Brand footer />
        <p>Quiropraxia e liberação miofascial com atenção individual e cuidado direto ao ponto.</p>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/alliviunmassoterapia?igsh=MWxrM3d5YWlvZmV5bA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Alliviun"
          >
            <Camera aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/aliviunmassoterapia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook da Alliviun"
          >
            <Users aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Alliviun Massoterapia.</span>
        <span>Atendimento de segunda a sexta, das 8h às 18h.</span>
      </div>
    </footer>
  )
}

export default Footer
