import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Promoções', href: '#promocoes' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Rações Premium',
  'Clínica Veterinária',
  'Vacinas',
  'Cirurgias',
  'Farmácia Veterinária',
  'Delivery em PVA',
  'Acessórios Pet',
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/logo-nova-02-sem-fundo.webp"
              alt="Casa das Rações"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Há 10 anos cuidando dos animais de Primavera do Leste com dedicação, qualidade e
              os melhores preços da cidade.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/dnadaracao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/casadaracaovet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-green-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  R. Alcídes Lazareti, 89 - São Cristovao, Primavera do Leste - MT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-green-400 shrink-0" />
                <a href="tel:+5566999836995" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                  (66) 9 9983-6995
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-green-400 shrink-0" />
                <a href="mailto:casadasracoespva@gmail.com" className="text-gray-400 text-sm hover:text-green-400 transition-colors break-all">
                  casadasracoespva@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-green-400 shrink-0" />
                <span className="text-gray-400 text-sm">Seg–Sáb: 7h às 21h • Dom: 7h às 12h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Casa das Rações & Clínica Veterinária. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Primavera do Leste - MT
          </p>
        </div>
      </div>
    </footer>
  );
}
