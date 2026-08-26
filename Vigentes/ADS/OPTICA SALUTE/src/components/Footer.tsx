import { MapPin, Phone, Heart, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/optica%20salute/img/logo-sem-fundo.webp"
              alt="Óptica Salute"
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: 'rgb(196, 194, 195)', lineHeight: 1.8 }}
            >
              Saúde ocular e estilo em um único lugar. Desde 2023, somos a referência em óculos e
              lentes de qualidade na Asa Sul, Brasília.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/opticasalute/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(223, 209, 162, 0.1)', color: 'rgb(223, 209, 162)' }}
              >
                <Instagram
                  width={18}
                  height={18}
                  className="lucide lucide-instagram"
                  strokeWidth={2}
                />
              </a>
              <a
                href="http://wa.me/556135424555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(223, 209, 162, 0.1)', color: 'rgb(223, 209, 162)' }}
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgb(223, 209, 162)' }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[rgb(223,209,162)]"
                    style={{ color: 'rgb(196, 194, 195)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: 'rgb(223, 209, 162)' }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  width={16}
                  height={16}
                  className="lucide lucide-map-pin shrink-0 mt-0.5"
                  strokeWidth={2}
                  style={{ color: 'rgb(80, 4, 4)' }}
                />
                <span className="text-sm leading-relaxed" style={{ color: 'rgb(196, 194, 195)' }}>
                  SCL 205 15 - Asa Sul
                  <br />
                  Brasília - DF, 70235-510
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  width={16}
                  height={16}
                  className="lucide lucide-phone shrink-0 mt-0.5"
                  strokeWidth={2}
                  style={{ color: 'rgb(80, 4, 4)' }}
                />
                <a
                  href="tel:+556135424555"
                  className="text-sm transition-colors duration-200 hover:text-[rgb(223,209,162)]"
                  style={{ color: 'rgb(196, 194, 195)' }}
                >
                  (61) 3542-4555
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-8"
          style={{ borderTop: '1px solid rgba(196, 194, 195, 0.15)' }}
        >
          <p className="text-xs" style={{ color: 'rgb(99, 99, 97)' }}>
            © 2026 Óptica Salute. Todos os direitos reservados.
          </p>
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: 'rgb(99, 99, 97)' }}
          >
            Feito com{' '}
            <Heart
              width={12}
              height={12}
              className="lucide lucide-heart"
              strokeWidth={2}
              style={{ color: 'rgb(80, 4, 4)' }}
            />{' '}
            em Brasília
          </p>
        </div>
      </div>
    </footer>
  );
}
