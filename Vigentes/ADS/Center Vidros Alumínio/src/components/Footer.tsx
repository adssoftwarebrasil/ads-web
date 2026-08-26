import { Phone, MapPin, Instagram } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './icons';
import { scrollToId } from '../hooks/useInView';

const NAV = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

const SERVICES = [
  'Portões de Alumínio',
  'Portas de Vidro Temperado',
  'Box de Vidro',
  'Janelas de Vidro',
  'Portas de Alumínio',
  'Espelhos',
  'Guarda-corpos',
  'Estruturas de Inox',
];

const KEYWORDS = [
  'Vidraçaria em São Luís',
  'Portões de Alumínio',
  'Porta de Vidro Temperado',
  'Janelas de Vidro',
  'Box de Vidro',
  'Espelhos São Luís MA',
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1718] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/img/logo-sem-fundo.webp"
              alt="Center Vidros e Alumínio"
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Referência em vidros e alumínio em São Luís - MA. Mais de 18 anos transformando espaços com
              qualidade, compromisso e garantia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/centervidrosslz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram width={18} height={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-white/50 hover:text-brand-cyan text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToId('servicos')}
                    className="text-white/50 hover:text-brand-cyan text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <div className="space-y-4">
              <a href="tel:+559888677636" className="flex items-start gap-3 group">
                <Phone width={16} height={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <span className="text-white/50 group-hover:text-white text-sm transition-colors">
                  (98) 9 8867-7636
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin width={16} height={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Av. Casemiro Júnior, 97<br />
                  Anil, São Luís - MA<br />
                  CEP: 65055-000
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">
                Palavras-chave
              </h5>
              <div className="flex flex-wrap gap-2">
                {KEYWORDS.map((k) => (
                  <span
                    key={k}
                    className="text-white/25 text-xs bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Center Vidros e Alumínio. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Vidraçaria em São Luís - MA · CNPJ registrado</p>
        </div>
      </div>
    </footer>
  );
}
