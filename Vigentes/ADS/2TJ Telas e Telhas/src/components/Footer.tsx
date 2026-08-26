import { MessageCircle, MapPin, Clock } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL, scrollToSection } from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(42,38,43)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <img
              src={LOGO_URL}
              alt="2TJ Telas e Telhas"
              className="h-12 sm:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert"
            />
            <p className="text-sm sm:text-base text-white text-opacity-80 leading-relaxed mb-4 sm:mb-6">
              Telhas e telas de qualidade para o DF e Entorno. Construindo o
              futuro com você há 3 anos.
            </p>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[rgb(238,115,62)] rounded-lg flex items-center justify-center hover:bg-[rgb(218,95,42)] transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <MessageCircle
                  width={24}
                  height={24}
                  strokeWidth={2}
                  className="lucide lucide-message-circle "
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white text-opacity-70 hover:text-[rgb(238,115,62)] hover:text-opacity-100 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base text-white text-opacity-80 hover:text-[rgb(238,115,62)] transition-colors duration-300 group"
                >
                  <MessageCircle
                    width={20}
                    height={20}
                    strokeWidth={2}
                    className="lucide lucide-message-circle text-[rgb(238,115,62)] group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    (61) 96593-5529
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base text-white text-opacity-80">
                <MapPin
                  width={20}
                  height={20}
                  strokeWidth={2}
                  className="lucide lucide-map-pin text-[rgb(238,115,62)]"
                />
                <span>Distrito Federal</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base text-white text-opacity-80">
                <Clock
                  width={20}
                  height={20}
                  strokeWidth={2}
                  className="lucide lucide-clock text-[rgb(238,115,62)]"
                />
                <span>Seg-Sex: 08h-17h45</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10">
              <p className="text-sm text-white text-opacity-70 leading-relaxed">
                <span className="text-[rgb(238,115,62)] font-semibold">
                  💡 Dica:
                </span>{' '}
                Entre em contato pelo WhatsApp para um atendimento mais rápido!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white border-opacity-10">
          <p className="text-center text-white text-opacity-50 text-sm">
            © 2025 2TJ Telas e Telhas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
