import { ShoppingBag, Instagram, Facebook, Phone, MapPin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Categorias', target: 'categorias' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

const productLinks = [
  'Vestuário Infantil',
  'Brinquedos',
  'Moda Praia',
  'Material Escolar',
  'Linha Baby',
  'Acessórios',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shop Dryka Kids</h3>
                <p className="text-sm text-gray-400">Moda Infantil</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Há mais de 6 anos oferecendo produtos de qualidade e atendimento excepcional para as
              famílias do Cariri.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/shopdrykakids"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Drykakids"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/558888033252"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-500 transition-all"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Produtos</h4>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  R. São Francisco, 499
                  <br />
                  Centro, Juazeiro do Norte - CE
                  <br />
                  CEP: 63010-215
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/558888033252"
                  className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">(88) 98803-3252</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mundodododryka@hotmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-pink-400" />
                  <span className="text-sm">mundodododryka@hotmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Shop Dryka Kids. Todos os direitos reservados.
            </p>
            <p className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
