import { Instagram } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const menuItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const productList: string[] = [
  'Suvinil Fosco Completo',
  'Gekril Economax',
  'Tintas Automotivas Skaylack',
  'Suvinil Limpeza Total',
  'Proteção Total Suvinil',
  'Metalatex Super Lavável',
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/protaldastintas%2Fimg%2Flogomarca%201.png"
              alt="Portal Tintas"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Fundada em 2004, a Portal Tintas destaca-se pelo compromisso com a qualidade no
              atendimento e a diversidade de produtos.
            </p>
            <a
              href="https://www.instagram.com/portaltintas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-[#f08736] rounded-full hover:bg-[#e67321] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="lucide lucide-instagram " width={20} height={20} />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#f08736] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {productList.map((p) => (
                <li key={p}>
                  <span className="text-gray-400">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-white">WhatsApp:</strong>
                <br />
                <a href="https://wa.me/5527997073666" className="hover:text-[#f08736] transition-colors">
                  (27) 99707-3666
                </a>
              </li>
              <li>
                <strong className="text-white">Telefone:</strong>
                <br />
                <a href="tel:2732523666" className="hover:text-[#f08736] transition-colors">
                  (27) 3252-3666
                </a>
              </li>
              <li>
                <strong className="text-white">E-mail:</strong>
                <br />
                <a
                  href="mailto:portaltintas-@hotmail.com"
                  className="hover:text-[#f08736] transition-colors"
                >
                  portaltintas-@hotmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Endereço:</strong>
                <br />
                Av. Abido Saad, 2207
                <br />
                Das Laranjeiras, Serra - ES
                <br />
                CEP: 29175-585
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Portal Tintas - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
