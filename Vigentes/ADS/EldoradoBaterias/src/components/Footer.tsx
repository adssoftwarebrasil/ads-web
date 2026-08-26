import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/logo-eldorado-baterias-moura-tudor-chapisco_1536x1024.webp"
              alt="Eldorado Baterias Chapisco"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/60 font-barlow text-sm leading-relaxed mb-6 max-w-sm">
              Fundada em 1° de outubro de 1999, a Eldorado Baterias Chapisco
              atua há quase 27 anos em Contagem – MG com qualidade, preço justo e honestidade.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/chapisco_baterias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-yellow hover:text-brand-blue rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/wately.sampaio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-yellow hover:text-brand-blue rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-condensed font-800 text-white uppercase tracking-wide text-lg mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Sobre a Empresa', href: '#sobre' },
                { label: 'Área de Atendimento', href: '#atendimento' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow font-barlow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-condensed font-800 text-white uppercase tracking-wide text-lg mb-5">
              Informações
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-yellow mt-0.5 shrink-0" />
                <span className="text-white/60 font-barlow text-sm leading-relaxed">
                  R. Tinguassu, 1050<br />Novo Eldorado<br />Contagem – MG
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-yellow shrink-0" />
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-yellow font-barlow text-sm transition-colors"
                >
                  (31) 99936-4049
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-yellow shrink-0" />
                <span className="text-white/60 font-barlow text-sm">
                  Seg – Sáb: 08h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 font-barlow text-sm text-center sm:text-left">
            &copy; {currentYear} Eldorado Baterias Chapisco. Todos os direitos reservados.
          </p>
          <p className="text-white/30 font-barlow text-xs">
            Fundada em 01 de outubro de 1999 – Contagem, MG
          </p>
        </div>
      </div>
    </footer>
  );
}
