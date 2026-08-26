import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Nossas Unidades', href: '#unidades' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/img/logo-sem-fundo.webp"
              alt="Casa das Tintas"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              A loja de tintas imobiliárias e automotivas mais completa de Sorriso - MT. Qualidade, variedade e atendimento personalizado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/casadastintas_sorriso/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/casadastintassrs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="http://wa.me/556697173455"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'rgb(108,189,81)' }}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-[rgb(111,196,233)] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5566997173455" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors group">
                  <Phone size={14} className="text-[rgb(17,157,219)] flex-shrink-0" />
                  <span>(66) 9 9717-3455</span>
                </a>
              </li>
              <li>
                <a href="tel:+5566996332057" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                  <Phone size={14} className="text-[rgb(108,189,81)] flex-shrink-0" />
                  <span>(66) 9 9633-2057</span>
                </a>
              </li>
              <li>
                <a href="mailto:casadastintassorriso@gmail.com" className="flex items-start gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                  <Mail size={14} className="text-[rgb(240,214,44)] flex-shrink-0 mt-0.5" />
                  <span className="break-all">casadastintassorriso@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/50 text-sm">
                  <Clock size={14} className="text-[rgb(235,49,60)] flex-shrink-0 mt-0.5" />
                  <span>Seg–Sex: 7h–11h30 e 13h–17h30</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Unidades</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[rgb(17,157,219)] text-xs font-bold uppercase tracking-wider mb-1.5">Matriz</p>
                <div className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[rgb(17,157,219)]" />
                  <span>Rua São Francisco de Assis, 1493 — Novos Campos, Sorriso - MT</span>
                </div>
              </div>
              <div>
                <p className="text-[rgb(108,189,81)] text-xs font-bold uppercase tracking-wider mb-1.5">Filial</p>
                <div className="flex items-start gap-2 text-white/50 text-sm">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[rgb(108,189,81)]" />
                  <span>Av. Tancredo Neves, 1722 — Centro Norte, Sorriso - MT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center">
            © {currentYear} Casa das Tintas Sorriso. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Tintas em Sorriso', 'Tintas Imobiliárias', 'Tintas Automotivas', 'Sorriso - MT'].map(tag => (
              <span key={tag} className="text-white/20 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
