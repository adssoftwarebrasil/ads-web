import { Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/produtos%20alimenticios%20veranita%2Fimg%2FLOGO%20VERANITA%20-%20ALTA.png';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

const productCategories = [
  'Especiarias',
  'Temperos',
  'Molhos',
  'Alhos',
  'Farináceos',
  'Farofas',
  'Pipocas',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[rgb(46,49,146)] to-[rgb(0,173,239)] text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img src={LOGO} alt="Veranita" className="h-16 w-auto mb-6" />
            <p className="text-white/80 leading-relaxed mb-6">
              Desde 1976 levando mais sabor, qualidade e praticidade à mesa das famílias brasileiras.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/veranitaprodutos/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
              <a
                href="https://br.linkedin.com/company/veranita"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="lucide lucide-linkedin w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Nossos Produtos</h3>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat} className="text-white/80">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Av. Jorge Abraão, 926<br />Jardim Liberdade<br />Sertãozinho - SP, 14160-020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone w-5 h-5 flex-shrink-0" />
                <a href="tel:+5516997516375" className="text-white/80 hover:text-white transition-colors">
                  (16) 99751-6375
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="lucide lucide-mail w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:contato@veranita.com.br"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contato@veranita.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Seg a Sex<br />07h30 às 11h30<br />13h00 às 17h30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80">
            2026 Veranita Produtos Alimentícios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
