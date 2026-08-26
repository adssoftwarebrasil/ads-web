import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const NAV = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const BRANDS = ['Komatsu', 'Cummins QSB', 'N855 / NTA855 / NT855', 'Hyundai D50', 'D155 / D61EX15 / D41', 'Shantui', 'PC200', 'Gerador'];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="https://storage.lucasmendes.dev/site-sp/pasa-tratores/img/logo-removebg-preview.webp"
            alt="Pasa Tratores"
            className="h-16 w-auto object-contain mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Especialistas em peças para motores diesel e linha amarela. Qualidade, procedência e atendimento ágil desde 2020.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Navegação</h4>
          <ul className="space-y-3">
            {NAV.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                  className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Marcas Atendidas</h4>
          <ul className="space-y-2">
            {BRANDS.map((b) => (
              <li key={b} className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-sm">Contato</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start text-sm text-gray-400">
              <MapPin size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
              <span>Av. dos Pinheiros, 185<br />St. Industrial Norte, Sinop - MT<br />78550-552</span>
            </li>
            
            {/* Números de Telefone Atualizados */}
            <li className="flex gap-3 items-start text-sm">
              <Phone size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-2">
                <a href="http://wa.me/556699586377" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                  (66) 9 9958-6377
                </a>
                <a href="http://wa.me/5566996386377" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                  (66) 9 9638-6377
                </a>
                <a href="http://wa.me/5566996086377" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">
                  (66) 9 9608-6377
                </a>
              </div>
            </li>

            <li className="flex gap-3 items-center text-sm">
              <Mail size={15} className="text-brand-red flex-shrink-0" />
              <a href="mailto:pasatratorpc@gmail.com" className="text-gray-400 hover:text-brand-red transition-colors break-all">
                pasatratorpc@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-start text-sm text-gray-400">
              <Clock size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
              <span>Seg–Sex: 07:00–11:30<br />13:00–17:30</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Pasa Tratores Peças. Todos os direitos reservados.</span>
          <span>Sinop - MT | CNPJ disponível no local</span>
        </div>
      </div>
    </footer>
  );
}