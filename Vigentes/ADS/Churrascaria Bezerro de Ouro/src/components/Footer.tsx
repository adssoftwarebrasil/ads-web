import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(31,29,30)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/CHURRASCARIA%20E%20PIZZARIA%20BEZERRO%20DE%20OURO%2Fimg%2Flogo.png"
              alt="Bezerro de Ouro"
              className="h-14 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fundada em 1996, somos referência em qualidade e tradição em Campo
              Grande/MS. A primeira churrascaria a implementar o sistema de
              rodízio no estado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/churrascariabezerrodeouro/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(180,137,27)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <Facebook
                  width={20}
                  height={20}
                  className="lucide lucide-facebook text-[rgb(180,137,27)]"
                />
              </a>
              <a
                href="https://www.instagram.com/churrascariabezerrodeouro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[rgb(180,137,27)] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <Instagram
                  width={20}
                  height={20}
                  className="lucide lucide-instagram text-[rgb(180,137,27)]"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[rgb(180,137,27)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  width={20}
                  height={20}
                  className="lucide lucide-map-pin text-[rgb(180,137,27)] flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">
                  Rua Dr. Antônio Alves Arantes, 307
                  <br />
                  Chácara Cachoeira, Campo Grande MS
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  width={20}
                  height={20}
                  className="lucide lucide-phone text-[rgb(180,137,27)] flex-shrink-0"
                />
                <div className="text-gray-300">
                  <a
                    href="tel:+556733265463"
                    className="hover:text-[rgb(180,137,27)] transition-colors duration-300 block"
                  >
                    (67) 3326-5463
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail
                  width={20}
                  height={20}
                  className="lucide lucide-mail text-[rgb(180,137,27)] flex-shrink-0"
                />
                <a
                  href="mailto:bezerrodeouro@bezerrodeouro.com.br"
                  className="text-gray-300 hover:text-[rgb(180,137,27)] transition-colors duration-300"
                >
                  bezerrodeouro@bezerrodeouro.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(21,19,20)] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
