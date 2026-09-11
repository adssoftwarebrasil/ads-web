import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[rgb(70,70,70)] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/acoideal%2Flogo.jpeg"
              alt="Aços Ideal Logo"
              className="h-16 w-auto object-contain mb-4 bg-white px-3 py-2 rounded"
            />
            <p className="text-sm leading-relaxed">
              Fornecimento de ferro e aço com qualidade e atendimento excepcional desde 2016. Sua construção merece o melhor.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="hover:text-[rgb(238,51,52)] transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-[rgb(238,51,52)] transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('produtos')} className="hover:text-[rgb(238,51,52)] transition-colors">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cidades')} className="hover:text-[rgb(238,51,52)] transition-colors">
                  Cidades Atendidas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="hover:text-[rgb(238,51,52)] transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Produtos Principais</h3>
            <ul className="space-y-2 text-sm">
              <li>Metalons e Tubos</li>
              <li>Chapas de Aço</li>
              <li>Telhas Galvalume</li>
              <li>Vergalhões</li>
              <li>Bobinas Galvanizadas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Rua Presidente Costa e Silva, 60<br />Barreiro, BH - MG</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:3133335156" className="hover:text-[rgb(238,51,52)] transition-colors">
                  (31) 3333-5156
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} />
                <a href="https://wa.me/5531986801584" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(238,51,52)] transition-colors">
                  (31) 98680-1584
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:acosidealfinanceiro@gmail.com" className="hover:text-[rgb(238,51,52)] transition-colors">
                  acosidealfinanceiro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm">
          <p>© 2026 Aços Ideal - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
