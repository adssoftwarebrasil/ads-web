import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <div className={`fixed w-full top-0 z-50 bg-[#003D6B] text-white py-2 px-4 text-center text-sm transition-all duration-500 hidden md:block ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <span>Mais de 30 anos de experiência</span>
          <span>Autorizado pelo IPEM-PR</span>
          <div className="flex gap-4">
            <a href="tel:+5541972037264" className="hover:text-[#EA1E26] transition-colors">
              (41) 9720-3764
            </a>
            <a href="mailto:balancasnovaera@hotmail.com" className="hover:text-[#EA1E26] transition-colors">
              balancasnovaera@hotmail.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-500 bg-white ${
          isScrolled
            ? 'top-0 shadow-lg py-3'
            : 'top-0 md:top-[40px] py-5'
        }`}
        style={{ borderBottom: '3px solid #0162B1' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#inicio" className="flex items-center">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=balan%C3%A7as%20nova%20era%2FLOGO_PRINCIPAL_JPG__2_-removebg-preview.png&version_id=null"
                alt="Balanças Nova Era"
                className="h-12 md:h-16 w-auto transition-all duration-300"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#333333] font-semibold hover:text-[#0162B1] transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EA1E26] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end text-sm mr-4">
                <a
                  href="tel:+5541972037264"
                  className="flex items-center gap-2 text-[#0162B1] font-semibold hover:text-[#EA1E26] transition-colors"
                >
                  <Phone size={16} />
                  (41) 9720-3764
                </a>
                <a
                  href="mailto:balancasnovaera@hotmail.com"
                  className="flex items-center gap-2 text-[#666666] text-xs hover:text-[#0162B1] transition-colors"
                >
                  <Mail size={14} />
                  balancasnovaera@hotmail.com
                </a>
              </div>
              <a
                href="https://wa.me/5541972037264"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <span className="bg-[#E8F2F9] text-[#0162B1] px-3 py-1 rounded-full text-xs font-bold">
                Autorizado IPEM-PR
              </span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#0162B1]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 mt-4 py-4 animate-slide-in">
            <nav className="container mx-auto px-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#333333] font-semibold hover:text-[#0162B1] transition-colors py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5541972037264"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
