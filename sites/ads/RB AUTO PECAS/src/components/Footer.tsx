import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const WA_NUMBER = '5564999743169';
const YEAR = new Date().getFullYear();

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rb_auto_pecas/logo-rb-auto-fundopreto_1080x1080.webp"
                alt="RB Auto Peças Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-red-600/40"
              />
              <div>
                <span className="block font-['Barlow_Condensed'] font-black text-white text-lg leading-tight">
                  RB AUTO PEÇAS
                </span>
                <span className="block text-red-500 text-xs tracking-widest uppercase">
                  Acreúna · GO
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Especializados em peças e serviços para toda a linha diesel. Atendimento com experiência desde os anos 90.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/rb_auto_pecas?igsh=bmR1bnY4OWN4ODJh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/40 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/RBauto%20pe%C3%A7as"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/40 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-red-600/20 hover:border-red-600/40 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white text-lg mb-5 uppercase tracking-wide">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Vídeo', href: '#video' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white text-lg mb-5 uppercase tracking-wide">
              Serviços
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Linha Pesada Diesel',
                'Linha Leve',
                'Oficina Mecânica',
                'Auto Elétrica',
                'Socorro na Estrada',
                'Venda de Peças',
              ].map((item) => (
                <li key={item}>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Barlow_Condensed'] font-bold text-white text-lg mb-5 uppercase tracking-wide">
              Localização
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Rua Rio Branco, 155</p>
                  <p className="text-gray-500 text-xs mt-0.5">Setor Nova Acreúna</p>
                  <p className="text-gray-500 text-xs">Em frente à BR-060</p>
                  <p className="text-gray-500 text-xs">Acreúna · GO</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    (64) 9 9974-3169
                  </a>
                  <p className="text-gray-500 text-xs mt-0.5">08h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e1e1e] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {YEAR} RB Auto Peças. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Acreúna · Goiás · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
