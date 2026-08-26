import { Phone, MapPin, Instagram, Clock } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=caetano%2Fimage%2062.png&version_id=null';

const servicos = [
  'Mecânica Completa',
  'Injeção Eletrônica',
  'Alinhamento e Balanceamento',
  'Suspensão e Freios',
  'Pneus e Rodas',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={LOGO}
                alt="Caetano Auto Center"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              10 anos cuidando do seu carro com excelência, tecnologia e
              dedicação em Alexânia.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">10</span>
              </div>
              <div className="text-xs">
                <div className="font-bold">Anos de</div>
                <div className="text-gray-400">Tradição</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {servicos.map((s) => (
                <li
                  key={s}
                  className="hover:text-red-500 transition-colors cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="lucide lucide-phone w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <a
                    href="tel:+5562992222332"
                    className="hover:text-red-500 transition-colors"
                  >
                    (62) 99222-2332
                  </a>
                  <br />
                  <a
                    href="tel:+556233363042"
                    className="hover:text-red-500 transition-colors"
                  >
                    (62) 3336-3042
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="lucide lucide-map-pin w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>
                  Avenida Brasília Q33 LT 11 e 12 Setor Nova Flórida CEP
                  72930-000
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram className="lucide lucide-instagram w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <a
                  href="https://www.instagram.com/caetanoautocenteroficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  @caetanoautocenteroficial
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Horário</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="lucide lucide-clock w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <div className="font-semibold text-white">Seg - Sex</div>
                  <div>08:00 - 18:00</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="lucide lucide-clock w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <div className="font-semibold text-white">Sábado</div>
                  <div>08:00 - 12:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Caetano Auto Center. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Online</span>
              </span>
              <span>•</span>
              <span>10 Anos de Tradição</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
    </footer>
  );
}
