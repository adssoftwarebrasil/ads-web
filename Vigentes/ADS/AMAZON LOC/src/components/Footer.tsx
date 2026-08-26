import { Facebook, Instagram, MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { scrollToId } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Equipamentos', id: 'equipamentos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Como Funciona', id: 'processo' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(63,59,116)] text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Flogo.png"
              alt="AmazonLoc Logo"
              className="h-14 w-auto mb-6 brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
            />
            <p className="text-gray-300 leading-relaxed mb-8 max-w-sm">
              Locação de equipamentos para construção civil com qualidade, rapidez e sem burocracia
              em Cuiabá e Várzea Grande.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(13,133,77)] text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[rgb(13,133,77)] text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Navegação
              <span className="absolute bottom-[-8px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-[rgb(13,133,77)] rounded-full"></span>
            </h3>
            <ul className="space-y-3 w-full">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-300 hover:text-[rgb(34,197,94)] hover:translate-x-1 transition-all duration-300 text-sm md:text-base py-1"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Fale Conosco
              <span className="absolute bottom-[-8px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-[rgb(13,133,77)] rounded-full"></span>
            </h3>
            <ul className="space-y-5 w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="text-[rgb(34,197,94)] flex-shrink-0 mt-0.5">
                  <MapPin className="lucide lucide-map-pin w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm md:text-base max-w-xs md:max-w-none">
                  Rua Prefeito Napoleão José da Costa, nº 93, Ponte Nova, Várzea Grande
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="text-[rgb(34,197,94)] flex-shrink-0 mt-0.5">
                  <Phone className="lucide lucide-phone w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm md:text-base max-w-xs md:max-w-none">
                  <a href="tel:6539274720" className="hover:text-[rgb(34,197,94)] transition-colors">
                    (65) 3927-4720
                  </a>
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="text-[rgb(34,197,94)] flex-shrink-0 mt-0.5">
                  <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm md:text-base max-w-xs md:max-w-none">
                  <a
                    href="https://wa.me/5565992766111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[rgb(34,197,94)] transition-colors"
                  >
                    (65) 99276-6111
                  </a>
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="text-[rgb(34,197,94)] flex-shrink-0 mt-0.5">
                  <Mail className="lucide lucide-mail w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm md:text-base max-w-xs md:max-w-none">
                  <a
                    href="mailto:vendas@amazonloc.com.br"
                    className="hover:text-[rgb(34,197,94)] transition-colors"
                  >
                    vendas@amazonloc.com.br
                  </a>
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="text-[rgb(34,197,94)] flex-shrink-0 mt-0.5">
                  <Clock className="lucide lucide-clock w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm md:text-base max-w-xs md:max-w-none">
                  <div className="flex flex-col">
                    <span>Seg - Sex: 07:00 - 17:00</span>
                    <span>Sábado: 07:00 - 11:00</span>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-6 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2026 AmazonLoc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
