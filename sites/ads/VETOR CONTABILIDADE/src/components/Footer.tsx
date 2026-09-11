import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#1a1918] via-[#21201e] to-[#2a2826] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-[#2e3094] to-[#1e2070] p-2.5 rounded-xl shadow-lg">
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Vetorcontabil%2FlogoContabilidade.png&version_id=null"
                  alt="Vetorcontabil Logo"
                  className="h-8 w-auto"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vetorcontabil
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções contábeis inteligentes para impulsionar o crescimento do seu negócio com segurança e eficiência.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2e3094] transition-colors duration-200 hover:pl-2 inline-block">
                  Consultoria Contábil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2e3094] transition-colors duration-200 hover:pl-2 inline-block">
                  Planejamento Tributário
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2e3094] transition-colors duration-200 hover:pl-2 inline-block">
                  Abertura de Empresas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2e3094] transition-colors duration-200 hover:pl-2 inline-block">
                  Assessoria Fiscal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2e3094]" />
                <span>Fl 27, Qd 14 - Lt 22<br />Vila Militar Pres. Medice<br />Marabá - PA, 68509-230</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#2e3094]" />
                <a href="tel:+559433211141" className="hover:text-white transition-colors">
                  (94) 3321-1141
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#2e3094]" />
                <a href="https://wa.me/5594981573663" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: (94) 98157-3663
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Redes Sociais
            </h3>
            <p className="text-gray-400 text-sm">
              Acompanhe nossas novidades e dicas contábeis
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#2e3094] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#2e3094] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-[#2e3094] p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-sm">
            <p className="text-gray-400">
              &copy; {currentYear} Vetorcontabil Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-gray-500">
              <span>CNPJ em processo de registro</span>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}