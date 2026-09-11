import { Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Localização', id: 'localizacao' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <footer style={{ backgroundColor: '#0a0d00' }}>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="text-3xl font-bold" style={{ color: '#fdf309' }}>
              RUAL PEÇAS
            </div>
            <p className="text-white opacity-80">
              37 anos de tradição em autopeças originais em Foz do Iguaçu
            </p>
            <a
              href="https://instagram.com/rualpecas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
            >
              <Instagram size={24} style={{ color: '#fdf309' }} />
              <span>@rualpecas</span>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#fdf309' }}>
              Navegação
            </h3>
            <nav className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white opacity-80 hover:opacity-100 transition-opacity text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#fdf309' }}>
              Fale Conosco
            </h3>
            <div className="space-y-2 text-white opacity-80">
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/5545984268490"
                  className="hover:opacity-100 transition-opacity"
                >
                  +55 45 98426-8490
                </a>
              </p>
              <p>
                <strong>E-mail:</strong>{' '}
                <a
                  href="mailto:brunocastagnaroxxx@gmail.com"
                  className="hover:opacity-100 transition-opacity"
                >
                  brunocastagnaroxxx@gmail.com
                </a>
              </p>
              <p>
                <strong>Endereço:</strong>
                <br />
                Av. José Maria de Brito, 1249
                <br />
                Foz do Iguaçu - PR
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-6 text-center"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      >
        <p className="text-white opacity-60">
          © 2025 Rual Peças. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
