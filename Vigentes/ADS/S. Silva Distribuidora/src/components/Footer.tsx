import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre a empresa' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(2,14,70)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/s-silva-distribuidora/img/logo-sem-fundo.webp"
                  alt="S. Silva"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Distribuidora de peças automotivas há mais de 25 anos em Feira de Santana — BA. Qualidade, variedade e atendimento de excelência.
            </p>
            <a
              href="https://www.instagram.com/s.silva.distribuidora/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-red/40 hover:bg-white/10 text-sm font-semibold transition"
            >
              <Instagram className="lucide lucide-instagram w-4 h-4" />
              @s.silva.distribuidora
            </a>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-5 uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-5 uppercase tracking-wide">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="lucide lucide-map-pin w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Av. Sr. dos Passos, 1723A - Centro, Feira de Santana - BA, 44002-375</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="lucide lucide-phone w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>(75) 3603-8100<br />(75) 98196-0232</span>
              </li>
              <li className="flex items-start gap-3 text-white/70 break-all">
                <Mail className="lucide lucide-mail w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>pedro.nunes@ssilvadistribuidora.com.br</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-5 uppercase tracking-wide">Atendimento</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Seg a Sex</p>
                  <p>07h30 às 18h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="lucide lucide-clock w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sábado</p>
                  <p>07h30 às 12h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© 2026 S. Silva Distribuidora de Peças Automotivas Ltda · CNPJ 00.993.098/0001-25</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
