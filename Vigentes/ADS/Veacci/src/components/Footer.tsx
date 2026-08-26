import { WhatsAppGlyph, MailGlyph, InstagramGlyph } from './icons';

const WHATSAPP_HREF =
  'https://wa.me/5531000000000?text=Ol%C3%A1%2C%20Veacci.%20Quero%20conversar%20sobre%20um%20projeto%20para%20a%20minha%20empresa.';

const columns = [
  {
    label: 'Serviços',
    links: [
      { href: '/servicos/especialistas-google', text: 'Especialistas Google' },
      { href: '/servicos/especialistas-meta', text: 'Especialistas Meta' },
      { href: '/servicos/gestao-de-redes-sociais', text: 'Gestão de Redes Sociais' },
      { href: '/servicos/consultoria-de-marketing', text: 'Consultoria de Marketing' },
      { href: '/servicos/identidade-visual-e-branding', text: 'Identidade Visual & Branding' },
      { href: '/servicos/software-sob-medida', text: 'Software sob medida' },
      { href: '/servicos/sites-e-plataformas', text: 'Sites & Plataformas' },
      { href: '/servicos/acompanhamento-de-obras-com-drones', text: 'Drones para obras' },
    ],
  },
  {
    label: 'Produtos',
    links: [
      { href: '/produtos/vealapse', text: 'Vealapse' },
      { href: '/produtos/sentinela', text: 'Sentinela' },
      { href: '/produtos/construpro', text: 'ConstruPRO' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { href: '/sobre', text: 'Sobre a Veacci' },
      { href: '/cases', text: 'Cases & Resultados' },
      { href: '/impacto-social', text: 'Impacto Social' },
      { href: '/blog', text: 'Blog' },
      { href: '/contato', text: 'Contato' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { href: '/privacidade', text: 'Política de Privacidade' },
      { href: '/termos', text: 'Termos de Uso' },
      { href: '/cookies', text: 'Política de Cookies' },
    ],
  },
];

export default function Footer() {
  const openPrefs = () => window.dispatchEvent(new Event('veacci:open-preferences'));

  return (
    <footer className="bg-night text-ivory">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.6fr]">
          {/* Marca */}
          <div className="max-w-sm">
            <a
              href="/"
              aria-label="Veacci — página inicial"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src="/brand/veacci-logo-light.png"
                width="146"
                height="30"
                alt="Veacci"
                decoding="async"
                className="block w-auto"
                style={{ height: '30px' }}
              />
            </a>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-ivory/65">
              Performance e software para empresas que já são líderes. Especialistas Google e Meta, desenvolvimento sob medida e plataformas web de alto padrão.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-ivory/45">
              <span className="inline-block size-1.5 rounded-full bg-lime" />
              A partir de Belo Horizonte · Minas Gerais
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.label} aria-label={col.label}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ivory/55">{col.label}</h2>
                <ul className="mt-3 space-y-0.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="block py-1.5 text-[0.95rem] text-ivory/70 transition-colors duration-200 hover:text-lime"
                      >
                        {l.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Contato */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-night-line pt-8">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors hover:text-lime"
          >
            <WhatsAppGlyph className="size-4" />
            WhatsApp
          </a>
          <a
            href="mailto:contato@veacci.com.br"
            className="inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors hover:text-lime"
          >
            <MailGlyph className="size-4" />
            contato@veacci.com.br
          </a>
          <a
            href="https://instagram.com/veacci_br"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors hover:text-lime"
          >
            <InstagramGlyph className="size-4" />
            @veacci_br
          </a>
        </div>

        {/* Base legal */}
        <div className="mt-8 flex flex-col gap-3 border-t border-night-line pt-8 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p>© 2026 VEACCI SERVIÇOS DE TI LTDA · CNPJ 43.563.547/0001-08</p>
            <button
              type="button"
              id="footer-cookie-prefs"
              onClick={openPrefs}
              className="text-left underline-offset-2 transition-colors hover:text-lime hover:underline"
            >
              Preferências de cookies
            </button>
          </div>
          <p className="flex items-center gap-1.5">
            Construído com método
            <span aria-hidden="true" className="text-lime/70">∴</span>
            em Belo Horizonte
          </p>
        </div>
      </div>
    </footer>
  );
}
