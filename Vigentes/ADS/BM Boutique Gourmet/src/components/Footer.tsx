import { Instagram, Music } from 'lucide-react';

const menuLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fimg%2FLogo.webp"
              alt="BM Boutique das Linguiças"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A primeira boutique de linguiças gourmet de Goiânia. 9 anos de experiência da Indústria Boi Manso, agora com inovação e personalização total.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/bm_boutique_das_linguicas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[rgb(242,51,52)] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@bmlinguicas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-[rgb(242,51,52)] flex items-center justify-center transition-all duration-300"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Menu</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[rgb(242,51,52)] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+556299218420"
                  className="text-gray-400 hover:text-[rgb(242,51,52)] text-sm transition-colors duration-300"
                >
                  (62) 99218-4220
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/556293474673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[rgb(242,51,52)] text-sm transition-colors duration-300"
                >
                  WhatsApp: (62) 93474-673
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">Av. Ismerino Soares de Carvalho, 707</p>
              </li>
              <li>
                <p className="text-gray-400 text-sm">Goiânia - GO</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Funcionamento</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Seg - Sex: 8h às 19h</li>
              <li className="text-gray-400 text-sm">Sábado: 8h às 12h</li>
              <li className="text-gray-400 text-sm">Domingo: Fechado</li>
              <li className="text-gray-400 text-sm mt-4">Data de abertura: Abril/2024</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 BM Boutique das Linguiças. CNPJ: 54.069.914/0001-36. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm">Política de Privacidade</span>
            <span className="text-gray-500 text-sm">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
