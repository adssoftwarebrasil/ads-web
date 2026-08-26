import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { scrollToSection } from './Header';
import { WHATSAPP_PHONE } from '../data';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Catálogo', id: 'catalogo' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Clientes', id: 'clientes' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/xc%20motors/img/logo-sem-fundo.webp"
              alt="XC Motors"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-[#fefefe]/40 text-sm leading-relaxed max-w-xs mb-6">
              Referência em Várzea Grande para quem busca veículos seminovos com qualidade, preço justo e total transparência nas negociações.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/xcmotorsvg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f8c102] hover:text-[#0c0c0c] text-[#fefefe]/50 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/xcmotorsvg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f8c102] hover:text-[#0c0c0c] text-[#fefefe]/50 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
              <a
                href={`http://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f8c102] hover:text-[#0c0c0c] text-[#fefefe]/50 flex items-center justify-center transition-all duration-200"
              >
                <Phone className="lucide lucide-phone" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#fefefe] font-bold mb-4 text-sm uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-[#fefefe]/40 hover:text-[#f8c102] text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#fefefe] font-bold mb-4 text-sm uppercase tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="lucide lucide-phone text-[#f8c102] mt-0.5 flex-shrink-0" width={14} height={14} />
                <a href="tel:+5565984310000" className="text-[#fefefe]/40 hover:text-[#f8c102] text-sm transition-colors">
                  (65) 98431-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="lucide lucide-mail text-[#f8c102] mt-0.5 flex-shrink-0" width={14} height={14} />
                <a
                  href="mailto:xcmotorsvg@gmail.com"
                  className="text-[#fefefe]/40 hover:text-[#f8c102] text-sm transition-colors break-all"
                >
                  xcmotorsvg@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin text-[#f8c102] mt-0.5 flex-shrink-0" width={14} height={14} />
                <span className="text-[#fefefe]/40 text-sm">
                  Av. Dom Orlando Chaves, 614<br />Cristo Rei – Várzea Grande/MT
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#fefefe]/25 text-xs">© 2026 XC Motors. Todos os direitos reservados.</p>
          <p className="text-[#fefefe]/25 text-xs">CNPJ: registrado desde 2013 · Várzea Grande – MT</p>
        </div>
      </div>
    </footer>
  );
}
