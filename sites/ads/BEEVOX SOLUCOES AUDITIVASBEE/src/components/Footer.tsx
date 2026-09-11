import { Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/beevox%2Fimg%2Flogo-sem-fundo.webp"
              alt="BEEVOX Logo"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Referência em saúde auditiva em Cuiabá. Atendimento humanizado e soluções
              personalizadas para você.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/beevox.cuiaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(246,182,31)] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Aparelhos Auditivos</li>
              <li className="text-gray-400">Implante Auditivo</li>
              <li className="text-gray-400">Assistência Técnica</li>
              <li className="text-gray-400">Consultoria Auditiva</li>
              <li className="text-gray-400">Avaliação Gratuita</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(246,182,31)] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  R. Gago Coutinho, 350 - Araés
                  <br />
                  Cuiabá - MT, 78005-730
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(246,182,31)] flex-shrink-0" />
                <a
                  href="tel:6536248823"
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  (65) 3624-8823
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[rgb(246,182,31)] flex-shrink-0" />
                <a
                  href="http://wa.me/5565999818250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(246,182,31)] transition-colors"
                >
                  (65) 99981-8250
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} BEEVOX - Soluções Auditivas. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}