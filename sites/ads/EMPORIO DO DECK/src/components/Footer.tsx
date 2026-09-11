import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Sobre Nós', id: 'sobre' },
    { name: 'Galeria', id: 'galeria' },
    { name: 'Contato', id: 'contato' },
  ];

  const productLinks = [
    'Decks de Madeira',
    'Forros e Lambris',
    'Portas e Janelas',
    'Madeiras para Pergolado',
    'Acabamentos',
  ];

  return (
    <footer className="bg-darkBrown text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M30 0l30 30-30 30L0 30z" fill="%23ffffff"/%3E%3C/svg%3E")',
      }} />

      <div className="border-t-4 border-accent" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2FLogomarca.png"
              alt="Empório do Deck"
              className="h-16 mb-4 brightness-0 invert"
              style={{ maxWidth: '180px' }}
            />
            <p className="text-gray-300 mb-4">Madeiras nobres para seu projeto desde 2023</p>
            <p className="text-sm text-gray-400 mb-4">União familiar, qualidade garantida e entrega ágil.</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/emporio_deck_"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com/emporiododeck"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Produtos</h3>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => scrollToSection('produtos')}
                    className="footer-link"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Fale Conosco</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5562991093647"
                className="flex items-center space-x-2 text-whatsapp hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>(62) 99109-3647</span>
              </a>
              <a
                href="mailto:emporiododeck@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">emporiododeck@gmail.com</span>
              </a>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">Horários:</p>
                <p className="text-sm text-gray-300">Seg-Sex: 7:40-17:40</p>
                <p className="text-sm text-gray-300">Sáb: 8:00-12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Empório do Deck. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400">
            Desenvolvido com excelência
          </p>
        </div>
      </div>
    </footer>
  );
}
