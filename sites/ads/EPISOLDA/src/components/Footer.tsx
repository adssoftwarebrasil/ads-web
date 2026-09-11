import { Instagram, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const categorias = [
  'Máquinas de Solda',
  'Linha de Soldagem',
  'Consumíveis para Solda',
  'Abrasivos Industriais',
  'Ferramentas Manuais',
  'Ferramentas Pneumáticas',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/episolda/img/logo-sem-fundo.webp"
              alt="EPISOLDA"
              className="h-12 w-auto object-contain mb-5 brightness-200"
            />
            <p className="text-sm leading-relaxed mb-5">
              Soluções completas para soldagem e ferramentas desde 2010 em Piracicaba - SP.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[rgb(16,109,71)] flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" fill="currentColor" />
              </a>
              <a
                href="https://www.instagram.com/episolda_piracicaba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="lucide lucide-instagram text-white" width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Navegação</h4>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm hover:text-[rgb(16,109,71)] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Categorias</h4>
            <ul className="flex flex-col gap-2">
              {categorias.map((c) => (
                <li key={c}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[rgb(16,109,71)] transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="lucide lucide-map-pin text-[rgb(16,109,71)] shrink-0 mt-0.5" width={16} height={16} />
                <span className="text-sm leading-relaxed">
                  Av. Conde do Pinhal, 311 - Areião<br />Piracicaba - SP, 13414-042
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="lucide lucide-phone text-[rgb(16,109,71)] shrink-0" width={16} height={16} />
                <a href="tel:+551933012049" className="text-sm hover:text-[rgb(16,109,71)] transition-colors">
                  (19) 3301-2049
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 EPISOLDA Comércio de Solda e Ferramentas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">Piracicaba - SP, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
