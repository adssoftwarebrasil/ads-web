import { Facebook, Youtube } from 'lucide-react';

const menuItems = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'about' },
  { label: 'Serviços', target: 'process' },
  { label: 'Galeria', target: 'testimonials' },
  { label: 'Parceiros', target: 'partners' },
  { label: 'Contato', target: 'contact' },
];

const services = ['Produção', 'Logística', 'Beneficiamento'];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(29,29,27)] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/agroplantec%2Flogo.svg"
              alt="Agro Plantec"
              className="h-14 mb-6 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Com anos de dedicação ao setor agrícola, a AGROPG se estabeleceu como líder na oferta de
              equipamentos e peças de reposição de alta qualidade. Nosso compromisso é com a inovação e a
              satisfação do cliente, oferecendo soluções eficazes para maximizar a produção agrícola.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('process')}
                    className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors text-sm"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2835465127"
                  className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors text-sm"
                >
                  (28) 3546 5127
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5528354651127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors text-sm"
                >
                  (28) 3546 5127
                </a>
              </li>
              <li>
                <a
                  href="mailto:atendimento@agroplantec.com.br"
                  className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors text-sm"
                >
                  atendimento@agroplantec.com.br
                </a>
              </li>
              <li>
                <p className="text-white/70 text-sm">
                  Av. Nelson Mieis, s/nº Alto Caxixe, Venda Nova do Imigrante, ES 29375-000
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-12">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors"
            >
              <Facebook className="lucide lucide-facebook w-10 h-10" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[rgb(138,154,39)] transition-colors"
            >
              <Youtube className="lucide lucide-youtube w-10 h-10" />
            </a>
          </div>
          <p className="text-white/50 text-sm text-center">
            Copyright © 2025 Agro Plantec - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
