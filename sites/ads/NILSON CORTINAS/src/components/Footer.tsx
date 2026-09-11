import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const productLinks = [
  'Cortinas Sob Medida',
  'Persianas',
  'Toldos',
  'Papéis de Parede',
  'Estofados',
  'Automação',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(114,115,119)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Nilson%20Cortinas%2Flogo2_Nilson%20Cortinas.avif&version_id=null"
              alt="Nilson Cortinas"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Há mais de 30 anos transformando ambientes em Cuiabá com qualidade, elegância e atendimento personalizado.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(207,173,109)]">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-300 hover:text-[rgb(207,173,109)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(207,173,109)]">Produtos</h3>
            <ul className="space-y-2 text-gray-300">
              {productLinks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[rgb(207,173,109)]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-1" width={18} height={18} />
                <span>Rua Miguel Serror, 22 – Santa Rosa, Cuiabá, MT</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="lucide lucide-phone " width={18} height={18} />
                <a href="tel:6536374521" className="hover:text-[rgb(207,173,109)] transition-colors">
                  (65) 3637-4521
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="lucide lucide-mail " width={18} height={18} />
                <a
                  href="mailto:nilsoncortinas@hotmail.com"
                  className="hover:text-[rgb(207,173,109)] transition-colors"
                >
                  nilsoncortinas@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Instagram className="lucide lucide-instagram " width={18} height={18} />
                <a
                  href="https://instagram.com/nilsoncortinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[rgb(207,173,109)] transition-colors"
                >
                  @nilsoncortinas
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">2026 Nilson Cortinas. Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm mt-2">Seg a Sex: 08h às 17h30 | Sábado: 09h às 12h</p>
        </div>
      </div>
    </footer>
  );
}
