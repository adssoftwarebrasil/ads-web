import { Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const quickLinks: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos e Serviços', id: 'produtos' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(3,0,0)] text-white py-16 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Flogo.png"
              alt="Marco Placas"
              className="h-16 mb-6 brightness-0 invert"
            />
            <h3 className="font-bold text-xl mb-3">Marco Placas Indústria e Comércio Ltda</h3>
            <p className="text-gray-300 leading-relaxed">
              Tradição de 100 anos em sinalização visual
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-[rgb(167,28,31)] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="mailto:marcoplacas@yahoo.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-[rgb(167,28,31)] transition-colors"
              >
                <Mail className="lucide lucide-mail" width={20} height={20} />
                <span>marcoplacas@yahoo.com.br</span>
              </a>
              <a
                href="tel:+553132224545"
                className="flex items-center gap-3 text-gray-300 hover:text-[rgb(167,28,31)] transition-colors"
              >
                <Phone className="lucide lucide-phone" width={20} height={20} />
                <span>(31) 3222-4545</span>
              </a>
              <a
                href="https://wa.me/5531999749902"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[rgb(167,28,31)] transition-colors"
              >
                <Phone className="lucide lucide-phone text-green-500" width={20} height={20} />
                <span>(31) 99974-9902 (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="lucide lucide-clock" width={20} height={20} />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/marcoplacasbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[rgb(167,28,31)] transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="lucide lucide-facebook" width={20} height={20} />
                </a>
                <a
                  href="https://www.instagram.com/marcoplacasbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[rgb(167,28,31)] transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="lucide lucide-instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-gray-400">© 2026 Marco Placas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
