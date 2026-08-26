import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020202] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/luna%20motos%2Fimg%2Flogo-sem-fundo.png"
              alt="Luna Motos"
              className="h-14 w-auto mb-4 invert"
              loading="lazy"
            />
            <p className="text-sm text-[#D3D6D5] leading-relaxed">
              Sua parceira de confiança em peças e serviços para motos em Boa Vista, Roraima.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-[#D3D6D5] hover:text-[#F97316] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+559591772210"
                  className="flex items-center space-x-2 text-sm text-[#D3D6D5] hover:text-[#F97316] transition-colors"
                >
                  <Phone className="lucide lucide-phone w-4 h-4 text-[#F97316]" />
                  <span>(95) 99177-2210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:lunapecaseacessorios@gmail.com"
                  className="flex items-center space-x-2 text-sm text-[#D3D6D5] hover:text-[#F97316] transition-colors"
                >
                  <Mail className="lucide lucide-mail w-4 h-4 text-[#F97316]" />
                  <span>lunapecaseacessorios@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Av.+Nossa+Sra.+de+Nazar%C3%A9,+915+-+Asa+Branca,+Boa+Vista+-+RR,+69312-305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-sm text-[#D3D6D5] hover:text-[#F97316] transition-colors"
                >
                  <MapPin className="lucide lucide-map-pin w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span>Av. Nossa Sra. de Nazaré, 915 - Asa Branca</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Horário de Funcionamento</h3>
            <p className="text-sm text-[#D3D6D5] mb-6">Seg a Sáb: 08:00 - 18:00</p>
            <h3 className="text-base font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/lunamotoss/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#DC2626] hover:scale-110 transition-all duration-200"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
              <a
                href="https://wa.me/559591772210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#DC2626] hover:scale-110 transition-all duration-200"
              >
                <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-500">
            © 2024 Luna Motos. Todos os direitos reservados. | Av. Nossa Sra. de Nazaré, 915 - Asa
            Branca, Boa Vista - RR
          </p>
        </div>
      </div>
    </footer>
  );
}
