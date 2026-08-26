import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const SERVICES = [
  'Pizza Marguerita',
  'Pizza Calabresa',
  'Pizza à Moda',
  'Pizza Doce',
  'Delivery',
];

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[rgb(30,30,30)] text-gray-300">
      <div className="container mx-auto px-4 py-16 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/kissai%2Flogofundovermelho.webp"
              alt="Kissai Pizza"
              className="h-[60px] object-contain mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Fundada a partir do amor pela pizza e o desejo de oferecer
              qualidade, a Kissai Pizza tem se destacado nos últimos 5 anos no
              mercado.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[rgb(235,185,3)] transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="https://wa.me/5534996450016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[rgb(235,185,3)] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-[rgb(235,185,3)]" />
                <a
                  href="https://wa.me/5534996450016"
                  className="hover:text-[rgb(235,185,3)] transition-colors"
                >
                  (34) 99645-0016
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[rgb(235,185,3)]" />
                <a
                  href="mailto:roselicastro49@gmail.com"
                  className="hover:text-[rgb(235,185,3)] transition-colors"
                >
                  roselicastro49@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[rgb(235,185,3)]" />
                <span>R. Sr. dos Passos, 495 - Tubalina, Uberlândia - MG</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/kissaipizza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(235,185,3)] hover:text-[rgb(150,1,0)] transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>Copyright © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
