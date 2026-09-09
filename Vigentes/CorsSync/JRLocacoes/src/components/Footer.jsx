import { Instagram } from 'lucide-react'
import logo from '../assets/logo-jr-locacoes.jpeg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Logotipo da JR Locações" />
          <p>Caminhão munck, içamento, transporte e contêineres.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <strong>Navegue</strong>
          <a href="#solucoes">Soluções</a>
          <a href="#operacoes">Operações</a>
          <a href="#empresa">A JR</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="footer-contact">
          <strong>Fale com a JR</strong>
          <a href="mailto:comercial@jrlocacoeseequipamentos.com.br">
            comercial@jrlocacoesequipamentos.com.br
          </a>
          <a href="https://www.instagram.com/jrlocacoes.br/" target="_blank" rel="noreferrer">
            <Instagram size={18} aria-hidden="true" />
            @jrlocacoes.br
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} JR Locações.</span>
        <span>Trindade • Goiás</span>
      </div>
    </footer>
  )
}

export default Footer
