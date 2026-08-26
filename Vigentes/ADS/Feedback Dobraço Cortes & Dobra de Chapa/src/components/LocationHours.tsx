import { MapPin, Clock, Navigation } from 'lucide-react';

export default function LocationHours() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[350px] sm:h-[450px] lg:h-[500px] border-4 border-[rgb(139,0,2)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15368.773038612295!2d-47.67012871284183!3d-15.634693899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a131937f61103%3A0xdaf912b9a9045d70!2sDobra%C3%A7o%20Cortes%20%26%20Dobra%20de%20Chapa!5e0!3m2!1spt-BR!2sbr!4v1762733846825!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Dobraço Planaltina"
              style={{ border: '0px' }}
            ></iframe>
          </div>
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin width={32} height={32} className="text-[rgb(139,0,2)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-black">ONDE ESTAMOS</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <p className="text-[rgb(139,0,2)] font-bold mb-2">📍 Endereço Completo:</p>
                <p className="text-gray-700 leading-relaxed">
                  QD 5A - Conj B - Lt 01 - Arapoangas<br />
                  Quadra 05A Conjunto B Loja 14A<br />
                  Planaltina-DF, Brasília<br />
                  CEP: 73368-142
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">👨‍🏭</span>
                  <span>Ferragens e Corte e Dobra de Chapa</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">😄</span>
                  <span>Milhares de clientes satisfeitos</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">🏠</span>
                  <span>Telhas térmicas</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock width={32} height={32} className="text-[rgb(139,0,2)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-black">HORÁRIO DE FUNCIONAMENTO</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold">Segunda a Sexta:</span>
                  <span className="text-[rgb(139,0,2)] font-bold">08:00 às 17:45</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold">Sábado:</span>
                  <span className="text-[rgb(139,0,2)] font-bold">08:00 às 13:00</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold">Domingo:</span>
                  <span className="text-gray-500 font-bold">FECHADO</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Navigation width={32} height={32} className="text-[rgb(139,0,2)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-black">ÁREA DE ATUAÇÃO</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgb(139,0,2)] rounded-full"></div>
                  Brasília e Região Administrativa
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgb(139,0,2)] rounded-full"></div>
                  Cidades do Entorno (GO)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgb(139,0,2)] rounded-full"></div>
                  Consulte-nos para outras localidades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
