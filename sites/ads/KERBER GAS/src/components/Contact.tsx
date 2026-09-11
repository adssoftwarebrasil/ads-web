import { Phone, MapPin, Clock } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5566984052994?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20de%20g%C3%A1s%20ou%20%C3%A1gua.';

export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[rgb(248,130,31)]">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(248,130,31)] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgb(248,130,31)] flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
            <p className="text-gray-600 mb-4">(66) 98405-2994</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-[rgb(248,130,31)] hover:text-orange-600 font-semibold transition-colors"
            >
              <span>Enviar mensagem</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(248,130,31)] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgb(248,130,31)] flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Endereço</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Av. Magda de C. Pissinatti, 1617
              <br />
              Residencial Santa Cecilia
              <br />
              Sinop - MT, 78555-443
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[rgb(248,130,31)] text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[rgb(248,130,31)] flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Horário</h3>
            <p className="text-gray-600">
              <span className="font-semibold">07:00 às 22:00</span>
              <br />
              Todos os dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
