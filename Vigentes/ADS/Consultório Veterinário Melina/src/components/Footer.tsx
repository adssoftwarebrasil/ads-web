import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FLOGO-SEM-FUNDO.png"
              alt="Consultório Veterinário Melina"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-primary-light/80 mb-4 leading-relaxed">
              Cuidado veterinário especializado desde 2014
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-primary-light/80 hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-light/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-light/80 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-light/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-light/80">
              <li>Vacinação</li>
              <li>Emergência</li>
              <li>Raio-X</li>
              <li>Internação</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5561992486998"
                  className="text-primary-light/80 hover:text-primary transition-colors"
                >
                  (61) 99248-6998
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:consultvetmelina@gmail.com"
                  className="text-primary-light/80 hover:text-primary transition-colors break-all"
                >
                  consultvetmelina@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-primary-light/80">
                  Guará I - Brasília/DF
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-primary-light/80 text-sm">
                  <p>Seg-Qui: 09:00-18:00</p>
                  <p>Sex: 10:00-18:00</p>
                  <p>Sáb: 09:00-13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 pt-8">
          <p className="text-center text-primary-light/60">
            © 2025 Consultório Veterinário Melina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
