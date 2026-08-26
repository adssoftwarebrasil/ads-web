import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES_LINKS = [
  'Remanufatura de Embreagens',
  'Recuperação de Embreagens',
  'Embreagens Novas',
  'Linha Pesada / Caminhões',
  'Tratores e Maquinário',
  'Veículos Leves',
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'rgb(14, 11, 13)' }}>
      <div
        className="py-1"
        style={{ background: 'rgb(234, 34, 37)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/logo-sem-fundo.webp"
              alt="Só Embreagens"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: 'rgb(102, 97, 96)' }}>
              Especialistas em remanufatura, recuperação e comercialização de
              embreagens há mais de 15 anos. Qualidade, garantia e preço justo.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'rgb(237, 219, 223)' }}>
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors duration-200 text-left"
                    style={{ color: 'rgb(102, 97, 96)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(234, 34, 37)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgb(102, 97, 96)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'rgb(237, 219, 223)' }}>
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: 'rgb(102, 97, 96)' }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'rgb(237, 219, 223)' }}>
              Informações
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-2.5">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'rgb(234, 34, 37)' }} />
                <span className="text-sm leading-snug" style={{ color: 'rgb(102, 97, 96)' }}>
                  R. João Pedro Moreira de Carvalho, 5886 — Sinop/MT
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'rgb(234, 34, 37)' }} />
                <a href="tel:5566996595500" className="text-sm" style={{ color: 'rgb(102, 97, 96)' }}>
                  (66) 9 9659-5500
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'rgb(234, 34, 37)' }} />
                <span className="text-sm leading-snug" style={{ color: 'rgb(102, 97, 96)' }}>
                  Seg–Sex: 07:00–11:30 / 13:00–18:00
                  <br />
                  Sábado: 07:00–13:00
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'rgb(234, 34, 37)' }} />
                <a href="mailto:advalinenarzzetti@gmail.com" className="text-sm break-all" style={{ color: 'rgb(102, 97, 96)' }}>
                  advalinenarzzetti@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center" style={{ color: 'rgb(102, 97, 96)' }}>
            © {new Date().getFullYear()} Só Embreagens. Todos os direitos reservados.
          </p>
          <p className="text-xs text-center" style={{ color: 'rgb(102, 97, 96)' }}>
            Sinop — MT · Atendemos todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
