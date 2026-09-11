import { WhatsAppIcon } from './icons';

const IMG = 'https://fabbiturturismo.com.br';
const WA_PASSAGEM =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20consultar%20uma%20passagem.';

const servicos = [
  { href: '/comprar-passagem', label: 'Comprar passagem' },
  { href: '/rotas', label: 'Nossas rotas' },
  { href: '/encomendas', label: 'Encomendas' },
  { href: '/frota', label: 'Nossa frota' },
];
const empresa = [
  { href: '/sobre', label: 'Sobre a Fabbitur' },
  { href: '/contato', label: 'Contato' },
  { href: '/politica-de-privacidade', label: 'Política de privacidade' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-green-900)] text-white mt-20" role="contentinfo">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1: Marca */}
          <div className="lg:col-span-1">
            <a href="/" aria-label="Fabbitur Turismo – página inicial" className="inline-block mb-4">
              <span className="inline-flex items-center justify-center bg-white rounded-xl px-3 py-2">
                <picture>
                  <source type="image/webp" srcSet={`${IMG}/images/logo-fabbitur.webp`} />
                  <img
                    src={`${IMG}/images/logo-fabbitur.png`}
                    alt="Fabbitur Turismo"
                    width={120}
                    height={40}
                    className="h-9 w-auto object-contain"
                    loading="lazy"
                  />
                </picture>
              </span>
            </a>
            <p className="text-sm text-green-200 leading-relaxed mb-4">
              Transporte rodoviário interestadual com conforto, segurança, pontualidade e tradição desde 1989.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fabbiturimperatriz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram da Fabbitur"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-4">Serviços</h3>
            <ul className="flex flex-col gap-2" role="list">
              {servicos.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm text-green-100 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-4">Empresa</h3>
            <ul className="flex flex-col gap-2" role="list">
              {empresa.map((e) => (
                <li key={e.href}>
                  <a href={e.href} className="text-sm text-green-100 hover:text-white transition-colors">
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-4">Contato</h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={WA_PASSAGEM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-green-100 hover:text-white transition-colors"
                  aria-label="WhatsApp (99) 98474-1978"
                >
                  <WhatsAppIcon size={16} />
                  (99) 98474-1978
                </a>
              </li>
              <li>
                <a href="tel:+559984741978" className="flex items-center gap-2 text-sm text-green-100 hover:text-white transition-colors">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
                  </svg>
                  (99) 98474-1978
                </a>
              </li>
              <li>
                <a href="mailto:fabbitur.willy2022@gmail.com" className="flex items-center gap-2 text-sm text-green-100 hover:text-white transition-colors">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                  fabbitur.willy2022@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/maps/search/Fabbitur%20Turismo%20Imperatriz/@-5.53289825,-47.47185567,17z?hl=pt-BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-green-100 hover:text-white transition-colors"
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="flex-shrink-0 mt-0.5">
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 7 8 11.7z" />
                  </svg>
                  <span>
                    R. Paraíba, 1818
                    <br />
                    Bacuri, Imperatriz-MA
                  </span>
                </a>
              </li>
              <li className="text-sm text-green-200">
                <span className="block">Presencial: 08h às 18h</span>
                <span className="block">Online: 24 horas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-green-300">
            © 2026 Fabbitur Turismo. Todos os direitos reservados. CNPJ/Empresa registrada.
          </p>
          <a href="/politica-de-privacidade" className="text-xs text-green-300 hover:text-white transition-colors">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
