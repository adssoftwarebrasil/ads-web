import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#credentials', label: 'Seguradoras' },
  { href: '#area', label: 'Área de Atendimento' },
  { href: '#contact', label: 'Contato' },
];

const hours = [
  { day: 'Seg – Sex', time: '07:00 – 18:00', closed: false },
  { day: 'Sábado', time: '07:00 – 17:00', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#07111f] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="bg-[#c0392b] rounded-lg p-1.5">
                <Wrench className="lucide lucide-wrench w-5 h-5 text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-wider uppercase">
                Lanter<span className="text-[#f39c12]">MAX</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em funilaria, pintura e manutenção automotiva há mais de 15 anos em Camaragibe — PE.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#f39c12] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="lucide lucide-phone w-4 h-4 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <a href="tel:+5581996457782" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (81) 99645-7782
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="lucide lucide-phone w-4 h-4 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <a href="tel:+5581986294567" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (81) 98629-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="lucide lucide-mail w-4 h-4 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:nelson-lantermax@hotmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  nelson-lantermax@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin w-4 h-4 text-[#c0392b] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. Márcia de Windsor, 23<br />
                  João Paulo II, Camaragibe/PE<br />
                  CEP 54777-100
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Funcionamento</h4>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center gap-2">
                  <Clock className="lucide lucide-clock w-4 h-4 text-[#c0392b] flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">{h.day}</p>
                    <p className={`text-xs ${h.closed ? 'text-[#c0392b] font-semibold' : 'text-gray-400'}`}>
                      {h.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">© 2026 LanterMAX. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-xs">Camaragibe — Pernambuco — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
