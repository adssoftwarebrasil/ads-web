import { Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';
import { scrollToId } from '../whatsapp';

const quickLinks = [
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[rgb(2,45,103)] via-blue-900 to-[rgb(2,45,103)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fimg%2Flogo-sem-fundo.webp"
              alt="Goiafio Logo"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-blue-100 leading-relaxed">
              Há mais de 30 anos fornecendo soluções em medidores de fios e cabos com qualidade
              certificada pelo INMETRO.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1 text-blue-200" />
                <div>
                  <p className="text-blue-100">
                    (62) 3581-1125
                    <br />
                    (62) 99415-2855
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1 text-blue-200" />
                <a
                  href="mailto:goiafio@yahoo.com.br"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  goiafio@yahoo.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={18} className="flex-shrink-0 mt-1 text-blue-200" />
                <a
                  href="https://www.instagram.com/goiafio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  @goiafio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Horário</h4>
            <div className="flex items-start gap-3 mb-6">
              <Clock size={18} className="flex-shrink-0 mt-1 text-blue-200" />
              <div>
                <p className="text-blue-100">
                  Segunda a Sexta
                  <br />
                  7h30 às 17h30
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="flex-shrink-0 mt-1 text-blue-200" />
              <p className="text-blue-100 text-sm">
                Av. Sen. José Rodrigues de Morais Neto, 951 Parque Amazônia, Goiânia - GO
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center md:text-left">
              © 2026 Indústria Metalúrgica Hiroshima Ltda. Todos os direitos reservados.
            </p>
            <p className="text-blue-100 text-sm text-center md:text-right">
              CNPJ: 26.671.610/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
