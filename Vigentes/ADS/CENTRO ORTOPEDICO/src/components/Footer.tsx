import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import {
  ANOS_DE_TRADICAO,
  CNPJ,
  EMAIL,
  ENDERECO_COMPLETO,
  FACEBOOK,
  TELEFONES,
} from '../lib/contato';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#locacao', label: 'Locação' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b3d5c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <span className="block text-xl font-extrabold tracking-tight">Centro Ortopédico</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14a3c7] mb-4">
              Saúde e Mobilidade
            </span>
            <p className="text-white/65 leading-relaxed">
              Há {ANOS_DE_TRADICAO} anos fabricando soluções ortopédicas sob medida em Fortaleza,
              com oficina própria e tecnologia de escaneamento 3D.
            </p>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/70 hover:text-[#f59e0b] transition-colors"
            >
              <Facebook size={18} />
              Facebook
            </a>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-white/65 hover:text-[#f59e0b] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-white/65">
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#14a3c7]" />
                <span>{ENDERECO_COMPLETO}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5 text-[#14a3c7]" />
                <span className="flex flex-col">
                  {TELEFONES.map(({ rotulo, href }) => (
                    <a key={rotulo} href={href} className="hover:text-[#f59e0b] transition-colors">
                      {rotulo}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5 text-[#14a3c7]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#f59e0b] transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-2 text-sm text-white/50">
          <span>
            © {new Date().getFullYear()} Centro Ortopédico. Todos os direitos reservados.
          </span>
          <span>CNPJ {CNPJ}</span>
        </div>
      </div>
    </footer>
  );
}
