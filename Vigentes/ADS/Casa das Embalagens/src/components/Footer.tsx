import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

const year = new Date().getFullYear();

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img
              src={`${BASE}/logo-casa-das-embalagens.png`}
              alt="Casa das Embalagens"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Mais de 7 anos levando embalagens de qualidade para empresas e empreendedores de Trindade e toda a região de Goiânia.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/casadasembalagensr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-red p-2.5 rounded-xl transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/casadasembalagensr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-blue p-2.5 rounded-xl transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/5562984075879"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-green-600 p-2.5 rounded-xl transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Menu</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5562984075879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-brand-yellow text-sm transition-colors duration-200"
              >
                <Phone size={14} className="flex-shrink-0" />
                (62) 98407-5879
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>Av. Elizabeth Marques, Qd 06 Lt 12, Parque dos Buritis, Trindade-GO</span>
              </div>
              <p className="text-white/60 text-sm">renataaguiarsilva@hotmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/40 text-xs">
            &copy; {year} Casa das Embalagens. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
