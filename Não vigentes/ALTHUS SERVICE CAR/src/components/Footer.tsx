import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const serviceItems = [
  'Revisão Completa',
  'Troca de Óleo',
  'Suspensão e Freios',
  'Injeção Eletrônica',
  'Sistema Elétrico',
  'Pneus e Alinhamento',
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/althus%20service%20car/img/logo-sem-fundo.webp"
                alt="Althus Service Car"
                className="h-12 w-auto mb-5 object-contain"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Oficina mecânica completa em Ribeirão Preto. Qualidade, transparência e preço justo para
              o seu veículo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/althusservicecar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-[rgb(240,26,40)] hover:border-[rgb(240,26,40)] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} className="lucide lucide-instagram text-white" />
              </a>
              <a
                href="https://www.facebook.com/althus service car"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-[rgb(240,26,40)] hover:border-[rgb(240,26,40)] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} className="lucide lucide-facebook text-white" />
              </a>
              <a
                href="https://wa.me/551636240220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={16} className="text-white" fill="currentColor" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(240,26,40)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(240,26,40)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="lucide lucide-map-pin text-[rgb(240,26,40)] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/50 text-sm leading-relaxed">
                  Av. Antônio Gomes da Silva Júnior, 810
                  <br />
                  Parque Industrial Lagoinha
                  <br />
                  Ribeirão Preto – SP, 14095-410
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="lucide lucide-phone text-[rgb(240,26,40)] flex-shrink-0"
                />
                <a
                  href="tel:+551636240220"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  (16) 3624-0220
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={16}
                  className="lucide lucide-clock text-[rgb(240,26,40)] flex-shrink-0 mt-0.5"
                />
                <span className="text-white/50 text-sm leading-relaxed">
                  Segunda a Sexta
                  <br />
                  08:00 às 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 Althus Service Car. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            CNPJ: Av. Antônio Gomes da Silva Júnior, 810 – Ribeirão Preto/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
