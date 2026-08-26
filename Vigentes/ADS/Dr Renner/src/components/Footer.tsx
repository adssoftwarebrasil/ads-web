import { Phone, MapPin, Instagram, Heart } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Puericultura',
  'Pediatria Geral',
  'Sala de Parto',
  'Consultas Domiciliares',
  'Atendimento ao Adolescente',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="text-white"
      style={{ background: 'linear-gradient(135deg, #2d4a7a 0%, #3a5485 50%, #4C6CA3 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/logo-sem-fundo.webp"
                alt="Logo Dr. Renner Amaral"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-bold text-white text-sm leading-tight">Dr. Renner Amaral</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">Pediatra</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Cuidado especializado e humanizado para crianças e adolescentes em Itaúna – MG.
              Comprometido com o desenvolvimento saudável da sua família.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rennerpediatra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="http://wa.me/553799766089"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.124 1.531 5.862L.057 23.166a.5.5 0 0 0 .613.635l5.457-1.432A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.045-1.394l-.361-.214-3.24.851.866-3.164-.235-.375A9.803 9.803 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Navegação</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Especialidades</p>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#servicos'); }}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-5 uppercase tracking-wide">Contato</p>
            <div className="space-y-4">
              <a
                href="tel:+553732421965"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Fixo</p>
                  <p className="text-white text-sm font-medium">(37) 3242-1965</p>
                </div>
              </a>
              <a
                href="http://wa.me/553799766089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.124 1.531 5.862L.057 23.166a.5.5 0 0 0 .613.635l5.457-1.432A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 0 1-5.045-1.394l-.361-.214-3.24.851.866-3.164-.235-.375A9.803 9.803 0 0 1 2.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">WhatsApp</p>
                  <p className="text-white text-sm font-medium">(37) 9 9976-6089</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide">Endereço</p>
                  <p className="text-white text-sm font-medium leading-snug">
                    R. Zezé Lima, 57 – Sala 10<br />
                    Centro, Itaúna – MG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center">
            © {new Date().getFullYear()} Dr. Renner Amaral – Pediatra. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Feito com <Heart size={11} className="text-red-400 fill-red-400" /> para cuidar melhor das crianças
          </p>
        </div>
      </div>
    </footer>
  );
}
