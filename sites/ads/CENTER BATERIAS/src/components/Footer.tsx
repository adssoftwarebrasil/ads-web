import { Zap, Instagram } from 'lucide-react';

const menuLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const servicoLinks = [
  'Baterias para Linha Leve',
  'Baterias para Linha Pesada',
  'Baterias para Nobreaks',
  'Venda para Placas Solares',
  'Assistência e Socorro Elétrico',
  'Instalação de Baterias',
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="lucide lucide-zap w-8 h-8 text-[rgb(250,204,21)]" />
              <h3 className="text-xl font-bold">CENTER BATERIAS</h3>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              Com mais de 11 anos de experiência, fornecemos produtos de
              qualidade e serviços diferenciados em baterias automotivas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-85 hover:text-[rgb(250,204,21)] hover:opacity-100 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {servicoLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-sm opacity-85 hover:text-[rgb(250,204,21)] hover:opacity-100 transition-all duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li>
                <a
                  href="https://wa.me/556296857030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(250,204,21)] hover:opacity-100 transition-all duration-300"
                >
                  WhatsApp: +55 62 99685-7030
                </a>
              </li>
              <li>
                <a
                  href="mailto:centerbaterias62@gmail.com"
                  className="hover:text-[rgb(250,204,21)] hover:opacity-100 transition-all duration-300"
                >
                  centerbaterias62@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Avenida Anhangüera, 1.812
                <br />
                Setor Morais - Goiânia/GO
                <br />
                CEP: 74.620-015
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/centerbaterias2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[rgb(250,204,21)] hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="lucide lucide-instagram w-10 h-10" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-sm opacity-70">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
