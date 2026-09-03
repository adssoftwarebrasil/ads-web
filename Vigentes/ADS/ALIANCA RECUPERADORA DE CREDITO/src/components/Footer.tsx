import { IconFacebook, IconInstagram, IconPhone } from './icons';

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo-parcela-amiga.webp" alt="Logo Parcela Amiga" width="120" height="40" />
          </div>
          <p>A Amiga existe para te ajudar! Atendimento 100% nacional.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Links Rápidos</h4>
          <a className="footer-link" href="#">
            Home
          </a>
          <a className="footer-link" href="#simulador">
            Simulador
          </a>
          <a className="footer-link" href="#como-funciona">
            Como Funciona
          </a>
          <a className="footer-link" href="#contato">
            Contato
          </a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Contato</h4>
          <p className="footer-contact">
            <IconPhone /> 0800 555 2569
          </p>
          <p className="footer-hours">Segunda a Sexta: 9h às 18h</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/parcelaamiga" className="social-btn social-fb" title="Facebook">
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/parcelaamiga/" className="social-btn social-ig" title="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Parcela Amiga Recuperadora. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
