import { Instagram, Scale, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, NAV_LINKS, scrollToId } from '../constants';

const AREAS = [
  'Direito Civil',
  'Direito do Consumidor',
  'Direito Empresarial',
  'Direito de Família',
  'Direito Previdenciário',
  'Direito do Trabalho',
];

export default function Footer() {
  return (
    <footer className="bg-[#10202F] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/signorettiebarbosa/Logo%20Oficial%20fundo%20azul(1).jpg"
              alt="Signoretti & Barbosa"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Advocacia ética, transparente e inovadora. Comprometidos com a excelência jurídica e a satisfação de nossos clientes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EB7104] flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram text-white" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#EB7104] flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Scale width={16} height={16} className="lucide lucide-scale text-white" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-white/50 hover:text-[#EB7104] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Áreas de Atuação</h4>
            <ul className="flex flex-col gap-3">
              {AREAS.map((a) => (
                <li key={a}>
                  <button
                    onClick={() => scrollToId('areas')}
                    className="text-white/50 hover:text-[#EB7104] text-sm transition-colors duration-200 text-left"
                  >
                    {a}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Contato</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="lucide lucide-map-pin text-[#EB7104] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Rua Júlio de Castilho, n. 228-S, Sala 04<br />
                    Centro, Lucas do Rio Verde/MT<br />
                    CEP 78460-017
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="lucide lucide-clock text-[#EB7104] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Segunda a Sexta<br />
                    08:00 – 11:30 / 13:00 – 17:30
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#EB7104] hover:bg-[#d46303] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-200 w-fit"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Signoretti &amp; Barbosa Sociedade de Advogados. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs text-center">
            OAB/MT — Advocacia ética e transparente
          </p>
        </div>
      </div>
    </footer>
  );
}
