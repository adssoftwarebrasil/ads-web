import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#004AAC] font-semibold text-sm tracking-widest uppercase mb-3">
            Onde estamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Localização de fácil acesso em Itapuã, Salvador. Atendemos também os bairros de
            Patamares, Piatã, Jaguaribe, Aeroporto, São Cristóvão e Lauro de Freitas.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.54474776104!2d-38.3644026!3d-12.936968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716104909776891%3A0xc316335f60677a28!2sAv.%20Dorival%20Caymmi%2C%20548%20-%20Itapu%C3%A3%2C%20Salvador%20-%20BA%2C%2041635-152!5e0!3m2!1spt-BR!2sbr!4v1715000000000"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização JM Celular"
              style={{ border: '0px', minHeight: '360px', display: 'block' }}
            />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="h-full">
              <div className="flex items-start gap-4 bg-[#F4F8FF] rounded-2xl p-5 border border-blue-100 transition-all duration-200 h-full ">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm ">
                  <MapPin
                    width={20}
                    height={20}
                    className="text-[#004AAC]  transition-colors"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1  transition-colors">Endereço</p>
                  <p className="text-sm text-gray-600  transition-colors">Av. Dorival Caymmi, 548</p>
                  <p className="text-sm text-gray-600  transition-colors">Itapuã, Salvador - BA</p>
                  <p className="text-sm text-gray-600  transition-colors">CEP 41.635-152</p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="flex items-start gap-4 bg-[#F4F8FF] rounded-2xl p-5 border border-blue-100 transition-all duration-200 h-full ">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm ">
                  <Clock width={20} height={20} className="text-[#004AAC]  transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1  transition-colors">
                    Horário de Funcionamento
                  </p>
                  <p className="text-sm text-gray-600  transition-colors">
                    Segunda a Sexta: 08h às 17h
                  </p>
                  <p className="text-sm text-gray-600  transition-colors">Sábado: 08h às 14h</p>
                </div>
              </div>
            </div>
            <a
              href="http://wa.me/557192534118"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="flex items-start gap-4 bg-[#F4F8FF] rounded-2xl p-5 border border-blue-100 transition-all duration-200 h-full hover:bg-[#004AAC] hover:border-[#004AAC] group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-500">
                  <Phone
                    width={20}
                    height={20}
                    className="text-[#004AAC] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1 group-hover:text-white transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                    (71) 9 9253-4118
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/jmcelulariphone/"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="flex items-start gap-4 bg-[#F4F8FF] rounded-2xl p-5 border border-blue-100 transition-all duration-200 h-full hover:bg-[#004AAC] hover:border-[#004AAC] group cursor-pointer">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-500">
                  <Instagram
                    width={20}
                    height={20}
                    className="text-[#004AAC] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 mb-1 group-hover:text-white transition-colors">
                    Instagram
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                    @jmcelulariphone
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
