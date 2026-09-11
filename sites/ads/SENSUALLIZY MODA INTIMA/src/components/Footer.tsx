import { Instagram, Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/sensuallizy%20moda%20intima%2Fimg%2Flogo.webp';
const WHATSAPP = 'http://wa.me/556696681932';
const INSTAGRAM = 'https://www.instagram.com/sensuallizymodaintima/';
const FACEBOOK = 'https://www.facebook.com/p/Sensuallizy-Moda-%C3%8Dntima-100029115622961/';

const links = [
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const horarios = [
  { dia: 'Segunda a Sexta', hora: '8h - 18h', fechado: false },
  { dia: 'Sábado', hora: '8h - 15h', fechado: false },
  { dia: 'Domingo', hora: 'Fechado', fechado: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#212423] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={LOGO} alt="Sensuallizy Moda Íntima" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/70 leading-relaxed mb-6">
              Especialistas em lingerie, camisolas e pijamas de alta qualidade desde 2015. Atendimento personalizado e humanizado.
            </p>
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#E24244] flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#E24244] flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <Facebook className="lucide lucide-facebook w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-[#E24244] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Horários</h3>
            <ul className="space-y-3 text-sm">
              {horarios.map((h) => (
                <li key={h.dia} className="flex justify-between">
                  <span className="text-white/70">{h.dia}</span>
                  <span className={`font-medium ${h.fechado ? 'text-[#E24244]' : 'text-white'}`}>{h.hora}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="lucide lucide-map-pin w-5 h-5 text-[#E24244] flex-shrink-0 mt-1" />
                <span className="text-white/70 text-sm">Av. das Acácias, 2120 - Sala A<br />Sinop - MT, 78550-308</span>
              </li>
              <li className="flex gap-3">
                <Phone className="lucide lucide-phone w-5 h-5 text-[#E24244] flex-shrink-0" />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#E24244] transition-colors text-sm">(66) 99668-1932</a>
              </li>
              <li className="flex gap-3">
                <Mail className="lucide lucide-mail w-5 h-5 text-[#E24244] flex-shrink-0" />
                <a href="mailto:sensuallizymodaintima@gmail.com" className="text-white/70 hover:text-[#E24244] transition-colors text-sm break-all">sensuallizymodaintima@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2026 Sensuallizy Moda Íntima. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              Feito com <Heart className="lucide lucide-heart w-4 h-4 text-[#E24244] fill-[#E24244]" /> em Sinop - MT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
