import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(0,148,216)]/10 px-5 py-2 rounded-full mb-6">
            <p className="text-[rgb(0,148,216)] font-semibold text-sm tracking-wide">FALE CONOSCO</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgb(45,52,142)] mb-6">
            Visite Nossa Loja
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estamos sempre prontos para atendê-lo</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start space-x-5 group">
              <div className="bg-gradient-to-br from-[rgb(0,148,216)] to-[rgb(18,70,156)] p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <MapPin width={32} height={32} strokeWidth={2.5} className="lucide lucide-map-pin text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-3 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                  Endereço
                </h3>
                <p className="text-gray-700 text-lg">
                  Estrada dos Remédios, 352 - Afogados
                  <br />
                  Recife - PE
                </p>
                <p className="text-gray-600 mt-2">
                  Atendemos Afogados, Mustardinha, San Martin, Bongi, Mangueira e toda região de Recife
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="bg-gradient-to-br from-[rgb(18,70,156)] to-[rgb(45,52,142)] p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Clock width={32} height={32} strokeWidth={2.5} className="lucide lucide-clock text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-3 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                  Horário de Funcionamento
                </h3>
                <p className="text-gray-700 text-lg">
                  Segunda a Sábado
                  <br />
                  Sempre prontos para te atender
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="bg-gradient-to-br from-[rgb(0,148,216)] to-[rgb(18,70,156)] p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Phone width={32} height={32} strokeWidth={2.5} className="lucide lucide-phone text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-3 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/5581995483408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-lg hover:text-[rgb(0,148,216)] transition-colors"
                >
                  (81) 99548-3408
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="bg-gradient-to-br from-[rgb(18,70,156)] to-[rgb(45,52,142)] p-5 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Mail width={32} height={32} strokeWidth={2.5} className="lucide lucide-mail text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[rgb(45,52,142)] mb-3 group-hover:text-[rgb(0,148,216)] transition-colors duration-300">
                  E-mail
                </h3>
                <a
                  href="mailto:papelariavasconcelos@gmail.com"
                  className="text-gray-700 text-lg hover:text-[rgb(0,148,216)] transition-colors"
                >
                  papelariavasconcelos@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-3xl transition-shadow duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.398551988446!2d-34.91894188518395!3d-8.066888694215547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18dd7e5c8d5d%3A0x5e5e5e5e5e5e5e5e!2sEstrada%20dos%20Rem%C3%A9dios%2C%20352%20-%20Afogados%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Papelaria Vasconcelos"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
