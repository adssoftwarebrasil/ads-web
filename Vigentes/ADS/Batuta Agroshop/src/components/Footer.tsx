import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const produtos = [
  'Ferramentas Manuais',
  'Ferramentas Elétricas',
  'Ferragens e Fixação',
  'Materiais de Construção',
  'Cercamento Rural',
  'Produtos Agropecuários',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/logo-sem-fundo.webp"
              alt="Batuta Agroshop"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Sua loja completa de ferramentas, ferragens e materiais para construção e agro em Maringá – PR.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/batutaagroshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-brand/20 border border-white/10 hover:border-brand/30 flex items-center justify-center text-cream/70 hover:text-brand transition-all duration-200"
              >
                <Instagram width={18} height={18} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/batutaagroshop/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/8 hover:bg-brand/20 border border-white/10 hover:border-brand/30 flex items-center justify-center text-cream/70 hover:text-brand transition-all duration-200"
              >
                <Facebook width={18} height={18} className="lucide lucide-facebook " />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-cream font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-cream/60 hover:text-brand text-sm transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-cream font-bold text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="flex flex-col gap-2.5">
              {produtos.map((p) => (
                <li key={p}>
                  <a href="#produtos" className="text-cream/60 hover:text-brand text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-cream font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:4432252211"
                  className="flex items-start gap-3 text-cream/60 hover:text-brand transition-colors group"
                >
                  <Phone
                    width={16}
                    height={16}
                    className="lucide lucide-phone mt-0.5 text-brand/70 group-hover:text-brand shrink-0"
                  />
                  <span className="text-sm">(44) 3225-2211</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Av.+Brasil,+7351,+Zona+05,+Maringá+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream/60 hover:text-brand transition-colors group"
                >
                  <MapPin
                    width={16}
                    height={16}
                    className="lucide lucide-map-pin mt-0.5 text-brand/70 group-hover:text-brand shrink-0"
                  />
                  <span className="text-sm">Av. Brasil, 7351 - Zona 05, Maringá - PR, 87015-001</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">© 2026 Batuta Agroshop. Todos os direitos reservados.</p>
          <p className="text-cream/30 text-xs">Maringá – PR · CNPJ: informações disponíveis na loja</p>
        </div>
      </div>
    </footer>
  );
}
