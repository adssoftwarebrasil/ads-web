import { Instagram } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../constants';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceItems = [
  'Hidráulica',
  'Elétrica',
  'Ferragens',
  'Materiais Básicos',
  'PISO/REVESTIMENTO',
];

export default function Footer() {
  return (
    <footer className="bg-[#253579] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconstrucertocamari%2Flogo.png"
              alt="Rede Construcerto"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              A Rede Construcerto Camaçari, fundada em 2024, é a escolha ideal para quem
              busca material de construção de qualidade e a preços competitivos. Focamos no
              atendimento a pessoas físicas, jurídicas e condomínios, oferecendo uma
              variedade de produtos que atendem as exigências do mercado da construção
              civil.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-center md:text-left">
              <p className="mb-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (71) 99974-3842
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:contato@redeconstrucerto.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@redeconstrucerto.com.br
                </a>
              </p>
              <p className="text-sm">
                Rodovia da BA-531 - Via Abrantes - Cascalheira, S/N, Loteamento Montenegro
                - Camaçari/BA/42.812-168
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8">
            Copyright © 2026 - Rede Construcerto Camaçari. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
