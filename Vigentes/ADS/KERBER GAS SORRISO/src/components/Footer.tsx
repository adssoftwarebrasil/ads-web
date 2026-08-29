import { Flame, Phone, MapPin, Mail, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgb(248,130,31)] to-orange-600 flex items-center justify-center">
                <Flame className="lucide lucide-flame w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kerber Gás</h3>
                <p className="text-sm text-gray-400">Sorriso - MT</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Atendendo Sorriso com excelência, entregando gás P13, P20, P45 e água mineral com qualidade, segurança e
              bom atendimento.
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
                  href="https://wa.me/5566999668040?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors group"
                >
                  <Phone className="lucide lucide-phone w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">(66) 99966-8040</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="lucide lucide-map-pin w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Rua Lajeado, 210 - Setor Industrial 2ª Etapa - Sorriso/MT</span>
              </li>
              <li>
                <a
                  href="mailto:kerbergassorriso@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors"
                >
                  <Mail className="lucide lucide-mail w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">kerbergassorriso@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kerbergassorriso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors"
                >
                  <Instagram className="lucide lucide-instagram w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">@kerbergassorriso</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/kerbergassorriso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-[rgb(248,130,31)] transition-colors"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                  <span className="text-sm">kerbergassorriso</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">© 2026 Kerber Gás. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
