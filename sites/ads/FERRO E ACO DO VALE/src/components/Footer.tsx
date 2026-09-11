import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const productList = ['Metalons', 'Perfil Enrijecido', 'Tubos Redondos', 'Cantoneiras', 'Perfil U (Calha)'];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="10" width="20" height="2.5" rx="0.5"></rect>
                  <rect x="2" y="5" width="14" height="2.5" rx="0.5"></rect>
                  <rect x="2" y="15" width="17" height="2.5" rx="0.5"></rect>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-sm tracking-widest uppercase">Ferro e Aço</span>
                <span className="block text-brand-orange font-semibold text-xs tracking-wider uppercase">do Vale</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Materiais metálicos de alta qualidade para serralheria e construção civil em Goiânia, GO.
            </p>
            <a
              href="https://www.instagram.com/ferroeacodovale/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors duration-200 text-sm"
            >
              <Instagram className="lucide lucide-instagram w-4 h-4" />
              @ferroeacodovale
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="space-y-2.5">
              {productList.map((p) => (
                <li key={p}>
                  <span className="text-gray-400 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  R. 17 de Março, Q03 – L11A
                  <br />
                  St. Estrela Dalva
                  <br />
                  Goiânia – GO, 74475-130
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+556295226886" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
                  (62) 9 9522-6886
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Seg–Sex: 07:30 – 18:00
                  <br />
                  Sábado: 07:30 – 12:00
                  <br />
                  Domingo: Fechado
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2026 Ferro e Aço do Vale LTDA · CNPJ: 56.083.293/0001-72 · Todos os direitos reservados.
          </p>
          <a
            href="http://wa.me/556295226886"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-orange text-xs transition-colors"
          >
            Goiânia, Goiás
          </a>
        </div>
      </div>
    </footer>
  );
}
