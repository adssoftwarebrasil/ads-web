import { MapPin, Phone, Facebook, Instagram } from 'lucide-react'

const LOGO = '/img/logo.webp'
const WHATSAPP_INFO =
  'https://wa.me/5562984256606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações.'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
]

const footerCategories = [
  'Material Escolar',
  'Brinquedos',
  'Maquiagem Infantil',
  'Bolsas e Acessórios',
  'Aviamentos',
  'Material de Escritório',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO}
                alt="Logo Bazar e Papelaria do Dario"
                className="h-12 w-12 rounded-full object-cover border-2 border-brand-blue"
              />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Bazar e Papelaria</p>
                <p className="text-brand-blue text-xs font-semibold">do Dario</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Desde 1984 oferecendo qualidade, variedade e excelente atendimento para toda a região
              centro-norte de Goiás.
            </p>
            <p className="text-brand-blue font-semibold text-sm italic">
              "Economia na ponta do lápis!"
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.facebook.com/papelariadodario.dario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/papelariadodario/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navegação</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-blue text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Categorias</p>
            <ul className="flex flex-col gap-3">
              {footerCategories.map((category) => (
                <li key={category}>
                  <span className="text-white/50 text-sm">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-brand-blue" />
                <span className="text-white/50 leading-relaxed">
                  Av. Bernardo Sayão, 420
                  <br />
                  Centro, Rialma – GO
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-brand-blue" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:6233972829"
                    className="text-white/50 hover:text-brand-blue transition-colors"
                  >
                    (62) 3397-2829
                  </a>
                  <a
                    href="https://wa.me/5562984256606"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand-blue transition-colors"
                  >
                    (62) 98425-6606
                  </a>
                </div>
              </li>
            </ul>
            <a
              href={WHATSAPP_INFO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {year} Bazar e Papelaria do Dario. Todos os direitos reservados.</p>
          <p>CNAE: Comércio varejista – Rialma, GO</p>
        </div>
      </div>
    </footer>
  )
}
