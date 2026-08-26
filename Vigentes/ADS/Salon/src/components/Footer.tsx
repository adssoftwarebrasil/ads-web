import { MapPin, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#contact', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#002C2F] text-[#F8EFE6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Flogo.jpg"
              alt="137 Salon"
              className="h-16 w-auto rounded-lg mb-4"
            />
            <p className="text-[#F8EFE6]/70 text-sm leading-relaxed">
              Seu salão de beleza de referência em Goiânia. Profissionais qualificados e produtos
              premium para cuidar de você.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F8EFE6]">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F8EFE6]/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F8EFE6]">Contato</h3>
            <div className="space-y-3">
              <p className="text-[#F8EFE6]/70 text-sm flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                Rua 137, nº 556, loja 01 e 03, Goiânia - GO
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com/137Salon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8EFE6]/10 rounded-lg flex items-center justify-center hover:bg-[#F8EFE6]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/137salon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F8EFE6]/10 rounded-lg flex items-center justify-center hover:bg-[#F8EFE6]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F8EFE6]/20 pt-8 text-center">
          <p className="text-[#F8EFE6]/60 text-sm">
            © 2026 137 Salon by Gabriel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
