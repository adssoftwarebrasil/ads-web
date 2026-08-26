import { MapPin, Navigation } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Shop+Drika+Kids/@-7.2028784,-39.3154577,17z/data=!3m1!4b1!4m6!3m5!1s0x7a17f535ede465b:0x6f177cb2d243f1d1!8m2!3d-7.2028784!4d-39.3154577!16s%2Fg%2F11j7h8q9vd?entry=ttu';

const facilities = [
  'Estacionamento próximo',
  'Localização de fácil acesso',
  'Ambiente climatizado',
  'Atendimento presencial personalizado',
];

export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visite nossa{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Loja Física
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Venha nos conhecer pessoalmente! Estamos localizados no coração de Juazeiro do Norte
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nosso Endereço</h3>
                  <p className="text-gray-700">R. São Francisco, 499</p>
                  <p className="text-gray-700">Centro, Juazeiro do Norte - CE</p>
                  <p className="text-gray-700">CEP: 63010-215</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Atendemos toda a região do Cariri
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Juazeiro do Norte, Crato, Barbalha, Brejo Santo, Caririaçu, Missão Velha, Mauriti,
                Aurora, Assaré, Campos Sales, Jardim, Aiuaba, Penaforte, Iguatu, Icó, Cedro, Lavras
                da Mangabeira, Jati e todo o estado do Ceará.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <Navigation className="w-5 h-5" />
                <span>Como Chegar</span>
              </a>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Facilidades da Loja</h3>
              <ul className="space-y-2 text-gray-700">
                {facilities.map((f) => (
                  <li key={f} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/558888033252?text=Olá! Gostaria de mais informações sobre como visitar a loja!"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.332288010993!2d-39.315457652231714!3d-7.202878004466076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a17f535ede465b%3A0x6f177cb2d243f1d1!2sShop%20Drika%20Kids!5e0!3m2!1spt-BR!2sbr!4v1767160503212!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Shop Dryka Kids"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
