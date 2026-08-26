import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/img/logo-sem-fundo.webp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Toldos em Lona',
  'Coberturas em Policarbonato',
  'Toldos Cortina Retrátil',
  'Sombreador para Carro',
  'Telha Zinco / Sanduíche',
  'Garagens em tela sombrite',
  'Serralheria em Geral',
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={LOGO}
              alt="Tropical Toldos"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialistas em toldos, coberturas e serralheria sob medida. Atendemos Primavera do Leste e toda a
              região de Mato Grosso.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/tropicaltoldospva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-tropical-blue flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={18} height={18} />
              </a>
              <a
                href="https://www.instagram.com/toldostropical/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-tropical-blue flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-tropical-blue text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="lucide lucide-phone text-tropical-blue mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <div>
                  <a
                    href="http://wa.me/556684533788"
                    className="text-gray-300 hover:text-white text-sm transition-colors block"
                  >
                    (66) 9 8453-3788
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="lucide lucide-mail text-tropical-blue mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <a
                  href="mailto:tropicaltoldospva@gmail.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors break-all"
                >
                  tropicaltoldospva@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-tropical-blue mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 text-sm">
                  R. Rio de Janeiro, 473
                  <br />
                  Primavera do Leste - MT
                  <br />
                  CEP 78850-000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock text-tropical-blue mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 text-sm">
                  Seg a Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 12h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 Tropical Toldos. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs text-center">
            Primavera do Leste, Cuiabá, Rondonópolis e toda a região de MT
          </p>
        </div>
      </div>
    </footer>
  );
}
