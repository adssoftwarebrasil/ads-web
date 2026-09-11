import { useEffect, useState } from 'react';

const KEY = 'veacci-consent';

type Cats = { analytics: boolean; functionality: boolean; marketing: boolean };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(cats: Cats) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: cats.analytics ? 'granted' : 'denied',
      ad_storage: cats.marketing ? 'granted' : 'denied',
      ad_user_data: cats.marketing ? 'granted' : 'denied',
      ad_personalization: cats.marketing ? 'granted' : 'denied',
      functionality_storage: cats.functionality ? 'granted' : 'denied',
    });
  }
  window.dispatchEvent(new CustomEvent('veacci:consent', { detail: cats }));
}

function persist(cats: Cats) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: 1, ts: new Date().toISOString(), categories: cats }));
  } catch {
    /* noop */
  }
  applyConsent(cats);
}

const ALL: Cats = { analytics: true, functionality: true, marketing: true };
const NONE: Cats = { analytics: false, functionality: false, marketing: false };

export default function CookieBanner() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [cats, setCats] = useState<Cats>(NONE);

  useEffect(() => {
    let saved: { categories?: Cats } | null = null;
    try {
      saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    } catch {
      saved = null;
    }
    if (saved?.categories) {
      setCats(saved.categories);
    } else {
      const t = window.setTimeout(() => setBannerVisible(true), 1000);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const openPrefs = () => {
      let saved: { categories?: Cats } | null = null;
      try {
        saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      } catch {
        saved = null;
      }
      if (saved?.categories) setCats(saved.categories);
      setBannerVisible(false);
      setPrefsOpen(true);
    };
    window.addEventListener('veacci:open-preferences', openPrefs);
    return () => window.removeEventListener('veacci:open-preferences', openPrefs);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', prefsOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPrefsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prefsOpen]);

  const accept = () => {
    persist(ALL);
    setPrefsOpen(false);
    setBannerVisible(false);
  };
  const reject = () => {
    persist(NONE);
    setPrefsOpen(false);
    setBannerVisible(false);
  };
  const save = () => {
    persist(cats);
    setPrefsOpen(false);
    setBannerVisible(false);
  };
  const configure = () => {
    setBannerVisible(false);
    setPrefsOpen(true);
  };

  return (
    <>
      {/* BANNER */}
      <div
        id="cookie-banner"
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          bannerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        role="region"
        aria-label="Aviso de cookies"
        hidden={!bannerVisible}
      >
        <div className="container-page pb-4">
          <div className="pointer-events-auto mx-auto flex max-w-4xl flex-col gap-5 rounded-lg border border-line bg-paper p-5 shadow-pop md:flex-row md:items-center md:gap-6">
            <p className="flex-1 text-sm leading-relaxed text-stone">
              Usamos cookies essenciais e, com o seu consentimento, cookies de análise e marketing. Você decide. Veja a{' '}
              <a href="/cookies" className="link-accent">Política de Cookies</a>.
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <button type="button" onClick={reject} className="cookie-btn-secondary">Rejeitar todos</button>
              <button type="button" onClick={configure} className="cookie-btn-secondary">Configurar</button>
              <button type="button" onClick={accept} className="cookie-btn-primary">Aceitar todos</button>
            </div>
          </div>
        </div>
      </div>

      {/* CENTRAL DE PREFERÊNCIAS */}
      <div
        id="cookie-prefs"
        className={`fixed inset-0 z-[70] items-end justify-center p-0 sm:items-center sm:p-4 ${prefsOpen ? 'flex' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
      >
        <div onClick={() => setPrefsOpen(false)} className="absolute inset-0 bg-ink/40" />
        <div className="relative max-h-[90vh] w-full overflow-auto rounded-t-xl border border-line bg-paper p-6 shadow-pop sm:max-w-lg sm:rounded-xl md:p-8">
          <h2 id="cookie-prefs-title" className="font-serif text-2xl tracking-tight">Preferências de cookies</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-stone">
            Ative as categorias que desejar. Os cookies necessários são sempre ativos.
          </p>
          <div className="mt-6 divide-y divide-line border-y border-line">
            <label className="flex items-start justify-between gap-4 py-4">
              <span>
                <span className="block font-medium text-ink">Necessários</span>
                <span className="mt-0.5 block text-sm text-stone">Funcionamento e segurança do site.</span>
              </span>
              <input type="checkbox" checked disabled className="cookie-switch" />
            </label>
            <label className="flex items-start justify-between gap-4 py-4">
              <span>
                <span className="block font-medium text-ink">Desempenho / Analíticos</span>
                <span className="mt-0.5 block text-sm text-stone">Medir o uso do site para melhorá-lo.</span>
              </span>
              <input
                type="checkbox"
                checked={cats.analytics}
                onChange={(e) => setCats((c) => ({ ...c, analytics: e.target.checked }))}
                className="cookie-switch"
              />
            </label>
            <label className="flex items-start justify-between gap-4 py-4">
              <span>
                <span className="block font-medium text-ink">Funcionalidade</span>
                <span className="mt-0.5 block text-sm text-stone">Lembrar preferências e personalizar.</span>
              </span>
              <input
                type="checkbox"
                checked={cats.functionality}
                onChange={(e) => setCats((c) => ({ ...c, functionality: e.target.checked }))}
                className="cookie-switch"
              />
            </label>
            <label className="flex items-start justify-between gap-4 py-4">
              <span>
                <span className="block font-medium text-ink">Marketing</span>
                <span className="mt-0.5 block text-sm text-stone">Publicidade e mensuração (Google, Meta).</span>
              </span>
              <input
                type="checkbox"
                checked={cats.marketing}
                onChange={(e) => setCats((c) => ({ ...c, marketing: e.target.checked }))}
                className="cookie-switch"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={reject} className="cookie-btn-secondary">Rejeitar todos</button>
            <button type="button" onClick={save} className="cookie-btn-secondary">Salvar preferências</button>
            <button type="button" onClick={accept} className="cookie-btn-primary">Aceitar todos</button>
          </div>
        </div>
      </div>
    </>
  );
}
