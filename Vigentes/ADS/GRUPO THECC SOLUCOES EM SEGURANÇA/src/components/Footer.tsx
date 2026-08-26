import { Shield, Instagram, Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Contato', id: 'contato' },
];

const services = ['Segurança Eletrônica', 'Chaveiro Profissional', 'Serralheria', 'Elétrica Residencial', 'Automação Residencial'];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="lucide lucide-shield h-12 w-12 text-[#FFD700] fill-[#FFD700]" />
              <div className="ml-3">
                <div className="text-white font-bold text-xl leading-tight">GRUPO</div>
                <div className="text-[#FFD700] font-bold text-xl leading-tight">THECC</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">27 anos de experiência em segurança eletrônica, chaveiro e serviços especializados.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1A1A2E] transition-all duration-300"><Instagram className="lucide lucide-instagram w-5 h-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFD700] hover:text-[#1A1A2E] transition-all duration-300"><Facebook className="lucide lucide-facebook w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}><button onClick={() => scrollToId(l.id)} className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">{l.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-gray-400">{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Atendimento</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="lucide lucide-phone w-5 h-5 text-[#FFD700] mr-3 flex-shrink-0 mt-0.5" />
                <div><a href="tel:+556198449664" className="text-gray-400 hover:text-[#FFD700] transition-colors">(61) 98449-6648</a></div>
              </li>
              <li className="flex items-start">
                <Mail className="lucide lucide-mail w-5 h-5 text-[#FFD700] mr-3 flex-shrink-0 mt-0.5" />
                <div><a href="mailto:contato@grupthecc.com.br" className="text-gray-400 hover:text-[#FFD700] transition-colors break-words text-sm sm:text-base">contato@grupthecc.com.br</a></div>
              </li>
              <li className="flex items-start">
                <Clock className="lucide lucide-clock w-5 h-5 text-[#FFD700] mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">24 Horas</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#FFD700] mr-3 mb-2 md:mb-0 flex-shrink-0" />
            <p className="text-gray-400"><span className="font-semibold text-white">Endereço:</span> Rua 10 Chácara 179 LOJA 04 Nº 6A - Vicente Pires, Brasília/DF - CEP: 72007-395</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">2026 Grupo THECC - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
