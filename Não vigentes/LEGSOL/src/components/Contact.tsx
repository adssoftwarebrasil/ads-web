import { MapPin, ArrowUpRight, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-20 z-0 hidden lg:block"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Pronto para Transformar sua Energia?
          </h2>
          <p className="text-lg text-gray-600">
            Nossa equipe em Franca está pronta para tirar suas dúvidas e criar o projeto ideal para você.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.%20Padre%20Anchieta%2C%202053%20-%20Centro%2C%20Franca%20-%20SP"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[rgb(235,156,51)] hover:shadow-md transition-all duration-300"
            >
              <div className="bg-[rgb(26,110,76)]/10 p-4 rounded-xl h-fit group-hover:bg-[rgb(26,110,76)] transition-colors duration-300">
                <MapPin
                  className="lucide lucide-map-pin text-[rgb(26,110,76)] group-hover:text-white transition-colors"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(27,45,114)] mb-1 flex items-center gap-2">
                  Visite nosso Escritório
                  <ArrowUpRight
                    className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-opacity text-[rgb(235,156,51)]"
                    width={16}
                    height={16}
                  />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  R. Padre Anchieta, n° 2053 - Centro
                  <br />
                  Franca - SP
                </p>
              </div>
            </a>
            <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-5 flex-1">
                <div className="bg-[rgb(26,110,76)]/10 p-4 rounded-xl h-fit">
                  <Phone className="lucide lucide-phone text-[rgb(26,110,76)]" width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(27,45,114)] mb-1">Telefones</h3>
                  <div className="space-y-1">
                    <a
                      href="https://wa.me/5516997631055"
                      target="_blank"
                      className="block text-gray-600 hover:text-[rgb(26,110,76)] font-medium transition-colors"
                    >
                      (16) 99763-1055 (WhatsApp)
                    </a>
                    <a
                      href="tel:1639394142"
                      className="block text-gray-600 hover:text-[rgb(26,110,76)] transition-colors"
                    >
                      (16) 3939-4142 (Fixo)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-[rgb(26,110,76)]/10 p-4 rounded-xl h-fit">
                <Clock className="lucide lucide-clock text-[rgb(26,110,76)]" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(27,45,114)] mb-1">Atendimento</h3>
                <p className="text-gray-600">
                  Segunda a Sexta: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-bold text-[rgb(27,45,114)] mb-4 ml-2">Siga a Legsol</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/legsol.energiasolar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-200 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Instagram className="lucide lucide-instagram" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/legsolenergiasolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transition-all duration-300"
                >
                  <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Facebook className="lucide lucide-facebook" width={20} height={20} />
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center -z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(26,110,76)]"></div>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=R.%20Padre%20Anchieta%2C%202053%20-%20Centro%2C%20Franca%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização LEGSOL Energia Solar"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border-l-4 border-[rgb(26,110,76)]">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Localização</p>
              <p className="text-sm font-bold text-[rgb(27,45,114)]">Legsol Franca</p>
              <p className="text-xs text-gray-600">Venha tomar um café conosco!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
