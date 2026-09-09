import BrandLogo from '../components/BrandLogo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <a href="#inicio" aria-label="Voltar ao início">
          <BrandLogo className="brand-logo--footer" />
        </a>
        <p>Rolamentos e componentes para manter sua operação em movimento.</p>
        <nav aria-label="Navegação do rodapé">
          <a href="#produtos">Produtos</a>
          <a href="#historia">Nossa história</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Feira Rolamentos. Todos os direitos reservados.</p>
        <p>Feira de Santana · Bahia</p>
      </div>
    </footer>
  )
}
