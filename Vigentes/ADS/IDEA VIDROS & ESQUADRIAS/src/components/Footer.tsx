import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

const servicos = [
  'Esquadrias de Alumínio',
  'Vidro Temperado',
  'Box para Banheiro',
  'Espelhos',
  'Portas e Janelas',
  'Pele de Vidro / Fachada',
  'Guarda Corpo',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020202] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/idea%20vidros/img/logo-sem-fundo.webp"
              alt="IDEA Vidros & Esquadrias"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Referência em vidros e esquadrias de alumínio em Sorriso/MT desde 2012. Qualidade, confiança e credibilidade em cada projeto.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ideavidroseesquadrias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F60301] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} />
              </a>
              <a
                href="http://wa.me/556699856445"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#EACD68] font-bold text-sm uppercase tracking-wider mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-white/50 hover:text-white text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#EACD68] font-bold text-sm uppercase tracking-wider mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {servicos.map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#EACD68] font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Phone width={14} height={14} className="text-[#EACD68] mt-0.5 flex-shrink-0" />
                <a
                  href="http://wa.me/556699856445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  (66) 9 9985-6445
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail width={14} height={14} className="text-[#EACD68] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:ideavidroseesquadrias@hotmail.com"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  ideavidroseesquadrias@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin width={14} height={14} className="text-[#EACD68] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Av. Perimetral Sudoeste, 3835<br />
                  Flor do Cerrado, Sorriso/MT
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock width={14} height={14} className="text-[#EACD68] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Seg–Sex: 07:30–11:00 / 13:00–17:30<br />
                  Sáb: 07:30–11:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 IDEA Vidros &amp; Esquadrias. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            Atendemos: Sorriso, Boa Esperança, Nova Ubiratã, Ipiranga do Norte e Sinop/MT
          </p>
        </div>
      </div>
    </footer>
  );
}
