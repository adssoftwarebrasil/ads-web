import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#f0e92c] font-semibold text-sm uppercase tracking-wider">Localização</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mt-2 mb-4">Visite Nossa Oficina</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Estamos prontos para atender você em Foz do Iguaçu</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#f0e92c] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#f0e92c] p-3 rounded-lg">
                  <MapPin className="lucide lucide-map-pin text-[#0a0a0a]" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">Endereço</h3>
                  <p className="text-gray-600">Av. Olímpio Rafagnin, 361<br />Parque Presidente II<br />Foz do Iguaçu - PR</p>
                  <a
                    href="https://www.google.com/maps/dir//Mec%C3%A2nica+277/@-25.51021397751071,-54.557854024607906,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-[#f0e92c] hover:text-[#e0d91c] font-semibold"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#f0e92c] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#f0e92c] p-3 rounded-lg">
                  <Clock className="lucide lucide-clock text-[#0a0a0a]" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-gray-600">
                    <p className="flex justify-between"><span className="font-medium">Segunda a Sexta:</span><span>08:00 - 18:00</span></p>
                    <p className="flex justify-between"><span className="font-medium">Sábado e Domingo:</span><span>Fechado</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#f0e92c] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#f0e92c] p-3 rounded-lg">
                  <Phone className="lucide lucide-phone text-[#0a0a0a]" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">Telefone / WhatsApp</h3>
                  <a href="http://wa.me/5545998527494" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#f0e92c] font-medium">(45) 99852-7494</a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#f0e92c] transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#f0e92c] p-3 rounded-lg">
                  <Mail className="lucide lucide-mail text-[#0a0a0a]" width={24} height={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">E-mail</h3>
                  <a href="mailto:mecanica_277@hotmail.com" className="text-gray-600 hover:text-[#f0e92c] font-medium break-all">mecanica_277@hotmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.8450427445005!2d-54.557854024607906!3d-25.51021397751071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69198de3ada43%3A0xf8ccbbb1edb1ea1c!2sMec%C3%A2nica%20277!5e0!3m2!1spt-BR!2sbr!4v1766409923998!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
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
