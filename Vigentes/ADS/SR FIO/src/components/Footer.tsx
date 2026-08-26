import { scrollToId } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Credenciais', id: 'credenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-slate-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/sr-fio/logotipo-sr-fio-cabelo-dourado-fundo-cinza_1600x1076.webp"
              alt="SR FIO Logo"
              className="h-12 w-auto object-contain rounded mb-4"
            />
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Terapia capilar integrativa com ética, ciência e dedicação. Tratamentos personalizados para
              saúde capilar desde 2020.
            </p>
          </div>
          <div>
            <p className="font-body text-brand-gold text-xs font-semibold tracking-widest uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-brand-gold text-xs font-semibold tracking-widest uppercase mb-5">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5516991998208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  +55 (16) 99199-8208
                </a>
              </li>
              <li>
                <a
                  href="mailto:silviaelisaruivo@hotmail.com"
                  className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  silviaelisaruivo@hotmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sr.fiosilviaruivo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  @sr.fioterapiacapilar
                </a>
              </li>
              <li>
                <p className="font-body text-white/40 text-xs leading-relaxed">
                  Rua Luis José de Mattos, 437 — Salas 02 e 03<br />
                  Nova Ribeirânia, Ribeirão Preto — SP
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            © 2026 SR FIO — Silvia Ruivo Terapeuta Capilar. Todos os direitos reservados.
          </p>
          <p className="font-body text-white/20 text-xs">
            CRP Tricologia Integrativa — Ribeirão Preto, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
