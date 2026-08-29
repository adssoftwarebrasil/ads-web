import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';
const INSTAGRAM = 'https://www.instagram.com/tap_metal/';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = [
  'Reservatórios Metálicos',
  'Bebedouros para Gado',
  'Projetos Exclusivos',
  'Recuperação e Reforma',
  'Tanques para Combustível',
];

function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgba(9,9,35)] border-t border-[rgba(198,198,207,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tap%20metal%2Flogo%2Ftap-logo-sem%20fundo.png"
              alt="TAP Metal Logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-[rgba(198,198,207)] mb-6 leading-relaxed">
              17 anos fabricando caixas d'água metálicas com excelência e tecnologia de ponta para todo o
              Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgba(12,132,227,0.2)] hover:bg-[rgba(12,132,227)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram
                  size={20}
                  className="text-[rgba(12,132,227)] hover:text-white transition-colors"
                />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgba(12,132,227,0.2)] hover:bg-[rgba(12,132,227)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone
                  size={20}
                  className="text-[rgba(12,132,227)] hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s} className="text-[rgba(198,198,207)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[rgba(12,132,227)] flex-shrink-0 mt-1" />
                <span className="text-[rgba(198,198,207)] text-sm">
                  Av. V-8, S/N - Quadra 30, Lote 21<br />
                  Mansões Paraíso<br />
                  Aparecida de Goiânia - GO
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[rgba(12,132,227)] flex-shrink-0" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors text-sm"
                >
                  (62) 98581-1343
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[rgba(12,132,227)] flex-shrink-0" />
                <a
                  href="mailto:torneadora_apgyn@hotmail.com"
                  className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors text-sm break-all"
                >
                  torneadora_apgyn@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(198,198,207,0.1)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[rgba(198,198,207)] text-sm text-center md:text-left">
              © 2026 TAP Metal. Todos os direitos reservados.
            </p>
            <p className="text-[rgba(198,198,207)] text-sm text-center md:text-right">
              Desenvolvido com tecnologia e qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
