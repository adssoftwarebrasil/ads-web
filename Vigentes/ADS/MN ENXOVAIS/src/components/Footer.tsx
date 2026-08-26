import { MapPin, Phone, Mail, Clock, Instagram, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const quickLinks = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Produtos', target: 'products' },
  { label: 'Galeria', target: 'products' },
  { label: 'Contato', target: 'contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden" style={{ backgroundColor: 'rgb(155, 39, 40)' }}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://storage.lucasmendes.dev/site-sp/mn%2Flogomn.jpg" alt="MN Enxovais Logo" className="h-14 w-auto object-contain rounded-lg shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>MN Enxovais</h3>
                <p className="text-white/70 text-sm">Desde 2013</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">Enxoval cama, mesa e banho. Transformando sua casa em um lar aconchegante com qualidade e carinho.</p>
            <div>
              <h5 className="text-white font-semibold mb-3">Siga-nos</h5>
              <a href="https://instagram.com/mnenxovais" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 hover:scale-105 text-white">
                <Instagram size={20} className="lucide lucide-instagram" />
                <span>@mnenxovais</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToSection(link.target)} className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-200"></span>{link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin size={18} className="text-white/80 group-hover:text-white mt-1 transition-colors" />
                <div>
                  <p className="text-white/90 text-sm leading-relaxed">Rua Indaiá, QD 108 LT 10, Nº 940<br />Jardim Guanabara<br />Goiânia/GO - CEP: 74675-380</p>
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-200">
                <Phone size={18} className="text-white/80 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white">(62) 98260-8803</span>
              </a>
              <a href="mailto:natan.miquel11@gmail.com" className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-200">
                <Mail size={18} className="text-white/80 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white text-sm">natan.miquel11@gmail.com</span>
              </a>
              <a href="mailto:mn.enxovais@hotmail.com" className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-200">
                <Mail size={18} className="text-white/80 group-hover:text-white transition-colors" />
                <span className="text-white/90 group-hover:text-white text-sm">mn.enxovais@hotmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>Horário
            </h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3 mb-4">
                <Clock size={20} className="text-white mt-1" />
                <div className="text-white/90 text-sm">
                  <p className="font-semibold mb-2">Funcionamento:</p>
                  <p className="mb-1"><strong>Segunda a Sexta:</strong><br />8h30 às 18h</p>
                  <p><strong>Sábado:</strong><br />8h30 às 12h</p>
                </div>
              </div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[rgb(155,39,40)] rounded-lg font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-200 shadow-lg">
              <WhatsAppIcon className="w-5 h-5" />Fale Conosco
            </a>
          </div>
        </div>
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm text-center md:text-left">© 2025 MN Enxovais. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <p className="text-white/90 text-sm">Desenvolvido com ❤️</p>
              <button onClick={scrollTop} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 text-white text-sm font-semibold" aria-label="Voltar ao topo">
                <ArrowUp size={16} className="lucide lucide-arrow-up" />Topo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
