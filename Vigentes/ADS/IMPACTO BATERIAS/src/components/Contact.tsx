import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Venha nos Visitar ou Peça seu Delivery!
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="bg-[#FFD700] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#333333]" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#333333] mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Av. Radial Norte, Qd. E, Lt. 10
                  <br />
                  St. Belo Horizonte
                  <br />
                  Niquelândia-GO, CEP: 76420-000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="bg-[#FFD700] p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#333333]" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#333333] mb-2">Telefones</h3>
                <p className="text-gray-600">
                  WhatsApp:{' '}
                  <a href="tel:+556233541367" className="hover:text-[#FFD700]">
                    (62) 98529-6219
                  </a>
                  <br />
                  WhatsApp:{' '}
                  <a href="https://wa.me/5562996175592" className="hover:text-[#FFD700]">
                    (62) 99617-5592
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="bg-[#FFD700] p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#333333]" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#333333] mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:impactobateriasniq@outlook.com" className="hover:text-[#FFD700]">
                    impactobateriasniq@outlook.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="bg-[#FFD700] p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#333333]" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#333333] mb-2">Horário de Funcionamento</h3>
                <p className="text-gray-600">
                  Segunda a Sábado
                  <br />
                  07:00h às 18:00h
                </p>
              </div>
            </div>
          </div>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3307814626655!2d-48.46769961788631!3d-14.465685655539039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93449214118fa455%3A0xcf056fb464f683b2!2sIMPACTO%20Baterias!5e0!3m2!1spt-PT!2sbr!4v1760057981203!5m2!1spt-PT!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Impacto Baterias"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
