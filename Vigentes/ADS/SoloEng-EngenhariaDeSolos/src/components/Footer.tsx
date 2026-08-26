import { Mail, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#6c6d71] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/solo-eng%2Fsoloeng-logo-preto.webp"
              alt="Soloeng Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Excelência em engenharia de solos desde 1978. Construindo o futuro
              de Goiânia com qualidade e tradição.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/soloengengenhariadesolos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#cec643] rounded-lg flex items-center justify-center hover:bg-[#b8b43a] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-[#6c6d71]" size={20} />
              </a>
              <a
                href="mailto:Contato@soloeng.com.br"
                className="w-10 h-10 bg-[#cec643] rounded-lg flex items-center justify-center hover:bg-[#b8b43a] transition-colors duration-300"
                aria-label="E-mail"
              >
                <Mail className="text-[#6c6d71]" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#cec643]">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Terraplanagem
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Escavações
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Aterros
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Demolição
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Locação de Máquinas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#cec643]">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#cases" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#cec643] transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#cec643]">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="mailto:Contato@soloeng.com.br"
                  className="hover:text-[#cec643] transition-colors duration-300"
                >
                  Contato@soloeng.com.br
                </a>
              </li>
              <li>Goiânia - GO</li>
              <li>Seg - Sex: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Soloeng Engenharia de Solos LTDA. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#cec643] rounded-lg flex items-center justify-center hover:bg-[#b8b43a] transition-all duration-300 transform hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="text-[#6c6d71]" size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
