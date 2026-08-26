import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceItems = [
  'Retífica de Motores',
  'Montagem de Motores',
  'Suspensão e Balanceamento',
  'Sistema de Freios',
  'Troca de Pneus',
  'Troca de Óleo',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/retigrilo/img/logo-sem-fundo.webp"
              alt="Retigrilo"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-brand-slate text-sm leading-relaxed mb-6">
              Especializada em retífica e montagem de motores linha leve e pesada, com mais de 17 anos de
              experiência em Alta Floresta - MT.
            </p>
            <a
              href="https://wa.me/5566999585577?text=Olá! Vim pelo site e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              <WhatsappIcon className="w-4 h-4 fill-current" />
              Solicitar Orçamento
            </a>
          </div>
          <div>
            <h4 className="text-brand-white font-bold text-sm mb-5 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-brand-slate hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-brand-white font-bold text-sm mb-5 uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <span className="text-brand-slate text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-brand-white font-bold text-sm mb-5 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Phone
                    className="lucide lucide-phone mt-0.5 flex-shrink-0 text-primary"
                    width={16}
                    height={16}
                  />
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+5566999585577"
                      className="text-brand-slate hover:text-primary transition-colors duration-200 text-sm"
                    >
                      (66) 9 9958-5577
                    </a>
                    <a
                      href="tel:+5566996325577"
                      className="text-brand-slate hover:text-primary transition-colors duration-200 text-sm"
                    >
                      (66) 9 9632-5577
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:Retigrilo2025@gmail.com"
                  className="flex items-start gap-3 text-brand-slate hover:text-primary transition-colors duration-200"
                >
                  <Mail className="lucide lucide-mail mt-0.5 flex-shrink-0 text-primary" width={16} height={16} />
                  <span className="text-sm">Retigrilo2025@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin mt-0.5 flex-shrink-0 text-primary"
                  width={16}
                  height={16}
                />
                <span className="text-brand-slate text-sm">
                  Av. Júlio José de Campos, 900 — Alta Floresta - MT, 78580-000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock mt-0.5 flex-shrink-0 text-primary"
                  width={16}
                  height={16}
                />
                <span className="text-brand-slate text-sm">Seg–Sex: 07:00–11:00 | 13:00–17:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-slate text-xs text-center sm:text-left">
            © 2026 Retigrilo Retífica de Motores. Todos os direitos reservados.
          </p>
          <p className="text-brand-slate text-xs flex items-center gap-1">
            Feito com{' '}
            <Heart className="lucide lucide-heart text-primary fill-primary" width={12} height={12} /> para Alta
            Floresta - MT
          </p>
        </div>
      </div>
    </footer>
  );
}
