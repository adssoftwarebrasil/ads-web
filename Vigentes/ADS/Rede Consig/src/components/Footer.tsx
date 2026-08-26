import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    'Empréstimos Consignados',
    'Cartão Benefício',
    'Cartão Consignado',
    'Saque Limite',
    'Antecipação FGTS',
    'Atendimento Personalizado'
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/redeconsig%2Flogo-redeconsig-fundo-laranja-removebg-preview%201.png"
              alt="Rede Consig"
              className="h-12 mb-6"
            />
            <p className="text-[#cccccc] text-sm leading-relaxed">
              Especialistas em crédito consignado, oferecendo as melhores soluções financeiras para servidores, aposentados e pensionistas em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#f88601] mb-6">Menu</h4>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#cccccc] text-sm hover:text-[#f88601] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#f88601] mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-[#cccccc] text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#f88601] mb-6">Contato</h4>
            <div className="space-y-4 mb-6">
              <a
                href="https://wa.me/5563984274000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#cccccc] text-sm hover:text-[#f88601] transition-colors"
              >
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span>(63) 98427-4000</span>
              </a>

              <a
                href="mailto:redeconsigoficial@gmail.com"
                className="flex items-start gap-3 text-[#cccccc] text-sm hover:text-[#f88601] transition-colors"
              >
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span>redeconsigoficial@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-[#cccccc] text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>104 Norte Rua NE 05 LT 46 Sala 11/12 – Spazio Empresarial, Palmas - TO</span>
              </div>

              <a
                href="https://instagram.com/redeconsig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#cccccc] text-sm hover:text-[#f88601] transition-colors"
              >
                <Instagram size={18} />
                <span>@redeconsig</span>
              </a>
            </div>

            <button
              onClick={handleWhatsApp}
              className="gradient-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle size={18} />
              Enviar WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8">
          <p className="text-center text-[#999999] text-sm">
            Copyright © 2025 Rede Consig - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
