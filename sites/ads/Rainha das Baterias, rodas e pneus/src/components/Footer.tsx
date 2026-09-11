import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems = ['home', 'produtos', 'diferenciais', 'contato'];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 lg:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Flogo.png"
              alt="Rainha das Baterias"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-white opacity-80 text-sm leading-relaxed">
              Há 10 anos oferecendo as melhores soluções em baterias, rodas e pneus para{' '}
              <strong>Anápolis</strong> e região.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(248,203,27)]">Navegação</h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-white opacity-80 hover:text-[rgb(248,203,27)] hover:opacity-100 transition-all duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[rgb(248,203,27)]">Contato</h3>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white opacity-80 hover:text-[rgb(248,203,27)] hover:opacity-100 transition-all duration-300"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">(62) 99443-0039</span>
              </a>
              <a
                href="mailto:flaviocardososilva2@gmail.com"
                className="flex items-center space-x-3 text-white opacity-80 hover:text-[rgb(248,203,27)] hover:opacity-100 transition-all duration-300"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">flaviocardososilva2@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-white opacity-80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Av. João Florentino, Qd 01, Lt 16<br />
                  Parque Res. das Flores, Anápolis - GO
                </span>
              </div>
              <div className="flex items-center space-x-3 text-white opacity-80">
                <Clock size={18} className="flex-shrink-0" />
                <span className="text-sm">Seg a Sex 08:00-18:00 | Sáb 08:00-12:00</span>
              </div>
              <a
                href="https://www.instagram.com/rainhadasbateriaserodas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white opacity-80 hover:text-[rgb(248,203,27)] hover:opacity-100 transition-all duration-300"
              >
                <Instagram size={18} className="flex-shrink-0" />
                <span className="text-sm">@rainhadasbateriaserodas</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-60">
            © 2026 Rainha das Baterias, Rodas e Pneus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
