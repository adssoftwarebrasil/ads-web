import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, FOOTER_SERVICES, scrollToSection } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/vitadent/logo-vitadent-site.png"
              alt="Vitadent"
              className="h-10 object-contain mb-5"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Laboratório de prótese dentária com mais de 75 anos de tradição e excelência. Damos vida ao dente!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/vitadent.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#0C4E9D] hover:bg-[#0C4E9D]/10 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="text-gray-400 hover:text-white" width={15} height={15} />
              </a>
              <a
                href="https://www.facebook.com/labvitadent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111] border border-[#2a2a2a] hover:border-[#0C4E9D] hover:bg-[#0C4E9D]/10 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="text-gray-400 hover:text-white" width={15} height={15} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-gray-500 hover:text-[#0C4E9D] text-sm transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin text-[#0C4E9D] mt-0.5 flex-shrink-0" width={14} height={14} />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Rua Vitória Régia, 1006<br />Vila Flores, Franca-SP
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="lucide lucide-phone text-[#0C4E9D] mt-0.5 flex-shrink-0" width={14} height={14} />
                <div>
                  <p className="text-gray-500 text-sm">(16) 3722-2256</p>
                  <p className="text-gray-500 text-sm">+55 (16) 99997-1815</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="lucide lucide-mail text-[#0C4E9D] mt-0.5 flex-shrink-0" width={14} height={14} />
                <span className="text-gray-500 text-sm">contato@vitadent.com.br</span>
              </li>
            </ul>
            <div className="mt-6 p-3.5 rounded-xl bg-[#0C4E9D]/10 border border-[#0C4E9D]/20">
              <p className="text-[#7db5ff] text-xs font-medium mb-0.5">Horário de Atendimento</p>
              <p className="text-gray-400 text-xs">Seg – Sex: 07:30 – 11:00 / 13:00 – 17:30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#111] py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">© 2026 Vitadent Prótese Dentária. Todos os direitos reservados.</p>
          <p className="text-gray-700 text-xs">Fundada em 1949 por Luiz Gonçalves — Franca, SP</p>
        </div>
      </div>
    </footer>
  );
}
