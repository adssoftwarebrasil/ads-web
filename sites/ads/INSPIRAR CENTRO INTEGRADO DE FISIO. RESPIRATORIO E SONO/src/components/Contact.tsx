import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-gradient-to-br from-blue-700 to-cyan-600 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,...')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 text-white">
          <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">
            Fale Conosco
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Vamos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              conversar
            </span>
            ?
          </h2>
          <p className="text-xl text-blue-100 mt-4">
            Entre em contato para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <form className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-cyan-400/50">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                placeholder="Terapia, Treinamento, Dúvida, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                placeholder="Detalhe sua solicitação..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-400/50"
            >
              <Send
                className="lucide lucide-send w-5 h-5"
                width={24}
                height={24}
              />
              Enviar via WhatsApp
            </button>
          </form>
          <div className="space-y-8">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-400/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7570457635293!2d-55.5009141!3d-11.8596645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9330ed4f9a0c78a7%3A0xc6e492b45f06c6e7!2sR.%20Cannes%2C%20316%20-%20Loteamento%20Jardim%20Monet%2C%20Sinop%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Inspirar Centro Integrado"
                style={{ border: '0px' }}
              ></iframe>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin
                    className="lucide lucide-map-pin w-5 h-5 text-white"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Endereço</div>
                  <div className="text-gray-600 text-sm">
                    R. Cannes, 316 - Loteamento Jardim Monet
                    <br />
                    Sinop - MT
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone
                    className="lucide lucide-phone w-5 h-5 text-white"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Telefone</div>
                  <a
                    href="tel:+556630153100"
                    className="text-blue-600 hover:underline transition-colors text-sm font-semibold"
                  >
                    (66) 3015-3100
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail
                    className="lucide lucide-mail w-5 h-5 text-white"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:contato@inspirarservicos.com.br"
                    className="text-blue-600 hover:underline transition-colors break-all text-sm font-semibold"
                  >
                    contato@inspirarservicos.com.br
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
