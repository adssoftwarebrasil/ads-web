import { Instagram, Facebook, Flame, Phone, MapPin, Clock } from 'lucide-react';
import { WhatsappIcon } from './icons';
import { scrollToSection, WA_NUMBER } from '../lib';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const productItems = [
  'Gás P13 — Residencial',
  'Gás P20 — Comercial',
  'Gás P45 — Industrial',
  'Água Mineral 20L',
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(24, 82, 151)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/logo-sem-fundo.webp"
              alt="Rapidão Gás e Água"
              className="h-20 w-auto object-contain mb-5"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Desde 2010 abastecendo Primavera do Leste com gás GLP e água mineral. Preço justo,
              entrega rápida e segurança garantida.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/baratao123gas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Instagram size={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/barataogaspva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a
                href={`http://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <WhatsappIcon width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-5" style={{ color: 'rgb(246, 227, 8)' }}>
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-5" style={{ color: 'rgb(246, 227, 8)' }}>
              Produtos
            </h4>
            <ul className="flex flex-col gap-3">
              {productItems.map((p) => (
                <li key={p} className="flex items-center gap-2 text-white/70 text-sm">
                  <Flame
                    size={13}
                    strokeWidth={2}
                    style={{ color: 'rgb(243, 159, 29)', flexShrink: 0 }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-5" style={{ color: 'rgb(246, 227, 8)' }}>
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`http://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <Phone
                  size={16}
                  strokeWidth={2}
                  className="lucide lucide-phone mt-0.5 flex-shrink-0"
                  style={{ color: 'rgb(243, 159, 29)' }}
                />
                <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                  (66) 9 9695-7904
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="lucide lucide-map-pin mt-0.5 flex-shrink-0"
                  style={{ color: 'rgb(243, 159, 29)' }}
                />
                <span className="text-white/70 text-sm leading-relaxed">
                  Av. Belo Horizonte, 1901
                  <br />
                  Primavera do Leste - MT
                  <br />
                  CEP 78850-000
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={16}
                  strokeWidth={2}
                  className="lucide lucide-clock mt-0.5 flex-shrink-0"
                  style={{ color: 'rgb(243, 159, 29)' }}
                />
                <span className="text-white/70 text-sm">Seg — Dom: 07h às 20h</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <p>© 2026 Rapidão Gás e Água. Todos os direitos reservados.</p>
          <p>Av. Belo Horizonte, 1901 — Primavera do Leste, MT</p>
        </div>
      </div>
    </footer>
  );
}
