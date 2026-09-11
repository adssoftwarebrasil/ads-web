import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navItems = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
  { label: 'Localização', id: 'localizacao' },
];

const services = [
  'Troca de Parabrisa',
  'Vidros Laterais',
  'Vidro Traseiro',
  'Aplicação de Insulfilm',
  'Recuperação de Trincados',
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#022d5e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/cm%20glass%2Fimg%2Flogo-sem-fundo.webp"
              alt="CM Glass"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Representante oficial Saint-Gobain em Manaus. Qualidade, procedência e atendimento de
              excelência em vidros automotivos.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/Cmglass._"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Cmglass"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Av. Tarumã, 1550 - Sala 2, Praça 14 de Janeiro, Manaus - AM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="tel:+559284131569"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  (92) 9 8413-1569
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="mailto:cmglassvidros@gmail.com"
                  className="text-white/70 hover:text-white text-sm transition-colors break-all"
                >
                  cmglassvidros@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Seg. a Sex.: 08h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© 2026 CM Glass. Todos os direitos reservados.</p>
          <p>Representante oficial Saint-Gobain em Manaus</p>
        </div>
      </div>
    </footer>
  );
}
