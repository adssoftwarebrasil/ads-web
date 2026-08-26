import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Nossos Produtos', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black-soft border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/inside%20pharmacy/img/logo-sem-fundo.webp"
              alt="Inside Pharmacy"
              className="h-10 w-auto mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Farmácia de manipulação com 35 anos de expertise, laboratórios segregados e matérias-primas importadas.
              Sua saúde com precisão científica.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/inside.pharmacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-red rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <Instagram width={18} height={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/insidepharmacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-red rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <Facebook width={18} height={18} strokeWidth={2} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-red rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <WhatsAppIcon width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/50 hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin width={15} height={15} strokeWidth={2} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-snug">
                  CLS 302 Bl A Loja 15 e 19<br />
                  Asa Sul, Brasília — DF
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={15} height={15} strokeWidth={2} className="text-brand-red flex-shrink-0" />
                <a href="tel:6132028296" className="text-white/50 hover:text-white text-sm transition-colors">
                  (61) 3202-8296
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={15} height={15} strokeWidth={2} className="text-brand-red flex-shrink-0" />
                <a
                  href="mailto:contatoinsiepharmacy@gmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  contatoinsiepharmacy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Inside Pharmacy — Farmácia de Manipulação. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">CNPJ: 54.472.026/0001-61</p>
        </div>
      </div>
    </footer>
  );
}
