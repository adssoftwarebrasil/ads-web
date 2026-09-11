import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from './icons';

const services = [
  { href: '/servicos/especialistas-google', name: 'Especialistas Google', desc: 'Google Ads e Google Meu Negócio com gestão de elite.' },
  { href: '/servicos/especialistas-meta', name: 'Especialistas Meta', desc: 'Campanhas no Facebook e Instagram orientadas a receita.' },
  { href: '/servicos/gestao-de-redes-sociais', name: 'Gestão de Redes Sociais', desc: 'Conteúdo, comunidade e identidade nas redes da sua marca.' },
  { href: '/servicos/consultoria-de-marketing', name: 'Consultoria de Marketing', desc: 'Diagnóstico, posicionamento e plano com método.' },
  { href: '/servicos/identidade-visual-e-branding', name: 'Identidade Visual & Branding', desc: 'Criação e recriação de marca, do logo ao manual.' },
  { href: '/servicos/software-sob-medida', name: 'Software sob medida', desc: 'Sistemas e aplicativos construídos para a sua operação.' },
  { href: '/servicos/sites-e-plataformas', name: 'Sites & Plataformas', desc: 'Plataformas web de alto desempenho e identidade própria.' },
  { href: '/servicos/acompanhamento-de-obras-com-drones', name: 'Acompanhamento por Drones', desc: 'Voos de drone para acompanhar obras em todo o Brasil.' },
];

const products = [
  { href: '/produtos/vealapse', name: 'Vealapse', desc: 'Acompanhamento de obras com timelapse.' },
  { href: '/produtos/sentinela', name: 'Sentinela', desc: 'Portaria completa para canteiros de obra.' },
  { href: '/produtos/construpro', name: 'ConstruPRO', desc: 'Gestão de obras de ponta a ponta (ERP).' },
];

function DropdownItem({ href, name, desc }: { href: string; name: string; desc: string }) {
  return (
    <a
      href={href}
      className="group/item flex items-start gap-3 rounded-md px-3 py-3 transition-colors duration-200 hover:bg-ivory"
    >
      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime transition-transform duration-200 group-hover/item:scale-150" />
      <span className="min-w-0">
        <span className="block font-medium text-ink">{name}</span>
        <span className="mt-0.5 block text-sm leading-snug text-stone">{desc}</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', menuOpen);
  }, [menuOpen]);

  return (
    <header
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50${scrolled ? ' is-scrolled' : ''}`}
    >
      <div className="container-page">
        <div className="flex h-[var(--header-h)] items-center justify-between gap-6">
          <a
            href="/"
            aria-label="Veacci — página inicial"
            className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <img
              src="/brand/veacci-logo.png"
              width="136"
              height="28"
              alt="Veacci"
              decoding="async"
              className="block w-auto"
              style={{ height: '28px' }}
            />
          </a>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            <div className="group/nav relative">
              <a href="/servicos" className="nav-link inline-flex items-center gap-1">
                Serviços
                <ChevronDown className="size-3.5 opacity-60 transition-transform duration-300 group-hover/nav:rotate-180" />
              </a>
              <div className="invisible absolute left-0 top-full translate-y-1 pt-3 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                <div className="w-[40rem] rounded-lg border border-line bg-paper p-2.5 shadow-pop">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <DropdownItem key={s.href} {...s} />
                    ))}
                  </div>
                  <a
                    href="/servicos"
                    className="mt-1 flex items-center justify-between rounded-md border-t border-line px-3 py-3 text-sm font-medium text-moss hover:bg-ivory"
                  >
                    Ver tudo
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group/nav relative">
              <a href="/produtos" className="nav-link inline-flex items-center gap-1">
                Produtos
                <ChevronDown className="size-3.5 opacity-60 transition-transform duration-300 group-hover/nav:rotate-180" />
              </a>
              <div className="invisible absolute left-0 top-full translate-y-1 pt-3 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                <div className="w-[21rem] rounded-lg border border-line bg-paper p-2.5 shadow-pop">
                  <div className="grid gap-1">
                    {products.map((p) => (
                      <DropdownItem key={p.href} {...p} />
                    ))}
                  </div>
                  <a
                    href="/produtos"
                    className="mt-1 flex items-center justify-between rounded-md border-t border-line px-3 py-3 text-sm font-medium text-moss hover:bg-ivory"
                  >
                    Ver tudo
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <a href="/cases" className="nav-link">Cases</a>
            <a href="/sobre" className="nav-link">Sobre</a>
            <a href="/impacto-social" className="nav-link">Impacto Social</a>
            <a href="/blog" className="nav-link">Blog</a>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex">
              <a
                className="group/btn inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
                href="/contato"
              >
                Fale com a gente
                <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
              </a>
            </span>

            {/* Toggle mobile */}
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-ink/[0.06] lg:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className={`size-6${menuOpen ? ' hidden' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7h17M3.5 12h17M3.5 17h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <svg className={`size-6${menuOpen ? '' : ' hidden'}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="site-menu"
        className={`max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain bg-paper lg:hidden${menuOpen ? '' : ' hidden'}`}
      >
        <div className="container-page border-t border-line pb-8 pt-2">
          <nav aria-label="Navegação móvel" className="flex flex-col" onClick={() => setMenuOpen(false)}>
            <a href="/servicos" className="mobile-link">Serviços</a>
            {services.map((s) => (
              <a key={s.href} href={s.href} className="mobile-sublink">{s.name}</a>
            ))}
            <a href="/produtos" className="mobile-link">Produtos</a>
            {products.map((p) => (
              <a key={p.href} href={p.href} className="mobile-sublink">{p.name}</a>
            ))}
            <a href="/cases" className="mobile-link">Cases</a>
            <a href="/sobre" className="mobile-link">Sobre</a>
            <a href="/impacto-social" className="mobile-link">Impacto Social</a>
            <a href="/blog" className="mobile-link">Blog</a>
            <a
              className="group/btn mt-4 inline-flex w-full select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-ink px-7 py-3.5 text-base font-medium text-paper transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
              href="/contato"
            >
              Fale com a gente
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
