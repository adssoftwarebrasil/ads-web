import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-purple-dark text-ice">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/coopermedicafoz%2Flogomarca-sem-fundo-removebg-preview.png"
              alt="Coopermédica"
              className="h-16 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed">
              Atendimento médico de excelência há mais de 50 anos em Foz do Iguaçu
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-ice/80 hover:text-white transition-colors text-sm">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-ice/80 hover:text-white transition-colors text-sm">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-ice/80 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-ice/80 hover:text-white transition-colors text-sm">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-ice/80">Locação de Ambulâncias</li>
              <li className="text-ice/80">Atendimento Domiciliar</li>
              <li className="text-ice/80">Medicina do Trabalho</li>
              <li className="text-ice/80">Emergências</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span className="text-ice/80">
                  Rua Xavier da Silva, 423<br />
                  Foz do Iguaçu - PR
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="flex-shrink-0" size={16} />
                <a href="tel:+5545988038430" className="text-ice/80 hover:text-white transition-colors">
                  (45) 98803-8430
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="flex-shrink-0" size={16} />
                <a href="mailto:coopermedica423@gmail.com" className="text-ice/80 hover:text-white transition-colors">
                  coopermedica423@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="flex-shrink-0 mt-1" size={16} />
                <span className="text-ice/80">Atendimento 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://instagram.com/coopermedicafoz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/coopermedica"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <Facebook size={20} />
            </a>
          </div>

          <p className="text-sm text-ice/70 text-center">
            © 2026 Coopermédica - José Caires de Souza. CNPJ 76.889.203/0001-42. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
