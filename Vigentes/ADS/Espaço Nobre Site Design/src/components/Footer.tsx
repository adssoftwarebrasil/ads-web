import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { scrollToSection } from '../utils';

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=espaconobre%2Fesoacinobrelogomarca.png&version_id=null';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Eventos', id: 'eventos' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="Espaço Nobre"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 font-medium">Sua Casa de Festa</p>
            <p className="text-gray-500 text-sm mt-2">
              Transformando sonhos em celebrações inesquecíveis desde 2014
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Navegação</h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-[#cba26c] transition text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5565992265027"
                className="flex items-center gap-2 text-gray-400 hover:text-[#cba26c] transition"
              >
                <Phone size={16} />
                <span>(65) 99226-5027</span>
              </a>
              <a
                href="https://wa.me/5565992512232"
                className="flex items-center gap-2 text-gray-400 hover:text-[#cba26c] transition"
              >
                <Phone size={16} />
                <span>(65) 99251-2232</span>
              </a>
              <a
                href="mailto:espaconobrecasadefesta@hotmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#cba26c] transition"
              >
                <Mail size={16} />
                <span className="text-sm">
                  espaconobrecasadefesta@hotmail.com
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/espaconobre_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/espaconobre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Espaço Nobre - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
