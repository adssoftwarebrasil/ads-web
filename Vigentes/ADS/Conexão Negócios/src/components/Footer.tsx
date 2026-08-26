import { Phone, Mail, MapPin, Briefcase, Instagram } from 'lucide-react';
import { scrollToId } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Catálogo de Peças', id: 'catalogo' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Fale Conosco', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1420] text-white border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex gap-4 mb-8">
              <button className="group flex flex-col items-start focus:outline-none">
                <img src="/logo1.jpeg" alt="Conexão Negócios" className="h-16 w-auto bg-white p-2 rounded transition-opacity hover:opacity-80" />
              </button>
              <button className="group flex flex-col items-start focus:outline-none">
                <img src="/logo2.jpeg" alt="Conexão Negócios" className="h-16 w-auto bg-white p-2 rounded transition-opacity hover:opacity-80" />
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-sm uppercase tracking-wide">
              CONEXÃO NEGÓCIOS, FUNDADA EM 2011, É REFERÊNCIA EM GOIÂNIA NA RECUPERAÇÃO E VENDA DE TURBOCOMPRESSORES. ATENDEMOS DE CONCESSIONÁRIAS AO CONSUMIDOR FINAL, COM PRODUTOS ORIGINAIS, EQUIPE QUALIFICADA E O MELHOR CUSTO-BENEFÍCIO. EXCELÊNCIA É AQUI!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-10">
              <h4 className="text-lg font-bold mb-6 text-white">Atendimento</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="p-2 bg-[#1f2937] rounded flex-shrink-0 text-gray-400">
                    <Phone size={16} strokeWidth={2} />
                  </div>
                  <span>62 9 9607-6949 - 62 9 8592-5050 - 62 3280-2600</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="p-2 bg-[#1f2937] rounded flex-shrink-0 text-gray-400">
                    <Mail size={16} strokeWidth={2} />
                  </div>
                  <a href="mailto:atendimentoconexaonegocios@gmail.com" className="hover:text-white transition-colors">
                    atendimentoconexaonegocios@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="p-2 bg-[#1f2937] rounded flex-shrink-0 text-gray-400">
                    <MapPin size={16} strokeWidth={2} />
                  </div>
                  <span className="uppercase text-xs leading-relaxed">
                    AV. BANDEIRANTES, 505 - JARDIM PETROPOLIS, GOIÂNIA - GO, 74453-010
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Trabalhe Conosco</h4>
              <div className="flex items-center gap-3 text-gray-300 text-sm mb-8">
                <div className="p-2 bg-[#1f2937] rounded flex-shrink-0 text-gray-400">
                  <Briefcase size={16} strokeWidth={2} />
                </div>
                <a href="mailto:rhgrupoaea@gmail.com" className="hover:text-white transition-colors">
                  rhgrupoaea@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/conexaonegociosturbina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1f2937] rounded text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <div className="text-center md:text-left">
            <p>© 2026 Conexão Negócios — Turbina e Sistema Hidráulico. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-6 cursor-default">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Políticas de Privacidade</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
