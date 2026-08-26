import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#acomodacoes', label: 'Acomodações' },
  { href: '#contato', label: 'Contato' },
];

const servicesList = [
  'Recepção 24 Horas',
  'Wi-Fi Gratuito',
  'Café da Manhã',
  'Estacionamento',
  'Eventos',
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px] py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/calderan-palace%2Flogo.webp"
              alt="Calderan Palace Hotel"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Hospedagem de excelência em Jardim-MS desde 1999. Conforto, qualidade e a melhor
              localização para sua estadia.
            </p>
          </div>
          <div>
            <h3 className="text-white text-sm uppercase font-semibold tracking-wider mb-5">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 text-sm transition-colors duration-300 hover:text-[#F09100]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm uppercase font-semibold tracking-wider mb-5">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm uppercase font-semibold tracking-wider mb-5">
              Contato
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#F09100] flex-shrink-0 mt-1" />
                <a
                  href="tel:+5567996712871"
                  className="text-white/70 text-sm hover:text-[#F09100] transition-colors"
                >
                  (67) 99671-2871
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#F09100] flex-shrink-0 mt-1" />
                <a
                  href="mailto:contato@calderanpalacehotel.com.br"
                  className="text-white/70 text-sm hover:text-[#F09100] transition-colors break-all"
                >
                  contato@calderanpalacehotel.com.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F09100] flex-shrink-0 mt-1" />
                <span className="text-white/70 text-sm">Jardim - MS</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/calderanpalacehotel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#F09100]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/calderanpalacehotel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#F09100]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-white/50 text-sm">
              © 2025 Calderan Palace Hotel. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-sm">Desenvolvido com excelência</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
