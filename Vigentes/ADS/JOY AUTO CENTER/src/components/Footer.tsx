import { Instagram, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/logo-sem-fundo.webp';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Troca de Óleo',
  'Alinhamento e Balanceamento',
  'Injeção Eletrônica',
  'Direção Hidráulica',
  'Sistemas Eletrônicos',
  'Suspensão e Freios',
  'Venda de Pneus e Peças',
  'Manutenção Preventiva',
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={LOGO} alt="Joy Auto Center" className="h-12 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Referência em manutenção automotiva em Iporá-GO há mais de 22 anos. Qualidade,
              transparência e compromisso em cada serviço.
            </p>
            <a
              href="https://www.instagram.com/joyautocenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors duration-200"
            >
              <Instagram size={16} />
              @joyautocenter
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Serviços</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[rgb(246,122,55)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Av. Dr. Neto, 1661 - Setor dos Funcionários
                  <br />
                  Iporá - GO, 76380-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[rgb(246,122,55)] flex-shrink-0" />
                <a
                  href="http://wa.me/5562981500426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(246,122,55)] text-sm transition-colors"
                >
                  (62) 98150-0426
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[rgb(246,122,55)] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Segunda a Sexta
                  <br />
                  até as 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Joy Auto Center · Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-gray-500 hover:text-[rgb(246,122,55)] text-xs transition-colors duration-200"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
