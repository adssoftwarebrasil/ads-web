import { Instagram, MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, scrollToSection } from '../lib/utils';

const NAV_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
  { label: 'Localização', id: 'localizacao' },
];

const PRODUCTS = ['Para-choques', 'Grades Frontais', 'Faróis', 'Lanternas', 'Para-lamas', 'Acessórios'];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(13, 30, 61)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casa%20das%20latarias/img/logo-sem-fundo.webp"
              alt="Casa das Latarias"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Referência em autopeças no Maranhão. Qualidade, variedade e confiança em um só lugar.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/casa_das_latariasslz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
                style={{ backgroundColor: 'rgb(37, 211, 102)' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'rgb(255, 193, 7)' }}>
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'rgb(255, 193, 7)' }}>
              Produtos
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollToSection('produtos')}
                    className="text-white/60 text-sm hover:text-white transition-colors text-left"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: 'rgb(255, 193, 7)' }}>
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin width={14} height={14} className="lucide lucide-map-pin mt-0.5 flex-shrink-0" />
                <span>Av. Guajajaras, 136 - loja C, Tirirical, São Luís - MA</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone width={14} height={14} className="lucide lucide-phone flex-shrink-0" />
                <a href="http://wa.me/5598985630349" className="hover:text-white transition-colors">
                  (98) 9 8563-0349
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Clock width={14} height={14} className="lucide lucide-clock flex-shrink-0" />
                <span>Seg–Sáb: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <p>© 2026 Casa das Latarias. Todos os direitos reservados.</p>
          <p>São Luís – MA | Autopeças e acessórios para veículos</p>
        </div>
      </div>
    </footer>
  );
}
