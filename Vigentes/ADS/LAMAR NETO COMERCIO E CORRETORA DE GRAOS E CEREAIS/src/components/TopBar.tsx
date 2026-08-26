import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#324422] text-[#e6e6e6] h-10 flex items-center">
      <div className="max-w-[1320px] mx-auto px-10 w-full">
        <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
          <a
            href="tel:+5566984082396"
            className="flex items-center gap-2 hover:text-[#fbbf1f] transition-colors whitespace-nowrap"
            aria-label="Ligar para (66) 98408-2396"
          >
            <Phone className="w-4 h-4 text-[#fbbf1f]" />
            <span>(66) 98408-2396</span>
          </a>
          <span className="text-[#666666] hidden md:inline">|</span>
          <a
            href="tel:+5566999383052"
            className="flex items-center gap-2 hover:text-[#fbbf1f] transition-colors whitespace-nowrap hidden sm:flex"
            aria-label="Ligar para (66) 99938-3052"
          >
            <Phone className="w-4 h-4 text-[#fbbf1f]" />
            <span>(66) 99938-3052</span>
          </a>
          <span className="text-[#666666] hidden lg:inline">|</span>
          <a
            href="mailto:contato@site.com"
            className="flex items-center gap-2 hover:text-[#fbbf1f] transition-colors whitespace-nowrap hidden lg:flex"
            aria-label="Enviar email para contato@site.com"
          >
            <Mail className="w-4 h-4 text-[#fbbf1f]" />
            <span>contato@site.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
