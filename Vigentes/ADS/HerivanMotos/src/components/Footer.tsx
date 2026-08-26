import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MSG, INSTAGRAM_LINK, FACEBOOK_LINK } from '../constants';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossas Motos', href: '#motos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/herivan-motos%2Fimg%2Flogo-sem-fundo.webp"
              alt="Herivan Motos"
              className="h-14 w-auto mb-5 object-contain"
            />
            <p className="text-[rgb(187,189,191)] text-sm leading-relaxed mb-5">
              Referência em motos novas e seminovas em Sinop/MT desde 2014. Qualidade, procedência e
              transparência em cada negociação.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[rgb(187,189,191)] hover:border-[rgb(219,55,51)] hover:text-[rgb(219,55,51)] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[rgb(187,189,191)] hover:border-[rgb(219,55,51)] hover:text-[rgb(219,55,51)] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[rgb(187,189,191)] text-sm hover:text-[rgb(219,55,51)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Horários
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-[rgb(187,189,191)]">
                <Clock size={15} className="mt-0.5 text-[rgb(219,55,51)] flex-shrink-0" />
                <span>
                  Segunda a Sexta
                  <br />
                  <span className="text-white font-medium">7h às 17h30</span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-[rgb(187,189,191)]">
                <Clock size={15} className="mt-0.5 text-[rgb(219,55,51)] flex-shrink-0" />
                <span>
                  Sábado
                  <br />
                  <span className="text-white font-medium">7h às 12h</span>
                </span>
              </div>
              <div className="mt-1 text-[rgb(93,92,97)] text-xs">Domingo: Fechado</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[rgb(187,189,191)] hover:text-[rgb(219,55,51)] transition-colors text-sm"
              >
                <Phone size={15} className="mt-0.5 text-[rgb(219,55,51)] flex-shrink-0" />
                (66) 9 9995-1333
              </a>
              <a
                href="mailto:Herivanmalheiros@gmail.com"
                className="flex items-start gap-2 text-[rgb(187,189,191)] hover:text-[rgb(219,55,51)] transition-colors text-sm break-all"
              >
                <Mail size={15} className="mt-0.5 text-[rgb(219,55,51)] flex-shrink-0" />
                Herivanmalheiros@gmail.com
              </a>
              <div className="flex items-start gap-2 text-[rgb(187,189,191)] text-sm">
                <MapPin size={15} className="mt-0.5 text-[rgb(219,55,51)] flex-shrink-0" />
                <span>
                  Av. das Palmeiras, 1570
                  <br />
                  Jd. das Palmeiras – Sinop/MT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[rgb(93,92,97)] text-xs text-center sm:text-left">
            &copy; {currentYear} Herivan Motos. Todos os direitos reservados.
          </p>
          <p className="text-[rgb(93,92,97)] text-xs">
            Sinop – MT | CNPJ: consulte conosco
          </p>
        </div>
      </div>
    </footer>
  );
}
