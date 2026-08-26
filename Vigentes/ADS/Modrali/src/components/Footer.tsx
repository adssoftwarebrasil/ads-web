import { Phone, MapPin, Clock, Mail, Instagram } from 'lucide-react';

const STORE_URL = 'https://www.lojamodrali.com.br';
const WHATSAPP_NUMBER = '5519997536768';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Coluna 1: Logo e Sobre */}
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/lojamodrali/logo.webp"
              alt="MODRALI Logo"
              className="h-14 mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Soluções em equipamentos hidráulicos e pneumáticos desde 1994.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#00476F]">Links Rápidos</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF8337] transition-colors duration-300 text-sm font-medium"
                >
                  Loja Online
                </a>
              </li>
              {[
                { label: 'Categorias', id: 'categorias' },
                { label: 'Produtos', id: 'produtos' },
                { label: 'Sobre Nós', id: 'sobre' }
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => onScrollTo(id)}
                    className="text-gray-600 hover:text-[#FF8337] transition-colors duration-300 text-sm font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#00476F]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#FF8337]" />
                <div className="text-sm">
                  <a
                    href="tel:1925339800"
                    className="text-gray-600 hover:text-[#FF8337] transition-colors duration-300 block font-medium"
                  >
                    (19) 2533-9800
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#FF8337] transition-colors duration-300 block font-medium mt-1"
                  >
                    (19) 99753-6768
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#FF8337]" />
                <div className="flex flex-col gap-1 text-sm font-medium">
                  <a href="mailto:modrali@modrali.com.br" className="text-gray-600 hover:text-[#FF8337] transition-colors">
                    modrali@modrali.com.br
                  </a>
                  <a href="mailto:vendas2@modrali.com.br" className="text-gray-600 hover:text-[#FF8337] transition-colors">
                    vendas2@modrali.com.br
                  </a>
                  <a href="mailto:vendas3@modrali.com.br" className="text-gray-600 hover:text-[#FF8337] transition-colors">
                    vendas3@modrali.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Localização */}
          <div>
            <h3 className="text-base font-bold mb-4 text-[#00476F]">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#FF8337]" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Av. 31 de Março, 2111<br />
                  Paulicéia, Piracicaba - SP<br />
                  CEP: 13424-305
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-[#FF8337]" />
                <p className="text-gray-600 text-sm">
                  Segunda a Sexta<br />
                  <span className="font-medium text-gray-700">07:30h às 17:30h</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} MODRALI Equipamentos Hidráulicos e Pneumáticos LTDA. Todos os direitos reservados.
            </p>
            <a
              href="https://www.instagram.com/modralibr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8337] text-white p-2.5 rounded-full hover:bg-[#00476F] transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}