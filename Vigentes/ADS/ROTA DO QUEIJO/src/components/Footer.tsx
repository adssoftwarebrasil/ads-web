import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '#início', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#serviços', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const horarios = [
  { dia: 'Segunda a Sexta', hora: '07:00 - 17:30' },
  { dia: 'Sábado', hora: '07:00 - 12:00' },
  { dia: 'Domingo', hora: 'Fechado' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(32,29,30)] text-[rgb(254,254,254)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/logo-atualizada.png"
              alt="Rota do Queijo"
              className="h-20 w-auto mb-6"
            />
            <p className="text-[rgb(254,254,254)]/70 leading-relaxed mb-4">
              Desde 2016 oferecendo qualidade, sofisticação e sabor com produtos de primeira linha.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rotadoqueijodf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(197,162,3)]/20 rounded-full flex items-center justify-center hover:bg-[rgb(197,162,3)] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100069847886739"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(197,162,3)]/20 rounded-full flex items-center justify-center hover:bg-[rgb(197,162,3)] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[rgb(197,162,3)] font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgb(254,254,254)]/70 hover:text-[rgb(197,162,3)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[rgb(197,162,3)] font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone
                  width={18}
                  height={18}
                  className="text-[rgb(197,162,3)] flex-shrink-0 mt-1"
                />
                <a
                  href="http://wa.me/556184960294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(254,254,254)]/70 hover:text-[rgb(197,162,3)] transition-colors"
                >
                  (61) 9 8496-0294
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  width={18}
                  height={18}
                  className="text-[rgb(197,162,3)] flex-shrink-0 mt-1"
                />
                <span className="text-[rgb(254,254,254)]/70">
                  QS 01 LED/Intercity Hotéis - Loja 10 e 11
                  <br />
                  Águas Claras, Brasília - DF
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[rgb(197,162,3)] font-bold text-lg mb-6">
              Horário de Funcionamento
            </h3>
            <ul className="space-y-3">
              {horarios.map((h) => (
                <li key={h.dia} className="flex items-start space-x-3">
                  <Clock
                    width={18}
                    height={18}
                    className="text-[rgb(197,162,3)] flex-shrink-0 mt-1"
                  />
                  <div className="text-[rgb(254,254,254)]/70">
                    <p className="font-semibold text-[rgb(254,254,254)]">{h.dia}</p>
                    <p>{h.hora}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(197,162,3)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(254,254,254)]/60 text-sm text-center md:text-left">
              2026 Rota do Queijo DF. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
