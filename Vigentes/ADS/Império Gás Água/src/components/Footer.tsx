import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Flogo.png"
                alt="Império Gás Logo"
                className="h-12"
              />
            </div>
            <p className="text-gray-400">
              Seu fornecedor de confiança em Aparecida de Goiânia. Qualidade, agilidade e atendimento 24 horas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#DEAC6C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#DEAC6C]" />
                <span>(62) 3579-0376</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#DEAC6C]" />
                <span>(62) 98155-6605</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-[#DEAC6C]" />
                <a
                  href="https://instagram.com/imperiogas24hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DEAC6C] transition-colors"
                >
                  @imperiogas24hr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#DEAC6C]/30 pt-8 text-center text-gray-400">
          <p>© 2025 Império Gás Água e Cia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
