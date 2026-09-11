import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-br from-[rgb(60,100,139)] to-[rgb(40,80,119)] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/livraria%20neves/img/LOGO%20BRANCO.png"
              alt="Livraria Neves"
              className="h-16 md:h-20 w-auto object-contain mb-4"
            />
            <p className="text-white/80 leading-relaxed">Publicações evangélicas de qualidade para toda a família. Sua livraria de confiança em Camaçari e região.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(157,119,0)]">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(157,119,0)]">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+557136277599" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Phone size={18} />
                  <span>(71) 3627-7599</span>
                </a>
              </li>
              <li>
                <a href="mailto:nevesartigosevangelicos@gmail.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span>nevesartigosevangelicos@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/livrarianevesartigosevang" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Instagram size={18} />
                  <span>@livrarianevesartigosevang</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgb(157,119,0)]">Localização</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-white/80">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Tv. Getúlio Vargas, 10<br />Alto da Cruz<br />Camaçari - BA, 42803-107</span>
              </div>
              <div className="flex items-start space-x-2 text-white/80">
                <Clock size={18} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Seg-Sex: 08:30-17:30</p>
                  <p>Sáb: 08:30-12:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">© 2026 Livraria Neves Artigos Evangélicos. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/livrarianevesartigosevang" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/557136277599" target="_blank" rel="noopener noreferrer" className="bg-[rgb(157,119,0)] p-3 rounded-lg hover:bg-[rgb(137,99,0)] transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
