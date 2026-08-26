import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contato', label: 'Contato' },
];

const produtos = [
  'Manilhas para Drenagem',
  'Manilhas para Fossa',
  'Postes para Barracão',
  'Palanques',
  'Bancos de Concreto',
  'Tanques',
  'Blocos e Canaletas',
  'Caixas Sépticas',
];

const muted = { color: 'rgb(148, 149, 144)' };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(22, 11, 7)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tibola%20pre%20moldados/img/logo.webp"
              alt="Tibola Pré Moldados"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-5" style={muted}>
              Mais de 30 anos fabricando e comercializando pré-moldados de qualidade em Primavera do
              Leste – MT. Qualidade, tradição e compromisso com você.
            </p>
            <a
              href="http://wa.me/5566996428111?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: 'rgb(120, 53, 35)' }}
            >
              Falar pelo WhatsApp
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">Navegação</h4>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-sm transition-colors hover:text-white" style={muted}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">Produtos</h4>
            <ul className="space-y-2.5">
              {produtos.map((p) => (
                <li key={p}>
                  <a href="#produtos" className="text-sm transition-colors hover:text-white" style={muted}>
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5">Contato</h4>
            <div className="space-y-4">
              <a href="tel:+5566996428111" className="flex gap-3 text-sm group" style={muted}>
                <Phone
                  width={16}
                  height={16}
                  className="lucide lucide-phone flex-shrink-0 mt-0.5 group-hover:text-white transition-colors"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <span className="group-hover:text-white transition-colors">(66) 9 9642-8111</span>
              </a>
              <a href="mailto:tibolapremoldados@gmail.com" className="flex gap-3 text-sm group" style={muted}>
                <Mail
                  width={16}
                  height={16}
                  className="lucide lucide-mail flex-shrink-0 mt-0.5"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <span className="group-hover:text-white transition-colors break-all">
                  tibolapremoldados@gmail.com
                </span>
              </a>
              <div className="flex gap-3 text-sm" style={muted}>
                <MapPin
                  width={16}
                  height={16}
                  className="lucide lucide-map-pin flex-shrink-0 mt-0.5"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <span>Av. A, 110 – Distrito Industrial José de Alencar, Primavera do Leste – MT</span>
              </div>
              <div className="flex gap-3 text-sm" style={muted}>
                <Clock
                  width={16}
                  height={16}
                  className="lucide lucide-clock flex-shrink-0 mt-0.5"
                  style={{ color: 'rgb(120, 53, 35)' }}
                />
                <div>
                  <div>Seg–Sex: 7h–11h / 13h–17h</div>
                  <div>Sábado: 7h–11h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgba(148, 149, 144, 0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgb(111, 119, 121)' }}>
            © 2026 Tibola Pré Moldados. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgb(111, 119, 121)' }}>
            Primavera do Leste – MT | CNPJ disponível na loja
          </p>
        </div>
      </div>
    </footer>
  );
}
