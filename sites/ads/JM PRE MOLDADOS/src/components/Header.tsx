import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const phones = [
  { tel: 'tel:6799737241', label: '(67) 99973-7241' },
  { tel: 'tel:6799841689', label: '(67) 99984-1689' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'py-3 shadow-lg' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/jmpremoldados%2FJM-Pre-Moldados-Logo.webp"
              alt="JM Pré-moldados"
              className="h-12 md:h-14 w-auto object-contain"
              loading="eager"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#0D1B4C] font-medium hover:text-[#3b82f6] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            {phones.map((phone) => (
              <a
                key={phone.tel}
                href={phone.tel}
                className="flex items-center space-x-2 text-[#0D1B4C] hover:text-[#3b82f6] transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">{phone.label}</span>
              </a>
            ))}
          </div>
          <button
            className="lg:hidden text-[#0D1B4C] p-2 hover:text-[#3b82f6] transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0D1B4C] font-medium hover:text-[#FF6B35] transition-colors text-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {phones.map((phone) => (
              <a
                key={phone.tel}
                href={phone.tel}
                className="flex items-center space-x-2 text-[#0D1B4C] hover:text-[#3b82f6] transition-colors"
              >
                <Phone size={18} />
                <span>{phone.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
