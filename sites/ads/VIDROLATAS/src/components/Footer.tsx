import { MapPin, Phone, MessageCircle, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001f54] text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vidrolatas</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Especialistas em vidros automotivos desde 1992
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/VidrolatasParabrisas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0298d2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/vidrolatasparabrisas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0298d2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-[#0298d2] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-white/80 hover:text-[#0298d2] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/80 hover:text-[#0298d2] transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-white/80 hover:text-[#0298d2] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-white/80">
              <li>Troca de Para-brisas</li>
              <li>Vidros de Porta</li>
              <li>Reparo de Trincas</li>
              <li>Insulfilm</li>
              <li>Acessórios</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-[#0298d2] flex-shrink-0" size={20} />
                <span className="text-white/80 text-sm leading-relaxed">
                  Av. Pedro Ludovico, 2.127<br />
                  Vila Canaã, Goiânia - GO<br />
                  CEP: 74.415-500
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#0298d2] flex-shrink-0" size={20} />
                <a
                  href="tel:+556235585151"
                  className="text-white/80 hover:text-[#0298d2] transition-colors text-sm"
                >
                  (62) 3558-5151
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="text-[#0298d2] flex-shrink-0" size={20} />
                <a
                  href="https://wa.me/5562998899975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#0298d2] transition-colors text-sm"
                >
                  (62) 9 9889-9975
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black/30 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-white/60 text-sm">
            © 2025 Vidrolatas Para-brisas e Acessórios - CNPJ: 10.776.648/0001-08 | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
