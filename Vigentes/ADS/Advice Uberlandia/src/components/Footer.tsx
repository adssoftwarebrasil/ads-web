import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

const LOGO_URL =
  'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Flogo-sem-fundo.webp';

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'ASO',
  'PGR',
  'PCMSO',
  'eSocial',
  'Exame Toxicológico',
  'Engenharia do Trabalho',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="Advice"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Referência em Medicina e Engenharia do Trabalho há mais de 30 anos
              em Uberlândia e região.
            </p>
            <a
              href="https://www.instagram.com/adviceuberlandia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-brand-400 transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @adviceuberlandia
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <span className="text-neutral-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Av. João Pinheiro, 807 - Centro, Uberlândia - MG
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  (34) 3236-7444
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Seg a Sex, 06:00 - 17:30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Advice Medicina e Engenharia do
            Trabalho. Todos os direitos reservados.
          </p>
          <a
            href="https://www.clinicaadvice.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-brand-400 transition-colors text-sm"
          >
            www.clinicaadvice.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}
