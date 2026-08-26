import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5562993531722?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações.', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-[#0a154b] to-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            
            {/* Logo Substituída */}
            <div className="mb-6">
              <img 
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=exclusive-construtora%2FLogo_Exclusive2_Construtora_Branco.png&version_id=null" 
                alt="Exclusive Construtora" 
                className="h-16 w-auto object-contain" 
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mais de 12 anos de experiência em construção civil, oferecendo excelência e profissionalismo em cada projeto.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/EXCLUSIVECONSTRUTORALTDA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#104071] p-3 rounded-lg text-[#07dde5] hover:bg-[#07dde5] hover:text-[#0a154b] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/EXCLUSIVECONSTRUTORALTDA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#104071] p-3 rounded-lg text-[#07dde5] hover:bg-[#07dde5] hover:text-[#0a154b] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#07dde5]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Nossos Serviços
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#07dde5]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group text-left"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  Construção Residencial
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group text-left"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  Reformas em Geral
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group text-left"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  Projetos e Engenharia
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-gray-400 hover:text-[#07dde5] transition-colors flex items-center gap-2 group text-left"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  Financiamento Habitacional
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contato
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#07dde5]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <MapPin className="text-[#07dde5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                <span className="leading-relaxed">
                  Av. S1, 398, Q. 153, L. 25<br />
                  Setor Bueno, Goiânia-GO
                </span>
              </li>
              <li>
                <a
                  href="tel:+5562993531722"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#07dde5] transition-colors group"
                >
                  <Phone className="text-[#07dde5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span>(62)9 9353-1722</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@exclusiveconstrutora.com.br"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-[#07dde5] transition-colors group"
                >
                  <Mail className="text-[#07dde5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span className="break-all">contato@exclusiveconstrutora.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <Clock className="text-[#07dde5] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                <span className="leading-relaxed">
                  Seg-Sex: 08h-18h<br />
                  Sáb: 08h-12h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Exclusive Construtora Ltda. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={handleWhatsApp}
                className="text-gray-500 hover:text-[#07dde5] transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={handleWhatsApp}
                className="text-gray-500 hover:text-[#07dde5] transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};