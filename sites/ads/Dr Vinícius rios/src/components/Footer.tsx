import { Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Tratamento Conservador',
  'Cirurgia Minimamente Invasiva',
  'Tratamento Regenerativo',
];

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2Flogo.png"
              alt="Dr. Vinícius Rezende Rios"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Dr. Vinícius Rezende Rios - Ortopedista especialista em coluna vertebral, oferecendo
              tratamentos personalizados em Goiânia-GO.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+5562999220030"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (62) 99922-0030
                </a>
              </li>
              <li>
                <a
                  href="mailto:viniciusriosconsultorio@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  viniciusriosconsultorio@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Rua Napoli, 474<br />
                Jardim Planalto - Goiânia/GO<br />
                CEP 74333-235
              </li>
              <li>
                <a
                  href="https://instagram.com/drviniciusrios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Instagram size={18} />
                  @drviniciusrios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
