import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll to top button when scrolling
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const quickLinks = [
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'O Curso de Direito', id: 'curso' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Instagram', id: 'instagram' },
    { label: 'Localização', id: 'contato' },
    { label: 'Formulário', id: 'formulario' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/finan.novaandradina/',
      label: '@finan.novaandradina',
      color: '#E4405F'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/finan',
      label: '/finan',
      color: '#1877F2'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/finan',
      label: '/finan',
      color: '#0A66C2'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Av. Antônio Joaquim de Moura Andrade, 910',
      subtext: 'Centro – Nova Andradina/MS | CEP 79750-000'
    },

    {
      icon: Phone,
      text: '(67) 99978-0073',
      subtext: 'WhatsApp',
      link: 'https://wa.me/5567999780073'
    },
    {
      icon: Clock,
      text: 'Segunda a Sexta',
      subtext: '12h às 22h'
    }
  ];

  return (
    <>
      <footer className="relative" style={{ background: 'linear-gradient(180deg, #074785 0%, #052d54 100%)' }}>
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  style={{ fill: '#ffffff' }}></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo e descrição */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                {/* Logo com fundo branco */}
                <div className="bg-white rounded-xl p-2 shadow-lg">
                  <img 
                    src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=faculdade-finan%2Fapagar-removebg-preview.png&version_id=null"
                    alt="FINAN Logo"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Faculdade de Direito de Nova Andradina, mantida pela Associação Educacional Nove de Julho. Excelência na formação de profissionais do Direito.
              </p>
              
              {/* Badge MEC */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-xs font-semibold">Reconhecida pelo MEC</span>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="group text-white/80 hover:text-white transition-all flex items-center gap-2 text-sm"
                    >
                      <div className="w-0 group-hover:w-2 h-2 bg-red-500 rounded-full transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                Contato
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-red-400 transition-colors text-sm font-semibold block"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <p className="text-white text-sm font-semibold">{info.text}</p>
                        )}
                        <p className="text-white/60 text-xs mt-0.5">{info.subtext}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Redes Sociais e Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-red-500 rounded-full"></div>
                Redes Sociais
              </h4>
              
              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    
                   <a key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{Icon.name}</p>
                        <p className="text-white/60 text-xs">{social.label}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* CTA WhatsApp */}
              
                <a href="https://wa.me/5567999780073?text=Olá! Gostaria de mais informações sobre a FINAN."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
              >
                <Phone size={20} />
                <span>Fale Conosco</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2025 FINAN - Associação Educacional Nove de Julho
              </p>
              <p className="text-white/60 text-xs mt-1">
                CNPJ: 33.121.674/0001-01 | Todos os direitos reservados
              </p>
            </div>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>Feito com</span>
              <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
              <span>em Nova Andradina/MS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-110 group"
          style={{ backgroundColor: '#e4100f' }}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}