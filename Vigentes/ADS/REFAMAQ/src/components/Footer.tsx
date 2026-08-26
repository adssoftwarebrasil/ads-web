import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Recuperação de Rodantes',
  'Embuchamento de Máquinas',
  'Garfos Enleiradores',
  'Conchas e Implementos',
  'Torno e Solda',
  'Pintura Industrial',
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#373536] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/refamaq/img/logo.webp"
              alt="Refamaq"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Fundada em 1994 em Sinop-MT. 30 anos de excelência em recuperação de máquinas pesadas e fabricação de implementos agrícolas e florestais.
            </p>
            <div className="flex gap-3">
              <a
                href="http://wa.me/5566984028763"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:contato@refamaq.com.br"
                className="w-9 h-9 rounded-lg bg-[#466fc5] hover:bg-[#243b8e] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#servicos')}
                    className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:6635158120" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    (66) 3515-8120
                  </a>
                  <a href="http://wa.me/5566984028763" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    (66) 98402-8763
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:contato@refamaq.com.br" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    contato@refamaq.com.br
                  </a>
                  <a href="mailto:financeiro@refamaq.com.br" className="text-sm text-gray-400 hover:text-white transition-colors block">
                    financeiro@refamaq.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  R. João Pedro Moreira de Carvalho, 1685<br />
                  St. Industrial, Sinop - MT<br />
                  CEP: 78557-137
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#466fc5] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  Seg–Sex: 7h–11h30 e 13h–18h
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Refamaq Recuperadora de Máquinas Pesadas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Sinop - MT | MT • PA • AM • GO
          </p>
        </div>
      </div>
    </footer>
  );
}
