import { MessageCircle, MapPin, Clock, Mail } from './icons';

const navItems = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#atendimento', label: 'Área de Atendimento' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/logo.webp"
              alt="Gesso Jundiaí"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Distribuidor de materiais para gesso e drywall em Jundiaí e região. Qualidade, preço
              justo e atendimento especializado desde 2021.
            </p>
            <a
              href="https://wa.me/5511933943710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#EE1E23] font-semibold text-sm hover:text-red-400 transition-colors"
            >
              <MessageCircle size={16} />
              (11) 93394-3710
            </a>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-[#EE1E23] transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Informações
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#EE1E23] mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Rua Sérgio Cardoso, 140<br />Jardim do Trevo, Jundiaí – SP<br />CEP 13.211-374
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="text-[#EE1E23] mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Seg–Sex: 07h às 17h<br />Sábado: 07h às 12h
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#EE1E23] shrink-0" />
                <a
                  href="mailto:gessojundiai@gmail.com"
                  className="text-gray-500 hover:text-[#EE1E23] transition-colors text-sm"
                >
                  gessojundiai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Gesso Jundiaí. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Distribuidor de Gesso e Drywall em Jundiaí e Região
          </p>
        </div>
      </div>
    </footer>
  );
}
