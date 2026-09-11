import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './icons';
import { scrollToSection } from '../lib/utils';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const serviceLinks = ['Drywall', 'Steel Frame', 'Gesso e Reboco', 'Forro de Gesso', 'Materiais Drywall', 'Materiais Steel Frame'];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sorrimac/img/logo-sem-fundo.webp"
              alt="Sorrimac"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Especialistas em Gesso, Drywall e Steel Frame em Sorriso e região. Qualidade que você vê, confiança que você sente.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sorrimac_gesso_drywall/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.facebook.com/sorrimac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://wa.me/5566992474531"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/5566992474531" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 group">
                  <Phone className="lucide lucide-phone text-brand-orange mt-0.5 flex-shrink-0" width={14} height={14} />
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors">(66) 9 9247-4531</span>
                </a>
              </li>
              <li>
                <a href="mailto:financeiro@sorrimac.com.br" className="flex items-start gap-2.5 group">
                  <Mail className="lucide lucide-mail text-brand-orange mt-0.5 flex-shrink-0" width={14} height={14} />
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors">financeiro@sorrimac.com.br</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin className="lucide lucide-map-pin text-brand-orange mt-0.5 flex-shrink-0" width={14} height={14} />
                  <span className="text-white/60 text-sm">
                    R. Caracas, 416 - Santa Mônica<br />Sorriso - MT, 78894-118
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <Clock className="lucide lucide-clock text-brand-orange mt-0.5 flex-shrink-0" width={14} height={14} />
                  <span className="text-white/60 text-sm">Seg-Sex: 07h–11h | 13h–17h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Sorrimac Montagens e Acabamentos. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">CNPJ · Sorriso - MT</p>
        </div>
      </div>
    </footer>
  );
}
