import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const services = [
  'Corte Feminino',
  'Coloração',
  'Mechas & Reflexos',
  'Morena Iluminada',
  'Alisamento & Selagem',
  'Botox Capilar',
  'Tratamento Capilar',
  'Estética Facial',
  'Estética Corporal',
  'Designer de Sobrancelhas',
  'Manicure & Pedicure',
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/img/logo-sem-fundo-letra-branca-com-dourado.webp"
              alt="Emilia Hair & Care"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
              Há mais de 50 anos transformando a beleza e a autoestima de pessoas em Cuiabá e região.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/emiliahairecare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={15} height={15} />
              </a>
              <a
                href="https://www.facebook.com/EmiliaHairCuiaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={15} height={15} />
              </a>
              <a
                href="http://wa.me/556599811065"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-white/50 mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-white/50 mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-sans text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-white/50 mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="lucide lucide-map-pin text-gold mt-0.5 flex-shrink-0"
                  width={15}
                  height={15}
                />
                <span className="font-sans text-sm text-white/70">
                  R. Safira, 35 - Baú
                  <br />
                  Cuiabá - MT, 78008-030
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="lucide lucide-phone text-gold mt-0.5 flex-shrink-0"
                  width={15}
                  height={15}
                />
                <span className="flex flex-col gap-1">
                  <a
                    href="tel:+556599811065"
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    (65) 9 9981-1065
                  </a>
                  <a
                    href="tel:+556536221065"
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    (65) 3622-1065
                  </a>
                  <a
                    href="tel:+556533210975"
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    (65) 3321-0975
                  </a>
                </span>
              </li>
            </ul>
            <a
              href="http://wa.me/556599811065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-gold hover:bg-gold-light text-white font-sans text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40 text-center sm:text-left">
            © 2026 Emilia Hair &amp; Care. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-white/40">Fundada em 1976 · Cuiabá - MT</p>
        </div>
      </div>
    </footer>
  );
}
