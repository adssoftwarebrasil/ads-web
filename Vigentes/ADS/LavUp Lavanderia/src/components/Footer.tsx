import { Facebook, Heart, Instagram, MapPin, Phone } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5516992979707';
const LOGO = 'https://storage.lucasmendes.dev/site-sp/lavup/img/logo.webp';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.940 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(135deg, rgb(84, 46, 145) 0%, rgb(38, 182, 230) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#inicio">
              <img
                src={LOGO}
                alt="Lavup Araraquara"
                className="h-16 w-auto object-contain mb-4"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Lavanderia de autoatendimento em Araraquara - SP. Lave e seque
              suas roupas em 75 minutos com praticidade, economia e tecnologia.
            </p>
            <p className="text-white/60 text-sm italic mb-6">
              "Enquanto gira, a vida acontece."
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lavupararaquara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Lavup"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61557185141903&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Lavup"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Facebook size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Lavup"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
              >
                <WhatsAppGlyph />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/65 text-sm">
                <MapPin
                  size={16}
                  className="flex-shrink-0 mt-0.5 text-[rgb(118,203,199)]"
                />
                <span>
                  R. João Gurgel, 1386
                  <br />
                  Jardim do Carmo
                  <br />
                  Araraquara - SP, 14800-180
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/65 hover:text-white text-sm transition-colors"
                >
                  <Phone
                    size={16}
                    className="flex-shrink-0 text-[rgb(118,203,199)]"
                  />
                  (16) 9 9297-9707
                </a>
              </li>
            </ul>
            <div
              className="mt-6 p-3 rounded-xl"
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              <p className="text-white/80 text-xs font-medium">
                Lavanderia de Autoatendimento
              </p>
              <p className="text-white/55 text-xs mt-0.5">
                Araraquara - SP · Desde 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
            <p>© 2026 Lavup Araraquara. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              Feito com{' '}
              <Heart
                size={12}
                className="text-[rgb(190,83,160)] fill-[rgb(190,83,160)]"
              />{' '}
              em Araraquara - SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
