import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Veículos', href: '#veiculos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="border-t-4 border-primary"></div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=map-locacoes%2Flogo-locacao-veiculos.png&version_id=null"
              alt="MAP Locações"
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Locação de carros e motos em São Luís desde 2018
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-primary" />
                <span className="text-sm">
                  Av. Lourenço Vieira da Silva, 18, Loja 03
                  <br />
                  Jardim São Cristóvão, São Luís - MA
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+5598987318235" className="hover:text-primary transition-colors">
                  (98) 98731-8235
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="flex-shrink-0 mt-1 text-primary" />
                <a
                  href="mailto:maplocacaoslz@gmail.com"
                  className="hover:text-primary transition-colors text-sm break-words"
                >
                  maplocacaoslz@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={18} className="flex-shrink-0 mt-1 text-primary" />
                <span className="text-sm">Seg - Sex: 9h às 17h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/maplocoesslz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 hover:scale-110"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://facebook.com/maplocoesslz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-200 hover:scale-110"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} MAP Locações - Todos os direitos reservados</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
