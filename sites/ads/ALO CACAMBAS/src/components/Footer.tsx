import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Contato', target: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#1e1e1e] text-[#fefefe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/logo-sem-fundo.webp"
              alt="Alô Caçambas"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Sua solução confiável e eficiente em locação de caçambas em Uberlândia. Servindo a
              região com agilidade, responsabilidade e compromisso desde 2018.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/alocacambasudia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#ffaf24] rounded-xl flex items-center justify-center transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram
                  className="lucide lucide-instagram text-white group-hover:text-[#343434] transition-colors"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="http://wa.me/553491233322"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#ffaf24] rounded-xl flex items-center justify-center transition-all duration-200 group"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon
                  className="text-white group-hover:text-[#343434] transition-colors"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#fefefe] font-bold text-sm uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-white/55 hover:text-[#ffaf24] text-sm transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#fefefe] font-bold text-sm uppercase tracking-wider mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+553491233322"
                  className="flex items-start gap-2.5 text-white/55 hover:text-[#ffaf24] text-sm transition-colors"
                >
                  <Phone
                    className="lucide lucide-phone mt-0.5 shrink-0"
                    width={15}
                    height={15}
                  />
                  (34) 9 9123-3322
                </a>
              </li>
              <li>
                <a
                  href="mailto:alocacambasudi@gmail.com"
                  className="flex items-start gap-2.5 text-white/55 hover:text-[#ffaf24] text-sm transition-colors"
                >
                  <Mail className="lucide lucide-mail mt-0.5 shrink-0" width={15} height={15} />
                  alocacambasudi@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-white/55 text-sm">
                  <MapPin
                    className="lucide lucide-map-pin mt-0.5 shrink-0"
                    width={15}
                    height={15}
                  />
                  R. do Fazendeiro, 978 - Jardim das Palmeiras, Uberlândia - MG
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © 2026 Alô Caçambas. Todos os direitos reservados.
          </p>
          <p className="text-white/35 text-xs flex items-center gap-1">
            Feito com{' '}
            <Heart
              className="lucide lucide-heart text-[#a9312e] fill-[#a9312e]"
              width={12}
              height={12}
            />{' '}
            em Uberlândia - MG
          </p>
        </div>
      </div>
    </footer>
  );
}
