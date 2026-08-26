import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const productList = [
  'Mancais e Rolamentos',
  'Discos de Embreagem',
  'Filtros Agrícolas',
  'Sistema Hidráulico',
  'Peças Mecânicas',
  'Elétrica e Ignição',
  'Consumíveis',
];

export default function Footer() {
  return (
    <footer className="bg-[#010D3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dinapel/img/logo-sem-fundo.webp"
              alt="Dinapel Peças para Tratores"
              className="h-16 mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Desde 1998 fornecendo peças para tratores e implementos agrícolas com qualidade e tradição
              no agronegócio roraimense.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dinapel_rr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FCE500] flex items-center justify-center transition-colors group"
              >
                <Instagram
                  size={16}
                  className="lucide lucide-instagram text-white/70 group-hover:text-[#0131AC]"
                />
              </a>
              <a
                href="http://wa.me/5595991424864"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              >
                <WhatsappIcon className="w-4 h-4 fill-white/70" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FCE500] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="space-y-2.5">
              {productList.map((p) => (
                <li key={p}>
                  <span className="text-white/60 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="lucide lucide-map-pin text-[#FCE500] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/60 text-sm leading-snug">
                  R. Carlos Natrodt, 775 – Liberdade
                  <br />
                  Boa Vista – RR, 69309-655
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="lucide lucide-phone text-[#FCE500] flex-shrink-0" />
                <a
                  href="tel:+559532243257"
                  className="text-white/60 hover:text-[#FCE500] text-sm transition-colors"
                >
                  (95) 3224-3257
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="lucide lucide-mail text-[#FCE500] flex-shrink-0" />
                <a
                  href="mailto:dinapel2@outlook.com"
                  className="text-white/60 hover:text-[#FCE500] text-sm transition-colors"
                >
                  dinapel2@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={15}
                  className="lucide lucide-clock text-[#FCE500] flex-shrink-0 mt-0.5"
                />
                <div className="text-white/60 text-sm space-y-0.5">
                  <p>Seg–Sex: 08:00–12:00 / 14:00–18:00</p>
                  <p>Sábado: 08:00–12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Dinapel – Peças para Tratores. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">CNPJ registrado · Boa Vista – RR</p>
        </div>
      </div>
    </footer>
  );
}
