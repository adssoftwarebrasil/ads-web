import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const SERVICES = [
  'Impressão Gráfica',
  'Gráfica Rápida',
  'Impressão Digital',
  'Fardamentos',
  'Carimbos',
  'Brindes Personalizados',
  'Cópias',
  'Encadernação',
  'Plotagem',
  'Fachadas',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(53,80,155)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/fergrafe/img/logo-sem-fundo.webp"
              alt="Fergraf Grafica e Editora"
              className="h-14 mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Solucoes graficas de qualidade para sua empresa desde 2010. Agilidade, excelencia e atendimento personalizado em Aracaju-SE.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fergrafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(236,71,137)] rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/fergrafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(0,180,215)] rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="http://wa.me/557988448494"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(122,200,160)] rounded-xl flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[rgb(0,180,215)] text-sm uppercase tracking-widest mb-4">Navegacao</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[rgb(0,180,215)] text-sm uppercase tracking-widest mb-4">Servicos</h4>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="http://wa.me/557988448494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[rgb(0,180,215)] text-sm uppercase tracking-widest mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+557988448494" className="flex items-start gap-2.5 group">
                <Phone size={14} className="text-[rgb(0,180,215)] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 group-hover:text-white text-sm transition-colors">(79) 9 8844-8494</span>
              </a>
              <a href="mailto:fergrafgrafica@gmail.com" className="flex items-start gap-2.5 group">
                <Mail size={14} className="text-[rgb(0,180,215)] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 group-hover:text-white text-sm transition-colors break-all">fergrafgrafica@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[rgb(0,180,215)] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">R. Bahia, 1374 - Siqueira Campos, Aracaju - SE</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="text-[rgb(0,180,215)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Seg - Sex:</p>
                  <p className="text-white/70 text-sm">7h30 - 12h00 | 13h30 - 18h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fergraf Grafica e Editora. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Aracaju - SE | CNPJ: 793259/1012
          </p>
        </div>
      </div>
    </footer>
  );
}
