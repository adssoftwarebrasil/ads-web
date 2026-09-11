import { Phone, Instagram } from 'lucide-react';
import { BLUE, YELLOW, WA_SOLAR, WA_POSVENDA, WA_MATERIAL, INSTAGRAM, scrollToId } from '../theme';

const quickLinks: { label: string; id: string }[] = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Energia Solar', id: 'serviços' },
  { label: 'Material Elétrico', id: 'serviços' },
  { label: 'Área de Atendimento', id: 'área-de-atendimento' },
  { label: 'Contato', id: 'contato' },
];

const contacts = [
  { href: WA_SOLAR, label: 'Solar Comercial', phone: '(77) 99827-0291' },
  { href: WA_POSVENDA, label: 'Pós-Venda', phone: '(77) 99915-0105' },
  { href: WA_MATERIAL, label: 'Material Elétrico', phone: '(77) 98809-9543' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BLUE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-3xl font-bold text-white mb-5">ELETROLUZ</div>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '350px' }}>
              48 anos oferecendo soluções completas em material elétrico e energia solar para
              Barreiras e região.
            </p>
            <div
              className="inline-block px-4 py-2 rounded-full font-bold text-sm"
              style={{ backgroundColor: YELLOW, color: BLUE }}
            >
              Desde 1976
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: YELLOW }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={`${link.id}-${i}`}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-base transition-all duration-300 hover:pl-2 text-left"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: YELLOW }}>
              Fale Conosco
            </h3>
            <div className="space-y-4 mb-8">
              {contacts.map((c) => (
                <a
                  key={c.phone}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white transition-opacity duration-300 hover:opacity-100"
                  style={{ opacity: 0.9 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: YELLOW }}
                  >
                    <Phone width={20} height={20} className="lucide lucide-phone " style={{ color: BLUE }} />
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {c.label}
                    </div>
                    <div className="font-bold">{c.phone}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mb-3 text-sm text-white">Siga-nos</div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg border text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Instagram width={20} height={20} className="lucide lucide-instagram " />
              <span>@eletroluzbarreiras</span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-6 border-t" style={{ backgroundColor: 'rgb(0, 60, 150)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2026 Eletroluz. 48 anos de tradição e qualidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
