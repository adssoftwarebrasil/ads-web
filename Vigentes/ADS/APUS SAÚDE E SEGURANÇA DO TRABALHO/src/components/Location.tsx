import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(28,9,31)] mb-4">
            Onde nos encontrar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Venha nos fazer uma visita. Temos uma infraestrutura completa para atender as
            necessidades de saúde e segurança da sua empresa.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[rgb(78,20,104)]/10 text-[rgb(78,20,104)] rounded-full">
                <MapPin size={24} className="lucide lucide-map-pin " />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[rgb(28,9,31)] mb-2">Nosso Endereço</h3>
                <p className="text-gray-600 leading-relaxed">
                  Av. Gov. Agamenon Magalhães, 1318
                  <br />
                  Boa Vista, Recife - PE
                  <br />
                  CEP: 50070-160
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[rgb(78,20,104)]/10 text-[rgb(78,20,104)] rounded-full">
                <Clock size={24} className="lucide lucide-clock " />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[rgb(28,9,31)] mb-2">
                  Horário de Atendimento
                </h3>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <div>
                    <span className="font-bold text-[rgb(28,9,31)] block text-sm uppercase tracking-wider">
                      Exames
                    </span>
                    <p>Seg a Sex: 07:00 às 11:30 e 13:00 às 15:00</p>
                  </div>
                  <div>
                    <span className="font-bold text-[rgb(28,9,31)] block text-sm uppercase tracking-wider">
                      Administrativo
                    </span>
                    <p>Seg a Qui: 08:00 às 18:00</p>
                    <p>Sex: 08:00 às 17:00</p>
                  </div>
                  <p className="text-xs italic text-gray-500 pt-1">
                    *Sábados, domingos e feriados: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-inner bg-gray-200">
            <iframe
              title="Localização APUS Saúde e Segurança do Trabalho"
              src="https://maps.google.com/maps?q=Av.%20Gov.%20Agamenon%20Magalh%C3%A3es,%201318%20-%20Boa%20Vista,%20Recife%20-%20PE&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
