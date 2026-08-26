import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre o Hotel', href: '#sobre' },
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

const suites = [
  'Suíte Simples (14 unidades)',
  'Suíte Master (2 unidades)',
  'Suíte Master Premium',
  'Pernoite (22h às 7h)',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FLogomarca-Fundo-Branco.png"
              alt="Hotel Avalon"
              className="h-14 w-auto object-contain bg-white rounded-lg px-3 py-1.5 mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Hotel familiar em Benevides – PA, na rota das praias de Mosqueiro, Salinas e Marudá. Conforto, hospitalidade e um atendimento como você merece.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Hotel-Avalon-100063521442653/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0aaff9] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/avalon1hotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://wa.me/5591982450015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Acomodações
            </h4>
            <ul className="space-y-2.5">
              {suites.map((suite) => (
                <li key={suite}>
                  <button
                    onClick={() => handleNavClick('#acomodacoes')}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 text-left flex items-start gap-2"
                  >
                    <span className="text-gold mt-1.5 text-xs">▸</span>
                    {suite}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:+5591982450015" className="text-white/60 hover:text-gold text-sm transition-colors">
                  (91) 98245-0015
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:hotelavalon@hotmail.com" className="text-white/60 hover:text-gold text-sm transition-colors break-all">
                  hotelavalon@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">Benevides – Pará, Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">Recepção 24 horas</p>
                  <p className="text-white/40 text-xs">Café: 6h30 às 10h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hotel Avalon Benevides. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <p className="text-white/40 text-sm">Fundado em 12/03/2017 · 10 anos de hospitalidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
