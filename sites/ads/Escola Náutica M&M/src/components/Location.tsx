import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26367e] mb-4">
            Onde Estamos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.1!2d-54.5882!3d-25.5163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f690e6b6f6b6b7%3A0x1!2sRua%20Bartolomeu%20de%20Gusm%C3%A3o%2C%20723%20-%20Centro%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085856-290!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Escola Náutica MM"
            ></iframe>
          </div>

          <div className="bg-[#26367e] rounded-2xl p-8 text-white space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0caff0] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Endereço</h4>
                  <p className="text-white text-opacity-90">
                    Rua Bartolomeu de Gusmão, 723 - sala 3<br />
                    Centro, Foz do Iguaçu - PR<br />
                    CEP: 85856-290
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0caff0] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Horários</h4>
                  <p className="text-white text-opacity-90">
                    Segunda a Sexta: 09:00 - 18:00<br />
                    Sábado: 09:00 - 12:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0caff0] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefone</h4>
                  <p className="text-white text-opacity-90">(45) 99920-7671</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0caff0] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                  <p className="text-white text-opacity-90">julianoghi23@hotmail.com</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.open('https://www.google.com/maps/place/Rua+Bartolomeu+de+Gusmão,+723+-+Centro,+Foz+do+Iguaçu+-+PR,+85856-290', '_blank')}
              className="w-full bg-[#c6272f] hover:bg-[#0caff0] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
