import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#procedures', label: 'Procedimentos' },
  { href: '#locations', label: 'Localização' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#024074] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-white font-bold text-xl md:text-2xl">Dr. Hugo da Cunha</a>
            <p className="text-sky-200 text-xs md:text-sm">Cirurgião Vascular</p>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-sky-300 transition-colors duration-300 font-medium">{link.label}</a>
            ))}
            <a href="tel:6232521015" className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-[#024074] px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5" />Ligar Agora
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-white hover:text-sky-300 transition-colors duration-300 font-medium py-2">{link.label}</a>
            ))}
            <a href="tel:6232521015" className="flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-[#024074] px-6 py-3 rounded-full font-semibold transition-all duration-300 w-fit">
              <Phone className="w-5 h-5" />Ligar Agora
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
