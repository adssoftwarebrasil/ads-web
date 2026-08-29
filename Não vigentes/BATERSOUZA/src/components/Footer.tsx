import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const products = [
  'Baterias para Carros',
  'Baterias para Motos',
  'Baterias para Caminhões',
  'Som Automotivo',
  'Energia Solar',
  'Nobreaks',
];

const services = [
  'Teste de Alternador',
  'Teste de Motor de Partida',
  'Laudo Técnico',
  'Carga de Baterias',
  'Atendimento Emergencial',
  'Orientação Técnica',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/batersouza%2Fimg%2Flogo-sem-fundo.webp"
              alt="BaterSouza Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Especialistas em baterias automotivas e estacionárias em Senador Canedo e região.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/batersouza/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="lucide lucide-instagram" width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/p/BaterSouza-2-61552538800074/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="lucide lucide-facebook" width={20} height={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Produtos</h3>
            <ul className="space-y-2 text-gray-300">
              {products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="lucide lucide-map-pin flex-shrink-0 mt-1" width={18} height={18} />
                <span className="text-sm">R. da Divisa, QD 23 - LT 16, Senador Canedo - GO</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="lucide lucide-phone flex-shrink-0" width={18} height={18} />
                <a href="tel:+556292766466" className="hover:text-yellow-400 transition-colors">
                  (62) 99276-6466
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="lucide lucide-mail flex-shrink-0 mt-1" width={18} height={18} />
                <a
                  href="mailto:Trabalhobatersouzasc@gmail.com"
                  className="hover:text-yellow-400 transition-colors text-sm break-all"
                >
                  Trabalhobatersouzasc@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="lucide lucide-clock flex-shrink-0 mt-1" width={18} height={18} />
                <div className="text-sm">
                  <p>Seg-Sex: 8:00 às 18:00</p>
                  <p>Sáb: 8:00 às 13:00</p>
                  <p className="text-yellow-400 font-semibold">Plantão: até 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 BaterSouza. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Baterias Automotivas e Estacionárias em Senador Canedo - GO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
