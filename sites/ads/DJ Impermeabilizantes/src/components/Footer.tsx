import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#525152] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Logo e Social */}
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/djimpermeabilizantes%2FLogo-Sem-Fundo-header.png"
              alt="DJ Impermeabilizantes"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Qualidade e eficiência em impermeabilização e tintas. Desde 2018 atendendo Jaraguá do Sul e região com excelência.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#eeb932] transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white group-hover:text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#eeb932] transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eeb932]">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'home' },
                { label: 'Sobre Nós', id: 'about' },
                { label: 'Serviços', id: 'services' },
                { label: 'Depoimentos', id: 'testimonials' },
                { label: 'Contato', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-[#eeb932] transition-colors text-sm text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eeb932]">Nossas Soluções</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white transition-colors cursor-default">Manta Líquida</li>
              <li className="hover:text-white transition-colors cursor-default">Aditivos para Concreto</li>
              <li className="hover:text-white transition-colors cursor-default">Revestimentos</li>
              <li className="hover:text-white transition-colors cursor-default">Tintas Imobiliárias</li>
              <li className="hover:text-white transition-colors cursor-default">Impermeabilizantes</li>
              <li className="hover:text-white transition-colors cursor-default">Consultoria Técnica</li>
            </ul>
          </div>

          {/* Coluna 4: Contato (Dados Reais) */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eeb932]">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[#eeb932] mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Rua José Theodoro Ribeiro, 1405<br />
                  Sala 02 – Ilha da Figueira<br />
                  Jaraguá do Sul - SC
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#eeb932] mr-3 flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/5547999634067"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 text-sm hover:text-[#eeb932] transition-colors"
                >
                  (47) 99963-4067
                </a>
              </li>
              {/* CORREÇÃO AQUI: items-start para alinhar topo e break-words */}
              <li className="flex items-start">
                <Mail className="text-[#eeb932] mr-3 flex-shrink-0 mt-1" size={18} />
                <a
                  href="mailto:contato@djimpermeabilizantes.com.br"
                  className="text-gray-300 text-sm hover:text-[#eeb932] transition-colors break-words"
                >
                  contato@djimpermeabilizantes.com.br<wbr/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} DJ Instalação e Manutenção Predial Ltda. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              CNPJ: 32.227.243/0001-50
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}