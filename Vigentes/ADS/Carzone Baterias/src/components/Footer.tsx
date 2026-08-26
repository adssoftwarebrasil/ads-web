import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const productLinks = [
  { label: 'Bateria de Carro', href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Bateria%20de%20Carro' },
  { label: 'Bateria de Moto', href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Bateria%20de%20Moto' },
  {
    label: 'Bateria de Caminhão',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Bateria%20de%20Caminh%C3%A3o',
  },
  {
    label: 'Bateria de Trator',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Bateria%20de%20Trator',
  },
  {
    label: 'Bateria Start-Stop',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Bateria%20Start-Stop',
  },
  {
    label: 'Baterias para Frotas',
    href: 'http://wa.me/556593448962?text=Ol%C3%A1!%20Preciso%20de%3A%20Baterias%20para%20Frotas',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#000E27] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/logo-sem-fundo.webp"
              alt="Carzone Baterias"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Baterias automotivas com entrega e instalação gratuita em Cuiabá e Várzea Grande – MT. Equipe
              especializada, preços competitivos, atendimento ágil.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/carzonebateriascba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1003AD] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={16} height={16} />
              </a>
              <a
                href="http://wa.me/556593448962"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-[#F7EE30] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Produtos</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-[#F7EE30] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contato</h4>
            <div className="space-y-4">
              <a
                href="http://wa.me/556593448962"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <Phone
                  className="lucide lucide-phone text-[#F7EE30] mt-0.5 flex-shrink-0"
                  width={15}
                  height={15}
                />
                <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                  (65) 9 9344-8962
                </span>
              </a>
              <a href="mailto:carzonebateriascba@gmail.com" className="flex items-start gap-3 group">
                <Mail className="lucide lucide-mail text-[#F7EE30] mt-0.5 flex-shrink-0" width={15} height={15} />
                <span className="text-white/60 text-sm group-hover:text-white transition-colors break-all">
                  carzonebateriascba@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-[#F7EE30] mt-0.5 flex-shrink-0"
                  width={15}
                  height={15}
                />
                <span className="text-white/60 text-sm">R. Carlos Alberto Feitosa Macedo, 20 – Cuiabá – MT</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="lucide lucide-clock text-[#F7EE30] mt-0.5 flex-shrink-0" width={15} height={15} />
                <span className="text-white/60 text-sm">Seg-Sex: 7h30 às 21h | Sáb: 7h30 às 17h</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Carzone Baterias. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">Cuiabá e Várzea Grande – Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}
