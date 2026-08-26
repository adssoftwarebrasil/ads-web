import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-imperio-dark via-imperio-blue to-imperio-dark text-white pt-12 md:pt-14 lg:pt-16 pb-6 md:pb-8 px-4 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          
          {/* Column 1 - About */}
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Fimperio-das-bombas-sem-fundo.webp"
              alt="Império das Bombas"
              className="h-12 md:h-14 lg:h-16 w-auto mb-3 md:mb-4 lg:mb-6"
            />
            <p className="text-imperio-ice/80 leading-relaxed mb-4 md:mb-5 lg:mb-6 text-xs md:text-sm">
              Referência em bombas d'água e ferramentas industriais em Belém.
              Qualidade, variedade e atendimento especializado.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/imperiodasbombasbelem/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="text-white w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.facebook.com/imperiodasbombasbelem"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="text-white w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://wa.me/5591980252240"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="text-white w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Menu */}
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 lg:mb-6">Menu</h4>
            <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
              {['Início', 'Sobre', 'Produtos', 'Vantagens', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-imperio-ice/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 text-xs md:text-sm group"
                  >
                    <span className="w-0 h-0.5 bg-imperio-light-blue group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 lg:mb-6">Nossos Produtos</h4>
            <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-imperio-ice/80">
              {[
                'Bombas Submersíveis',
                'Bombas Centrífugas',
                'Motobombas',
                'Ferramentas Elétricas',
                'Produtos para Piscina',
                'Pressurizadores',
                'Hidrômetros'
              ].map((product) => (
                <li key={product} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-imperio-light-blue rounded-full" />
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 lg:mb-6">Contato</h4>
            <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
              
              {/* Phone */}
              <a
                href="tel:+5591980252240"
                className="flex gap-2 md:gap-3 items-start group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-imperio-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-imperio-light-blue/30 transition-colors">
                  <Phone className="text-imperio-light-blue w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-imperio-ice/60 mb-0.5">Telefone</p>
                  <p className="text-xs md:text-sm text-imperio-ice/90">(91) 98025-2240</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:repbombasmaq@gmail.com"
                className="flex gap-2 md:gap-3 items-start group hover:translate-x-1 transition-transform duration-300"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-imperio-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-imperio-light-blue/30 transition-colors">
                  <Mail className="text-imperio-light-blue w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-imperio-ice/60 mb-0.5">E-mail</p>
                  <p className="text-xs md:text-sm text-imperio-ice/90 break-all">
                    repbombasmaq@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex gap-2 md:gap-3 items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-imperio-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-imperio-light-blue w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-imperio-ice/60 mb-0.5">Endereço</p>
                  <p className="text-xs md:text-sm text-imperio-ice/90 leading-relaxed">
                    Rua dos Tamoios, 1333<br />
                    Batista Campos<br />
                    CEP 66033-172<br />
                    Belém - PA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 md:pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-[10px] md:text-xs lg:text-sm text-imperio-ice/60 text-center md:text-left">
              © {currentYear} Império das Bombas. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-3 md:gap-4">
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 md:w-9 md:h-9 bg-imperio-light-blue hover:bg-imperio-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;