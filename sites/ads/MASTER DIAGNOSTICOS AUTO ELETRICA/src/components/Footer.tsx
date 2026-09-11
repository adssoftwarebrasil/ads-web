import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/logo-sem-fundo.webp';
const WHATSAPP_URL = 'http://wa.me/556596363222';
const INSTAGRAM_URL = 'https://www.instagram.com/mastertruckmecatronica';

const SERVICES = [
  'Reparo de Módulos',
  'Reparo de ECA / Cervo ECA',
  'Sistema Arla 32',
  'Reparo de Chicotes',
  'Limpeza de Catalisador',
  'Diagnóstico Eletrônico',
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#010101] border-t border-[#FFFFFD]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO_URL} alt="Master Truck Mecatrônica" className="h-12 w-auto object-contain mb-4" />
            <p className="text-[#FFFFFD]/40 text-sm leading-relaxed mb-5">
              Especialistas em eletrônica de veículos pesados. Fundada em 2019, somos referência em Rondonópolis e região.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#FFFFFD]/5 hover:bg-[#F07013]/20 border border-[#FFFFFD]/10 hover:border-[#F07013]/30 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#FFFFFD]/60 hover:text-[#F07013]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#FFFFFD] font-bold text-sm uppercase tracking-wide mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('servicos')}
                    className="text-[#FFFFFD]/40 hover:text-[#F07013] text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFD] font-bold text-sm uppercase tracking-wide mb-5">Contato</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-[#FFFFFD]/40 text-sm">
                <MapPin size={14} className="text-[#F07013] mt-0.5 flex-shrink-0" />
                <span>Av. Pedro Caetano Rodrigues, 1617 - Distrito Industrial, Rondonópolis - MT</span>
              </li>
              <li>
                <a href="tel:+556596363222" className="flex items-center gap-2.5 text-[#FFFFFD]/40 hover:text-[#F07013] text-sm transition-colors duration-200">
                  <Phone size={14} className="text-[#F07013] flex-shrink-0" />
                  (65) 9 9636-3222
                </a>
              </li>
              <li>
                <a href="mailto:master_diagnostico@outlook.com" className="flex items-center gap-2.5 text-[#FFFFFD]/40 hover:text-[#F07013] text-sm transition-colors duration-200">
                  <Mail size={14} className="text-[#F07013] flex-shrink-0" />
                  master_diagnostico@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#FFFFFD]/40 text-sm">
                <Clock size={14} className="text-[#F07013] mt-0.5 flex-shrink-0" />
                <span>Seg–Sex: 07h30 às 18h00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFFFFD] font-bold text-sm uppercase tracking-wide mb-5">Fale Agora</h4>
            <p className="text-[#FFFFFD]/40 text-sm mb-4 leading-relaxed">
              Precisa de orçamento rápido? Fale direto com nossa equipe pelo WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] text-sm font-bold px-5 py-3 rounded transition-colors duration-200"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFFFFD]/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#FFFFFD]/20 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Master Truck Mecatrônica. Todos os direitos reservados.
          </p>
          <p className="text-[#FFFFFD]/20 text-xs text-center sm:text-right">
            Rondonópolis - MT | CNPJ: MT 78.746-702
          </p>
        </div>
      </div>
    </footer>
  );
}
