import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const links = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'reviews' },
  { label: 'Contato', id: 'contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-[rgb(1,0,104)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="https://storage.lucasmendes.dev/site-sp/central%20ferragens/img/logo-sem-fundo.png" alt="Central Ferragens" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 leading-relaxed">Referência em ferro e aço desde 1991. Fornecendo qualidade para Unaí e região.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-gray-300 hover:text-yellow-400 transition-colors">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone width={18} height={18} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:3836762159" className="text-gray-300 hover:text-yellow-400 transition-colors block">(38) 3676-2159</a>
                  <a href="https://wa.me/553899492159" className="text-gray-300 hover:text-yellow-400 transition-colors block">(38) 9 9949-2159</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin width={18} height={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Gov. Valadares, 1964<br />Unaí - MG</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/centralferragensunai" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-yellow-400 hover:text-[rgb(1,0,104)] transition-all" aria-label="Instagram">
                <Instagram width={24} height={24} />
              </a>
              <a href="https://www.facebook.com/central.ferragens/" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-yellow-400 hover:text-[rgb(1,0,104)] transition-all" aria-label="Facebook">
                <Facebook width={24} height={24} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">Siga-nos nas redes sociais e fique por dentro das novidades!</p>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="text-center text-gray-300 text-sm">
            <p>© 2026 Central Ferragens. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com qualidade e dedicação</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
