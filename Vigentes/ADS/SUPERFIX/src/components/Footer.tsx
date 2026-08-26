import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/supersfix%2FLogoSemFundo.png"
              alt="SUPERFIX Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mais de 10 anos distribuindo soluções em fixação e ferramentas profissionais
              em todo Mato Grosso.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/supersfixmatogrosso/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/superfixmt/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p>(66) 3515-0909</p>
                  <p>(66) 99902-9696</p>
                  <p>(66) 3531-1818</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <a
                  href="mailto:gledson@superfixmt.com.br"
                  className="hover:text-white transition-colors"
                >
                  gledson@superfixmt.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Localização</h3>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin size={16} className="flex-shrink-0 mt-1" />
              <div>
                <p>Avenida dos Jacarandás, 640</p>
                <p>Jardim Jacarandás</p>
                <p>Sinop-MT, 78557-727</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10">
              <p className="text-sm font-medium mb-2">Horário de Atendimento</p>
              <p className="text-xs text-gray-400">Seg a Sex: 7h30 - 18h</p>
              <p className="text-xs text-gray-400">Sábado: 7h30 - 12h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} SUPERFIX. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Desenvolvido com <Heart size={14} className="text-red-500" fill="currentColor" /> em Mato Grosso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
