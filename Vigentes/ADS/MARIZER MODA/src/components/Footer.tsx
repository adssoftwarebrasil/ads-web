import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Fardamentos Personalizados',
  'Bordados Computadorizados',
  'Impressão DTF',
  'Sublimação Total',
  'Equipagens Completas',
  'Uniformes de Segurança',
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/marize%20uniformes/img/logo-sem-fundo.webp"
              alt="Marizé Uniformes"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Uniformes profissionais operacionais e administrativos, alta costura e confecções sob medida em São Luís
              – MA.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/marizemodasslz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
                style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
              >
                <Instagram className="lucide lucide-instagram" width={17} height={17} strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/marizeuniformes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
                style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222), rgb(0, 187, 254))' }}
              >
                <Facebook className="lucide lucide-facebook" width={17} height={17} strokeWidth={2} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-cyan text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#servicos" className="text-gray-400 hover:text-brand-cyan text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-brand-cyan flex-shrink-0 mt-0.5"
                  width={15}
                  height={15}
                  strokeWidth={2}
                />
                <span className="text-gray-400 text-sm">R. Adélino Fontoura, 145-B – Jórdoa, São Luís – MA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="lucide lucide-phone text-brand-cyan flex-shrink-0"
                  width={15}
                  height={15}
                  strokeWidth={2}
                />
                <a href="tel:+559881135450" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (98) 9 8113-5450
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="lucide lucide-mail text-brand-cyan flex-shrink-0"
                  width={15}
                  height={15}
                  strokeWidth={2}
                />
                <a
                  href="mailto:marizemodas@hotmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  marizemodas@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="lucide lucide-clock text-brand-cyan flex-shrink-0"
                  width={15}
                  height={15}
                  strokeWidth={2}
                />
                <span className="text-gray-400 text-sm">Seg–Sex: 08h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Marizé Uniformes. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">São Luís – MA · Área de Atendimento: Grande São Luís</p>
        </div>
      </div>
    </footer>
  );
}
