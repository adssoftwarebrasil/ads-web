import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const productItems = [
  'Pisos Laminados',
  'Pisos Vinílicos',
  'Pisos de Borracha',
  'Carpetes & Tapetes',
  'Papel de Parede',
  'Rodapés & Molduras',
  'Persianas',
  'Acessórios',
];

const socials = [
  { icon: Facebook, iconClass: 'lucide-facebook', href: 'https://www.facebook.com/pisosmagonsc' },
  { icon: Instagram, iconClass: 'lucide-instagram', href: 'https://www.instagram.com/comercialmagon/' },
  { icon: Twitter, iconClass: 'lucide-twitter', href: 'https://x.com/pisosmagon' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/comercial%20magon%2Fimg%2Flogo-sem-fundo.png"
              alt="Comercial Magon"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Mais de 50 anos oferecendo qualidade e excelência em pisos, revestimentos e acabamentos para São Carlos e região.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[rgb(66,66,152)] text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={20} className={`lucide ${social.iconClass}`} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(252,205,59)]">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(252,205,59)]">Produtos</h3>
            <ul className="space-y-3 text-gray-400">
              {productItems.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(252,205,59)]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="lucide lucide-map-pin text-[rgb(113,147,204)] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  R. Miguel João, 1053<br />Jardim Bandeirantes<br />São Carlos - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="lucide lucide-phone text-[rgb(113,147,204)] flex-shrink-0" />
                <a
                  href="https://wa.me/5516991541924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (16) 99154-1924
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="lucide lucide-mail text-[rgb(113,147,204)] flex-shrink-0 mt-1" />
                <a
                  href="mailto:comercialmagon.sc@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  comercialmagon.sc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Comercial Magon. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
