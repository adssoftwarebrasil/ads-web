import { Instagram, Facebook, Clock, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#products', label: 'Produtos' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#location', label: 'Localização' },
  { href: '#contact', label: 'Contato' },
];

const hours = [
  { day: 'Segunda a Sexta', time: '09:00 às 18:00' },
  { day: 'Sábado', time: '08:30 às 12:30' },
  { day: 'Domingo', time: 'Fechado' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(45,45,45)] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fimg%2Flogo-dourada-sem-fundo.webp"
              alt="Quase Tudo Shopping dos Puxadores"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              31 anos transformando ambientes com elegância, qualidade e atendimento especializado.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/quasetudopuxadores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(212,171,85)] transition-colors duration-300 p-3 rounded-full"
              >
                <Instagram width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/quasetudopuxadoresoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[rgb(212,171,85)] transition-colors duration-300 p-3 rounded-full"
              >
                <Facebook width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(212,171,85)]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[rgb(212,171,85)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(212,171,85)]">Horários</h3>
            <ul className="space-y-3 text-gray-300">
              {hours.map((h) => (
                <li key={h.day} className="flex items-start space-x-2">
                  <Clock width={18} height={18} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{h.day}</p>
                    <p>{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(212,171,85)]">Contato</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin width={20} height={20} className="mt-0.5 flex-shrink-0" />
                <span>
                  Av. Castelo Branco, n° 1532
                  <br />
                  Coimbra, Goiânia - GO
                  <br />
                  74530-010
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone width={20} height={20} className="mt-0.5 flex-shrink-0" />
                <a
                  href="http://wa.me/556293252626"
                  className="hover:text-[rgb(212,171,85)] transition-colors duration-200"
                >
                  (62) 9 9325-2626
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail width={20} height={20} className="mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:quasetudogo@gmail.com"
                  className="hover:text-[rgb(212,171,85)] transition-colors duration-200"
                >
                  quasetudogo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Quase Tudo Shopping dos Puxadores. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
