import { Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-x py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/plato-lider/img/logo-sem-fundo.webp"
              alt="Platô Líder"
              className="h-14 w-auto brightness-0 invert"
            />
          </div>
          <p className="mt-5 text-white/70 text-sm leading-relaxed max-w-md">
            Especialistas em embreagens agrícolas e linha pesada. Qualidade, procedência e agilidade
            para o campo e a estrada.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/556696775369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-brand-red transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/platolider_embreagens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-brand-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="lucide lucide-instagram w-5 h-5" />
            </a>
            <a
              href="mailto:adm@platoliderembreagens.com.br"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-brand-red transition-colors"
              aria-label="E-mail"
            >
              <Mail className="lucide lucide-mail w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-lg font-bold uppercase tracking-wider">Navegação</p>
          <ul className="mt-5 space-y-2.5 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-red transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-display text-lg font-bold uppercase tracking-wider">Contato</p>
          <ul className="mt-5 space-y-3.5 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="lucide lucide-map-pin w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" />
              <span>Rua Piauí, 2925 - Jardim Belo Horizonte, Rondonópolis - MT, 78705-609</span>
            </li>
            <li className="flex gap-3">
              <Phone className="lucide lucide-phone w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" />
              <a href="tel:+556696775369" className="hover:text-white">
                (66) 9 9677-5369
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="lucide lucide-mail w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" />
              <a
                href="mailto:adm@platoliderembreagens.com.br"
                className="hover:text-white break-all"
              >
                adm@platoliderembreagens.com.br
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="lucide lucide-clock w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" />
              <span>Seg. a Sex. 07:30 - 11:00 | 13:00 - 17:30</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <p>© 2026 Platô Líder Embreagens. Todos os direitos reservados.</p>
          <p>CNPJ sob consulta · Rondonópolis — MT</p>
        </div>
      </div>
    </footer>
  );
}
