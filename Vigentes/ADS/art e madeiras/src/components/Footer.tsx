import { Trees, Instagram, MessageCircle, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { scrollToId, scrollToTop } from '../lib/scroll';

const navItems = [
  { label: 'Início', action: () => scrollToTop() },
  { label: 'Serviços', action: () => scrollToId('servicos') },
  { label: 'Galeria', action: () => scrollToId('galeria') },
  { label: 'Sobre Nós', action: () => scrollToId('sobre') },
  { label: 'Contato', action: () => scrollToId('contato') },
  { label: 'Solicitar Orçamento', action: () => scrollToId('contato') },
];

const servicos = [
  'Decks de Madeira',
  'Pergolados',
  'Pisos de Madeira',
  'Cercas em Madeira',
  'Parques Infantis',
  'Forros de Madeira',
];

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-stone-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Trees className="lucide lucide-trees text-amber-400 w-8 h-8" />
              <h3 className="text-lg font-bold text-amber-400">Art &amp; madeiras</h3>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Há mais de 10 anos transformando espaços com qualidade, tradição e compromisso. Seu projeto
              em madeira merece o melhor.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/art_emadeiras_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-pink-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram w-6 h-6" />
              </a>
              <a
                href="https://wa.me/5562991511688"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-emerald-500 transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Navegação</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="block w-full md:w-auto text-stone-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Nossos Serviços</h3>
            <div className="space-y-3">
              {servicos.map((s) => (
                <div key={s} className="text-stone-300 text-sm">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-400 mb-4">Entre em Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start justify-center md:justify-start gap-2 text-stone-300 text-sm">
                <MapPin className="lucide lucide-map-pin w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Jardim dos Girassóis
                  <br />
                  Aparecida de Goiânia/GO
                </span>
              </div>
              <a
                href="tel:+5562991511688"
                className="flex items-start justify-center md:justify-start gap-2 text-stone-300 hover:text-amber-400 transition-colors text-sm"
              >
                <Phone className="lucide lucide-phone w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>(62) 9 9151-1688</span>
              </a>
              <a
                href="mailto:rochajocta@gmail.com"
                className="flex items-start justify-center md:justify-start gap-2 text-stone-300 hover:text-amber-400 transition-colors text-sm break-all"
              >
                <Mail className="lucide lucide-mail w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>rochajocta@gmail.com</span>
              </a>
              <div className="flex items-start justify-center md:justify-start gap-2 text-stone-300 text-sm">
                <Clock className="lucide lucide-clock w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Seg-Sex: 8h-18h
                  <br />
                  Sáb: 8h-12h
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm text-center md:text-left">
              © 2026 Art &amp; madeiras. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-stone-500 text-sm select-none cursor-default">
              <span>Política de Privacidade</span>
              <span>Termos de Uso</span>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="mt-8 mx-auto flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="lucide lucide-arrow-up w-5 h-5" />
          <span className="text-sm font-semibold">Voltar ao topo</span>
        </button>
      </div>
    </footer>
  );
}
