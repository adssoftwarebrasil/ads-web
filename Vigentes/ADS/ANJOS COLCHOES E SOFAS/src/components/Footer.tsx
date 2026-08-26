import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=anjoscolchao%2Fimage%2041.png&version_id=null';

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Nossa História' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#products', label: 'Produtos' },
  { href: '#contact', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#004A69] via-[#003D5C] to-[#002A3F] text-white pt-12 md:pt-16 pb-6 md:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src={LOGO}
                alt="Anjos Colchões e Sofás"
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 max-w-md">
              Há 35 anos a Anjos leva conforto para várias famílias em todo o Brasil.
              Em Marabá, essa história continua com uma equipe dedicada, pronta para
              ajudar você a transformar sua casa em um verdadeiro refúgio de conforto e
              qualidade.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D1AD6E] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/anjos.marabacidadenova/?igsh=OHNvOWk3dXgwZWp2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D1AD6E] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:contato@anjoscolchoes.com.br"
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D1AD6E] transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[#D1AD6E]">
              Links Rápidos
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-gray-300 hover:text-[#D1AD6E] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D1AD6E] rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-[#D1AD6E]">
              Contato
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#D1AD6E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Telefone</p>
                  <a
                    href="tel:+559433220000"
                    className="text-sm md:text-base text-gray-300 hover:text-[#D1AD6E] transition-colors"
                  >
                    (94) 3198-6888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#D1AD6E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-400">E-mail</p>
                  <a
                    href="mailto:contato@anjoscolchoes.com.br"
                    className="text-sm md:text-base text-gray-300 hover:text-[#D1AD6E] transition-colors break-all"
                  >
                    contato@anjoscolchoes.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#D1AD6E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-gray-400">Localização</p>
                  <p className="text-sm md:text-base text-gray-300">Marabá - PA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © 2026 Anjos Colchões e Sofás - Marabá-PA. Todos os direitos reservados.
            </p>
            <p className="text-xs md:text-sm text-gray-400 flex items-center gap-2">
              Feito com{' '}
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-[#D1AD6E] fill-[#D1AD6E]" />{' '}
              para Marabá-PA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
