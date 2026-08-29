import { Shield, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const footerServices = [
  'Câmeras CFTV',
  'Alarmes',
  'Portões Eletrônicos',
  'Interfones',
  'Fechaduras Digitais',
  'Cerca Elétrica',
  'Manutenção',
];

const regions = [
  'Pará de Minas - MG',
  'Papagaios - MG',
  'Pitangui - MG',
  'Nova Serrana - MG',
  'Pequi - MG',
  'Leandro Ferreira - MG',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/assistec%20sistema%20de%20seguranca/img/logo-sem-fundo.webp"
                alt="Assistec Sistema de Segurança"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div className="hidden items-center gap-2" style={{ display: 'none' }}>
                <Shield className="lucide lucide-shield h-8 w-8 text-blue-300" />
                <div>
                  <span className="text-lg font-bold text-white block">ASSISTEC</span>
                  <span className="text-xs text-white/60">Sistema de Segurança</span>
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Especialistas em segurança eletrônica em Pará de Minas e região. Atendendo residências e comércios desde
              2005.
            </p>
            <a
              href="https://www.instagram.com/assistecparademinas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="lucide lucide-instagram h-4 w-4" />
              @assistecparademinas
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-white/70 hover:text-white text-sm transition-colors hover:pl-1 duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">Regiões Atendidas</h4>
            <ul className="space-y-2.5">
              {regions.map((r) => (
                <li key={r} className="text-white/70 text-sm">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="lucide lucide-phone h-4 w-4 text-brand-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="https://wa.me/553799961702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white block transition-colors"
                  >
                    (37) 99996-1702
                  </a>
                  <a
                    href="https://wa.me/5537999714135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white block transition-colors"
                  >
                    (37) 99971-4135
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin h-4 w-4 text-brand-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  R. Nova Serrana - Centro
                  <br />
                  Pará de Minas - MG
                  <br />
                  CEP: 35660-418
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="lucide lucide-clock h-4 w-4 text-brand-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/70">
                  Seg - Sex: 08h às 18h
                  <br />
                  Sábado: 08h às 12h
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © 2026 Siqueira &amp; Lemos LTDA — CNPJ: 07.598.350/0001-40
            </p>
            <p className="text-white/40 text-xs text-center sm:text-right">
              Sistema de Segurança Assistec Ltda — Pará de Minas, MG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
