import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Estamos localizados em Manaus, no bairro Praça 14 de Janeiro, de fácil acesso. Atendemos
            também o interior do Amazonas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 delay-150 opacity-100 translate-y-0">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8916544051604!2d-60.01540742502895!3d-3.123345796852148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05d01b06d935%3A0x93efaea966fad446!2scmglass!5e0!3m2!1spt-BR!2sbr!4v1775581176571!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa CM Glass"
              style={{ border: '0px', display: 'block' }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#034087]/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#034087]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Endereço</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Av. Tarumã, 1550 - Sala 2<br />
                    Praça 14 de Janeiro<br />
                    Manaus - AM, 69020-000
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#034087]/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#034087]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Horário de Atendimento</div>
                  <p className="text-gray-600 text-sm">
                    Segunda a Sexta<br />
                    <strong className="text-gray-800">08:00 às 17:00</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#034087]/8 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#034087]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Telefone / WhatsApp</div>
                  <a
                    href="http://wa.me/559284131569"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#034087] text-sm font-semibold hover:underline"
                  >
                    (92) 9 8413-1569
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#034087]/8 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#034087]" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">E-mail</div>
                  <a
                    href="mailto:cmglassvidros@gmail.com"
                    className="text-[#034087] text-sm font-semibold hover:underline break-all"
                  >
                    cmglassvidros@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
