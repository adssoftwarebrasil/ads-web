import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Frota', id: 'frota' },
  { label: 'Contato', id: 'contato' },
];

const servicos = [
  'Transporte de Passageiros',
  'Transporte de Encomendas',
  'Transporte de Cargas',
  'Logística Fluvial',
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(41,41,41)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Flogo-sem-texto.webp"
              alt="Coimbra Navegações"
              className="h-24 w-auto mb-6"
            />
            <p className="text-[rgb(160,180,187)] leading-relaxed">
              Conectando a Amazônia através dos rios há mais de 20 anos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[rgb(160,180,187)] hover:text-[rgb(253,133,17)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-[rgb(160,180,187)]">
              {servicos.map((servico) => (
                <li key={servico}>{servico}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="flex-shrink-0 text-[rgb(253,133,17)]"
                />
                <span className="text-[rgb(160,180,187)] text-sm">
                  Rua Lauro Bittencourt, 118
                  <br />
                  Santo Antonio, Manaus/AM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  size={20}
                  className="flex-shrink-0 text-[rgb(253,133,17)]"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(160,180,187)] hover:text-white transition-colors text-sm"
                >
                  (92) 99983-7943
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail
                  size={20}
                  className="flex-shrink-0 text-[rgb(253,133,17)]"
                />
                <a
                  href="mailto:grupocoimbra.financeiro@gmail.com"
                  className="text-[rgb(160,180,187)] hover:text-white transition-colors text-sm break-all"
                >
                  grupocoimbra.financeiro@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/coimbranavegacoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(253,133,17)] p-3 rounded-lg hover:bg-[rgb(220,115,15)] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/coimbranavegacoes/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(6,172,50)] p-3 rounded-lg hover:bg-[rgb(5,150,43)] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgb(160,180,187)]/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-[rgb(160,180,187)] text-sm text-center sm:text-left">
              © 2026 Coimbra Navegações. Todos os direitos reservados.
            </p>
            <p className="text-[rgb(160,180,187)] text-sm text-center sm:text-right">
              Conectando vidas através dos rios da Amazônia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
