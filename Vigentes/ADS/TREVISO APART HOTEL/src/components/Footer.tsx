import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#features' },
  { label: 'Acomodações', href: '#gallery' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Localização', href: '#location' },
  { label: 'Contato', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16153a] text-[#fef5e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-[#fef5e6] font-bold text-2xl tracking-widest uppercase">Treviso</span>
              <br />
              <span className="text-[#b82626] text-sm tracking-[0.3em] uppercase font-medium">Apart Hotel</span>
            </div>
            <p className="text-[#a08f95] text-sm leading-relaxed mb-5">
              Conforto, espaço e conveniência no coração de Linhares-ES.
              Desde 2007 oferecendo apartamentos completos para sua estadia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hoteltreviso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#b82626] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/Treviso.Apart.Hotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#b82626] rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#fef5e6] font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#a08f95] hover:text-[#b82626] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#fef5e6] font-bold text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3 text-sm text-[#a08f95]">
              <li>Hospedagem Diária</li>
              <li>Hospedagem Mensal</li>
              <li>Café da Manhã</li>
              <li>Estacionamento</li>
              <li>Apartamento com Cozinha</li>
              <li>Recepção 24h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fef5e6] font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b82626] flex-shrink-0 mt-0.5" />
                <span className="text-[#a08f95] text-sm leading-relaxed">
                  Av. Pres. Getúlio Vargas, 685<br />
                  Centro – Linhares, ES
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#b82626] flex-shrink-0" />
                <a href="tel:2733734333" className="text-[#a08f95] hover:text-[#fef5e6] text-sm transition-colors">
                  (27) 3373-4333
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#b82626] flex-shrink-0" />
                <span className="text-[#a08f95] text-sm">24h / 7 dias por semana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#a08f95] text-xs">
            © {new Date().getFullYear()} Treviso Apart Hotel. Todos os direitos reservados.
          </p>
          <p className="text-[#a08f95] text-xs">
            CNPJ – Aberto em 17/04/2007 | Linhares – ES
          </p>
        </div>
      </div>
    </footer>
  );
}
