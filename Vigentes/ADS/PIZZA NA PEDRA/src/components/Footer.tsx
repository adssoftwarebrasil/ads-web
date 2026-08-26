import { Instagram, Facebook, Clock, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#cardapio', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const hours = [
  { title: 'Delivery', time: 'Seg a Dom: 10h às 23h' },
  { title: 'Salão (Rodízio)', time: 'Seg a Dom: 18h às 23h' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img/logo-sem-fundo.webp"
              alt="Pizza na Pedra"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Há mais de 34 anos servindo a melhor e mais recheada pizza de Goiânia, feita com amor e
              ingredientes selecionados.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pizzanapedrago/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-red rounded-xl flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-white" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/goiania.pizzanapedrago/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-red rounded-xl flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-white" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-cream text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5">Horários</h4>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.title} className="flex gap-3">
                  <Clock
                    className="text-brand-red mt-0.5 flex-shrink-0"
                    width={16}
                    height={16}
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{h.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{h.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5">Contato</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  className="text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Rua 115, nº 1762, Qd. F43A, Lt. 09
                    <br />
                    Setor Sul – Goiânia/GO
                    <br />
                    CEP: 74085-325
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone
                  className="text-brand-red mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <div>
                  <a
                    href="tel:6292358068"
                    className="text-white/50 hover:text-brand-cream text-xs transition-colors block"
                  >
                    (62) 99235-8068
                  </a>
                  <a
                    href="tel:6232785151"
                    className="text-white/50 hover:text-brand-cream text-xs transition-colors block"
                  >
                    (62) 3278-5151
                  </a>
                </div>
              </div>
            </div>
            <a
              href="http://wa.me/556292358068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Pizza na Pedra. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">CNPJ: 26.878.454/0001-53</p>
        </div>
      </div>
    </footer>
  );
}
