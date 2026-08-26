import { MapPin, Clock, Phone, Instagram, Facebook, ArrowUp } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/logo-sem-fundo.webp';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Troca de Óleo e Filtros',
  'Câmbio Automático',
  'Fluido de Radiador',
  'Câmbio e Diferencial',
  'Filtros Automotivos',
  'Lubrificantes Premium',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="Vaap Castrol Lubrificantes"
              className="h-16 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Autorizado Castrol Auto Service em Lucas do Rio Verde, MT.
              Mais de 10 anos cuidando do seu veículo com produtos originais
              e atendimento de excelência.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/vaapcastrol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/VaapCastrol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/556584438839"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-gray-400 hover:text-brand-green-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={(e) => { e.preventDefault(); handleNav('#servicos'); }}
                    className="text-gray-400 hover:text-brand-green-light text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Localização
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Av. Amazonas, 293 - S<br />
                  Centro, Lucas do Rio Verde - MT<br />
                  CEP: 78460-001
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <a href="tel:+556584438839" className="text-gray-400 hover:text-brand-green-light text-sm transition-colors">
                  (65) 9 8443-8839
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Seg–Sex: 7:30–11:30 | 13:00–18:00</p>
                  <p>Sáb: 7:30–12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Vaap Castrol Lubrificantes e Serviços. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-brand-green text-xs transition-colors group"
          >
            Voltar ao topo
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
