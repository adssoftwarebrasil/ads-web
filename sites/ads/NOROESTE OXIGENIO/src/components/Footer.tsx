import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';
const INSTAGRAM = 'https://www.instagram.com/noroesteoxigenio/';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Noroeste Oxigênio</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sua referência em Unaí para fornecimento de oxigênio medicinal, equipamentos de
              soldagem e soluções completas com qualidade e segurança.
            </p>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Instagram size={22} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <span className="text-sm">R. Prof. Olímpio Gonzaga, 58 - Barroca, Unaí - MG</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <a href={WHATSAPP} className="text-sm hover:text-white transition-colors">
                  (38) 99971-9665
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <span className="text-sm">Atendimento via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 Noroeste Oxigênio. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Desenvolvido com dedicação para melhor atendê-lo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
