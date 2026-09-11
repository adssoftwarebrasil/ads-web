import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Escola de Futebol',
  'Grama Sintética Decorativa',
  'Grama Sintética Esportiva',
  'Locação de Campo',
  'Complexo Esportivo',
];

const REGIONS = [
  'Cuiabá', 'Várzea Grande', 'Tangará da Serra',
  'Nova Mutum', 'Rondonópolis', 'Sinop', 'Sorriso',
  'Lucas do Rio Verde', 'Primavera do Leste', 'Mato Grosso',
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C4D39] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo-casa-do-futebol.png"
              alt="Casa do Futebol"
              className="h-16 w-auto object-contain mb-4 [filter:drop-shadow(0_0_1.5px_rgba(255,255,255,0.95))]"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Mais de 6 anos transformando o esporte em Mato Grosso com qualidade e dedicação.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/escolinhacasadofutebol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#236E45] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram Escolinha"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.instagram.com/grama_sintetica_mt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#236E45] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram Grama Sintética"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/escolinhadozico10mt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#236E45] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#236E45] mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#236E45] mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#236E45] mb-5">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#236E45] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">R. Califórnia, 221 - Jardim California, Cuiabá - MT</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#236E45] flex-shrink-0" />
                <a href="http://wa.me/556581172880" className="text-white/70 hover:text-white text-sm transition-colors">
                  (65) 9 8117-2880
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#236E45] flex-shrink-0" />
                <a href="mailto:gramasintetica.matogrosso@gmail.com" className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  gramasintetica.matogrosso@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white/50 text-xs uppercase tracking-wider mb-2">Atendemos em:</h5>
              <div className="flex flex-wrap gap-1.5">
                {REGIONS.map((r) => (
                  <span key={r} className="bg-white/8 text-white/60 text-xs px-2 py-0.5 rounded-md">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Casa do Futebol · Grama Sintética Mato Grosso. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Cuiabá - MT · CNPJ disponível mediante solicitação
          </p>
        </div>
      </div>
    </footer>
  );
}
