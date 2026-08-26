import { Instagram, ArrowUp } from 'lucide-react';
import { WHATSAPP_URL, WhatsAppIcon, FacebookIcon } from './icons';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/giralflex%2Fimg%2Flogo-sem-fundo.webp';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceItems = [
  'Cadeiras Giratórias',
  'Mesas de Escritório',
  'Reformas',
  'Peças de Reposição',
  'Assistência Técnica',
  'Montagem',
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-max section-padding py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO} alt="Giralflex" className="h-12 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Referência em móveis de escritório em Manaus desde 2000. Qualidade, conforto e preço justo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/giralflex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/giralflex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Links Rápidos</h4>
            <nav className="space-y-2.5">
              {quickLinks.map((l) => (
                <a key={l.href} href={l.href} className="block text-sm text-white/50 hover:text-brand-yellow transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Serviços</h4>
            <nav className="space-y-2.5">
              {serviceItems.map((s) => (
                <span key={s} className="block text-sm text-white/50">{s}</span>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Contato</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>Av. Carvalho Leal, 1539 - Cachoeirinha, Manaus - AM, 69070-000</p>
              <p>(92) 98111-5255</p>
              <p>(92) 3611-1153</p>
              <a href="mailto:vendas@giralflex.com.br" className="block hover:text-brand-yellow transition-colors">
                vendas@giralflex.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-max section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © 2026 Giralflex. CNPJ: 04.050.551/0001-10. Todos os direitos reservados.
          </p>
          <button
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Voltar ao topo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp width={16} height={16} className="lucide lucide-arrow-up " />
          </button>
        </div>
      </div>
    </footer>
  );
}
