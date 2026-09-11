import Brand from '../components/Brand.jsx'
import { contact } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="#inicio" aria-label="Voltar ao início"><Brand /></a>
        <p>Proteção para você, sua família e sua empresa.</p>
        <nav aria-label="Navegação do rodapé">
          <a href="#planos">Planos</a>
          <a href="#sobre">A CWB Saúde</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} CWB Corretora de Plano de Saúde Ltda.</span>
        <span>CNPJ 44.173.253/0001-32</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  )
}

export default Footer
