import { Phone, MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

const menuItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Contratar', id: 'contratar' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const servicesList = ['Capacetes', 'Câmara de Ar', 'Velas', 'Pneus', 'Cilindros', 'Juntas'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/motosilv/logo.png"
              alt="MotoSilva Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A MARY AP. BLUMER SILVA LTDA, conhecida como MotoSilva, foi fundada em 1983. Com mais de
              40 anos de história, distribuímos motopeças e acessórios de qualidade.
            </p>
          </div>
          <div>
            <h3 className="text-[#FFE600] font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-[#FFE600] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFE600] font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFE600] font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href="tel:1937137007"
                    className="block text-gray-400 hover:text-[#FFE600] transition-colors"
                  >
                    (19) 3713-7007
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="w-5 h-5 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a
                    href="https://wa.me/551937138008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-[#FFE600] transition-colors"
                  >
                    (19) 3713-8008
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@motosilva.com.br"
                  className="text-gray-400 hover:text-[#FFE600] transition-colors text-sm"
                >
                  contato@motosilva.com.br
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#FFE600] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  R DUQUE DE CAXIAS, 995, CENTRO
                  <br />
                  Limeira, SP
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/motosilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[#FFE600] transition-colors text-sm"
                >
                  <Instagram className="w-5 h-5 text-[#FFE600]" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2026 MotoSilva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
