import Icon from './Icon.jsx'
import Logo from './Logo.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>Hospitalidade em Goianésia desde 1973.</p>
        </div>
        <div className="footer__column">
          <p className="footer__label">Explore</p>
          <a href="#acomodacoes">Acomodações</a>
          <a href="#experiencia">Experiência</a>
          <a href="#historia">Nossa história</a>
          <a href="#galeria">Galeria</a>
        </div>
        <div className="footer__column">
          <p className="footer__label">Contato</p>
          <a href="tel:+556233533888">(62) 3353-3888</a>
          <a href="#localizacao">Rua 28, 330 — Carrilho<br />Goianésia/GO</a>
          <span>Atendimento 24 horas</span>
        </div>
        <div className="footer__column">
          <p className="footer__label">Acompanhe</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/goiatubahotel/" target="_blank" rel="noreferrer" aria-label="Instagram do Goiatuba Hotel"><Icon name="instagram" /></a>
            <a href="https://www.facebook.com/goiatubahotel/?locale=pt_BR" target="_blank" rel="noreferrer" aria-label="Facebook do Goiatuba Hotel"><Icon name="facebook" /></a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Goiatuba Hotel</span>
        <span>CNPJ 01.992.833/0001-49</span>
      </div>
    </footer>
  )
}

export default Footer
