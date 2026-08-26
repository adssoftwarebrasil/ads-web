import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const servicos = [
  'Invisalign',
  'Ortodontia',
  'Implantes Guiados',
  'Lentes de Porcelana',
  'Lentes de Resina',
  'Ortopedia Maxilar',
  'Restaurações',
  'Cirurgia Oral',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(13,51,98)] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2Flogo.webp"
              alt="Clínica Sorriso Imperatriz"
              className="h-12 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Transformando sorrisos e vidas através da odontologia moderna com
              atendimento humanizado há mais de 10 anos.
            </p>
            <a
              href="https://instagram.com/clinicasorrisoimperatriz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-[rgb(212,175,55)] transition-colors"
            >
              <Instagram className="lucide lucide-instagram w-5 h-5" />
              <span>@clinicasorrisoimperatriz</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[rgb(212,175,55)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-white/80 hover:text-[rgb(212,175,55)] transition-colors text-sm"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5599982501000"
                  className="flex items-start space-x-2 text-white/80 hover:text-[rgb(212,175,55)] transition-colors text-sm"
                >
                  <Phone className="lucide lucide-phone w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(99) 98250-1000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@sorrisoimperatriz.com.br"
                  className="flex items-start space-x-2 text-white/80 hover:text-[rgb(212,175,55)] transition-colors text-sm"
                >
                  <Mail className="lucide lucide-mail w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>contato@sorrisoimperatriz.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Pará+616+Imperatriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-white/80 hover:text-[rgb(212,175,55)] transition-colors text-sm"
                >
                  <MapPin className="lucide lucide-map-pin w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Rua Pará 616, Esquina com a Rua Luiz Domingues</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Clínica Sorriso Imperatriz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
