import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const productItems = [
  'Uniformes Escolares',
  'Uniformes Empresariais',
  'Jalecos e Scrubs',
  'Conjuntos Esportivos',
  'Camisetas Personalizadas',
  'Peças Operacionais',
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/malhariarolim/logo.jpeg"
              alt="Rolim Confecções e Bordados"
              className="h-14 w-auto object-contain rounded-lg mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-500">
              Mais de 30 anos confeccionando uniformes com qualidade, dedicação e o carinho de uma empresa familiar em
              Sorriso-MT.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/malhariarolim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-red flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.facebook.com/malhariarolim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-blue flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm hover:text-brand-gold transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Produtos</h4>
            <ul className="space-y-3">
              {productItems.map((item) => (
                <li key={item}>
                  <a href="#produtos" className="text-sm hover:text-brand-gold transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-sm">Rua das Videiras, 655, Centro — Sorriso-MT</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href="https://wa.me/5566992236989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-gold transition-colors"
                >
                  (66) 9 9223-6989
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Rolim Confecções e Bordados. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-700">Sorriso - Mato Grosso - Brasil</p>
        </div>
      </div>
    </footer>
  );
}
