import { Instagram, ChevronRight, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { waLink, scrollToId } from '../lib/site';

const QUICK_LINKS: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sustentabilidade', id: 'sustentabilidade' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Contato', id: 'contato' },
];

const MAIN_SERVICES = [
  'Gestão de Resíduos',
  'Descaracterização',
  'Incineração',
  'Coprocessamento',
  'Coleta e Transporte',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(40,120,80)] text-white/80">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/15">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/indcom/img/logo.png"
              alt="Grupo Indcom"
              className="h-16 mb-5 w-auto object-contain"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-white/70 mb-6 max-w-[300px]">
              Referência em gestão integrada de resíduos desde 2007. Compromisso com sustentabilidade e excelência em cada projeto.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/grupoindcom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[rgb(130,196,92)] hover:text-[rgb(20,80,50)] transition-all hover:-translate-y-0.5"
              >
                <Instagram className="lucide lucide-instagram w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-5 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[rgb(130,196,92)]"></span>
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-[rgb(130,196,92)] hover:pl-2 transition-all"
                  >
                    <ChevronRight className="lucide lucide-chevron-right w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-5 relative inline-block">
              Principais Serviços
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[rgb(130,196,92)]"></span>
            </h3>
            <ul className="space-y-3">
              {MAIN_SERVICES.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToId('servicos')}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-[rgb(130,196,92)] hover:pl-2 transition-all"
                  >
                    <ChevronRight className="lucide lucide-chevron-right w-3 h-3" />
                    {service}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToId('servicos')}
                  className="flex items-center gap-2 text-sm text-[rgb(130,196,92)] font-semibold hover:pl-2 transition-all"
                >
                  <ChevronRight className="lucide lucide-chevron-right w-3 h-3" />
                  Ver Todos os Serviços
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-5 relative inline-block">
              Fale Conosco
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[rgb(130,196,92)]"></span>
            </h3>
            <div className="space-y-5">
              <div className="flex gap-3 items-start">
                <MapPin className="lucide lucide-map-pin w-[18px] h-[18px] text-[rgb(130,196,92)] mt-0.5 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-white/70">
                  Rua R5 Qd 11 Lt 10-15 Daia<br />Anápolis/GO, 75.132-160
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="lucide lucide-phone w-[18px] h-[18px] text-[rgb(130,196,92)] mt-0.5 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-white/70">(62) 3316-1555</p>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="lucide lucide-mail w-[18px] h-[18px] text-[rgb(130,196,92)] mt-0.5 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-white/70">sac@indcomambiental.com.br</p>
              </div>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-[rgb(130,196,92)] text-[rgb(20,80,50)] rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="lucide lucide-message-circle w-4 h-4" />
              Fale no WhatsApp
            </a>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60">
          <p>© 2026 Grupo Indcom. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
