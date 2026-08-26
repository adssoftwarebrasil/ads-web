import { Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=guerreiro%2Flogo%20guerreiro%20em%20PNG.png&version_id=null';

const navLinks = [
  { label: 'Início', href: '#início' },
  { label: 'Sobre Nós', href: '#sobre-nós' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossas Filiais', href: '#nossas-filiais' },
  { label: 'Catálogo Digital', href: '#catálogo-digital' },
  { label: 'Entre em Contato', href: '#entre-em-contato' },
];

const branches = [
  { name: 'Camaçari (Matriz)', phone: '(71) 99669-4235', tel: 'tel:71996694235' },
  { name: 'Catu', phone: '(71) 99622-0992', tel: 'tel:71996220992' },
  { name: 'Alagoinhas', phone: '(75) 99925-4235', tel: 'tel:75999254235' },
  { name: 'Santo Amaro', phone: '(75) 99810-0758', tel: 'tel:75998100758' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t-4 border-[#F48221]">
      <div className="max-w-[1400px] mx-auto px-[5%] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src={LOGO} alt="Guerreiro Ferro e Aço" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Sua fonte completa para ferro, aço, tubos, metalons, chapas e muito mais.<br /><br />
              Não vendemos aço, vendemos solução em aço!
            </p>
            <a
              href="https://instagram.com/guerreiroferroeaco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-[#F48221] transition-colors"
            >
              <Instagram className="lucide lucide-instagram" size={28} />
              <span className="font-medium">@guerreiroferroeaco</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#F48221] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              NAVEGAÇÃO
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/80 text-sm hover:text-[#F48221] transition-colors inline-flex items-center gap-2">
                    <span>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#F48221] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              NOSSAS FILIAIS
            </h3>
            <ul className="space-y-4 text-sm">
              {branches.map((branch) => (
                <li key={branch.name} className="text-white/80">
                  <div className="flex items-start gap-2">
                    <MapPin className="lucide lucide-map-pin w-4 h-4 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium text-white">{branch.name}</p>
                      <a href={branch.tel} className="hover:text-[#F48221] transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#F48221] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ENTRE EM CONTATO
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="lucide lucide-mail w-4 h-4 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                <a href="mailto:comercial@grupoguerreiro.net" className="hover:text-[#F48221] transition-colors break-all">
                  comercial@grupoguerreiro.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="lucide lucide-phone w-4 h-4 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">WhatsApp Matriz:</p>
                  <a href="tel:71996694235" className="hover:text-[#F48221] transition-colors">
                    (71) 99669-4235
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-4 h-4 text-[#F48221] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium text-white mb-1">HORÁRIOS:</p>
                  <p>Matriz: Seg-Sex 7:30-17:30 | Sáb 7:30-12h</p>
                  <p>Filiais: Seg-Sex 8h-17h | Sáb 8h-12h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black border-t border-white/10 py-6">
        <div className="max-w-[1400px] mx-auto px-[5%] text-center">
          <p className="text-white/60 text-sm">© 2025 Guerreiro Ferro e Aço - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
