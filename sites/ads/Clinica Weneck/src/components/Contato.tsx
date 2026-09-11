import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#f1f5f8]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#003870] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Visite Nossa Clínica
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-[#003870] flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-[#003870] font-bold text-xl mb-2">Endereço</h3>
                <p className="text-gray-700 leading-relaxed">
                  Av. República do Líbano, 251
                  <br />
                  Torre 2, Sala 904 - Rio Mar Trade Center
                  <br />
                  Pina - Recife, PE
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#003870] flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-[#003870] font-bold text-xl mb-2">Horário de Atendimento</h3>
                <p className="text-gray-700 leading-relaxed">Segunda a Sexta: 08h às 18h</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#003870] flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-[#003870] font-bold text-xl mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/5581994073827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#003870] transition-colors"
                >
                  (81) 99407-3827
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-[#003870] flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-[#003870] font-bold text-xl mb-2">E-mail</h3>
                <a
                  href="mailto:clinicawerneck@gmail.com"
                  className="text-gray-700 hover:text-[#003870] transition-colors"
                >
                  clinicawerneck@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[#003870] font-bold text-xl mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/clinica_werneck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#003870] text-white p-3 rounded-full hover:bg-[#004a8f] transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://facebook.com/MWS-Werneck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#003870] text-white p-3 rounded-full hover:bg-[#004a8f] transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3826747847196!2d-34.89015!3d-8.089694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a59c2c3a57%3A0x7e1e2b2c3d4e5f60!2sAv.%20Rep%C3%BAblica%20do%20L%C3%ADbano%2C%20251%20-%20Pina%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
            <a
              href="https://maps.google.com/?q=Av.+República+do+Líbano,+251,+Torre+2,+Sala+904,+Pina,+Recife,+PE"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#003870] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#004a8f] transition-colors"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
