import { Instagram, Facebook, MessageCircle, Clock, MapPin } from 'lucide-react';

const servicos = [
  'Projetos de Arquitetura',
  'Documentação para Venda',
  'Unificação e Divisão de Lotes',
  'Instituição de Condomínio',
  'Regularização de Obras',
];

const navegacao = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/torreengenharia/logo-torre-engenharia-azul-e-preto_1132x1280.webp"
              alt="Torre Engenharia"
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Segurança, qualidade e resultado para quem constrói, regulariza ou investe em imóveis
              desde 2013.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/torreengenharia_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/Torre-Engenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/5566996194229"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-gray-400 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/5566996194229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-brand-blue transition-colors"
                >
                  (66) 99619-4229
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm">Seg – Sex: 07:30 – 17:00</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <p className="text-gray-400 text-sm leading-snug">
                  R. Antônio Francisco Buosi, 1122
                  <br />
                  Colina Verde, Rondonópolis – MT
                  <br />
                  CEP 78740-400
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Torre Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">CNPJ: torre.engenhariaroo@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
