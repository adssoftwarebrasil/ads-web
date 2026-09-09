import { ArrowUpRight } from 'lucide-react';
import Instagram from './InstagramIcon';
import Brand from './Brand';
import { business, navigation } from '../data/site';
import WhatsAppLink from './WhatsAppLink';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Brand footer />
            <p>A fome é sua. O capricho é nosso.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer__contacts">
            <WhatsAppLink className="footer__contact">{business.formattedPhone}</WhatsAppLink>
            <a
              className="footer__contact"
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} aria-hidden="true" /> @srburgone{' '}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="footer__email" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            <span className="footer__facebook">No Facebook: Sr Burgone triunfo</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sr Burgone. Todos os direitos reservados.</span>
          <span>Goianira e região noroeste de Goiânia.</span>
        </div>
      </div>
    </footer>
  );
}
