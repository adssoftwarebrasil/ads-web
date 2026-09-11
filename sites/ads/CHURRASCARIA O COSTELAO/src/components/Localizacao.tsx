import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(61,61,67)] mb-4">
              Venha Nos <span className="text-[rgb(212,178,37)]">Visitar</span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(212,86,96)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos de portas abertas para receber você e sua família
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                <div className="bg-[rgb(212,178,37)] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-[rgb(61,61,67)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(61,61,67)] mb-2 text-lg">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Juscelino Kubitscheck, 3737
                    <br />
                    Vila Portes, Foz do Iguaçu - PR
                    <br />
                    CEP: 85865-000
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-25.514677377508015,-54.588021524607754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[rgb(212,86,96)] font-semibold hover:text-[rgb(212,178,37)] transition-colors"
                  >
                    Ver no Mapa →
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                <div className="bg-[rgb(212,178,37)] p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-[rgb(61,61,67)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(61,61,67)] mb-2 text-lg">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-semibold text-[rgb(212,86,96)]">Segunda a Domingo</span>
                    <br />
                    11h00 às 16h00
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Aberto todos os dias da semana</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                <div className="bg-[rgb(212,178,37)] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-[rgb(61,61,67)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(61,61,67)] mb-2 text-lg">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5545999434290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[rgb(212,86,96)] transition-colors font-medium"
                  >
                    (45) 99943-4290
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                <div className="bg-[rgb(212,178,37)] p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-[rgb(61,61,67)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(61,61,67)] mb-2 text-lg">E-mail</h3>
                  <a
                    href="mailto:duds_07@hotmail.com"
                    className="text-gray-600 hover:text-[rgb(212,86,96)] transition-colors"
                  >
                    duds_07@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.7111742521597!2d-54.588021524607754!3d-25.514677377508015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6906d7d2cda11%3A0x1a0a7900e3f4ed1c!2sChurrascaria%20Costel%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1766056437006!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Churrascaria Costelão"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
