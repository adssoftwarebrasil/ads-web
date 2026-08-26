import { Instagram, Facebook } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg%2Flogo.webp';
const WHATSAPP = 'http://wa.me/556696681932';
const INSTAGRAM = 'https://www.instagram.com/sensuallizymodaintima/';
const FACEBOOK = 'https://www.facebook.com/p/Sensuallizy-Moda-%C3%8Dntima-100029115622961/';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src={LOGO}
              alt="Sensuallizy Moda Íntima"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-[#212423] hover:text-[#E24244] transition-colors font-medium">Sobre</a>
            <a href="#produtos" className="text-[#212423] hover:text-[#E24244] transition-colors font-medium">Produtos</a>
            <a href="#avaliacoes" className="text-[#212423] hover:text-[#E24244] transition-colors font-medium">Avaliações</a>
            <a href="#contato" className="text-[#212423] hover:text-[#E24244] transition-colors font-medium">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#E24244] hover:text-white transition-all duration-300 text-[#212423]"
              aria-label="Instagram"
            >
              <Instagram className="lucide lucide-instagram w-5 h-5" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#E24244] hover:text-white transition-all duration-300 text-[#212423]"
              aria-label="Facebook"
            >
              <Facebook className="lucide lucide-facebook w-5 h-5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#E24244] text-white px-6 py-2.5 rounded-full hover:bg-[#d13d3f] transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
