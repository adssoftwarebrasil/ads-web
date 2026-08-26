import { Instagram, Facebook, Phone, MessageCircle, MapPin } from 'lucide-react';
import { scrollToId, scrollToTop } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Benefícios', id: 'beneficios' },
  { label: 'Contato', id: 'contato' },
];

const mapsSearchUrl =
  'https://www.google.com/maps/search/?api=1&query=Av.+T-1,+917+-+Sala+05+-+St.+Bueno,+Goiânia+-+GO';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/4k%20iluminacao/img/logo-quadrada.webp"
              alt="4K Iluminação"
              className="h-20 md:h-24 w-auto mb-6 rounded-xl"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas em soluções de iluminação LED para projetos residenciais, comerciais e eventos. Qualidade, eficiência e atendimento que faz a diferença.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/4kiluminacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Instagram 4K Iluminação"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/4kiluminacao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Facebook 4K Iluminação"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => (item.id === 'inicio' ? scrollToTop() : scrollToId(item.id))}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <div className="space-y-4">
              <a
                href="tel:+556241410490"
                className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Phone size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(62) 4141-0490</span>
              </a>
              <a
                href="https://wa.me/5562981611111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <MessageCircle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(62) 98161-1111</span>
              </a>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <MapPin size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Av. T-1, 917 - Sala 05 - St. Bueno, Goiânia - GO</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Horário de Atendimento</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 4K Iluminação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
