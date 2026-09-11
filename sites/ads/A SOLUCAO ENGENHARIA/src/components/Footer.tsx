import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
];

const productList = [
  'Extintores de Incêndio',
  'Sinalização de Emergência',
  'Iluminação de Emergência',
  'Alarme de Incêndio',
  'Detectores de Incêndio',
  'Sistema de Hidrantes',
  'Portas de Emergência',
  'Controle de Fumaça',
];

export default function Footer() {
  const goTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060840] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/img/logo.webp"
              alt="A Solução Engenharia"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Especialistas em prevenção contra incêndio e pânico desde 2010.
              Protegemos vidas com soluções completas em todo o estado de
              Sergipe.
            </p>
            <a
              href="https://www.instagram.com/asolucaoengenharia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#92AA40] transition-colors text-sm"
            >
              <Instagram size={16} />
              @asolucaoengenharia
            </a>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => goTo(link.href)}
                    className="text-white/55 hover:text-[#92AA40] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Produtos
            </h3>
            <ul className="space-y-2.5">
              {productList.map((product) => (
                <li key={product}>
                  <span className="text-white/55 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-[#92AA40] mt-0.5 shrink-0" />
                <a
                  href="tel:+5579998705409"
                  className="text-white/55 hover:text-[#92AA40] transition-colors text-sm"
                >
                  (79) 9 9870-5409
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#92AA40] mt-0.5 shrink-0" />
                <a
                  href="mailto:abraaosantos@asolucaoengenharia.com.br"
                  className="text-white/55 hover:text-[#92AA40] transition-colors text-sm break-all"
                >
                  abraaosantos@asolucaoengenharia.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#92AA40] mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  R. Siriri, 763 - Centro, Aracaju - SE, 49061-035
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-[#92AA40] mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">
                  Seg a Sex: 07h às 16h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} A Solução Engenharia. Todos os direitos
            reservados.
          </p>
          <p className="text-white/25 text-xs">Aracaju, Sergipe — CNPJ</p>
        </div>
      </div>
    </footer>
  );
}
