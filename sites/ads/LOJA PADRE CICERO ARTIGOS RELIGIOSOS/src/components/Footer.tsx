import { MessageCircle, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-5">
              <img
                src="https://storage.lucasmendes.dev/site-sp/loja%20padre%20cicero/img/logo-sem-fundo.webp"
                alt="Loja Padre Cícero"
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-6">
              Sua loja de artigos religiosos em Juazeiro do Norte. Servindo à fé e à devoção de
              romeiros e fiéis desde 2016, com carinho, qualidade e tradição.
            </p>
            <div className="flex gap-3">
              <a
                href="http://wa.me/5588999153119"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:text-green-300 transition-all duration-200"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.instagram.com/lojapecicero/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 hover:bg-pink-500/20 hover:text-pink-300 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  R. São José, 179 - Centro<br />Juazeiro do Norte - CE
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+5588999153119"
                  className="text-white/50 text-sm hover:text-brand-gold transition-colors"
                >
                  (88) 99915-3119
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <div className="text-white/50 text-sm leading-relaxed">
                  Seg–Sex: 08:00–17:30<br />Sábado: 08:00–14:00<br />Domingo: Fechado
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Loja Padre Cícero Artigos Religiosos. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">CNPJ: 25.462.129/0001-42</p>
        </div>
      </div>
    </footer>
  );
}
