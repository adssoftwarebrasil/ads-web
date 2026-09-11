import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { scrollToId } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-6 flex items-center group cursor-pointer">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=TURBO%20MASTER%2Flogoturbomaster%20(1).png&version_id=null"
                alt="Turbo Master Logo"
                className="h-14 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Especialistas em sistema diesel com mais de 30 anos de experiência. Excelência técnica e
              atendimento especializado em Cuiabá - MT e região.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/turbo_master_mt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram
                  className="lucide lucide-instagram text-gray-400 group-hover:text-white"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://wa.me/5565992174220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-500 hover:text-primary-500 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3 group">
                <Phone
                  className="lucide lucide-phone text-primary-500 mt-0.5 flex-shrink-0"
                  width={14}
                  height={14}
                />
                <a
                  href="tel:+5565992174220"
                  className="text-gray-500 group-hover:text-gray-200 text-sm transition-colors"
                >
                  (65) 99217-4220
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail
                  className="lucide lucide-mail text-primary-500 mt-0.5 flex-shrink-0"
                  width={14}
                  height={14}
                />
                <a
                  href="mailto:turbomaster1710@gmail.com"
                  className="text-gray-500 group-hover:text-gray-200 text-sm transition-colors break-all"
                >
                  turbomaster1710@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  className="lucide lucide-map-pin text-primary-500 mt-0.5 flex-shrink-0"
                  width={14}
                  height={14}
                />
                <span className="text-gray-500 group-hover:text-gray-200 text-sm leading-tight transition-colors">
                  Av. Z, 120 - Distrito Industrial<br />
                  Cuiabá - MT, 78098-530
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[10px] md:text-xs text-center sm:text-left tracking-wide">
            © 2026 TURBO MASTER. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-[10px] md:text-xs font-medium uppercase tracking-widest">
            Especialistas em Turbinas e Sistemas Injeção Diesel
          </p>
        </div>
      </div>
    </footer>
  );
}
