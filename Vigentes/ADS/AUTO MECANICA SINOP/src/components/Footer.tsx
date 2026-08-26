import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WHATSAPP_LINK, scrollToId, WhatsAppIcon } from '../lib/whatsapp';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const serviceLinks = [
  'Alinhamento e Balanceamento',
  'Suspensão Geral',
  'Motor, Câmbio e Diferencial',
  'Injeção Eletrônica',
  'Troca de Óleo e Filtros',
  'Revisão Preventiva',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ams%20auto%20mecanica%20sinop/img/logo-sem-fundo.webp"
              alt="AMS Auto Mecânica"
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Referência em serviços automotivos em Sinop – MT desde 2008. Qualidade, honestidade e comprometimento em
              cada serviço.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/auto_mecanica_sinop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-red flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/mecanicaams/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-4">Navegação</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-4">Serviços</p>
            <ul className="space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToId('servicos')}
                    className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-4">Contato</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. dos Jacarandás, 165,
                  <br />
                  Jardim Jacarandas
                  <br />
                  Sinop – MT, 78557-727
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+556699163832" className="text-gray-400 hover:text-white text-sm block transition-colors">
                    (66) 99916-3832
                  </a>
                  <a href="tel:+556699432606" className="text-gray-400 hover:text-white text-sm block transition-colors">
                    (66) 99943-2606
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-red mt-0.5 shrink-0" />
                <a
                  href="mailto:amsmecanicafinanceiro@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  amsmecanicafinanceiro@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Seg–Sex: 07h30–11h30 | 13h–18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 AMS Auto Mecânica Sinop. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">Sinop – MT | CNPJ registrado</p>
        </div>
      </div>
    </footer>
  );
}
