import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const servicos = [
  'Cabine de Caminhão',
  'Capa de Banco',
  'Estofaria para Carros',
  'Tapetes e Cortinas',
  'Capa do Painel',
  'Limpeza Interna',
];

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="Estofaria JS Soares"
                className="h-12 w-12 rounded-full object-cover border-2 border-brand-red"
              />
              <div>
                <div className="font-bold text-sm leading-tight">
                  ESTOFARIA JS SOARES
                </div>
                <div className="text-brand-red text-xs">Tapeçaria Automotiva</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialistas em renovação de interiores automotivos desde 2018.
              Atendemos caminhoneiros e motoristas em todo o Brasil.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/estofariajs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-brand-red p-2 rounded-lg transition-colors"
              >
                <Instagram
                  width={16}
                  height={16}
                  className="lucide lucide-instagram "
                />
              </a>
              <a
                href="https://www.facebook.com/ESTOFARIAJS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-brand-red p-2 rounded-lg transition-colors"
              >
                <Facebook
                  width={16}
                  height={16}
                  className="lucide lucide-facebook "
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-red">
              Serviços
            </h4>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-red">
              Links Úteis
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-brand-red">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Phone
                  width={14}
                  height={14}
                  className="lucide lucide-phone shrink-0 mt-0.5 text-brand-red"
                />
                <span>(66) 9 9634-0695 / (66) 3015-0071</span>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Mail
                  width={14}
                  height={14}
                  className="lucide lucide-mail shrink-0 mt-0.5 text-brand-red"
                />
                <a
                  href="mailto:estofaria.js.soares@hotmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  estofaria.js.soares@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin
                  width={14}
                  height={14}
                  className="lucide lucide-map-pin shrink-0 mt-0.5 text-brand-red"
                />
                <span>Rua Colonizador Enio Pipino km 828, Área Rural – MT</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© 2026 Estofaria JS Soares. Todos os direitos reservados.</span>
          <span>Tapeçaria Automotiva — Brasil</span>
        </div>
      </div>
    </footer>
  );
}
