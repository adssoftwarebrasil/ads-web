import { MapPin, Phone, Clock, Mail, Instagram, Send } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = ['Início', 'Nossa História', 'Produtos', 'Cursos Presenciais', 'Fale Conosco'];

const popularLinks = [
  'Velas Artesanais',
  'Produtos Acrilex',
  'Peças em MDF',
  'Pincéis Profissionais',
  'Vidros e Embalagens',
  'Insumos para Velas',
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e5a] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#009CA6] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#EB097C] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <img src="https://storage.lucasmendes.dev/site-sp/vida%20kriativa%2Fimg%2Flogo-sem-fundo.png" alt="Vida Kriativa" className="h-14 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            <p className="text-blue-100/80 leading-relaxed text-sm">Há mais de 17 anos oferecendo os melhores produtos, cursos e inspiração para artesanato em Foz do Iguaçu. Transforme sua criatividade em arte conosco.</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/vidakriativafoz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#EB097C] border border-white/10 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 group" aria-label="Instagram">
                <Instagram className="lucide lucide-instagram w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.tiktok.com/@vidakriativafoz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#000000] border border-white/10 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 group" aria-label="TikTok">
                <Send className="lucide lucide-send w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="http://wa.me/554599938248" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 group" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FDBA16]">Navegação</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link}>
                  <button className="text-blue-100/70 hover:text-[#009CA6] transition-all hover:translate-x-1 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#009CA6] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>{link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FDBA16]">Populares</h4>
            <ul className="space-y-3 text-sm">
              {popularLinks.map((link) => (
                <li key={link} className="text-blue-100/70 hover:text-white transition-colors cursor-default">{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FDBA16]">Onde Estamos</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#009CA6] flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-blue-100/80 leading-relaxed">R. Fagundes Varela, 488<br />Vila Portes, Foz do Iguaçu-PR<br />CEP: 85865-160</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="lucide lucide-phone w-5 h-5 text-[#009CA6] flex-shrink-0 group-hover:text-white transition-colors" />
                <div className="text-blue-100/80">
                  <a href="tel:+554530289710" className="hover:text-white transition-colors block">(45) 3028-9710</a>
                  <a href="http://wa.me/554599938248" className="hover:text-white transition-colors block mt-0.5">(45) 99993-8248</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="lucide lucide-clock w-5 h-5 text-[#009CA6] flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-blue-100/80 leading-relaxed">Seg - Sex: 8h às 18h<br />Sáb: 8h às 14h</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="lucide lucide-mail w-5 h-5 text-[#009CA6] flex-shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:contato@vidakriativa.com.br" className="text-blue-100/80 hover:text-white transition-colors">contato@vidakriativa.com.br</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/60 text-sm text-center md:text-left">© 2026 Vida Kriativa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
