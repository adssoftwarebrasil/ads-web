import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection } from '../lib/site';

const navLinks = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Contato', id: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fimg%2Flogo-sem-fundo.png"
              alt="Caramurú Tintas"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Há quase 30 anos oferecendo as melhores soluções em tintas para Salgueiro e região.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
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
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a href={WHATSAPP_URL} className="text-gray-400 hover:text-white transition-colors">
                  (87) 98826-3372
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:comercial@caramurutintas.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  comercial@caramurutintas.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Av. Maj. Antônio Rufino, 1029<br />
                  Salgueiro - PE
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda à Sexta</li>
              <li className="font-bold text-white">7:30 às 18h</li>
              <li className="mt-3">Sábado</li>
              <li className="font-bold text-white">8h às 12h</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/caramurutintas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                @caramurutintas
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              2026 Caramurú Tintas - J. C Comércio LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Especialistas em tintas imobiliárias, automotivas e industriais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
