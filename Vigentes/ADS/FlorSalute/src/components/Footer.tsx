import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e2e28] text-white overflow-hidden">
      {/* Faixa superior decorativa */}
      <div className="h-1 bg-gradient-to-r from-flor-green via-[#FFB5B8] to-flor-green" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15 pt-14 pb-10 w-full">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10 w-full">

          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-5">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }} className="flex items-center gap-3 group w-fit">
              <div className="h-[60px] w-[60px] rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-flor-green/40 group-hover:ring-flor-green/70 transition-all duration-300 flex-shrink-0">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Flogo-ma%20(1).jpg"
                  alt="RC Flor De Salute"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">RC Flor De Salute</span>
                <span className="text-xs text-white/60 font-medium">Saúde & Bem-estar</span>
              </div>
            </a>

            <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
              Cuidado integrativo e humanizado para o seu bem-estar completo desde 2019.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/rcflordesalute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-flor-green hover:to-[#4a6b5e] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5594991379414"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-flor-green hover:to-[#4a6b5e] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-flor-green group-hover:bg-[#FFB5B8] transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contato
            </h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-flor-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-flor-green" />
                </div>
                <span className="leading-relaxed">
                  Av. Manaus, 413<br />
                  Bairro Belo Horizonte<br />
                  Marabá - PA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-flor-green/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-flor-green" />
                </div>
                <a href="https://wa.me/5594991379414" className="hover:text-white transition-colors duration-200">
                  (94) 99137-9414
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-flor-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={15} className="text-flor-green" />
                </div>
                <span className="leading-relaxed">
                  Segunda a Sexta<br />
                  08:00 – 12:00 | 14:00 – 20:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2025 RC Flor De Salute. Todos os direitos reservados.</p>
          <p>Marabá — Pará — Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
