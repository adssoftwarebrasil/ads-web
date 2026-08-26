import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Programas', href: '#programas' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      items: ['(67) 3428-5034', '(67) 99956-4186', '(67) 99672-7353'],
    },
    {
      icon: Mail,
      items: ['contato@agrocolmeia.com.br'],
    },
    {
      icon: MapPin,
      items: ['Av. Marcelino Pires, 6575', 'Vila São Francisco', 'CEP 79833-001', 'Dourados - MS'],
    },
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/agrocolmeia',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/agrocolmeia/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/agrocolm%C3%A9ia',
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#12441f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FLogoAgrocolmeia.png"
              alt="Agrocolméia Logo"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed mb-6">
              Cultivando parcerias que geram resultados. Do plantio à colheita, caminhando junto com você.
            </p>
            <div className="flex items-center space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#fdaf2a] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fdaf2a]">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/80 hover:text-[#fdaf2a] transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fdaf2a]">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Análise de Solo</li>
              <li className="text-white/80">Análise Biológica</li>
              <li className="text-white/80">Análise Foliar</li>
              <li className="text-white/80">Nutrição de Culturas</li>
              <li className="text-white/80">Distribuição de Sementes</li>
              <li className="text-white/80">Consultoria Técnica</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fdaf2a]">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <info.icon className="w-5 h-5 text-[#fdaf2a]" />
                  </div>
                  <div className="space-y-1">
                    {info.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-white/80 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center space-y-2">
            <p className="text-white/60 text-sm">
              © {currentYear} Agrocolméia Agropecuária LTDA — CNPJ: 51.111.027/0001-92
            </p>
            <p className="text-white/60 text-sm">Todos os direitos reservados.</p>
            <p className="text-[#fdaf2a] font-semibold text-sm uppercase tracking-wide mt-4">
              Unidos com o Produtor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
