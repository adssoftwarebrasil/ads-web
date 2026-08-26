import { FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(1,51,153)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(255,116,16)] opacity-5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(255,116,16)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(1,51,153)] mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-[rgb(84,84,84)] max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato e descubra como
            podemos ajudar!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[rgb(255,116,16)]">
            <div className="w-14 h-14 bg-gradient-to-br from-[rgb(255,116,16)] to-[rgb(230,100,10)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,51,153)] mb-3">Telefones</h3>
            <p className="text-[rgb(84,84,84)] mb-2 hover:text-[rgb(255,116,16)] transition-colors cursor-pointer">
              (63) 3214-1766
            </p>
            <p className="text-[rgb(84,84,84)] hover:text-[rgb(255,116,16)] transition-colors cursor-pointer"></p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[rgb(1,51,153)]">
            <div className="w-14 h-14 bg-gradient-to-br from-[rgb(1,51,153)] to-[rgb(1,40,120)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,51,153)] mb-3">E-mail</h3>
            <p className="text-[rgb(84,84,84)] hover:text-[rgb(1,51,153)] transition-colors cursor-pointer break-all">
              contato@marajodiesel.com.br
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[rgb(255,116,16)]">
            <div className="w-14 h-14 bg-gradient-to-br from-[rgb(255,116,16)] to-[rgb(230,100,10)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,51,153)] mb-3">Localização</h3>
            <p className="text-[rgb(84,84,84)]">Av. Principal, 1234</p>
            <p className="text-[rgb(84,84,84)]">Palmas - TO, 77000-000</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(1,51,153)] to-[rgb(1,40,120)] rounded-lg flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgb(1,51,153)]">
                    Envie sua Mensagem
                  </h3>
                  <p className="text-sm text-[rgb(84,84,84)]">
                    Responderemos o mais breve possível
                  </p>
                </div>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[rgb(1,51,153)] mb-2"
                    >
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-[rgb(1,51,153)] focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-semibold text-[rgb(1,51,153)] mb-2"
                    >
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-[rgb(1,51,153)] focus:outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[rgb(1,51,153)] mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-[rgb(1,51,153)] focus:outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[rgb(1,51,153)] mb-2"
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-[rgb(1,51,153)] focus:outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[rgb(1,51,153)] mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[rgb(1,51,153)] focus:outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(255,116,16)] to-[rgb(230,100,10)] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.7558!2d-48.3558!3d-10.2433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE0JzM1LjkiUyA0OMKwMjEnMjAuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Marajó Diesel"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(1,51,153)] to-[rgb(1,40,120)] rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Horário de Atendimento</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="font-bold">8h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-medium">Sábado</span>
                  <span className="font-bold">8h - 12h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Domingo</span>
                  <span className="font-bold text-white/70">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
