import { Instagram, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { scrollToSection } from '../lib/scroll';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceLinks = [
  'Assessoria Contábil',
  'Abertura de Empresas',
  'Planejamento Tributário',
  'Regularização Fiscal',
  'Consultoria Financeira',
  'Certificado Digital',
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ferraricont%20contabilidade/img/logo-correta-sem-fundo.webp"
              alt="FerrariCont"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Contabilidade consultiva que transforma números em estratégia para o crescimento
              sustentável da sua empresa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ferraricont/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-accent hover:text-primary rounded-xl flex items-center justify-center text-white/60 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="http://wa.me/556596828492"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-[#25D366] rounded-xl flex items-center justify-center text-white/60 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={18} fill="currentColor" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/55 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-white/55 hover:text-accent text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="http://wa.me/556596828492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-accent text-sm transition-colors"
                >
                  (65) 9 9682-8492
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:jose.ferraricont@gmail.com"
                  className="text-white/55 hover:text-accent text-sm transition-colors break-all"
                >
                  jose.ferraricont@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  R. Júlio de Castilho, 228-S,
                  <br />
                  Sala 02, Centro
                  <br />
                  Lucas do Rio Verde - MT
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm text-center sm:text-left">
            © 2026 FerrariCont Contabilidade Consultiva LTDA. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-xs">CRC MT</p>
        </div>
      </div>
    </footer>
  );
}
