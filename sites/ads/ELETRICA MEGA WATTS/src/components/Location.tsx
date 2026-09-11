import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(41,35,88)] mb-4">
            Nossa Localização
          </h2>
          <div className="w-20 h-1 bg-[rgb(236,33,40)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venha nos visitar e conhecer nossa estrutura completa
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.lucasmendes.dev/site-sp/eletricamega%2Flocalizacao.jpeg"
              alt="Localização Elétrica Mega Watt's"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(236,33,40)] p-3 rounded-lg">
                  <MapPin className="lucide lucide-map-pin text-white" width={28} height={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-2">Endereço</h3>
                  <p className="text-gray-600 text-lg">Q.03 L.04 - Vila, Inhumas - GO</p>
                  <a
                    href="https://maps.google.com/?q=Q.03+L.04+-+Vila,+Inhumas+-+GO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(236,33,40)] hover:underline mt-2 inline-block font-medium"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(236,33,40)] p-3 rounded-lg">
                  <Phone className="lucide lucide-phone text-white" width={28} height={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-2">Telefone / WhatsApp</h3>
                  <a
                    href="https://api.whatsapp.com/send?phone=5562992380432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-lg hover:text-[rgb(236,33,40)] transition-colors"
                  >
                    (62) 9 9238-0432
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(236,33,40)] p-3 rounded-lg">
                  <Mail className="lucide lucide-mail text-white" width={28} height={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-2">E-mail</h3>
                  <a
                    href="mailto:eletricamegawattsinhumas@hotmail.com"
                    className="text-gray-600 text-lg hover:text-[rgb(236,33,40)] transition-colors break-all"
                  >
                    eletricamegawattsinhumas@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(236,33,40)] p-3 rounded-lg">
                  <Clock className="lucide lucide-clock text-white" width={28} height={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,35,88)] mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600 text-lg">Seg-Sex 07:00-18:00</p>
                  <p className="text-gray-600 text-lg">Sáb 07:00-12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
