import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const productList = [
  'Tintas Automotivas',
  'Tintas Imobiliárias',
  'Vernizes e Primers',
  'Massa Plástica e Poliéster',
  'Pistolas de Pintura',
  'Linha Vonixx',
  'Ceras e Polimentos',
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/r%20l%20tintas/img/logo-sem-fundo.webp"
              alt="RL Tintas"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tintas automotivas, imobiliárias e complementos para pintura em Primavera do Leste-MT.
              Qualidade, técnica e preço justo desde 2017.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/rl.tintas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="lucide lucide-instagram text-white" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/rltintas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="lucide lucide-facebook text-white" width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Produtos</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {productList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <div className="flex flex-col gap-4">
              <a
                href="http://wa.me/5566984628134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <Phone
                  className="lucide lucide-phone text-red-600 mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 group-hover:text-white text-sm transition-colors">
                  (66) 98462-8134
                </span>
              </a>
              <a href="mailto:rltintas.automotivas@outlook.com" className="flex items-start gap-3 group">
                <Mail
                  className="lucide lucide-mail text-red-600 mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 group-hover:text-white text-sm transition-colors break-all">
                  rltintas.automotivas@outlook.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-red-600 mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 text-sm">
                  Av. Florianópolis, 153
                  <br />
                  Parque Eldorado
                  <br />
                  Primavera do Leste - MT
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  className="lucide lucide-clock text-red-600 mt-0.5 flex-shrink-0"
                  width={16}
                  height={16}
                />
                <span className="text-gray-400 text-sm">
                  Seg–Sex: 07h–11h | 13h–17h
                  <br />
                  Sábado: 07h–11h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600">
          <p>© 2026 RL Tintas e Acessórios Automotivos. Todos os direitos reservados.</p>
          <p>Primavera do Leste – MT</p>
        </div>
      </div>
    </footer>
  );
}
