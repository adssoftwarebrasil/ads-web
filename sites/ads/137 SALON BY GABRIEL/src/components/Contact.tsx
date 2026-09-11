import { MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002C2F] mb-4">Visite-nos</h2>
          <p className="text-lg md:text-xl text-[#002C2F]/70 max-w-2xl mx-auto">
            Estamos localizados em Goiânia e prontos para receber você.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#002C2F] mb-8">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#002C2F] rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-[#F8EFE6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002C2F] mb-1">Endereço</h4>
                  <p className="text-[#002C2F]/70">
                    Rua 137, número 556, loja 01 e 03<br />
                    Goiânia, GO - CEP 74.170-120
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#002C2F] rounded-lg flex items-center justify-center">
                  <Clock size={24} className="text-[#F8EFE6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002C2F] mb-1">Horário de Funcionamento</h4>
                  <p className="text-[#002C2F]/70">
                    Segunda a Sábado<br />
                    8:30 às 19:00
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#002C2F] rounded-lg flex items-center justify-center">
                  <Instagram size={24} className="text-[#F8EFE6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#002C2F] mb-1">Redes Sociais</h4>
                  <div className="space-y-2">
                    <a
                      href="https://instagram.com/137Salon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#002C2F]/70 hover:text-[#002C2F] transition-colors"
                    >
                      <Instagram size={18} className="mr-2" />@137Salon
                    </a>
                    <a
                      href="https://facebook.com/137salon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#002C2F]/70 hover:text-[#002C2F] transition-colors"
                    >
                      <Facebook size={18} className="mr-2" />137salon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5456789!2d-49.2847!3d-16.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQxJzEyLjgiUyA0OcKwMTcnMDUuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização 137 Salon"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
