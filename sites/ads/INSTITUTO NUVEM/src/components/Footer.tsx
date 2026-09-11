import { Clock, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#locations', label: 'Unidades' },
  { href: '#contact', label: 'Contato' },
];

const specialties = [
  'Psicologia',
  'Fonoaudiologia',
  'Terapia Ocupacional',
  'Fisioterapia',
  'Fisioterapia BOBATH',
  'Psicopedagogia',
  'Nutrição',
  'Terapia ABA',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/instituto%20nuuvem/img/logo.webp"
                alt="Instituto Nuvem"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
              Clínica multidisciplinar especializada no desenvolvimento infantil e no tratamento de crianças neurodivergentes em Mato Grosso.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={13} />
              <span>Seg. a Sex. · 07:00–11:00 | 13:00–17:00</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
              <Mail size={13} />
              <a
                href="mailto:institutonuvemcampoverde@gmail.com"
                className="hover:text-secondary transition-colors break-all"
              >
                institutonuvemcampoverde@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-sans text-sm text-gray-400 hover:text-secondary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Especialidades</h4>
            <ul className="space-y-2.5">
              {specialties.map((s) => (
                <li key={s} className="font-sans text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Nossas Unidades</h4>
            <div className="space-y-6">
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-2">Primavera do Leste</p>
                <div className="flex items-start gap-2 text-xs text-gray-400 mb-1.5">
                  <MapPin size={12} className="mt-0.5 shrink-0" />
                  <span>R. Santo Amaro, 1145 - Jardim Riva</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Phone size={12} className="shrink-0" />
                  <a
                    href="http://wa.me/556696568775"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    (66) 9 9656-8775
                  </a>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href="https://www.instagram.com/instituto_nuvempva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/5 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram size={13} />
                  </a>
                  <a
                    href="https://www.facebook.com/p/Instituto-Nuvem-Primavera-do-Leste-61567135986371/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/5 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook size={13} />
                  </a>
                </div>
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm mb-2">Campo Verde</p>
                <div className="flex items-start gap-2 text-xs text-gray-400 mb-1.5">
                  <MapPin size={12} className="mt-0.5 shrink-0" />
                  <span>R. São Salvador, 647 - Centro</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Phone size={12} className="shrink-0" />
                  <a
                    href="http://wa.me/556699352163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    (66) 9 9935-2163
                  </a>
                </div>
                <div className="flex gap-2.5">
                  <a
                    href="https://www.instagram.com/instituto_nuvemcvd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/5 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram size={13} />
                  </a>
                  <a
                    href="https://www.facebook.com/institutonuvem.cvd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/5 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500">© 2026 Instituto Nuvem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
