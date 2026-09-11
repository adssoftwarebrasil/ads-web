import { Link } from 'react-router-dom';
import { Award, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { LOGO } from '../data/products';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-brand-beige">
      <div className="h-2 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={LOGO} alt="Veranita" className="h-16 w-auto" />
            </Link>
            <p className="font-book text-sm leading-relaxed text-brand-beige/80 max-w-xs">
              Desde 1976 levando mais sabor, qualidade e praticidade à mesa das famílias
              brasileiras.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 px-3 py-2 rounded-full bg-brand-gold/15 border border-brand-gold/30">
              <Award className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">
                Quase 50 anos de tradição
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm font-book">
              {[
                { to: '/', label: 'Início' },
                { to: '/nossa-historia', label: 'Nossa História' },
                { to: '/produtos', label: 'Produtos' },
                { to: '/receitas', label: 'Receitas' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-brand-beige/80 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Categorias
            </h4>
            <ul className="space-y-3 text-sm font-book text-brand-beige/80">
              <li>Especiarias</li>
              <li>Temperos</li>
              <li>Molhos</li>
              <li>Farofas</li>
              <li>Pipocas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-4 text-sm font-book text-brand-beige/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-brand-gold shrink-0" />
                <span>
                  Av. Jorge Abraão, 926
                  <br />
                  Jardim Liberdade
                  <br />
                  Sertãozinho - SP, 14160-020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+5516997516375" className="hover:text-brand-gold transition-colors">
                  (16) 99751-6375
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a
                  href="mailto:contato@veranita.com.br"
                  className="hover:text-brand-gold transition-colors"
                >
                  contato@veranita.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-brand-gold shrink-0" />
                <span>
                  Seg a Sex
                  <br />
                  07h30 às 11h30 / 13h00 às 17h30
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-3">
                Siga-nos
              </p>
              <SocialLinks
                bg="bg-brand-brown-dark"
                hoverBg="hover:bg-brand-gold"
                color="text-brand-gold"
                hoverColor="hover:text-brand-brown"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-beige/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-beige/60 font-book">
            © {year} Veranita Produtos Alimentícios. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-beige/60 font-book">Tradição e sabor desde 1976.</p>
        </div>
      </div>
    </footer>
  );
}
