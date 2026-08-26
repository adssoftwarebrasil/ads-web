import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Lanternagem Profissional',
    'Pintura Automotiva',
    'Polimento e Vitrificação',
    'Martelinho de Ouro',
    'Pintura de Rodas',
    'Higienização Interna'
  ];

  return (
    <footer className="bg-black border-t border-[#fafe05]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <div>
              <img 
                src="https://storage.lucasmendes.dev/site-sp/retocars%2Fretocars-logo-sem-fundo.webp" 
                alt="Retocars Auto Service"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Especialistas em lanternagem e pintura automotiva desde 2021
            </p>
            <div className="flex gap-2 md:gap-3">
              <a 
                href="https://www.instagram.com/retocarslanternagemepintura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 md:p-3 rounded-lg hover:bg-[#fafe05] hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} className="md:hidden" />
                <Instagram size={20} className="hidden md:block" />
              </a>
              <a 
                href="https://www.facebook.com/retocarslanternagemepintura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 md:p-3 rounded-lg hover:bg-[#fafe05] hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} className="md:hidden" />
                <Facebook size={20} className="hidden md:block" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {['Início', 'Serviços', 'Galeria', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-[#fafe05] transition-colors text-xs md:text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Serviços</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-xs md:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                <Phone size={14} className="mt-0.5 flex-shrink-0 md:hidden" />
                <Phone size={16} className="mt-0.5 flex-shrink-0 hidden md:block" />
                <a href="tel:+5561982160800" className="hover:text-[#fafe05] transition-colors">
                  (61) 98216-0800
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                <Mail size={14} className="mt-0.5 flex-shrink-0 md:hidden" />
                <Mail size={16} className="mt-0.5 flex-shrink-0 hidden md:block" />
                <a 
                  href="mailto:consultor1.retocars@gmail.com"
                  className="hover:text-[#fafe05] transition-colors break-all"
                >
                  consultor1.retocars@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 md:hidden" />
                <MapPin size={16} className="mt-0.5 flex-shrink-0 hidden md:block" />
                <span>Rua 03 Quadra 01 lote 05/12<br />Vicente Pires - DF</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                <Clock size={14} className="mt-0.5 flex-shrink-0 md:hidden" />
                <Clock size={16} className="mt-0.5 flex-shrink-0 hidden md:block" />
                <span>Seg a Sex: 07h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {currentYear} Retocars Auto Service. Todos os direitos reservados.
          </p>
          <div className="flex gap-3 md:gap-4 text-xs md:text-sm">
            <button className="text-gray-500 hover:text-[#fafe05] transition-colors">
              Política de Privacidade
            </button>
            <span className="text-gray-700">|</span>
            <button className="text-gray-500 hover:text-[#fafe05] transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}