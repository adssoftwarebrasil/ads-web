import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navegacao = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

const produtosLinks = [
  'Rolamentos Agrícolas',
  'Rolamentos Automotivos',
  'Rolamentos Industriais',
  'Linha Amarela',
  'Retentores',
  'Cruzetas e Buchas',
  'Rótulas',
  'Graxas e Químicos',
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mecrolamentos/logo.png"
              alt="MEC Rolamentos"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Especialistas em rolamentos e componentes para todas as aplicações — agrícola,
              automotiva, industrial e linha amarela.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/MEC.ROLAMENTOS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-pink-500 border border-white/10 hover:border-pink-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram width={16} height={16} className="lucide lucide-instagram" />
              </a>
              <a
                href="https://wa.me/5566999952065"
                className="w-9 h-9 bg-white/5 hover:bg-green-600 border border-white/10 hover:border-green-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <WhatsappIcon width={16} height={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-gray-500 hover:text-[#EC3132] text-sm transition-colors duration-200"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Produtos</h4>
            <ul className="space-y-3">
              {produtosLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    className="text-gray-500 hover:text-[#EC3132] text-sm transition-colors duration-200"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:6635315352" className="flex items-start gap-3 group">
                  <Phone
                    width={15}
                    height={15}
                    className="lucide lucide-phone text-[#2B559F] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">
                    (66) 3531-5352
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:mec@mecrolamentos.com.br" className="flex items-start gap-3 group">
                  <Mail
                    width={15}
                    height={15}
                    className="lucide lucide-mail text-[#2B559F] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">
                    mec@mecrolamentos.com.br
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    width={15}
                    height={15}
                    className="lucide lucide-map-pin text-[#2B559F] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-500 text-sm leading-relaxed">
                    <span className="text-gray-300 font-semibold">Unidade Sinop:</span> R.
                    Colonizador Ênio Pipino, 4131 - St. Industrial Norte, Sinop - MT, 78550-514
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    width={15}
                    height={15}
                    className="lucide lucide-map-pin text-[#2B559F] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-500 text-sm leading-relaxed">
                    <span className="text-gray-300 font-semibold">Unidade Matupá:</span> Av.
                    Sebastião Alves Júnior, 516, Matupá - MT, 78525-000
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © 2026 MEC Rolamentos. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">Sinop - MT &nbsp;|&nbsp; CNPJ disponível na loja</p>
        </div>
      </div>
    </footer>
  );
}
