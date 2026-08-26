import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_REVIEW_URL } from '../lib/constants';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 110, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/">
              <img src={LOGO_URL} alt="Fort das Cestas" className="h-14 mb-6 brightness-0 invert" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Ha 6 anos transformando vidas atraves de cestas de qualidade em Goiania. A construcao de um mundo onde todos tenham acesso a uma refeicao digna.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Navegacao</h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'Cestas Basicas', action: () => scrollToSection('cestas-basicas') },
                { label: 'Sobre Nos', action: () => scrollToSection('sobre') },
                { label: 'Contato', action: () => scrollToSection('contato') },
              ].map((item) => (
                <li key={item.label}>
                  <button onClick={item.action} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-primary" />
                <span>GO-040 - St. Garavelo, Aparecida de Goiania - GO</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={16} className="flex-shrink-0 mt-1 text-primary" />
                <span>(62) 99999-8831</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={16} className="flex-shrink-0 mt-1 text-primary" />
                <span>Seg-Sex: 08-18h | Sab: 08-13h</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Redes Sociais</h3>
            <div className="flex gap-3 mb-6">
              {[
                { href: INSTAGRAM_URL, icon: <Instagram size={18} /> },
                { href: FACEBOOK_URL, icon: <Facebook size={18} /> },
                { href: GOOGLE_REVIEW_URL, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 Fort das Cestas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
