import { Flame, Phone, MapPin, Mail, Instagram } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua.';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kerber Gás</h3>
                <p className="text-sm text-gray-400">Sinop - MT</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Há 5 anos atendendo Sinop com excelência, entregando gás P13 e água
              mineral com qualidade e bom atendimento.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-300 hover:text-[rgb(248,130,31)] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">(66) 98405-2994</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">
                  Av. Magda de C. Pissinatti, 1617 - Sinop/MT
                </span>
              </li>
              <li>
                <a
                  href="mailto:isaiassantosleticia@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">isaiassantosleticia@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kerbergássinop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">@kerbergássinop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Kerber Gás. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
