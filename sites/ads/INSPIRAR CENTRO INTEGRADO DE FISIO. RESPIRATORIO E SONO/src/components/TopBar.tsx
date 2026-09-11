import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[rgb(25,85,137)] text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6 text-sm">
        <a
          href="tel:+556630153100"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="lucide lucide-phone" width={16} height={16} />
          <span>(66) 3015-3100</span>
        </a>
        <a
          href="mailto:contato@inspirarservicos.com.br"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail className="lucide lucide-mail" width={16} height={16} />
          <span>contato@inspirarservicos.com.br</span>
        </a>
      </div>
    </div>
  );
}
