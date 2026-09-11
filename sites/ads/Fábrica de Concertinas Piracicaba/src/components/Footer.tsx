import { Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const produtos = [
  'Concertina',
  'Hastes Metálicas',
  'Grampos e Fixadores',
  'Cerca Cortante',
  'Segurança Perimetral',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(37,34,35)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/logo-atualizada-sem-fundo.webp"
              alt="Fábrica de Concertinas Piracicaba"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Há 7 anos protegendo residências, comércios e indústrias com
              materiais de alta qualidade e entrega imediata.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/concertinaspiracicaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[rgb(240,27,38)] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram
                  width={16}
                  height={16}
                  strokeWidth={2}
                  className="lucide lucide-instagram text-white"
                />
              </a>
              <a
                href="https://wa.me/5519981442455"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/50 hover:text-[rgb(240,27,38)] text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Produtos
            </h4>
            <ul className="space-y-2">
              {produtos.map((p) => (
                <li key={p}>
                  <span className="text-white/50 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5519981442455"
                  className="flex gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <Phone
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-phone text-[rgb(240,27,38)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm">(19) 9 8144-2455</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:fabricadeconcertinas@outlook.com"
                  className="flex gap-3 text-white/50 hover:text-white transition-colors"
                >
                  <Mail
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-mail text-[rgb(240,27,38)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm break-all">
                    fabricadeconcertinas@outlook.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex gap-3 text-white/50">
                  <MapPin
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-map-pin text-[rgb(240,27,38)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm">
                    R. Antônio Cardoso, 144
                    <br />
                    Jardim Brasil, Piracicaba - SP
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-3 text-white/50">
                  <Clock
                    width={16}
                    height={16}
                    strokeWidth={2}
                    className="lucide lucide-clock text-[rgb(240,27,38)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm">
                    Seg–Qui: 07h–17h
                    <br />
                    Sexta: 07h–16h
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © 2026 Fábrica de Concertinas Piracicaba. Todos os direitos
            reservados.
          </p>
          <p className="text-white/20 text-xs">CNPJ: Piracicaba - SP · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
