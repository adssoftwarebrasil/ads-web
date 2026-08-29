import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_REVIEW_URL } from '../lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerEl = document.querySelector('header');
        const offset = headerEl ? headerEl.offsetHeight + 8 : 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const navItems = [
    { label: 'Inicio', action: () => { setIsMenuOpen(false); if (isHome) setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50); else window.location.href = '/'; } },
    { label: 'Cestas Basicas', action: () => scrollToSection('cestas-basicas') },
    { label: 'Sobre Nos', action: () => scrollToSection('sobre') },
    { label: 'Contato', action: () => scrollToSection('contato') },
  ];

  return (
    <>
      <div className="bg-primary-dark text-white text-xs sm:text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <div className="flex items-center gap-6">
              <a href="mailto:contato@fortdascestas.com.br" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail size={13} />
                contato@fortdascestas.com.br
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone size={13} />
                (62) 99999-8831
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={14} /></a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex-shrink-0">
              <img src={LOGO_URL} alt="Fort das Cestas" className="h-11 lg:h-14" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button key={item.label} onClick={item.action} className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors rounded-lg hover:bg-primary-50">
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um pedido.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
              >
                <Phone size={16} />
                Fazer Pedido
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <button key={item.label} onClick={item.action} className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary-50 transition-colors font-medium rounded-lg">
                  {item.label}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um pedido.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-medium mt-2"
              >
                <Phone size={18} />
                Fazer Pedido
              </a>
              <div className="flex justify-center gap-4 pt-3 border-t border-gray-100 mt-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-primary"><Instagram size={22} /></a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-primary"><Facebook size={22} /></a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
