import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Contato', id: 'contato' },
];

const hours = [
  { day: 'Seg-Sex', time: '08:30 - 18:30', closed: false },
  { day: 'Sábado', time: '08:30 - 13:30', closed: false },
  { day: 'Domingo', time: 'Fechado', closed: true },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-[rgb(253,88,34)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flogo.jpg"
              alt="SJ Bike Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              A SJ Bike é mais do que uma loja — é um ponto de encontro para
              ciclistas que buscam confiança, qualidade e uma experiência única
              sobre duas rodas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[rgb(253,88,34)] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="lucide lucide-phone w-5 h-5 text-[rgb(253,88,34)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Telefone/WhatsApp</p>
                  <a
                    href="https://wa.me/5571982803566"
                    className="text-white hover:text-[rgb(253,88,34)] transition-colors duration-300"
                  >
                    (71) 98280-3566
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="lucide lucide-mail w-5 h-5 text-[rgb(253,88,34)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">E-mail</p>
                  <a
                    href="mailto:sjbikeoficial@gmail.com"
                    className="text-white hover:text-[rgb(253,88,34)] transition-colors duration-300"
                  >
                    sjbikeoficial@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[rgb(253,88,34)] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Endereço</p>
                  <p className="text-white">Portão, Lauro de Freitas - BA</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <ul className="space-y-3">
              {hours.map((item) => (
                <li key={item.day} className="flex items-start">
                  <Clock className="lucide lucide-clock w-5 h-5 text-[rgb(253,88,34)] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.day}</p>
                    <p className={item.closed ? 'text-red-400' : 'text-gray-300'}>
                      {item.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SJ Bike. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
