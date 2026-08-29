import { Flame, Instagram, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Contato', target: 'contato' },
];

const productLinks = [
  {
    label: 'Botijão P13',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de pedir um botijão P13',
  },
  {
    label: 'Botijão P20',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de pedir um botijão P20',
  },
  {
    label: 'Botijão P45',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de pedir um botijão P45',
  },
  {
    label: 'Acessórios',
    href: 'https://wa.me/5516992821647?text=Olá! Gostaria de consultar sobre acessórios',
  },
];

function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Flame className="lucide lucide-flame h-8 w-8 text-[rgb(219,138,69)]" />
              <div>
                <h3 className="text-xl font-bold">AZARIAS GÁS</h3>
                <p className="text-xs text-gray-400">Ligou, Chegou</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              12 anos levando segurança e comodidade para sua casa
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/azarias.gas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[rgb(219,138,69)] transition-colors"
              >
                <Instagram className="lucide lucide-instagram w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.target}>
                  <button
                    onClick={() => scrollTo(l.target)}
                    className="text-gray-400 hover:text-[rgb(219,138,69)] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(219,138,69)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="lucide lucide-phone w-5 h-5 text-[rgb(219,138,69)] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="https://wa.me/5516992821647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[rgb(219,138,69)] transition-colors"
                  >
                    (16) 99282-1647
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="lucide lucide-mail w-5 h-5 text-[rgb(219,138,69)] flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:moreno3939@gmail.com"
                    className="text-gray-400 hover:text-[rgb(219,138,69)] transition-colors"
                  >
                    moreno3939@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="lucide lucide-clock w-5 h-5 text-[rgb(219,138,69)] flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>Seg-Sáb: 8h às 21h30</div>
                  <div>Dom/Fer: 8h às 15h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 R R Azarias Gás ME. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
