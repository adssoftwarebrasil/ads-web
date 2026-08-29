import { MapPin, Mail, Clock, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/ms%20climatizadores%2Fimg%2Flogo-sem-fundo.png"
              alt="MS Climatizadores"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Referência em climatização em Campo Grande MS desde 2010.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin width={16} height={16} className="mt-1 flex-shrink-0" />
                <span>
                  R. Dr. Mario Quintanilha, 180 - Vila Bandeirante, Campo Grande - MS, 79006-460
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail width={16} height={16} />
                <a href="mailto:taisanf@outlook.com" className="hover:text-yellow-500 transition-colors">
                  taisanf@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock width={16} height={16} />
                <span>Atendimento 24 horas</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/msclimatizadores"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-yellow-500 p-3 rounded-full transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram width={20} height={20} className="text-gray-300 group-hover:text-gray-900" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 MS Climatizadores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
