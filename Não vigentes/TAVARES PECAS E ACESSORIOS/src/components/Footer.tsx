import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const productLinks = [
  'Filtros (Óleo, Ar, Combustível)',
  'Óleo Lubrificante e Aditivos',
  'Pastilhas e Discos de Freio',
  'Kit de Suspensão',
  'Velas e Cabos de Ignição',
  'Correia e Kit Correias',
  'Baterias e Lâmpadas',
  'Radiadores e Embreagens',
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tavares%20autopecas/img/alteracoes/logoBranca.png"
              alt="Tavares Auto Peças"
              className="h-14 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Desde 1993, a referência em peças automotivas de Ribeirão Preto. Qualidade, confiança e atendimento
              especializado para você e seu veículo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/tavaresautopecasrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/tavaresautopecasrp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-navy rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="http://wa.me/551633236646"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-125 transition-transform flex-shrink-0"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="flex flex-col gap-2">
              {productLinks.map((p) => (
                <li key={p} className="text-white/60 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+551633236646"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Phone
                    size={16}
                    className="flex-shrink-0 mt-0.5 group-hover:text-brand-red transition-colors"
                  />
                  <span className="text-sm">(16) 3323-6646</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:vendas@tavaresautopecas.com.br"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <Mail
                    size={16}
                    className="flex-shrink-0 mt-0.5 group-hover:text-brand-red transition-colors"
                  />
                  <span className="text-sm break-all">vendas@tavaresautopecas.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Av. Cel. Quito Junqueira, 547
                  <br />
                  Campos Elísios – Ribeirão Preto/SP
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Tavares Auto Peças. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center">CNPJ: Ribeirão Preto – SP · Desde 1993</p>
        </div>
      </div>
    </footer>
  );
}
