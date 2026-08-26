import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const servicesList = [
  'Funilaria',
  'Pintura Automotiva',
  'Polimento Cristalizado',
  'Vitrificação',
  'Estética Automotiva',
  'Seguradoras',
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#04152D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/img/logo-sem-fundo.webp"
              alt="Nosso Carro Centro Automotivo"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Referência em funilaria, pintura e estética automotiva em Aracaju - SE. Tecnologia de
              ponta e padrão de montadora desde 2019.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/nossocarroo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#174C7E]/40 border border-white/10 hover:border-[#6D94BE]/30 transition-all text-white/60 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCPuGLu2u-X70-PNS7Udc5pw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#174C7E]/40 border border-white/10 hover:border-[#6D94BE]/30 transition-all text-white/60 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"></polygon>
                </svg>
              </a>
              <a
                href="http://wa.me/557991950295"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#174C7E]/40 border border-white/10 hover:border-[#6D94BE]/30 transition-all text-white/60 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                  <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.395A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.963 7.963 0 0 1-4.243-1.228l-.305-.18-3.127.875.84-3.042-.196-.312A7.97 7.97 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <MapPin size={14} className="lucide lucide-map-pin text-[#6D94BE] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Av. Dr. José da Silva Ribeiro Filho, 803 - América, Aracaju - SE
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock size={14} className="lucide lucide-clock text-[#6D94BE] flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">Seg - Sex: 08h às 18h</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={14} className="lucide lucide-phone text-[#6D94BE] flex-shrink-0 mt-0.5" />
                <a
                  href="http://wa.me/557991950295"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  (79) 9 9195-0295
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={14} className="lucide lucide-mail text-[#6D94BE] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:canossocarro@outlook.com"
                  className="text-white/50 hover:text-white text-sm transition-colors break-all"
                >
                  canossocarro@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Nosso Carro Centro Automotivo. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Aracaju - SE, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
