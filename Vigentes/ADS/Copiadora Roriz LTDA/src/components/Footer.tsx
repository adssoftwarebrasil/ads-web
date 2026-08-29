import { Instagram, Phone, MapPin, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const menuLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const productLinks = [
  'Canecas',
  'Copos Térmicos',
  'Brindes',
  'Impressos',
  'Gravação Laser',
  'Troféus',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/so-copias%2Fso%20copias%2Flogo-copias.webp"
              alt="Só Cópias"
              className="h-12 mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Mais de 15 anos personalizando o sucesso de empresas e eventos em Porto Velho.
            </p>
            <a
              href="https://www.instagram.com/socopiasportovelho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@socopiasportovelho</span>
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Menu Rápido</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Produtos em Destaque</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Copiadora Só Cópias</p>
                <a
                  href="tel:5569992097212"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors mb-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>(69) 99209-7212</span>
                </a>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>R. Gonçalves Dias, 118 - Centro</span>
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">ClickArt's Gráfica</p>
                <a
                  href="tel:5569992696363"
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors mb-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>(69) 99269-6363</span>
                </a>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Av. Jatuarana, 5149 - C</span>
                </div>
              </div>
              <a
                href="mailto:contato@socopiasportovelho.com.br"
                className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@socopiasportovelho.com.br</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Só Cópias. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">Roriz LTDA - CNPJ: 22.882.427/0001-01</p>
        </div>
      </div>
    </footer>
  );
}
