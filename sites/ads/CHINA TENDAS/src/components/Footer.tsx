import { MapPin, Mail, Phone, Clock, Instagram } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const productList = [
  'Tendas Piramidais',
  'Tendas Cristal',
  'Tendas Personalizadas',
  'Tendas para Obras',
  'Toldos',
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=chinatendas%2FWhatsApp%20Image%202025-11-06%20at%2014.31.27.jpeg&version_id=null"
              alt="China Tendas"
              className="h-16 w-auto mb-4 bg-white rounded p-2"
            />
            <p className="text-gray-400 leading-relaxed">Há 5 anos transformando sonhos em realidade</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[rgb(211,14,9)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Produtos</h3>
            <ul className="space-y-3 text-gray-400">
              {productList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[rgb(211,14,9)] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Liberdade Qd.206 Lt.01E Sala 02 - Jardim Buriti Sereno, Aparecida de Goiânia -
                  GO, 74943-400
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[rgb(211,14,9)] flex-shrink-0" />
                <a
                  href="mailto:chinatendasgo@gmail.com"
                  className="text-gray-400 hover:text-[rgb(211,14,9)] transition-colors"
                >
                  chinatendasgo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[rgb(211,14,9)] flex-shrink-0" />
                <a
                  href="https://wa.me/5562985345037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(211,14,9)] transition-colors"
                >
                  (62) 9 8534-5037
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[rgb(211,14,9)] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  Seg a Sex: 08h às 12h
                  <br />
                  13h15 às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 China Tendas Ltda. Todos os direitos reservados.
            </p>
            <a
              href="https://www.instagram.com/chinatendasgo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[rgb(211,14,9)] transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span>@chinatendasgo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
