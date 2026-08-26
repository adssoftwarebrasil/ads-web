import { MessageCircle, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[rgb(255,243,229)] py-20 px-6"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[rgb(153,21,16)] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgb(2,74,169)] blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-5 py-2 shadow-lg">
            <MessageCircle className="lucide lucide-message-circle text-white" width={18} height={18} />
            <span className="text-sm font-bold text-white">Fale conosco</span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-[rgb(153,21,16)] md:text-5xl">Entre em Contato</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)]"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Clock className="lucide lucide-clock text-white" width={32} height={32} />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[rgb(153,21,16)]">Horário de Atendimento</h3>
                  <p className="mb-1 text-gray-700">
                    <span className="font-semibold">Segunda a Sexta:</span> 8h às 18h
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Sábado:</span> 8h às 13h
                  </p>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(2,74,169)] to-[rgb(153,21,16)] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="lucide lucide-message-circle text-white" width={32} height={32} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-[rgb(153,21,16)]">WhatsApp</h3>
                  <p className="mb-4 text-lg font-semibold text-gray-800">(16) 99999-1998</p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <MessageCircle className="lucide lucide-message-circle" width={18} height={18} />
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Phone className="lucide lucide-phone text-white" width={32} height={32} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-bold text-[rgb(153,21,16)]">Telefone</h3>
                  <p className="mb-4 text-lg font-semibold text-gray-800">☎️ (16) 3723-1780</p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[rgb(2,74,169)] to-[rgb(153,21,16)] px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Phone className="lucide lucide-phone" width={18} height={18} />
                    Ligar Agora
                  </button>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[rgb(2,74,169)] to-[rgb(153,21,16)] shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Mail className="lucide lucide-mail text-white" width={32} height={32} />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-[rgb(153,21,16)]">E-mail</h3>
                  <a
                    href="mailto:disfran@com4.com.br"
                    className="text-lg font-semibold text-[rgb(2,74,169)] transition-colors hover:text-[rgb(153,21,16)]"
                  >
                    disfran@com4.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="group flex-1 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-[rgb(153,21,16)] to-[rgb(2,74,169)] p-8 text-center text-white">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <MapPin className="lucide lucide-map-pin" width={40} height={40} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Nossa Localização</h3>
                <p className="text-lg font-semibold text-white/90">Franca - SP</p>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <p className="mb-2 text-lg font-bold text-gray-800">Endereço:</p>
                  <p className="leading-relaxed text-gray-700">
                    Rua Estevão Leão Borroul, 1482
                    <br />
                    Centro - Franca - SP
                  </p>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[rgb(153,21,16)] to-[rgb(2,74,169)] px-6 py-4 font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <MapPin className="lucide lucide-map-pin" width={20} height={20} />
                  Ver no Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-[rgb(153,21,16)]">Pronto para conhecer nossos produtos?</h3>
          <p className="mb-6 text-gray-700">
            Entre em contato conosco e descubra as melhores soluções para o seu negócio!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
              WhatsApp
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[rgb(2,74,169)] to-[rgb(153,21,16)] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Phone className="lucide lucide-phone" width={20} height={20} />
              Ligar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
