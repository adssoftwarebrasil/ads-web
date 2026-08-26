import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/logo-sem-fundo.webp"
              alt="A Priori Café"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-5">
              O ponto de partida para suas ideias. Cafés especiais, doces artesanais e ambiente
              aconchegante no Centro de Campinas.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/aprioricafecps/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-burgundy hover:text-white transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/Aprioricafecps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-burgundy hover:text-white transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre Nós', href: '#sobre' },
                { label: 'Cardápio', href: '#cardapio' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Contato', href: '#contato' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-sans text-sm text-gray-400 hover:text-cream transition-colors duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Nossos Produtos</h4>
            <ul className="space-y-3">
              {[
                'Cafés Especiais',
                'Bebidas Geladas',
                'Pão de Queijo & Salgados',
                'Quiches & Tortas',
                'Croissants Franceses',
                'Doces & Bolos',
                'Cestas & Presentes',
              ].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Informações</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-burgundy-muted mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400 leading-relaxed">
                  Rua Barão de Jaguara, 915<br />
                  Centro · Campinas · SP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-burgundy-muted mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-gray-400">
                  Seg–Sex: 07:30–19:00h<br />
                  Sáb: 08:00–16:00h · Dom: Fechado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-burgundy-muted mt-0.5 flex-shrink-0" />
                <a
                  href="http://wa.me/5519996561976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-gray-400 hover:text-cream transition-colors duration-200"
                >
                  (19) 9 9656-1976
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} A Priori, Café! — Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-gray-600 text-center">
            Rua Barão de Jaguara, 915 · Centro · Campinas · SP
          </p>
        </div>
      </div>
    </footer>
  );
}
