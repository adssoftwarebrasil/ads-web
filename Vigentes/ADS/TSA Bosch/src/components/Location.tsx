import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const MAPS_URL =
  'https://maps.google.com/?q=Av.+Buenos+Aires,+1230+-+Vila+Martins,+Goiânia+-+GO';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[rgb(163,24,23)]/10 rounded-full mb-4">
            <p className="text-[rgb(163,24,23)] font-semibold text-sm">LOCALIZAÇÃO</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(4,26,58)] mb-6">
            Visite Nossa Oficina
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em Goiânia-GO, prontos para atender você com excelência.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="space-y-6 flex flex-col h-full">
            <div className="space-y-4 flex-1">
              <div className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-lg">Endereço</h3>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(163,24,23)] transition-colors block truncate"
                      title="Av. Buenos Aires, 1230 - Vila Martins, Goiânia - GO, 74703-060"
                    >
                      Av. Buenos Aires, 1230 - Vila Martins, Goiânia - GO, 74703-060
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-lg">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600 block">
                      Segunda a Sexta: 8h às 18h | Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-lg">Telefones</h3>
                    <p className="text-gray-600 block">
                      (62) 99804-8885 | (62) 99469-9904
                    </p>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-lg">E-mail</h3>
                    <a
                      href="mailto:comercialtsa02@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(163,24,23)] transition-colors block truncate"
                      title="comercialtsa02@gmail.com"
                    >
                      comercialtsa02@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-100 hover:border-[rgb(163,24,23)]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(163,24,23)] to-[rgb(143,20,20)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Instagram width={24} height={24} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[rgb(4,26,58)] mb-1 text-lg">Instagram</h3>
                    <a
                      href="https://www.instagram.com/tsacentrodirecoesbosch/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(163,24,23)] transition-colors block truncate"
                      title="@tsacentrodirecoesbosch"
                    >
                      @tsacentrodirecoesbosch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[rgb(4,26,58)] to-[rgb(4,26,58)]/90 rounded-2xl p-8 text-white mt-auto">
              <h3 className="text-2xl font-bold mb-4">Precisa de Atendimento?</h3>
              <p className="text-gray-200 mb-6">
                Entre em contato agora mesmo e solicite um orçamento sem compromisso.
              </p>
              <button className="bg-[rgb(163,24,23)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[rgb(143,20,20)] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
                Falar com Especialista
              </button>
            </div>
          </div>
          <div className="relative h-full min-h-[500px] lg:min-h-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.0018485049272!2d-49.20917132757245!3d-16.671184523502337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef150ad7133ff%3A0xf2badb7ae7e98a9e!2sTSA%20Centro%20de%20Dire%C3%A7%C3%B5es%20Bosch!5e0!3m2!1spt-BR!2sbr!4v1768506543684!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização TSA Centro de Direções Bosch"
                className="w-full h-full object-cover"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-[rgb(4,26,58)] hover:text-[rgb(163,24,23)] flex items-center gap-2 z-10"
            >
              <MapPin width={20} height={20} />
              <span className="hidden sm:inline">Abrir no Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
