import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#082432] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kipontofrio%2FLogoSemOFundoNavBar.png"
              alt="Ki Ponto Frio"
              className="h-20 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em peças multimarcas para refrigeração em Palmas. Qualidade, variedade e atendimento de excelência.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kipontofriorefrigeracao/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#166188] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#6ed2e1] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/pontofrio.refrigeracao.5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#166188] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#6ed2e1] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#6ed2e1]">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#6ed2e1] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-[#6ed2e1] transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-[#6ed2e1] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-[#6ed2e1] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#6ed2e1]">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#6ed2e1] flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  ACSE 11 Rua SE 7, 09<br />
                  Plano Diretor Sul - Palmas
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#6ed2e1] flex-shrink-0" />
                <a href="tel:6332152711" className="text-gray-300 text-sm hover:text-[#6ed2e1] transition-colors">
                  (63) 3215-2711
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#6ed2e1] flex-shrink-0" />
                <a href="mailto:kipontofrio@yahoo.com.br" className="text-gray-300 text-sm hover:text-[#6ed2e1] transition-colors break-all">
                  kipontofrio@yahoo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#166188] pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ki Ponto Frio Refrigeração. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
