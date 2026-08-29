import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Promoções Especiais',
  'Troca de Armações',
  'Armações Modernas',
  'Lentes Multifocais',
  'Óculos Solares',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(91,1,0)] via-[rgb(173,19,21)] to-[rgb(231,28,31)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/oticamodernago%2Flogo.jpg"
                alt="Ótica Moderna Logo"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-xl">Ótica Moderna</div>
                <div className="text-sm opacity-90">Desde 1966</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Desde 1966, a Ótica Moderna tem oferecido soluções ópticas de qualidade para a população de Goiânia. Nossa missão é proporcionar a melhor experiência em atendimento e produtos, garantindo que nossos clientes encontrem a lente perfeita na armação adequada. Com uma seleção de produtos modernos e atendimento personalizado, somos a escolha ideal para todas as suas necessidades visuais.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:opacity-80 transition-opacity text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=556293756868&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Phone className="lucide lucide-phone w-5 h-5 flex-shrink-0" width={24} height={24} />
                  <span className="text-sm">629 9375-6868</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@oticamoderna.com.br"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Mail className="lucide lucide-mail w-5 h-5 flex-shrink-0" width={24} height={24} />
                  <span className="text-sm">contato@oticamoderna.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin w-5 h-5 flex-shrink-0 mt-1" width={24} height={24} />
                <span className="text-sm">R. 38, 513 - St. Marista, Goiânia - GO, 74150-250</span>
              </li>
            </ul>
            <div className="mt-6">
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Facebook className="lucide lucide-facebook w-5 h-5" width={24} height={24} />
                </a>
                <a
                  href="https://www.instagram.com/oticamoderna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Instagram className="lucide lucide-instagram w-5 h-5" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-90">Copyright © 2026 – Desenvolvido por Parceiro Google</p>
        </div>
      </div>
    </footer>
  );
}
