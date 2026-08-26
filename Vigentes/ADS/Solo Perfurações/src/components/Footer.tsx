import { MapPin, Phone, Clock } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const quickLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/solo-perfuracao%2Flogo%20(1)%201.png"
              alt="Solo Perfurações"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Referência em perfuração de poços artesianos em Jataí-GO desde 2000
            </p>
            <div className="inline-block bg-accent-yellow text-white px-4 py-2 rounded-full font-semibold text-sm">
              20+ Anos de Experiência
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Av. Petrobrás, nº 235 - St. Jardim Goiás II
                  <br />
                  Jataí - GO, 75805-275
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <a href="tel:+5564999919305" className="hover:text-accent transition-colors block">
                    (64) 9 9991-9305
                  </a>
                  <a href="tel:+5564999888102" className="hover:text-accent transition-colors block">
                    (64) 9 9988-8102
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  SEG-SÁB: 08:00-20:00
                  <br />
                </p>
              </div>
              <div className="text-gray-300 text-sm">
                <p className="font-semibold text-white">www.soloperfuracoes.com.br</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 LL DOS SANTOS - SOLO PERFURAÇÕES | CNPJ: 45.952.189/0001-50</p>
            <p className="mt-2">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
