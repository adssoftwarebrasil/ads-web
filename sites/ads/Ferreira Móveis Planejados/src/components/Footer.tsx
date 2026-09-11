import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const ambientes = [
  'Cozinhas Planejadas',
  'Closets e Guarda-Roupas',
  'Salas de Estar',
  'Escritórios',
  'Quartos Planejados',
  'Banheiros',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#212121] text-[#e4e6e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/img/logo-sem-fundo.webp"
              alt="Ferreira Móveis Planejados"
              className="h-16 w-auto object-contain mb-5"
            />
            <p className="text-[#5b5c57] text-sm leading-relaxed mb-6">
              Especialistas em móveis planejados de alto padrão em Sinop – MT. Mais de 8 anos transformando ambientes
              com qualidade e excelência.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/v.ferreiramoveis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5b5c57]/30 flex items-center justify-center hover:bg-[#5b5c57] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={17} height={17} />
              </a>
              <a
                href="https://www.facebook.com/FERREIRAMOVEISPLANEJADOSSNP/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5b5c57]/30 flex items-center justify-center hover:bg-[#5b5c57] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={17} height={17} />
              </a>
              <a
                href="http://wa.me/556696510268"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#5b5c57]/30 flex items-center justify-center hover:bg-[#5b5c57] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navegação</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-[#5b5c57] text-sm hover:text-[#e4e6e7] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Ambientes</h3>
            <ul className="space-y-3 text-[#5b5c57] text-sm">
              {ambientes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="lucide lucide-map-pin text-[#5b5c57] mt-0.5 shrink-0" width={15} height={15} />
                <span className="text-[#5b5c57] text-sm leading-relaxed">
                  Av. das Sibipirunas, 70<br />
                  Jardim Ibirapuera<br />
                  Sinop – MT, 78556-784
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="lucide lucide-phone text-[#5b5c57] shrink-0" width={15} height={15} />
                <a
                  href="tel:+556696510268"
                  className="text-[#5b5c57] text-sm hover:text-[#e4e6e7] transition-colors"
                >
                  (66) 9 9651-0268
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="lucide lucide-mail text-[#5b5c57] shrink-0" width={15} height={15} />
                <a
                  href="mailto:Vilmarferreiradossantos.snp@gmail.com"
                  className="text-[#5b5c57] text-sm hover:text-[#e4e6e7] transition-colors break-all"
                >
                  Vilmarferreiradossantos.snp@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="lucide lucide-clock text-[#5b5c57] shrink-0" width={15} height={15} />
                <span className="text-[#5b5c57] text-sm">Seg a Sex: 7h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#5b5c57]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5b5c57] text-xs text-center sm:text-left">
            © 2026 Ferreira Móveis Planejados. Todos os direitos reservados.
          </p>
          <p className="text-[#5b5c57] text-xs">Sinop – Mato Grosso</p>
        </div>
      </div>
    </footer>
  );
}
