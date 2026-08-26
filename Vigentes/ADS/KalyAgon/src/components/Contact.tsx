import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="bg-[#DCDCDC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#012E60] mb-4">
            Contato e Localização
          </h2>
          <div className="w-24 h-1 bg-[#D7B46A] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D7B46A] p-3 rounded-full flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#012E60] mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rua da Saudade, 373 - Sala 2<br />
                    Centro, Cristalina - GO<br />
                    CEP: 73.850-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D7B46A] p-3 rounded-full flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#012E60] mb-2">Email</h3>
                  <a
                    href="mailto:mckaartes@gmail.com"
                    className="text-gray-700 hover:text-[#D7B46A] transition-colors duration-300"
                  >
                    mckaartes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D7B46A] p-3 rounded-full flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#012E60] mb-2">Telefone / WhatsApp</h3>
                  <a
                    href="tel:+556136122686"
                    className="text-gray-700 hover:text-[#D7B46A] transition-colors duration-300"
                  >
                    (61) 3612-2686
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4632652089097!2d-47.45857!3d-15.791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCristalina%20GO!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Kaly Agon - Cristalina GO"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
