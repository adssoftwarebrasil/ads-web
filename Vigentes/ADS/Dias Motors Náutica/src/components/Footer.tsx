import { Instagram as InstagramIcon, MessageCircle } from 'lucide-react';

const MENU_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(30,43,75)] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=diasmotors%2Fdias_motors.jpg&version_id=null"
              alt="Dias Motors Náutica"
              className="h-12 sm:h-16 w-auto mb-4"
            />
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Sua referência em náutica em Goiânia. Embarcações, motores Yamaha e
              jet-ski.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Menu</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-[rgb(19,161,209)] transition-colors text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Siga-nos
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/diasmotorsnautica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(19,161,209)] hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon
                  className="lucide lucide-instagram sm:w-6 sm:h-6"
                  size={20}
                />
              </a>
              <a
                href="https://wa.me/5562982830047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[rgb(19,161,209)] hover:scale-110 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle
                  className="lucide lucide-message-circle sm:w-6 sm:h-6"
                  size={20}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Dias Motors Náutica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
