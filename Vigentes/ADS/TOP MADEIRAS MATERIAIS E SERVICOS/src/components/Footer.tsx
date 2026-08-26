import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'

const GREEN = '#004a27'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ backgroundColor: GREEN }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/topmadeiraspva/logo.png"
              alt="Top Madeiras Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Madeiras de reflorestamento com qualidade e sustentabilidade para sua obra.
              Atendemos Primavera do Leste e toda a região.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Top%20Madeiras%20Pva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/Top%20Madeiras%20Pva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5 text-yellow-300">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5 text-yellow-300">
              Produtos
            </h4>
            <ul className="flex flex-col gap-3">
              {['Madeira de Pinus', 'Madeiriti', 'Eucalipto Tratado'].map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-5 text-yellow-300">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/60 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Av. Dom Sebastião Figueiredo, 142<br />
                  Primavera do Leste - MT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/60 shrink-0" />
                <a
                  href="tel:+5566999371417"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  (66) 99937-1417
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/60 shrink-0" />
                <a
                  href="mailto:financeiro@topmadeiraspva.com.br"
                  className="text-white/70 text-sm hover:text-white transition-colors break-all"
                >
                  financeiro@topmadeiraspva.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-white/60 mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Seg–Sex: 07:00–11:00<br />
                  e 13:00–17:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center md:text-left">
            © {year} Top Madeiras Materiais e Serviços. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Primavera do Leste - MT
          </p>
        </div>
      </div>
    </footer>
  )
}
