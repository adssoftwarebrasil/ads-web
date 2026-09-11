import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(8,14,92)] text-white relative">
      {/* Detalhe visual - borda superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 opacity-50"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - About */}
          <div className="space-y-6">
            <div className="mb-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Flogo.webp"
                alt="Mais Luz Engenharia"
                className="h-20 w-auto" 
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Soluções elétricas completas para empresas, indústrias e construções. Compromisso com segurança, norma técnica e eficiência energética.
            </p>
            <div className="flex items-start gap-3 text-gray-300 text-sm">
               <MapPin className="w-5 h-5 flex-shrink-0 text-yellow-400" />
               <span>Atendimento em todo o território nacional.</span>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400 border-b border-yellow-400/20 pb-2 inline-block">
              Serviços Rápidos
            </h3>
            <ul className="space-y-3">
              {['Instalação Elétrica', 'Energia Solar', 'Subestações', 'Manutenção', 'Redes de Distribuição'].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400 border-b border-yellow-400/20 pb-2 inline-block">
              Fale Conosco
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+5562999851162"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(62) 99985-1162</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@maisluzservice.com.br"
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">contato@maisluzservice.com.br</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-white/10 p-2 rounded-lg">
                   <Clock className="w-4 h-4" />
                </div>
                <span>Seg - Sex: 7h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400 border-b border-yellow-400/20 pb-2 inline-block">
              Siga a Mais Luz
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Acompanhe nossas obras e novidades nas redes sociais.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067492590253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/maisluzengenharia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mais-luz-service-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Centralizada e Dinâmica */}
      <div className="bg-[#05093b] border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Mais Luz Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;