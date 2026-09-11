import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/restaurante%20e%20pousada%20ovomaltine/img/logo-sem-fundo.webp';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#pousada', label: 'Pousada' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-max px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src={LOGO}
              alt="Restaurante e Pousada Ovomaltine"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Mais de 50 anos de tradição na Rodovia Presidente Dutra. Restaurante, lanchonete e
              pousada com aquele sabor de casa.
            </p>
            <div className="flex gap-3">
              <a
                href="http://wa.me/5524998199101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/5 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </a>
              <a
                href="https://www.instagram.com/stop_bar_2001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Horários
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/50 text-xs mb-0.5">Segunda a Quinta</p>
                <p className="text-white text-sm font-medium">06h00 – 20h00</p>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Sexta a Domingo</p>
                <p className="text-white text-sm font-medium">06h00 – 19h00</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="http://wa.me/5524998199101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/50 hover:text-brand-orange transition-colors text-sm"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                +55 (24) 99819-9101
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>
                  Rod. Pres. Dutra, km 296
                  <br />
                  Floriano, Barra Mansa – RJ
                </span>
              </div>
              <a
                href="https://www.instagram.com/stop_bar_2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/50 hover:text-brand-orange transition-colors text-sm"
              >
                <Instagram size={14} className="mt-0.5 flex-shrink-0" />
                @stop_bar_2001
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center sm:text-left">
            © 2026 Restaurante e Pousada Ovomaltine. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Clock size={12} />
            <span>Atendemos de segunda a domingo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
