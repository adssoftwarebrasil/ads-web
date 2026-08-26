import { Instagram, Facebook } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Cromoterapia',
  'Ozonioterapia',
  'Serviço de Transporte',
  'Hidratação de Pelagem',
  'Produtos Veterinários',
  'Banho e Tosa',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=animalyp%2Fnovo%2Flogo-borda-verde.jpeg&version_id=null"
              alt="Animaly Pet Shop"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Desde 2010, a Animaly Pet Shop é reconhecida em Cotia pela
              qualidade em higiene e embelezamento de pets.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/animalypetshop?igsh=a3BpYWM0N2V6anF3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#b900ba] to-[#38d060] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-[#38d060] to-[#b900ba] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={24} />
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
                    className="text-gray-400 hover:text-[#38d060] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38d060] transition-colors block"
                >
                  (11) 94727-9099
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@animalypetshop.com.br"
                  className="hover:text-[#38d060] transition-colors block break-all"
                >
                  contato@animalypetshop.com.br
                </a>
              </li>
              <li className="leading-relaxed">
                Estr. do Capuava, 511 B<br />
                Jardim dos Ipês<br />
                Cotia - SP, 06716-155
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              Copyright © 2026 Animaly Pet Shop - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
