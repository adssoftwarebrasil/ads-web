import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const navigationLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const productLinks = [
    'Colchões de Espuma',
    'Colchões de Molas',
    'Camas Box',
    'Produtos Sob Medida',
    'Cabeceiras',
    'Colchão de Berço',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-vibrant via-primary-electric to-primary-vibrant"></div>

      <svg
        className="absolute top-0 left-0 right-0 text-accent-soft/10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,50 Q360,0 720,50 T1440,50 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_1_528393621_17851273047526911_4732640726402337357_n%201.png"
              alt="UDI Colchões"
              className="h-16 w-auto mb-4"
            />
            <p className="text-accent-soft text-sm mb-3 leading-relaxed">
              Qualidade de vida através de boas noites de sono
            </p>
            <p className="text-accent-soft/80 text-sm">
              Sua loja de confiança em Uberlândia desde 2025
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-accent-soft hover:text-white transition-all hover:pl-1.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Produtos</h3>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="https://wa.me/5534996610265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-soft hover:text-white transition-all hover:pl-1.5 inline-block text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Fale Conosco</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5534996610265"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#25D366] rounded-lg hover:bg-[#20ba59] transition-all hover:scale-105"
              >
                <MessageCircle size={20} />
                <div className="text-sm">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-xs">(34) 99661-0265</div>
                </div>
              </a>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-accent-soft">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    Av. João Pessoa, 635
                    <br />
                    Martins, Uberlândia - MG
                  </div>
                </div>

                <div className="flex items-start gap-3 text-accent-soft">
                  <Clock size={18} className="flex-shrink-0 mt-0.5" />
                  <div>Seg-Sáb: 9h-18h</div>
                </div>

                <div className="flex items-start gap-3 text-accent-soft">
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <a href="tel:+5534996610265" className="hover:text-white transition-colors">
                    (34) 99661-0265
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-soft/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-soft/70">
            <div>© 2025 UDI Colchões. Todos os direitos reservados.</div>
            <div className="flex items-center gap-2">
              Desenvolvido com
              <span className="text-red-400">♥</span>
              para melhor atendê-lo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
