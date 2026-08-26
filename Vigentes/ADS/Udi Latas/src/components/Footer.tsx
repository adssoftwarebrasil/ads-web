import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const productLinks = ['Para-choques', 'Capôs', 'Faróis', 'Lanternas', 'Retrovisores', 'Paralamas'];

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#28156F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/udi%20latas%2Fimg%2Flogo-sem-fundo.png"
              alt="Udi Latas"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Desde 1993 oferecendo as melhores soluções em autopeças para Uberlândia e região. Qualidade, confiança e
              atendimento diferenciado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/udilatas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2CD00] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-[#28156F]" />
              </a>
              <a
                href="https://www.instagram.com/udilatas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2CD00] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-[#28156F]" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2CD00]">Produtos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {productLinks.map((label) => (
                <li key={label}>
                  <a href="#produtos" className="hover:text-[#F2CD00] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2CD00]">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#F2CD00] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F2CD00]">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Av. Paulo Roberto Cunha Santos, 1485<br />
                  Uberlândia - MG
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+553432364573" className="hover:text-[#F2CD00] transition-colors">
                  (34) 3236-4573
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Seg-Sex: 08:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <div>
              <p>© 2026 Udi Latas Comércio de Peças Ltda. Todos os direitos reservados.</p>
              <p className="text-xs mt-1">CNPJ: 71.422.067/0001-62</p>
            </div>
            <div className="flex gap-6">
              <span>Política de Privacidade</span>
              <span>Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
