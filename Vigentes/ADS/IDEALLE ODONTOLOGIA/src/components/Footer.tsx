import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Transformações', href: '#transformacoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const serviceLinks = [
  'Implantes Dentários',
  'Clareamento Dental',
  'Facetas em Resina',
  'Aparelho Ortodôntico',
  'Prótese Dentária',
  'Canal (Endodontia)',
  'Estética Dental',
  'Limpeza e Prevenção',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e130a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/logo.webp"
              alt="Idealle Odontologia"
              className="h-12 w-auto object-contain brightness-0 invert mb-5 opacity-90"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Sua saúde bucal e a beleza do seu sorriso são nossa prioridade. Atendimento humanizado,
              tecnologia moderna e resultados reais em Rondonópolis - MT.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/idealleodontologia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[rgb(146,114,84)] border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white/70" />
              </a>
              <a
                href="https://www.facebook.com/idealleodontologia1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[rgb(146,114,84)] border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white/70" />
              </a>
              <a
                href="https://wa.me/556696621999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[rgb(146,114,84)] border border-white/10 flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[rgba(166,133,109,0.937)] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[rgba(166,133,109,0.937)] mb-5">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[rgba(166,133,109,0.937)] mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[rgb(146,114,84)] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/556696621999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  (66) 9 9662-1999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[rgb(146,114,84)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:idealle.odontologia1@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 break-all"
                >
                  idealle.odontologia1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[rgb(146,114,84)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-snug">
                  R. Barão do Rio Branco, 4104<br />
                  Jardim Monte Libano<br />
                  Rondonópolis - MT
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[rgb(146,114,84)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-snug">
                  Seg–Sex: 8h–11h e 13h–18h<br />
                  Sábado: 8h–11h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Idealle Odontologia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">
            Rondonópolis - MT, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
