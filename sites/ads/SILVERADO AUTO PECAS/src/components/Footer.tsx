import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/logotipo-autopecas-vermelho-sobre-fundo-preto_1080x1080.webp"
                alt="Silverado Auto Peças"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <p className="text-white font-bold text-base leading-tight">SILVERADO</p>
                <p className="text-brand-red text-xs font-medium tracking-widest uppercase">Auto Peças</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Há mais de 20 anos no mercado, a Silverado Auto Peças oferece peças usadas com procedência,
              rastreabilidade e responsabilidade ambiental. Economia e qualidade para o seu veículo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/silveradoautop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-red rounded-xl flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/silveradoautopecas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-xl flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Goiânia, 1088<br />Jardim América<br />Rondonópolis — MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="tel:+556634261853" className="text-gray-400 hover:text-white text-sm transition-colors">
                  (66) 3426-1853
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="lucide lucide-mail w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href="mailto:silveradoecopecas@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  silveradoecopecas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 Silverado Auto Peças. Todos os direitos reservados.</p>
          <p className="text-gray-600 text-xs">Av. Goiânia, 1088 — Rondonópolis/MT | CNPJ disponível na loja</p>
        </div>
      </div>
    </footer>
  );
}
