import { MessageCircle, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const menuLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const serviceLinks = [
  'Laudos e Relatórios',
  'Sondagem Geotécnica',
  'Monitoramento Ambiental',
  'Projetos Arquitetônicos',
  'Estudos Ambientais',
  'Licenciamento Ambiental',
];

export default function Footer() {
  return (
    <footer className="bg-[#013413] text-[#f8f1e1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              alt="JPMAR Ambiental"
              className="h-12 w-auto object-contain rounded mb-5"
              src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/logo.jpg"
            />
            <p className="text-[#f8f1e1]/60 text-sm leading-relaxed mb-6">
              Engenharia Ambiental e SST com mais de 15 anos de experiência. Soluções sustentáveis para seu projeto.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5579991570550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#f8f1e1]/20 flex items-center justify-center hover:bg-[#f8f1e1]/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle width={16} height={16} className="lucide lucide-message-circle" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#f8f1e1]/20 flex items-center justify-center hover:bg-[#f8f1e1]/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#f8f1e1]/20 flex items-center justify-center hover:bg-[#f8f1e1]/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} className="lucide lucide-facebook" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Menu</h4>
            <ul className="flex flex-col gap-2.5">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#f8f1e1]/60 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#servicos" className="text-[#f8f1e1]/60 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Contato</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+5579991570550"
                className="flex items-start gap-3 text-[#f8f1e1]/60 hover:text-white transition-colors text-sm"
              >
                <Phone width={15} height={15} className="lucide lucide-phone mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>(79) 99157-0550</span>
              </a>
              <a
                href="mailto:jpmar@jpmar.com.br"
                className="flex items-start gap-3 text-[#f8f1e1]/60 hover:text-white transition-colors text-sm"
              >
                <Mail width={15} height={15} className="lucide lucide-mail mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>jpmar@jpmar.com.br</span>
              </a>
              <div className="flex items-start gap-3 text-[#f8f1e1]/60 text-sm">
                <MapPin width={15} height={15} className="lucide lucide-map-pin mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Rua Sargento José Valença Santos Leite, 356, Aruana, Aracaju — SE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#f8f1e1]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#f8f1e1]/40 text-xs">© 2026 JPMAR Ambiental. Todos os direitos reservados.</p>
          <p className="text-[#f8f1e1]/40 text-xs">CNPJ: Fundada em 25/06/2008 · Aracaju, Sergipe</p>
        </div>
      </div>
    </footer>
  );
}
