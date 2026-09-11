import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { openWhatsApp, scrollToSection } from '../lib/whatsapp';

const MENU = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const SERVICES = [
  'Daminhas e Pajens',
  'Madrinhas',
  'Debutantes',
  'Trajes para Noivo',
  'Moda Festa',
  'Vestidos de Noiva',
];

export default function Footer() {
  return (
    <footer className="bg-[#721515] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Flogo.webp" alt="Ateliê Noiva e Cia" className="h-16 w-auto mb-6" />
            <p className="text-[#FAFFEF]/80 text-sm leading-relaxed mb-6">Com 25 anos de história, a Ateliê Noiva e Cia nasceu do sonho de Katia Sá em oferecer um conceito inovador em aluguel de roupas para o Vale do São Francisco. Nossa missão é tornar cada ocasião especial, oferecendo peças exclusivas e atendimento diferenciado.</p>
            <div className="space-y-3">
              <p className="text-sm text-[#FAFFEF]/80">• Atendimento personalizado e exclusivo</p>
              <p className="text-sm text-[#FAFFEF]/80">• Peças sofisticadas para momentos únicos</p>
              <p className="text-sm text-[#FAFFEF]/80">• Materiais de alta qualidade e ajuste sob medida</p>
              <p className="text-sm text-[#FAFFEF]/80">• 25 anos de excelência no mercado</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FAFFEF]">Menu</h3>
            <ul className="space-y-3">
              {MENU.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-[#FAFFEF]/80 hover:text-[#FAFFEF] transition-colors text-sm">{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FAFFEF]">Serviços</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollToSection('services')} className="text-[#FAFFEF]/80 hover:text-[#FAFFEF] transition-colors text-sm">{s}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FAFFEF]">Contato</h3>
            <div className="space-y-4 mb-6">
              <a href="tel:+558738617180" className="flex items-start gap-3 text-[#FAFFEF]/80 hover:text-[#FAFFEF] transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(87) 3861-7180</span>
              </a>
              <a href="mailto:noivaeciapetrolina@gmail.com" className="flex items-start gap-3 text-[#FAFFEF]/80 hover:text-[#FAFFEF] transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm break-all">noivaeciapetrolina@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#FAFFEF]/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Petrolina/PE</span>
              </div>
            </div>
            <button onClick={() => openWhatsApp()} className="group w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAFFEF] text-[#721515] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Enviar WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#5c1111] hover:bg-white hover:text-[#721515] rounded-full flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#5c1111] hover:bg-white hover:text-[#721515] rounded-full flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#FAFFEF]/20 text-center">
          <p className="text-sm text-[#FAFFEF]/60">Copyright © 2026 Ateliê Noiva e Cia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
