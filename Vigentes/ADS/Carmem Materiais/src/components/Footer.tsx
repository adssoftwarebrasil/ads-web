import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_URL, PHONE_URL, WhatsAppIcon } from './icons';

const NAV: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre a Empresa', target: 'sobre' },
  { label: 'Produtos e Categorias', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Avaliações', target: 'avaliacoes' },
  { label: 'Contato', target: 'contato' },
];

const PRODUCTS = [
  'Cimento, Tijolo e Areia',
  'Ferragens e Ferramentas',
  'Hidráulica e Elétrica',
  'Tintas e Pintura',
  'Piscinas',
  'Agropecuária',
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao/img/logo-sem-fundo.webp"
              alt="Carmem Materiais para Construção"
              className="h-14 w-auto mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Desde 2009, sendo referência em materiais de construção em Santa Carmem e região. Uma empresa familiar com valores sólidos e foco em você.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/carmemmateriais/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#2F44C8] rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/carmemmateriais" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#2F44C8] rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#2F44C8] rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Navegação</h3>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.target}>
                  <button onClick={() => scrollTo(item.target)} className="text-sm text-white/60 hover:text-white transition-colors text-left">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Principais Produtos</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <button onClick={() => scrollTo('produtos')} className="text-sm text-white/60 hover:text-white transition-colors text-left">{p}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">Informações</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#2F44C8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">Av. Duque de Caxias, 733<br />Santa Carmem – MT</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#2F44C8] flex-shrink-0" />
                <a href={PHONE_URL} className="text-sm text-white/60 hover:text-white transition-colors">(66) 9 9667-5395</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#2F44C8] flex-shrink-0" />
                <a href="mailto:carmemmateriaissnp@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors break-all">carmemmateriaissnp@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#2F44C8] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">Seg–Sáb: 07h00 às 18h00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">© 2026 Carmem Materiais para Construção. Todos os direitos reservados.</p>
          <p className="text-white/20 text-xs">Santa Carmem · Sinop · Vera – MT</p>
        </div>
      </div>
    </footer>
  );
}
