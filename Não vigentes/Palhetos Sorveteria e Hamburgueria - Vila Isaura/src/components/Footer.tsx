import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/palhetos%20sorveteria%20e%20hamburgueria%20%2Fimg%2Flogo-palhetos.png';
const WHATSAPP = 'http://wa.me/556299822672';
const INSTAGRAM = 'https://www.instagram.com/Palhettosvilaisaura';

const quickLinks = [
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Cardápio', id: 'menu' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Localização', id: 'location' },
];

const productsList = ['Sorvetes Artesanais', 'Hambúrgueres Gourmet', 'Açaí & Cupuaçu', 'Pizza Broto', 'Batata Frita', 'Sucos Naturais'];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[rgb(35,31,32)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={LOGO} alt="Palhettos Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Há 12 anos oferecendo o melhor em sorvetes artesanais e hambúrgueres gourmet, com qualidade e preços acessíveis.
            </p>
            <div className="flex space-x-4">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(255,204,26)] p-3 rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-[rgb(35,31,32)]" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(255,204,26)] p-3 rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={20} className="text-[rgb(35,31,32)]" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,26)]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-400 hover:text-[rgb(255,204,26)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,26)]">Nossos Produtos</h3>
            <ul className="space-y-3">
              {productsList.map((p) => (
                <li key={p} className="text-gray-400">{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(255,204,26)]">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[rgb(255,204,26)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">
                    R. Sen. Jaime, 1920 - Sala 1<br />
                    Vila Isaura, Goiânia - GO<br />
                    CEP: 74553-380
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-[rgb(255,204,26)] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[rgb(255,204,26)] transition-colors"
                  >
                    (62) 99822-672
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram size={20} className="text-[rgb(255,204,26)] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-[rgb(255,204,26)] transition-colors"
                  >
                    @Palhettosvilaisaura
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Palhettos Sorveteria e Hamburgueria. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Feito com
              <Heart size={16} className="text-[rgb(255,204,26)] mx-2 fill-current" />
              para nossos clientes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
