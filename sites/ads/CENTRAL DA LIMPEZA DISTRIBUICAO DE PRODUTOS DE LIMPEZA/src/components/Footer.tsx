import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-gray-800">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logo-casa-verde-bolhas-azul-limpeza_1302x1270.webp"
                alt="Central da Limpeza"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="block text-brand-blue font-bold text-sm leading-tight">Central da</span>
                <span className="block text-brand-green font-bold text-sm leading-tight">Limpeza</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              Loja de produtos de limpeza doméstica, empresarial e tratamento de piscinas em Pinhais, PR.
              Atendimento de excelência desde junho de 2016.
            </p>
            <a
              href="https://www.instagram.com/centraldalimpezapinhaispr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors"
            >
              <Instagram size={16} />
              @centraldalimpezapinhaispr
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Horários</h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Seg a Sex</p>
                  <p className="text-xs text-gray-500">08:00 às 19:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Sábado</p>
                  <p className="text-xs text-gray-500">09:00 às 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Domingo</p>
                  <p className="text-xs text-gray-600">Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5541999150216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-gray-500 hover:text-brand-green transition-colors"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                (41) 99915-0216
              </a>
              <a
                href="mailto:compras@centraldalimpezapr.com.br"
                className="flex items-start gap-2 text-sm text-gray-500 hover:text-brand-blue transition-colors break-all"
              >
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                compras@centraldalimpezapr.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Av. Jacob Macanhan, 3199 — Atuba, Pinhais PR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            &copy; {year} Central da Limpeza. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-700 text-center sm:text-right">
            Pinhais, PR — CNPJ registrado
          </p>
        </div>
      </div>
    </footer>
  );
}
