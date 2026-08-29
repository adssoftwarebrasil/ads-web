import { Facebook, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-[#B87333]">PEMAQ</span> Locação
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Locação de máquinas e equipamentos para construção civil com assistência técnica 24h.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFA500]">Menu</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFA500] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FFA500]">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>(19) 99834-3932</p>
              <p>pemaqlocacao@gmail.com</p>
              <p className="text-sm">
                Rua Virginia Pratta Gregolin, 685
                <br />
                Bairro Parque São Matheus
                <br />
                CEP 13409-217
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-[#FFA500]/20 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-[#FFA500]/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2026 PEMAQ Locação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
