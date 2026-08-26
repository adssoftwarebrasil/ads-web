import { MapPin, Clock, Phone, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Suspensão',
  'Motor',
  'Câmbio',
  'Elétrica',
  'Refrigeração',
  'Revisão Completa',
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/img/logo-sem-fundo.webp"
              alt="RPN Mecânica Automotiva"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Mecânica automotiva completa com qualidade, honestidade e compromisso com o cliente desde 2019.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/autovip048"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-rpn-red rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/auto_vipcarofficial1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-rpn-red rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="http://wa.me/559182696336"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-rpn-red rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNav('#servicos')}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Informações</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-rpn-red flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Rod. BR-316, km 05 - Águas Lindas, Ananindeua - PA</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-rpn-red flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Seg–Sex: 08:00–12:00 e 14:00–18:00</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-rpn-red flex-shrink-0 mt-0.5" />
                <a href="tel:+5591982696336" className="text-white/60 hover:text-white text-sm transition-colors">
                  (91) 9 8269-6336
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-rpn-red flex-shrink-0 mt-0.5" />
                <a href="mailto:jrpnetto@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  jrpnetto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} RPN Mecânica Automotiva — Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 bg-rpn-red rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
