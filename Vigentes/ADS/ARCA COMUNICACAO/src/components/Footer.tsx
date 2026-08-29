import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(11,9,48)] text-[rgb(254,254,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Fimg%2Flogo-sem-fundo.webp"
              alt="Arca Comunicação"
              className="h-16 w-auto mb-4"
            />
            <p className="text-[rgb(212,212,212)] leading-relaxed mb-4">
              Elevando marcas, construindo legados visuais!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/arcacomunicacaoestruturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[rgb(255,204,44)]/10 rounded-lg hover:bg-[rgb(255,204,44)] hover:text-[rgb(11,9,48)] transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/p/arcacomunicacaoestrururas-100067298603157/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[rgb(255,204,44)]/10 rounded-lg hover:bg-[rgb(255,204,44)] hover:text-[rgb(11,9,48)] transition-all duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[rgb(255,204,44)] mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[rgb(255,204,44)] mb-4">Serviços</h3>
            <ul className="space-y-2 text-[rgb(212,212,212)]">
              <li>Fachadas em ACM</li>
              <li>Letreiros Luminosos</li>
              <li>Totens</li>
              <li>Sinalização</li>
              <li>Personalização de Frotas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[rgb(255,204,44)] mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="flex-shrink-0 mr-3 mt-1 text-[rgb(255,204,44)]" size={20} />
                <a href="tel:+553491008921" className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors">
                  (34) 99100-8921
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="flex-shrink-0 mr-3 mt-1 text-[rgb(255,204,44)]" size={20} />
                <a href="mailto:arca.contatocomercial@gmail.com" className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors break-all">
                  arca.contatocomercial@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 mr-3 mt-1 text-[rgb(255,204,44)]" size={20} />
                <span className="text-[rgb(212,212,212)]">
                  R. Ouro Preto, 755 - Santo Antônio<br />
                  Patos de Minas - MG
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgb(255,204,44)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[rgb(212,212,212)] text-sm text-center md:text-left">
              {currentYear} Arca Comunicação e Estruturas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-[rgb(212,212,212)] hover:text-[rgb(255,204,44)] transition-colors">
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
