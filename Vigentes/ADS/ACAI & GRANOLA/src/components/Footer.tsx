import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const MENU_ITEMS: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const SERVICES: string[] = [
  'Mix de Açaí',
  'Creme de Cupuaçu Tasty',
  'Creme de Açaí Açaíto',
  'Granola Da Boa',
];

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[rgb(34,2,34)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Flogo.png"
              alt="ACAI & GRANOLA"
              className="h-16 mb-6"
              loading="lazy"
            />
            <p className="text-white text-sm leading-relaxed opacity-90">
              A ACAI &amp; GRANOLA é referência em gelatos comestíveis de altíssima qualidade. Com sabor
              incomparável e rigorosas certificações de segurança alimentar, nossa marca é sinônimo de
              confiança.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-white hover:text-gray-200 transition-colors text-sm opacity-90 hover:opacity-100"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm opacity-90">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="lucide lucide-map-pin flex-shrink-0 mt-1" />
                <span className="text-sm opacity-90">
                  Rua Santa Paula, n.94, Bairro Renascer, Cabedelo-PB
                </span>
              </li>
              <li>
                <a
                  href="tel:+5583998415555"
                  className="flex items-center space-x-3 hover:text-gray-200 transition-colors"
                >
                  <Phone size={20} className="lucide lucide-phone " />
                  <span className="text-sm opacity-90">(83) 99841-5555</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:acaigranola@gmail.com"
                  className="flex items-center space-x-3 hover:text-gray-200 transition-colors"
                >
                  <Mail size={20} className="lucide lucide-mail " />
                  <span className="text-sm opacity-90">acaigranola@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-gray-200 transition-colors"
                >
                  <Instagram size={20} className="lucide lucide-instagram " />
                  <span className="text-sm opacity-90">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white border-opacity-20 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm opacity-90">
            Copyright © 2025 ACAI &amp; GRANOLA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
