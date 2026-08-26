import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos/Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Brelevo%2Flogograficarelevo.jpg&version_id=null"
              alt="Gráfica Brelevo"
              className="h-12 mb-4"
            />
            <p className="text-gray-600 mb-4 leading-relaxed">
              Produzindo convites com fino acabamento desde 1999. Mais de 25 anos de experiência em convites de luxo para casamentos e eventos sociais.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/graficabrelevo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(17,50,255)] bg-opacity-10 p-3 rounded-lg text-[rgb(17,50,255)] hover:bg-opacity-20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-600 hover:text-[rgb(17,50,255)] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5561986054473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-gray-600 hover:text-[rgb(17,50,255)] transition-colors duration-200"
                >
                  <Phone size={20} className="flex-shrink-0 mt-0.5" />
                  <span>+55 61 98605-4473</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:brelevo@hotmail.com"
                  className="flex items-start space-x-2 text-gray-600 hover:text-[rgb(17,50,255)] transition-colors duration-200"
                >
                  <Mail size={20} className="flex-shrink-0 mt-0.5" />
                  <span>brelevo@hotmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>
                  SIG quadra 06 lote 1455 loja 03 setor industrial<br />
                  Zona Industrial - Brasília, DF<br />
                  CEP: 70.610-460
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © 2026 Gráfica Brelevo. Todos os direitos reservados.
            </div>
            <div className="text-gray-600 text-sm text-center md:text-right">Convites de luxo em Brasília-DF e entorno</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
