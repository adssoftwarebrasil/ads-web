import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';
import { WHATSAPP } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

const productLinks = [
  'Produtos de Limpeza',
  'Vassouras e Rodos',
  'Papéis e Descartáveis',
  'Produtos de Piscina',
  'MOP de Limpeza',
  'Sacos de Lixo',
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/limponop/img/logo-sem-fundo.webp"
              alt="Limponop Soluções em Limpeza"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A Limponop trabalha na comercialização de químicos, equipamentos, descartáveis,
              produtos para piscina e muito mais. Qualidade e agilidade para sua limpeza.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/limponop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-pink transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram width={16} height={16} />
              </a>
              <a
                href="https://www.facebook.com/limponop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook width={16} height={16} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 text-sm hover:text-brand-pink transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Produtos</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#produtos"
                    className="text-white/60 text-sm hover:text-brand-blue transition-colors duration-200"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone
                  width={15}
                  height={15}
                  className="text-brand-pink mt-0.5 flex-shrink-0"
                />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-brand-pink transition-colors"
                >
                  +55 (66) 99722-7511
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  width={15}
                  height={15}
                  className="text-brand-blue mt-0.5 flex-shrink-0"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  Av. dos Jatobás, 1281-A
                  <br />
                  Jardim Celeste
                  <br />
                  Sinop - MT, 78556-690
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  width={15}
                  height={15}
                  className="text-emerald-400 mt-0.5 flex-shrink-0"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  Seg – Sex
                  <br />
                  07:30 – 11:30 / 13:30 – 17:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2026 Limponop Soluções em Limpeza. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">Sinop - MT | CNPJ na loja</p>
        </div>
      </div>
    </footer>
  );
}
