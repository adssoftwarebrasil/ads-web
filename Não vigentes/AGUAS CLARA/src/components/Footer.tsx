import { MessageCircle, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Piscinas Comerciais',
  'Piscinas para Condomínios',
  'Piscinas com Hidromassagem',
  'Piscinas em Vinil',
  'Piscinas em Fibra',
  'Piscinas em Alvenaria',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/aguasclaraspiscinas%2Fimg%2Flogo.webp"
              alt="Águas Claras Piscinas"
              className="h-12 mb-6"
            />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Somos especialistas na construção e instalação de piscinas residenciais e comerciais.
              Há mais de 20 anos no mercado...
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/5574981267777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-accent transition-colors"
                >
                  (74) 98126-7777
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:aguasclaraspiscinasbf@gmail.com"
                  className="text-white/80 text-sm hover:text-accent transition-colors break-all"
                >
                  aguasclaraspiscinasbf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Br 407 rodovia, Av. do Contôrno, SN - km 127 - Lomanto junior, Sr. do Bonfim - BA,
                  48970-000
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all w-10 h-10 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/aguasclaraspiscinasbf?igsh=ZGUzMzM3NWJiOQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all w-10 h-10 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              Copyright © 2026 – Águas Claras Piscinas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
