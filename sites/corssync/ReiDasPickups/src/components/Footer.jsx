import Brand from './Brand.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#inicio" aria-label="Voltar ao início"><Brand compact /></a>
        <p>Auto peças, motores, transmissões e mecânica especializada em Goiás.</p>
        <span>© {new Date().getFullYear()} Rei das Pickups.</span>
      </div>
    </footer>
  )
}

export default Footer
