import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/cotec%2Flogo.webp';
const WA = 'https://wa.me/5579998311944';

const menuItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const serviceLinks = [
  'Prótese Biônicas e Mioelétricas',
  'Próteses Ortopédicas Membro Superior',
  'Próteses Ortopédicas Membro Inferior',
  'Sapatos Ortopédicos',
  'Palmilhas Personalizadas',
  'Órteses Ortopédicas',
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <div className="relative z-10">
      <footer className="bg-[#333333] text-white pt-16 pb-6">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex justify-center mb-12">
            <img src={LOGO} alt="COTEC Logo" className="h-16 w-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div>
              <h3 className="text-[#FB6F11] font-bold text-xl mb-6 flex items-center gap-2">Menu</h3>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className="hover:text-[#FB6F11] transition-colors duration-300 text-gray-300 hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FB6F11] font-bold text-xl mb-6">Serviços</h3>
              <ul className="space-y-3">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FB6F11] transition-colors duration-300 text-gray-300 hover:translate-x-1 inline-block text-sm"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FB6F11] font-bold text-xl mb-6">Contato</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-[#FB6F11]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FB6F11]/20 transition-colors duration-300">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm">(79) 99831-1944</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+557930130061"
                    className="flex items-center gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-[#FB6F11]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FB6F11]/20 transition-colors duration-300">
                      <Phone className="lucide lucide-phone w-5 h-5" />
                    </div>
                    <span className="text-sm">(79) 3013-0061</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cotecprodutosortopedicos@gmail.com"
                    className="flex items-center gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-[#FB6F11]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FB6F11]/20 transition-colors duration-300">
                      <Mail className="lucide lucide-mail w-5 h-5" />
                    </div>
                    <span className="text-sm break-all">cotecprodutosortopedicos@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Rua+Arauá,+353,+Centro,+Aracaju+-+SE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-[#FB6F11]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FB6F11]/20 transition-colors duration-300 flex-shrink-0">
                      <MapPin className="lucide lucide-map-pin w-5 h-5" />
                    </div>
                    <span className="text-sm">
                      Rua Arauá, 353, Centro<br />
                      Aracaju - SE, CEP: 49010-330
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#FB6F11] font-bold text-xl mb-6">Siga-nos</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <a
                    href="https://instagram.com/cotecprodutosortopedicos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="lucide lucide-instagram w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm">@cotecprodutosortopedicos</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/Cotec-Produtos-Ortop%C3%A9dicos/61571351482164/?sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#FB6F11] transition-all duration-300 text-gray-300 group"
                  >
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Facebook className="lucide lucide-facebook w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm">Cotec Produtos Ortopédicos</span>
                  </a>
                </li>
              </ul>
              <div className="bg-[#FB6F11]/10 rounded-xl p-4 border border-[#FB6F11]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="lucide lucide-clock w-5 h-5 text-[#FB6F11]" />
                  <h4 className="text-[#FB6F11] font-bold text-sm">Horário de Atendimento</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center text-xs">
                    <span className="text-gray-300 font-semibold">Seg - Sex</span>
                    <span className="text-gray-400">08:00-12:00 13:00-17:00</span>
                  </li>
                  <li className="flex justify-between items-center text-xs">
                    <span className="text-gray-300 font-semibold">Sáb - Dom</span>
                    <span className="text-gray-400">Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 max-w-4xl mx-auto mb-6 leading-relaxed text-sm">
              Na COTEC, acreditamos que o <span className="text-[#FB6F11] font-semibold">movimento</span> é a essência da
              vida. Nossa <span className="text-[#FB6F11] font-semibold">missão</span> é proporcionar soluções
              ortopédicas personalizadas e tecnologicamente avançadas, ajudando nossos pacientes a superarem desafios
              físicos e a retomarem uma vida ativa e saudável. Cada passo importa, e trabalhamos com{' '}
              <span className="text-[#FB6F11] font-semibold">dedicação</span> para oferecer cuidado excepcional e
              transformar vidas.
            </p>
            <p className="text-center text-gray-500 text-sm">Copyright © 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
