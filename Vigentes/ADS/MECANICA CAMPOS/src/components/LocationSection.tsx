import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#e1eff5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#152755] mb-4">
            Onde Estamos
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Endereço Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#FF6B35]">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6B35] bg-opacity-10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#152755] mb-2">Endereço</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rua 24, 385 – Industrial 5<br />
                    Água Boa/MT
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Rua+24,+385+Industrial+5+Água+Boa+MT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-[#FF6B35] hover:text-[#152755] font-semibold transition-colors duration-300"
                  >
                    Ver no mapa
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contatos Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#FF6B35]">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6B35] bg-opacity-10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#152755] mb-3">Contatos</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+556634683171" 
                      className="flex items-center gap-2 text-gray-700 hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      <span className="font-semibold">Telefone:</span> (66) 3468-3171
                    </a>
                    <a 
                      href="https://wa.me/5566996460016" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#25D366] transition-colors duration-300"
                    >
                      <span className="font-semibold">WhatsApp:</span> (66) 99646-0016
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horário Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#FF6B35]">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6B35] bg-opacity-10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#152755] mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Segunda a sexta:</span> 7:30h às 18h</p>
                    <p><span className="font-semibold">Sábados:</span> 7:30h às 11:30h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Área de Atendimento Card */}
            <div className="bg-gradient-to-r from-[#152755] to-[#1a3366] rounded-xl p-6 shadow-lg text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Área de Atendimento</h3>
                  <p className="text-gray-100 leading-relaxed">
                    Atendemos Água Boa, toda região do Vale do Araguaia e veículos em trânsito pelo Mato Grosso
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=MECANICA-CAMPOS%2Funnamed%20(1).webp&version_id=null"
                alt="Localização Mecânica Campos"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.8!2d-52.1!3d-14.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAzJzAwLjAiUyA1MsKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
                  }
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-lg">Mecânica Campos</p>
                <p className="text-gray-200 text-sm">Rua 24, 385 - Água Boa/MT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}