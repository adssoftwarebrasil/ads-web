import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Revelação Tradicional',
  'Molduras Personalizadas',
  'Fotografia de Estúdio',
  'Restauração de Fotos',
  'Filmagens de Eventos',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(34,9,92)] via-[rgb(6,51,133)] to-[rgb(2,126,198)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/laborphoto%2Fimg%2Flogo-sem-fundo.webp"
                alt="Laborphoto"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              40 anos preservando suas memórias com qualidade e tradição no Guará, Brasília.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/laborphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Laborphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-200">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-gray-200">
                  QE 34 bloco A, Guará II<br />
                  Brasília - DF
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:6133818686"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  (61) 3381-8686
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="http://wa.me/556192241725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  (61) 9 9224-1725
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300">© 2026 Laborphoto. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm mt-2">
            40 anos de tradição e qualidade em serviços fotográficos
          </p>
        </div>
      </div>
    </footer>
  );
}
