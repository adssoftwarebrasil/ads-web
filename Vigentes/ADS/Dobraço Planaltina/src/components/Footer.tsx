import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Galeria', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

const mainServices = [
  'Corte a Laser',
  'Dobra de Chapas',
  'Estruturas Metálicas',
  'Telhas Isotérmicas',
  'Perfis e Metalon',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DOBRAÇO</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Soluções em metal de alta precisão. Pioneiros em tecnologia de corte a laser.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(139,0,2)] rounded-full flex items-center justify-center hover:bg-[rgb(180,0,3)] transition-all"
              >
                <Instagram width={20} height={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(139,0,2)] rounded-full flex items-center justify-center hover:bg-[rgb(180,0,3)] transition-all"
              >
                <Facebook width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(139,0,2)]">NAVEGAÇÃO</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(139,0,2)]">PRINCIPAIS SERVIÇOS</h4>
            <ul className="space-y-2 text-gray-400">
              {mainServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[rgb(139,0,2)]">FALE CONOSCO</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:6134886060"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone width={18} height={18} />
                  <span>(61) 3488-6060</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dobraco.com.br"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail width={18} height={18} />
                  <span>contato@dobraco.com.br</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-400">
                  <MapPin width={18} height={18} className="flex-shrink-0 mt-1" />
                  <span>Planaltina-DF</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                <strong>Seg-Sex:</strong> 08:00-17:45<br />
                <strong>Sábado:</strong> 08:00-13:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(139,0,2)] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-white text-sm">
          © 2025 Dobraço Planaltina - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
