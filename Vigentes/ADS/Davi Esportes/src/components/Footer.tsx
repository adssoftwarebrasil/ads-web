import { ShoppingCart, MapPin, Phone, Smartphone, Instagram } from 'lucide-react';

const socials = [
  { href: 'https://www.instagram.com/davi_esportess', label: '@davi_esportess' },
  { href: 'https://www.instagram.com/daviesportesarmas', label: '@daviesportesarmas' },
];

const categories = ['Artigos Esportivos', 'Fitness', 'Armas e Munições', 'Fogos de Artifício', 'Troféus e Medalhas'];

export default function Footer() {
  return (
    <footer className="bg-[#363435] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#FDF341] mb-4">DAVI ESPORTES</h3>
            <p className="text-gray-300 mb-6">45 anos de paixão pelo esporte</p>
            <a
              href="https://daviesportes.lojavirtualnuvem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FDF341] text-[#363435] px-6 py-3 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(253,243,65,0.4)]"
            >
              <ShoppingCart size={20} />
              Loja Virtual
            </a>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#FDF341] mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Av. Fernando Machado 255 D</p>
                  <p className="text-gray-300 text-sm">Ao lado do Clube Industrial</p>
                </div>
              </div>
              <a
                href="tel:+554933223132"
                className="flex items-center gap-2 text-gray-300 hover:text-[#FDF341] transition-colors"
              >
                <Phone size={20} />
                (49) 3322-3132
              </a>
              <a
                href="https://wa.me/5549999188763"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#FDF341] transition-colors"
              >
                <Smartphone size={20} />
                (49) 9 9918-8763
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#FDF341] mb-4">Siga-nos</h4>
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FDF341] transition-colors"
                >
                  <Instagram size={20} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#FDF341] mb-4">Categorias</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#products" className="text-gray-300 hover:text-[#FDF341] transition-colors text-sm">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#FDF341] pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Davi Esportes - 45 anos de tradição | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
