import { Facebook, Instagram, ExternalLink, MapPin, Phone, Clock } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/559491009092';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1E55] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/fortmaq%2Fimg%2Flogo-sem-fundo.webp"
              alt="FORTMAQ Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-[#E6E6E4] text-sm leading-relaxed">
              Sua parceira em ferramentas e equipamentos profissionais em Redenção - PA.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/fortmaqferragens/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#AA1C1F] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fortmaq_redencao/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#AA1C1F] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linktr.ee/fortmaq1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#AA1C1F] transition-all duration-300 transform hover:scale-110"
                aria-label="Linktree"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#E6E6E4] hover:text-[#AA1C1F] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#AA1C1F] mt-1 flex-shrink-0" />
                <span className="text-[#E6E6E4] text-sm">
                  Av. Araguaia, S/N - Novo Horizonte
                  <br />
                  Redenção - PA, 68551-000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#AA1C1F] flex-shrink-0" />
                <a href="tel:+559491009092" className="text-[#E6E6E4] hover:text-[#AA1C1F] transition-colors text-sm">
                  (94) 99100-9092
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Horário</h3>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-[#AA1C1F] mt-1 flex-shrink-0" />
              <div className="text-[#E6E6E4] text-sm">
                <p className="font-semibold text-white mb-1">Segunda a Sábado</p>
                <p>07:00 às 18:00</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#AA1C1F] text-white text-center px-6 py-3 rounded-full hover:bg-[#8A1619] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#E6E6E4] text-sm text-center md:text-left">
              2026 FORTMAQ LTDA - CNPJ: 49.780.197/0001-18. Todos os direitos reservados.
            </p>
            <p className="text-[#E6E6E4] text-sm text-center md:text-right">
              Desenvolvido com dedicação para melhor atendê-lo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
