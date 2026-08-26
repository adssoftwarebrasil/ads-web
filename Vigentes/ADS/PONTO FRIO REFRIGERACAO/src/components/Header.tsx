import { Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#082432] shadow-lg">
      <div className="bg-[#166188] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-3 text-white text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Segunda a Sábado</span>
          </div>
          <a href="tel:6332152711" className="flex items-center gap-2 hover:text-[#6ed2e1] transition-colors">
            <Phone size={14} />
            <span>(63) 3215-2711</span>
          </a>
          <a href="mailto:kipontofrio@yahoo.com.br" className="flex items-center gap-2 hover:text-[#6ed2e1] transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">kipontofrio@yahoo.com.br</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/kipontofrio%2FLogoSemOFundoNavBar.png"
            alt="Ki Ponto Frio Refrigeração"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="#inicio" className="hover:text-[#6ed2e1] transition-colors font-medium">Início</a>
          <a href="#produtos" className="hover:text-[#6ed2e1] transition-colors font-medium">Produtos</a>
          <a href="#sobre" className="hover:text-[#6ed2e1] transition-colors font-medium">Sobre</a>
          <a href="#contato" className="hover:text-[#6ed2e1] transition-colors font-medium">Contato</a>
        </div>

        <a
          href="https://wa.me/556332152711?text=Olá!%20Gostaria%20de%20mais%20informações"
          className="bg-[#6ed2e1] text-[#082432] px-6 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Fale Conosco
        </a>
      </nav>
    </header>
  );
};

export default Header;
