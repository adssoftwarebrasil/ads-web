import { Mail, Clock, Phone, Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[rgb(3,0,0)] text-white transition-all duration-300 h-10 md:h-12 opacity-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex lg:grid lg:grid-cols-3 items-center justify-between text-[10px] sm:text-xs md:text-sm">
        <a
          href="mailto:marcoplacas@yahoo.com.br"
          className="flex items-center gap-2 hover:text-[rgb(167,28,31)] transition-colors lg:justify-self-start"
        >
          <Mail className="lucide lucide-mail hidden sm:block" width={16} height={16} />
          <span className="truncate">marcoplacas@yahoo.com.br</span>
        </a>
        <div className="hidden lg:flex items-center justify-center gap-2 lg:justify-self-center">
          <Clock className="lucide lucide-clock" width={16} height={16} />
          <span>Seg-Sex: 8h às 18h</span>
        </div>
        <div className="flex items-center gap-3 md:gap-5 lg:justify-self-end">
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://www.facebook.com/marcoplacasbh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[rgb(167,28,31)] transition-colors"
            >
              <Facebook className="lucide lucide-facebook" width={16} height={16} />
            </a>
            <a
              href="https://www.instagram.com/marcoplacasbh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[rgb(167,28,31)] transition-colors"
            >
              <Instagram className="lucide lucide-instagram" width={16} height={16} />
            </a>
          </div>
          <span className="hidden md:block w-px h-4 bg-white/25"></span>
          <a
            href="tel:+553132224545"
            className="flex items-center gap-1.5 hover:text-[rgb(167,28,31)] transition-colors"
          >
            <Phone className="lucide lucide-phone hidden sm:block" width={14} height={14} />
            <span>(31) 3222-4545</span>
          </a>
          <a
            href="tel:+5531999749902"
            className="flex items-center gap-1.5 hover:text-[rgb(167,28,31)] transition-colors"
          >
            <Phone
              className="lucide lucide-phone hidden sm:block text-green-500"
              width={14}
              height={14}
            />
            <span>(31) 99974-9902</span>
          </a>
        </div>
      </div>
    </div>
  );
}
