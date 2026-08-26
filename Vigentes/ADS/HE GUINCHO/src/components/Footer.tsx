import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const linkClass =
  "text-gray-400 hover:text-[rgb(68,235,21)] transition-all duration-500 relative inline-block after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[rgb(68,235,21)] after:left-0 after:bottom-0 after:transition-all after:duration-500 hover:after:w-full";

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(10, 10, 10) 50%, rgb(0, 0, 0) 100%)',
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/heguincho%2Flogo.jpg"
              alt="HE Guincho"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              HE Guincho - Remoção de veículos com rapidez e responsabilidade em Ituiutaba-MG
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  width={20}
                  height={20}
                  className="lucide lucide-phone text-[rgb(68,235,21)] flex-shrink-0"
                />
                <a
                  href="https://wa.me/5534998796167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  (34) 99879-6167
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  width={20}
                  height={20}
                  className="lucide lucide-mail text-[rgb(68,235,21)] flex-shrink-0"
                />
                <a href="mailto:heguincho@gmail.com" className={linkClass}>
                  heguincho@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  width={20}
                  height={20}
                  className="lucide lucide-map-pin text-[rgb(68,235,21)] flex-shrink-0"
                />
                <span className="text-gray-400">Ituiutaba-MG</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/he.guincho"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center text-white hover:scale-105 transition-all duration-500 shadow-lg"
                style={{ boxShadow: 'rgba(68, 235, 21, 0.3) 0px 4px 15px' }}
              >
                <Instagram width={22} height={22} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://wa.me/5534998796167"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(68,235,21)] to-[rgb(40,180,0)] flex items-center justify-center text-white hover:scale-105 transition-all duration-500 shadow-lg"
                style={{ boxShadow: 'rgba(68, 235, 21, 0.3) 0px 4px 15px' }}
              >
                <Phone width={22} height={22} className="lucide lucide-phone " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0a0a] py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 HE Guincho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
