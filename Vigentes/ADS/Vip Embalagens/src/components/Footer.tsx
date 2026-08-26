import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/556294205040';
const INSTAGRAM_URL = 'https://www.instagram.com/vipcolordesigner';

const quickLinks = [
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

const servicos = [
  'Sacolas Personalizadas',
  'Tags para Roupas e Joias',
  'Adesivos Personalizados',
  'Papel de Seda',
  'Identidade Visual',
  'Embalagens Premium',
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(3,101,84)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/vip%20color/img/logo-sem-fundo.png"
              alt="Vip Designer e Embalagens"
              className="h-16 w-auto"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Especialistas em embalagens personalizadas e identidade visual.
              Transformando ideias em realidade há mais de 15 anos.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[rgb(229,198,99)]">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="text-white/80 hover:text-[rgb(229,198,99)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[rgb(229,198,99)]">
              Nossos Serviços
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {servicos.map((servico) => (
                <li key={servico}>{servico}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[rgb(229,198,99)]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Av. Zoroastro Artiaga
                  <br />
                  Cruzeiro do Sul
                  <br />
                  Aparecida de Goiânia - GO
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  className="hover:text-[rgb(229,198,99)] transition-colors"
                >
                  (62) 9 94205-0040
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Seg-Qui: 8h-18h
                  <br />
                  Sex: 8h-17h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-white/60 text-center sm:text-left">
              © 2026 Vip Designer e Embalagens. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
