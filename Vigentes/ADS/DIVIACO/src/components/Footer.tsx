import { Instagram, Phone, Mail } from 'lucide-react';

const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2FLogo_-_Diviaco-01.png&version_id=null';

const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={LOGO_URL}
              alt="Diviaco"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Especialistas em divisórias, forros e materiais para construção a seco no Rio Grande do Norte.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/diviaco_divisorias_forros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#E76012] rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://wa.me/558432239388"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#E76012] rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Phone size={16} className="text-white" />
              </a>
              <a
                href="mailto:financeirodiviaco@hotmail.com"
                className="w-9 h-9 bg-white/5 hover:bg-[#E76012] rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/40 hover:text-[#E76012] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Atendimento</h4>
            <div className="space-y-3">
              <p className="text-white/40 text-sm">
                <span className="text-white/60">Seg–Sex:</span> 7:30 – 12:00 | 13:30 – 17:00
              </p>
              <p className="text-white/40 text-sm">
                <span className="text-white/60">Sábado:</span> 8:00 – 12:00
              </p>
              <p className="text-white/40 text-sm mt-4">(84) 3223-9388</p>
              <p className="text-white/40 text-sm">financeirodiviaco@hotmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {year} Diviaco Divisórias e Forros. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Construção Civil &amp; Construção a Seco — RN
          </p>
        </div>
      </div>
    </footer>
  );
}
