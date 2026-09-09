import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { LOGO, social } from '../data/products';
import SocialLinks from './SocialLinks';

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/nossa-historia', label: 'Nossa História' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/receitas', label: 'Receitas' },
  { to: '/contato', label: 'Contato' },
];

const whatsappLink = `${social.whatsapp}?text=${encodeURIComponent(
  'Olá, gostaria de saber mais sobre os produtos Veranita.'
)}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden md:block bg-brand-red text-white text-xs">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 font-medium">
            <a
              href="tel:+5516997516375"
              className="inline-flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> (16) 99751-6375
            </a>
            <a
              href="mailto:contato@veranita.com.br"
              className="inline-flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> contato@veranita.com.br
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-wider uppercase text-[10px]">
              Sertãozinho - SP | Desde 1976
            </span>
            <SocialLinks
              iconClassName="w-3.5 h-3.5"
              bg="bg-transparent"
              hoverBg="hover:bg-brand-gold"
              color="text-white"
              hoverColor="hover:text-brand-brown"
              className="!gap-1.5"
            />
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled ? 'bg-brand-gold shadow-card' : 'bg-brand-gold/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={LOGO}
                alt="Veranita Produtos Alimentícios"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? 'text-brand-red' : 'text-brand-brown hover:text-brand-red'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-4 right-4 -bottom-1 h-[2px] bg-brand-red"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-red text-white text-sm font-bold tracking-wide uppercase hover:bg-brand-brown transition-colors duration-300 shadow-soft"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden p-2 text-brand-brown hover:text-brand-red transition-colors"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden bg-brand-gold-dark border-t border-brand-brown/10"
            >
              <nav className="flex flex-col px-5 py-6 gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-bold tracking-wide uppercase transition-colors duration-300 ${
                        isActive
                          ? 'bg-brand-red text-white'
                          : 'text-brand-brown hover:bg-brand-red hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-brand-red text-white text-sm font-bold tracking-wide uppercase hover:bg-brand-brown transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
                <SocialLinks
                  className="justify-center mt-4"
                  bg="bg-brand-brown"
                  hoverBg="hover:bg-brand-red"
                  color="text-brand-gold"
                  hoverColor="hover:text-white"
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
