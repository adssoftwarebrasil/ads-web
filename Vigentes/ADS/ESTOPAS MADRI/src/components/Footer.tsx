import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Contato', target: 'contato' },
];

const productItems = [
  'Estopas e Panos Técnicos',
  'Linha Automotiva',
  'Papéis Higiênicos e Toalha',
  'Rodos e Vassouras',
  'Galão de Combustível',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/estopas%20madri/img/logo-sem-fundo.webp"
              alt="Estopas Madri"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Fornecimento de estopas, materiais de limpeza e linha automotiva em geral. Qualidade e
              confiança desde 2000.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/estopas_madri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#E93235] rounded-xl flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram width={18} height={18} className="lucide lucide-instagram text-white" />
              </a>
              <a
                href="http://wa.me/556599164429"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="fill-white w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-white/50 hover:text-[#E93235] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="space-y-3">
              {productItems.map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={16}
                  height={16}
                  className="lucide lucide-map-pin text-[#E93235] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/50 text-sm leading-relaxed">
                  R. Nações Unidas, 10<br />Jardim dos Estados<br />Várzea Grande - MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  width={16}
                  height={16}
                  className="lucide lucide-phone text-[#E93235] flex-shrink-0"
                />
                <div>
                  <a
                    href="tel:6536941080"
                    className="text-white/50 hover:text-white text-sm transition-colors block"
                  >
                    (65) 3694-1080
                  </a>
                  <a
                    href="http://wa.me/556599164429"
                    className="text-white/50 hover:text-white text-sm transition-colors block"
                  >
                    (65) 9 9916-4429
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  width={16}
                  height={16}
                  className="lucide lucide-mail text-[#E93235] flex-shrink-0"
                />
                <a
                  href="mailto:estopasmadri@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  estopasmadri@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Estopas Madri. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">Cuiabá, Várzea Grande e Região — MT</p>
        </div>
      </div>
    </footer>
  );
}
