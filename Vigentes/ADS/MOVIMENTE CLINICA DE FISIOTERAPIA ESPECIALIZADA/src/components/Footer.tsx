import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const servicos = [
  'Fisioterapia Ortopédica',
  'Pilates',
  'Reabilitação Funcional',
  'RPG',
  'Liberação Miofascial',
  'Mesa de Tração Eletrônica',
  'Fisioterapia Domiciliar',
  'Palmilhas Terapêuticas',
];

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Nossos Serviços' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Fale Conosco' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'rgb(13, 5, 32)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/img/logo-sem-fundo.webp"
                alt="Movimente Fisioterapia Especializada"
                className="h-14 w-auto object-contain brightness-0 invert"
                width={518}
                height={427}
                loading="lazy"
              />
              <div className="flex flex-col leading-tight hidden">
                <span className="font-black text-white text-lg tracking-wide">MOVIMENTE</span>
                <span className="text-xs font-medium tracking-widest text-brand-pink uppercase">
                  Fisioterapia Especializada
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Mais de 20 anos cuidando da saúde e bem-estar dos nossos pacientes em Sorriso-MT, com técnica, empatia e
              comprometimento.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/movimentefisiosorriso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
                style={{ background: 'rgba(255, 255, 255, 0.08)' }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/movimentefisiosorriso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
                style={{ background: 'rgba(255, 255, 255, 0.08)' }}
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {servicos.map((servico) => (
                <li key={servico}>
                  <a
                    href="#servicos"
                    className="text-gray-400 text-sm hover:text-brand-pink transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgb(219, 67, 43)' }}
                    ></span>
                    {servico}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-pink transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgb(62, 48, 123)' }}
                    ></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/556699102233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-pink transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                  <span className="text-sm">(66) 9 9910-2233</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:movimente.fisio22@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-pink transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                  <span className="text-sm break-all">movimente.fisio22@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <span className="text-sm">Av. Curitiba, 2605 sl 02 – Centro Sul, Sorriso – MT</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={15} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                <span className="text-sm">Seg – Sex: 07h–12h | 13h–18h</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Movimente Fisioterapia Especializada. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">Sorriso – MT, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
