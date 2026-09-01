const WHATSAPP = 'https://wa.me/5566996456124';

const LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/logo.png" alt="Aurora Odontologia" className="footer__logo" />
          <p>Transformando sorrisos em confiança desde 2025</p>
        </div>

        <div className="footer__nav">
          <strong>Navegação</strong>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <strong>Contato</strong>
          <p>
            Av. Tiradentes, 2164 - Centro
            <br />
            Rondonópolis - MT
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            (66) 99645-6124
          </a>
          <a href="mailto:auroraodontologia8@gmail.com">auroraodontologia8@gmail.com</a>
        </div>

        <div className="footer__hours">
          <strong>Horários</strong>
          <p>
            Segunda a Sexta
            <br />
            <span>08:00 – 18:00</span>
          </p>
          <p>
            Sábado
            <br />
            <span>08:00 – 12:00</span>
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Aurora Odontologia · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
