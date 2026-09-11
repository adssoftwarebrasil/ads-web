import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#010510] text-white border-t border-[#00a6ff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/showluz%2FLogomarcaShowLuz.png"
              alt="Show Luz Goiânia"
              className="h-14 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Há 30 anos iluminando Goiás com qualidade e excelência. Especialistas em lâmpadas para hospitais, odontologia e LED.
            </p>
            <div className="flex items-start gap-3 mt-4">
              <Clock className="w-5 h-5 text-[#fff457] flex-shrink-0 mt-1" />
              <div className="text-gray-400 text-sm">
                <p>Segunda à Sexta: 07:45 às 17:40</p>
                <p>Sábado: 07:45 às 12:00</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[#fff457] transition-colors hover:underline"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="text-gray-400 hover:text-[#fff457] transition-colors hover:underline"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[#fff457] transition-colors hover:underline"
                >
                  Contato
                </button>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/showluzgoiania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#fff457] transition-colors hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato Atualizado */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#fff457] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Rua 4, nº 116<br />
                  Setor Central, Goiânia - GO
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#fff457] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  (62) 3212-4134<br />
                  (62) 3225-9597<br />
                  (62) 99395-0049 (WhatsApp)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#fff457] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  showluzgyn@hotmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00a6ff]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Show Luz Goiânia. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Desenvolvido com dedicação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}