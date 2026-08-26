import { Phone, Mail, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-black text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+554599160175"
              className="flex items-center gap-2 hover:text-[rgb(237,23,21)] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={14} height={14} />
              <span>(45) 99916-0175</span>
            </a>
            <a
              href="mailto:pecas@autopecasdiniz.com.br"
              className="flex items-center gap-2 hover:text-[rgb(237,23,21)] transition-colors"
            >
              <Mail className="lucide lucide-mail" width={14} height={14} />
              <span>pecas@autopecasdiniz.com.br</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="lucide lucide-clock" width={14} height={14} />
            <span>Seg-Sex: 08:00-12:00 | 13:30-18:00 | Sáb: 08:00-12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
