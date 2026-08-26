import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#004688] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre a Locadora Sul</h3>
            <p className="text-gray-200 leading-relaxed">
              A Locadora Sul trabalha no ramo de locação de equipamentos destinados à construção civil com equipamentos novos e modernos para maior segurança e melhor qualidade na hora de construir.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu Rápido</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-gray-200 hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="text-gray-200 hover:text-white transition-colors">
                  Equipamentos
                </a>
              </li>
              <li>
                <a href="#informativo" className="text-gray-200 hover:text-white transition-colors">
                  Informativo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-200 hover:text-white transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-200">
                  Rua Vitório Cella, 132 - E<br />
                  Centro, Chapecó - SC<br />
                  CEP: 89803-020
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+554933220073" className="text-gray-200 hover:text-white">
                  (49) 3322-0073
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="https://wa.me/5549991197311" className="text-gray-200 hover:text-white">
                  (49) 99119-7311
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:ivanor@locadorasul.com.br" className="text-gray-200 hover:text-white">
                  ivanor@locadorasul.com.br
                </a>
              </li>
              
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Segunda a Sexta</p>
                  <p>07:30 às 12:00</p>
                  <p>13:30 às 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sábado</p>
                  <p>07:30 às 12:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Domingo</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/locadorasul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>@locadorasul</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#0072BA] py-6">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>&copy; 2025 Locadora Sul - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
