import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img
              src="https://storage.lucasmendes.dev/caroba/annb%20baterias/img/logo-sem-fundo.webp"
              alt="ANNB Baterias"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Distribuidora de baterias automotivas em Brasília-DF. Atendemos em domicílio com as
              melhores marcas do mercado, instalação gratuita e até 2 anos de garantia.
            </p>
            <div className="flex gap-3">
              <a
                href="http://wa.me/5561992574282"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center justify-center hover:bg-green-600/30 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-5 h-5 text-green-400" />
              </a>
              <a
                href="https://www.instagram.com/annbbaterias/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600/10 border border-pink-500/20 rounded-xl flex items-center justify-center hover:bg-pink-600/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram
                  width={18}
                  height={18}
                  className="lucide lucide-instagram text-pink-400"
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  width={16}
                  height={16}
                  className="lucide lucide-phone text-brand-muted mt-0.5 flex-shrink-0"
                />
                <div>
                  <a
                    href="tel:+5561992574282"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    (61) 99257-4282
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  width={16}
                  height={16}
                  className="lucide lucide-clock text-brand-muted mt-0.5 flex-shrink-0"
                />
                <p className="text-gray-400 text-sm">
                  Todos os dias
                  <br />
                  <span className="text-gray-300">08h às 22h</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  width={16}
                  height={16}
                  className="lucide lucide-map-pin text-brand-muted mt-0.5 flex-shrink-0"
                />
                <p className="text-gray-400 text-sm">
                  St. Sudoeste QMSW 2
                  <br />
                  Conj. C, Lote 22, Loja 2
                  <br />
                  <span className="text-gray-300">Sudoeste — Brasília-DF</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2026 ANNB Baterias — CNPJ 19.700.760/0001-30 — Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">Brasília, Distrito Federal, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
