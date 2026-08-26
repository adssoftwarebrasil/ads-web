import { WhatsAppIcon, InstagramIcon } from './icons';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Cardápio', id: 'cardapio' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/logo-sem-fundo.webp"
                alt="Fio de Prata Espetaria"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[rgb(230,232,234)]/45 text-sm leading-relaxed max-w-xs mb-5">
              Quase 2 anos levando sabor, qualidade e um atendimento acolhedor para os moradores de Sinop – MT.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fiodeprata_espetaria/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-[#1e1e1e] border border-white/8 rounded-lg flex items-center justify-center hover:border-amber-500/30 hover:bg-amber-500/10 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[rgb(230,232,234)]/60 fill-current hover:text-amber-400" />
              </a>
              <a
                href="http://wa.me/5566996043627"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-[#1e1e1e] border border-white/8 rounded-lg flex items-center justify-center hover:border-amber-500/30 hover:bg-amber-500/10 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[rgb(230,232,234)]/60 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[rgb(230,232,234)] font-semibold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-[rgb(230,232,234)]/45 hover:text-amber-400 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(230,232,234)] font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-[rgb(230,232,234)]/45">
              <li>(66) 9 9604-3627</li>
              <li>valeriarossatto1@gmail.com</li>
              <li className="leading-relaxed">
                Av. das Sibipirunas, 954<br />
                Jardim Jacarandás, Sinop – MT
              </li>
              <li className="text-amber-400/80 font-medium">18h – 23h · Todos os dias</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[rgb(230,232,234)]/25 text-xs">© 2026 Fio de Prata Espetaria. Todos os direitos reservados.</p>
          <p className="text-[rgb(230,232,234)]/20 text-xs">Sinop – Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}
