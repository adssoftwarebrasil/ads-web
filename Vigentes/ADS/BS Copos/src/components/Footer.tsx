import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { footerMenu, footerServices } from '../data';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/bscomerc%2Flogo.png"
              alt="BS Copos Personalizados"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Pioneiros no Mato Grosso do Sul com 14 anos de experiência no mercado de
              personalizados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bscoposemacrilicopersonalizados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#000EFF] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/bscopos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#000EFF] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Menu</h3>
            <ul className="space-y-3">
              {footerMenu.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#000EFF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <span className="text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin width={20} height={20} className="text-[#000EFF] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Rua 14 de Julho 3496, Campo Grande, MS</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone width={20} height={20} className="text-[#000EFF] flex-shrink-0" />
                <a
                  href="tel:6733216604"
                  className="text-gray-400 hover:text-[#000EFF] transition-colors"
                >
                  67 3321 6604
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail width={20} height={20} className="text-[#000EFF] flex-shrink-0" />
                <a
                  href="mailto:bspersonalizados@hotmail.com"
                  className="text-gray-400 hover:text-[#000EFF] transition-colors"
                >
                  bspersonalizados@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright © 2026 BS Copos Personalizados - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
