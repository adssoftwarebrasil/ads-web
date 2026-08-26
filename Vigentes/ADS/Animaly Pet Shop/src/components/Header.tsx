import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center space-x-3">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=animalyp%2Fnovo%2Flogo-borda-verde.jpeg&version_id=null"
              alt="Animaly Pet Shop"
              className="h-12 w-auto"
            />
            <span className="font-bold text-xl transition-colors text-gray-900">
              Animaly Pet Shop
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors hover:text-[#b900ba] text-gray-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
          <button
            className="md:hidden text-gray-900"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium transition-colors hover:text-[#b900ba] text-gray-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#b900ba] to-[#38d060] text-white px-6 py-2.5 rounded-full font-semibold text-center hover:shadow-xl transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
