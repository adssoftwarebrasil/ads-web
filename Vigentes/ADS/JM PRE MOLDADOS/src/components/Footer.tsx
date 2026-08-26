import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const productLinks = [
  'Blocos de Concreto',
  'Caixa de Passagem',
  'Manilhas',
  'Tubos de Concreto',
  'Paver Intertravante',
  'Piso Tátil',
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FJM-Pre-Moldados-Logo.webp"
              alt="JM Pré-moldados"
              className="h-16 w-auto mb-6 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-gray-300 leading-relaxed">
              Especialistas em artefatos de concreto de alta qualidade para sua obra em Dourados/MS e
              região.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#3b82f6] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-[#3b82f6] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Produtos</h3>
            <ul className="space-y-3">
              {productLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#produtos"
                    className="text-gray-300 hover:text-[#60A5FA] transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6799737241"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>(67) 99973-7241</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:6799841689"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>(67) 99984-1689</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jm.premoldados@email.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span></span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>
                    Rodovia BR-163, SN
                    <br />
                    Parque das Nações
                    <br />
                    Dourados/MS
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 JM Pré-moldados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
