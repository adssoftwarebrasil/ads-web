import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/content';
import WhatsAppLink from './ui/WhatsAppLink';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let queued = false;
    const render = () => {
      queued = false;
      setScrolled(window.scrollY > 22);
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(render);
    };
    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-3 top-3 z-[100] -translate-y-[160%] rounded-xl bg-white px-4 py-[.65rem] text-sm font-bold text-navy focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <header
        id="topo"
        className={`fixed left-1/2 top-4 z-30 grid w-[min(1420px,calc(100%-48px))] -translate-x-1/2 grid-cols-[92px_minmax(0,1fr)_auto] items-center gap-[clamp(.9rem,1.55vw,1.5rem)] rounded-[20px] border p-[7px_10px_7px_8px] shadow-[0_12px_36px_rgba(0,0,0,.14)] backdrop-blur-lg transition-colors duration-300 max-md:top-[10px] max-md:w-[calc(100%-20px)] max-md:grid-cols-[64px_minmax(0,1fr)_44px] max-md:gap-[.45rem] max-md:rounded-[18px] max-md:p-[7px] lg:grid-cols-[92px_minmax(0,1fr)_auto] ${
          scrolled
            ? 'border-[rgba(7,27,50,.11)] bg-white/95 shadow-[0_14px_32px_rgba(7,27,50,.14)]'
            : 'border-cyan-soft/15 bg-[rgba(5,22,40,.82)]'
        }`}
      >
        <a
          href="#inicio"
          aria-label="Rezende Odontologia — início"
          className="flex h-[52px] w-[88px] items-center justify-center overflow-hidden rounded-[13px] bg-white shadow-[inset_0_0_0_1px_rgba(7,27,50,.05)] max-md:h-[50px] max-md:w-[62px]"
        >
          <img
            src="/media/logo-rezende-odontologia.webp"
            width={208}
            height={132}
            alt="Logomarca Rezende Odontologia"
            className="h-[52px] w-[82px] object-contain max-md:h-[46px] max-md:w-[58px]"
          />
        </a>

        <nav aria-label="Navegação principal" className="flex items-center justify-center gap-[clamp(.82rem,1.55vw,1.7rem)] max-[900px]:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-[clamp(.78rem,.88vw,.9rem)] font-semibold transition-colors hover:!text-cyan-brand ${
                scrolled ? 'text-ink' : 'text-white/95'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink
          section="header"
          position="primary"
          className="btn btn-cyan min-h-[50px] px-[1.08rem] text-[.8rem] max-md:min-h-[42px] max-md:justify-self-center max-md:px-[.72rem] max-md:text-[.67rem]"
        >
          Agendar avaliação
          <ArrowUpRight size={16} aria-hidden="true" />
        </WhatsAppLink>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className={`col-start-3 hidden h-11 w-11 place-content-center rounded-xl max-[900px]:grid ${
            scrolled ? 'bg-[rgba(7,27,50,.07)] text-navy' : 'bg-white/10 text-white'
          }`}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-[10px] top-[84px] z-[29] grid grid-cols-2 gap-1 rounded-card border border-cyan-soft/15 bg-[rgba(7,27,50,.98)] p-3 shadow-[0_18px_42px_rgba(0,0,0,.25)] min-[901px]:hidden max-md:top-[84px] min-[761px]:inset-x-6 min-[761px]:top-[88px]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-[.65rem] py-[.4rem] text-[.82rem] font-bold text-white hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppLink
            section="menu"
            position="primary"
            onClick={() => setMenuOpen(false)}
            className="btn btn-cyan col-span-2 mt-[.35rem]"
          >
            Agendar avaliação
            <ArrowUpRight size={16} aria-hidden="true" />
          </WhatsAppLink>
        </div>
      )}
    </>
  );
}
