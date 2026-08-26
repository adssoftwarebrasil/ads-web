import { MapPin, Phone, Clock, Heart, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const LOGO =
  'https://storage.lucasmendes.dev/site-sp/dois%20irmaos%20lava%20car%20e%20estetica%20automotiva/img/logo-sem-fundo.webp';
const INSTAGRAM = 'https://www.instagram.com/doisirmaoslavacarsinop8/';
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61575753323770';
const WHATSAPP = 'https://wa.me/5566996156031';

const navItems = [
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

const serviceItems = [
  'Lavagem Completa',
  'Lavagem de Caminhão',
  'Máquinas Pesadas',
  'Lavagem a Seco',
  'Lavagem Americana',
  'Estética Automotiva',
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO} alt="Dois Irmãos Car" className="h-14 w-auto object-contain mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Especialistas em lavagem e estética automotiva em Sinop-MT. Cuidando do seu veículo com
              qualidade e confiança desde 2022.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue/20 hover:border-brand-blue/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram
                  width={16}
                  height={16}
                  className="lucide lucide-instagram text-brand-blue"
                />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue/20 hover:border-brand-blue/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook
                  width={16}
                  height={16}
                  className="lucide lucide-facebook text-brand-blue"
                />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon width={16} height={16} className="text-green-400" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navegação</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-white/50 hover:text-brand-blue text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Serviços</h4>
            <ul className="space-y-3">
              {serviceItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-white/50 hover:text-brand-blue text-sm transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-brand-blue mt-0.5 shrink-0"
                />
                <span className="text-white/50 text-sm">
                  Av. Londrina, 90
                  <br />
                  Distrito Industrial, Sinop-MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  width={15}
                  height={15}
                  className="lucide lucide-phone text-brand-blue shrink-0"
                />
                <a
                  href="tel:+5566996156031"
                  className="text-white/50 hover:text-brand-blue text-sm transition-colors"
                >
                  (66) 9 9615-6031
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="lucide lucide-clock text-brand-blue mt-0.5 shrink-0"
                />
                <span className="text-white/50 text-sm">Seg–Sáb: 07:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Dois Irmãos Car. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Feito com{' '}
            <Heart
              width={10}
              height={10}
              className="lucide lucide-heart text-brand-blue fill-brand-blue"
            />{' '}
            em Sinop, MT
          </p>
        </div>
      </div>
    </footer>
  );
}
