import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#172059] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <div className="bg-white rounded-lg px-3 py-2 inline-block mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/3G%2FLogo3G-removebg-preview.png"
                alt="3G Celulares e Informática"
                className="h-[40px] object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sua referência em tecnologia móvel desde 2005
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('produtos')}
                className="block text-gray-300 hover:text-[#81c227] transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="block text-gray-300 hover:text-[#81c227] transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block text-gray-300 hover:text-[#81c227] transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-gray-300 hover:text-[#81c227] transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              
                <a href="https://wa.me/5549999504348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#81c227] transition-colors"
              >
                <Phone size={18} />
                (49) 99950-4348
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>
                  Rua Mal. Bormann, 154 D - Sala 2<br />
                  Centro, Chapecó - SC
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                
                  <a href="https://www.facebook.com/3gcelularescco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#00adec] rounded-full flex items-center justify-center hover:bg-[#0095cd] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                
                  <a href="https://www.instagram.com/3gcelulareschapeco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-gray-300">
          <p>&copy; 2025 3G Celulares e Informática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}