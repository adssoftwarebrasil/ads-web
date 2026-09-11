import { Scale, Phone, Mail, MapPin, Clock } from 'lucide-react';

const areasLinks = [
  'Direito Público',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito Tributário',
  'Direito do Consumidor',
  'Direito Previdenciário',
];

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(16,17,12)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/acg%20advogados%2Fimg%2Flogo-sem-fundo.png"
              alt="ACG Advogados"
              className="h-16 w-auto mb-6"
            />
            <p className="text-[rgb(199,195,192)] mb-6 leading-relaxed">
              Escritório de advocacia com mais de 9 anos de experiência, oferecendo assessoria jurídica de excelência em
              todo o Estado do Tocantins.
            </p>
            <div className="flex items-center space-x-2 text-[rgb(175,145,93)]">
              <Scale size={20} />
              <span className="font-semibold">OAB/TO nº 220</span>
            </div>
            <p className="text-[rgb(199,195,192)] text-sm mt-2">CNPJ: 22.498.355/0001-95</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(175,145,93)]">Áreas de Atuação</h3>
            <ul className="space-y-2">
              {areasLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#areas"
                    className="text-[rgb(199,195,192)] hover:text-[rgb(175,145,93)] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(175,145,93)]">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgb(199,195,192)] hover:text-[rgb(175,145,93)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(175,145,93)]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[rgb(175,145,93)] flex-shrink-0 mt-1" />
                <div className="text-[rgb(199,195,192)] text-sm">
                  <p>(63) 9 9997-4853</p>
                  <p>(63) 3322-1977</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[rgb(175,145,93)] flex-shrink-0 mt-1" />
                <div className="text-[rgb(199,195,192)] text-sm">
                  <p>contato@acgadvogados.com.br</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[rgb(175,145,93)] flex-shrink-0 mt-1" />
                <div className="text-[rgb(199,195,192)] text-sm">
                  <p>Q. 208 Sul Alameda 15</p>
                  <p>Plano Diretor Sul</p>
                  <p>Palmas - TO, 77020-574</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-[rgb(175,145,93)] flex-shrink-0 mt-1" />
                <div className="text-[rgb(199,195,192)] text-sm">
                  <p>Segunda a Sexta</p>
                  <p>08h às 12h | 14h às 18h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgb(175,145,93)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(199,195,192)] text-sm text-center md:text-left">
              © 2026 ACG Advogados - ABREU, CARDOSO &amp; GOMES ADVOGADOS S/S. Todos os direitos reservados.
            </p>
            <p className="text-[rgb(199,195,192)] text-sm text-center md:text-right">
              Desenvolvido com excelência para servir com qualidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
