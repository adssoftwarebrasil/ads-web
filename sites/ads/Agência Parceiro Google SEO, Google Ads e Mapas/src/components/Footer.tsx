import { MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Serviços', target: 'servicos' },
  { label: 'Cases de Sucesso', target: 'cases' },
  { label: 'Sobre Nós', target: 'sobre' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#212121] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#4285F4]">Parceiro</span>
              <span className="text-[#DB4437]"> Google</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Agência certificada Google Partner, especializada em SEO, Google Ads e otimização de
              presença online.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação Rápida</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollTo(link.target)}
                    className="text-gray-400 hover:text-[#4285F4] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#4285F4] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Terra Office Jardim América</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#0F9D58] flex-shrink-0" />
                <a
                  href="https://wa.me/5511958550001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0F9D58] transition-colors"
                >
                  +55 11 95855-0001
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#DB4437] flex-shrink-0" />
                <a
                  href="mailto:contato@parceirogoogle.com.br"
                  className="text-gray-400 hover:text-[#DB4437] transition-colors"
                >
                  contato@parceirogoogle.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2026 Parceiro Google. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
