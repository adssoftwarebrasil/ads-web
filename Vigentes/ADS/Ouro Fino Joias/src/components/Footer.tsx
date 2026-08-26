import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL, IMG, scrollToSection } from '../constants';

const MENU_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const SERVICES = [
  'Alianças de Ouro',
  'Anéis de Noivado',
  'Pulseiras Exclusivas',
  'Correntes de Ouro',
  'Pingentes Personalizados',
  'Joias sob Medida',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(29,29,27)] border-t border-[rgb(186,176,97)]/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={IMG.logo} alt="Ouro Fino Joias" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 leading-relaxed mb-6">Transformamos memórias em arte desde 2020. Joias exclusivas que contam sua história.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[rgb(186,176,97)] hover:text-[rgb(126,102,42)] transition-colors duration-300">
              <Instagram size={24} />
              <span className="font-medium">@ouro.fino_joias</span>
            </a>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Menu</h3>
            <ul className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-400">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[rgb(186,176,97)] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Av. José Roberto Teixeira, 793b - Jardim Florida, Dourados - MS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[rgb(186,176,97)] flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">(67) 9 9821-2819</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[rgb(186,176,97)] flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-[rgb(186,176,97)] transition-colors duration-300">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgb(186,176,97)]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">© 2026 Ouro Fino Joias. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
