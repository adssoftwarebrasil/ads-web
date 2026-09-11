import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const productLinks = ['Orquídeas Variadas', 'Arranjos Florais', 'Plantas Ornamentais', 'Decoração'];

const attendance = ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 14h', 'Domingo: Fechado'];

const socials = [
  {
    href: 'https://www.instagram.com/amoorquideaoficial/',
    icon: Instagram,
    label: 'Instagram',
    color: 'rgb(227, 97, 222)',
  },
  {
    href: 'https://www.facebook.com/OrquideaeCia/',
    icon: Facebook,
    label: 'Facebook',
    color: 'rgb(22, 126, 79)',
  },
  {
    href: 'https://www.youtube.com/@orquidarioorquideacia13',
    icon: Youtube,
    label: 'YouTube',
    color: 'rgb(163, 206, 15)',
  },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fimg%2Flogo-sem-fundo.webp"
              alt="Orquidário Orquídea&amp;Cia"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Há mais de 16 anos cultivando beleza e qualidade em orquídeas e plantas ornamentais. Sua
              floricultura de confiança em Valinhos.
            </p>
            <div className="space-y-3">
              <a
                href="tel:1941171827"
                className="flex items-center space-x-3 text-gray-400 hover:text-[rgb(163,206,15)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(19) 4117-1827</span>
              </a>
              <a
                href="https://amoorquideas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-[rgb(163,206,15)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>amoorquideas.com.br</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  R. Paiquerê, 1600 - Jardim Paiquere
                  <br />
                  Valinhos - SP, 13271-600
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-[rgb(163,206,15)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item}>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              {attendance.map((item) => (
                <li key={item}>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label={social.label}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end space-x-1">
                <span>© 2026 Orquidário Orquídea&amp;Cia.</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">CNPJ: 12.424.395/0001-39</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
