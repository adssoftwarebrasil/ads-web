import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';

const regions = ['Camaçari', 'Abrantes', 'Simões Filho', "Dias d'Ávila"];

export default function Location() {
  return (
    <section id="localizacao" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(60,100,139)] mb-4">Visite Nossa Loja</h2>
          <p className="text-base md:text-lg text-gray-600 px-2">Estamos localizados em Camaçari, atendendo toda a região com os melhores materiais evangélicos.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[350px] md:min-h-[500px] h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.447551062!2d-38.326!3d-12.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQxJzUyLjgiUyAzOMKwMTknMzMuNiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Neves Artigos Evangélicos"
              className="w-full h-full"
              style={{ border: '0px', minHeight: '350px' }}
            ></iframe>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex-1">
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-[rgb(157,119,0)] p-3 rounded-xl shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(60,100,139)] mb-2">Endereço</h3>
                  <address className="text-gray-700 text-base md:text-lg not-italic leading-relaxed">
                    Tv. Getúlio Vargas, 10<br />Alto da Cruz<br />Camaçari - BA, 42803-107
                  </address>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Tv.+Getúlio+Vargas,+10+-+Alto+da+Cruz,+Camaçari+-+BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[rgb(157,119,0)] hover:underline font-bold mt-4 transition-all"
                  >
                    <Navigation size={18} />
                    <span>Como Chegar</span>
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(60,100,139)] p-3 rounded-xl shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl font-bold text-[rgb(60,100,139)] mb-4">Horário de Funcionamento</h3>
                    <div className="space-y-3 text-gray-700 max-w-xs">
                      <div className="flex justify-between items-center border-b border-gray-50 pb-1">
                        <span className="font-medium">Segunda a Sexta</span>
                        <span>08:30 - 17:30</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-50 pb-1">
                        <span className="font-medium">Sábado</span>
                        <span>08:30 - 12:30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Domingo</span>
                        <span className="text-red-500 font-bold uppercase text-xs">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(157,119,0)] to-[rgb(137,99,0)] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <a
                  href="tel:+557136277599"
                  className="flex items-center space-x-4 hover:bg-white/10 p-2 -ml-2 rounded-xl transition-colors group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/40 transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-white/70 uppercase tracking-wider font-semibold">Telefone</p>
                    <p className="font-bold text-lg">(71) 3627-7599</p>
                  </div>
                </a>
                <a
                  href="mailto:nevesartigosevangelicos@gmail.com"
                  className="flex items-center space-x-4 hover:bg-white/10 p-2 -ml-2 rounded-xl transition-colors group"
                >
                  <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/40 transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-white/70 uppercase tracking-wider font-semibold">E-mail</p>
                    <p className="font-bold break-all text-sm md:text-base leading-tight">nevesartigosevangelicos@gmail.com</p>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm font-medium mb-4">Atendemos toda a região:</p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <span
                      key={region}
                      className="bg-black/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-white/10"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
