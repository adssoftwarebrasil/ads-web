import { Instagram, Facebook, Linkedin, MessageCircle, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const especialidades = [
  'Quiropraxia',
  'Método Busquet',
  'Método Clix',
  'Fisioterapia Pélvica',
  'Pilates Clínico',
  'Estética',
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <img
              src={LOGO_URL}
              alt="Centro Paraibano de Quiropraxia"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Pioneiros em Quiropraxia na Paraíba desde 2011. Tratamos a causa real da sua dor com
              método exclusivo, eficiência e humanidade.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/quiropraxiapb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cyan-brand flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram " />
              </a>
              <a
                href="https://www.facebook.com/share/17AC2kxf4R/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cyan-brand flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} className="lucide lucide-facebook " />
              </a>
              <a
                href="https://www.linkedin.com/company/quiropraxiapb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-cyan-brand flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin width={16} height={16} className="lucide lucide-linkedin " />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle width={16} height={16} className="lucide lucide-message-circle " />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Especialidades
            </p>
            <ul className="space-y-2.5">
              {especialidades.map((e) => (
                <li key={e}>
                  <a
                    href="#especialidades"
                    className="text-white/60 hover:text-cyan-brand text-sm transition-colors"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contato</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <Phone
                  width={14}
                  height={14}
                  className="lucide lucide-phone mt-0.5 shrink-0 text-cyan-brand"
                />
                <span>(83) 3021-8790</span>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MessageCircle
                  width={14}
                  height={14}
                  className="lucide lucide-message-circle mt-0.5 shrink-0 text-cyan-brand"
                />
                <span>(83) 99616-1566</span>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin
                  width={14}
                  height={14}
                  className="lucide lucide-map-pin mt-0.5 shrink-0 text-cyan-brand"
                />
                <span>
                  Av. São Paulo, 843<br />
                  Estados, João Pessoa - PB
                </span>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-gold hover:bg-gold-light text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 Centro Paraibano de Quiropraxia e Saúde | Dr. Jonas Guimarães. Todos os direitos
            reservados.
          </p>
          <p className="text-white/30 text-xs">Sua dor tem tratamento.</p>
        </div>
      </div>
    </footer>
  );
}
