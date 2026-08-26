import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { WHATSAPP_PLAIN, INSTAGRAM_URL, EMAIL, ADDRESS_LINES } from '../constants';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 bg-gradient-to-b from-white to-[rgb(235,208,217)]/20 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgb(218,185,165)]/30 to-transparent"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[rgb(218,185,165)]/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[rgb(235,208,217)]/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="animate-fade-in-left pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(218,185,165)]/10 text-[rgb(218,185,165)] font-semibold text-sm mb-6 border border-[rgb(218,185,165)]/20">
                <span className="w-2 h-2 rounded-full bg-[rgb(218,185,165)] animate-pulse"></span>
                Fale Conosco
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Estamos Prontos para <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(218,185,165)] to-[rgb(198,165,145)]">
                  Atender Você
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                Tem alguma dúvida sobre os atendimentos ou quer agendar uma consulta? Entre em
                contato pelos nossos canais oficiais.
              </p>
              <div className="space-y-8">
                <a
                  href={WHATSAPP_PLAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[rgb(218,185,165)] group-hover:scale-110 group-hover:bg-[rgb(218,185,165)] group-hover:text-white transition-all duration-300">
                    <Phone width="24" height="24" className="lucide lucide-phone " />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg group-hover:text-[rgb(218,185,165)] transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-gray-600 font-light">(62) 99644-1515</p>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[rgb(218,185,165)] group-hover:scale-110 group-hover:bg-[rgb(218,185,165)] group-hover:text-white transition-all duration-300">
                    <Mail width="24" height="24" className="lucide lucide-mail " />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg group-hover:text-[rgb(218,185,165)] transition-colors">
                      E-mail
                    </p>
                    <p className="text-gray-600 font-light break-all">{EMAIL}</p>
                  </div>
                </a>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[rgb(218,185,165)] group-hover:scale-110 group-hover:bg-[rgb(218,185,165)] group-hover:text-white transition-all duration-300">
                    <MapPin width="24" height="24" className="lucide lucide-map-pin " />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg group-hover:text-[rgb(218,185,165)] transition-colors">
                      Endereço
                    </p>
                    {ADDRESS_LINES.map((line, i) => (
                      <p
                        key={line}
                        className={`text-gray-600 font-light${i < ADDRESS_LINES.length - 1 ? ' mb-1' : ''}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[rgb(218,185,165)] group-hover:scale-110 group-hover:bg-[rgb(218,185,165)] group-hover:text-white transition-all duration-300">
                    <Instagram width="24" height="24" className="lucide lucide-instagram " />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg group-hover:text-[rgb(218,185,165)] transition-colors">
                      Instagram
                    </p>
                    <p className="text-gray-600 font-light">@mariboccanera.pediatra</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <form className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[rgb(218,185,165)]/10 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(218,185,165)]/10 rounded-bl-[100%] pointer-events-none"></div>
                <div className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 ml-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Digite seu nome"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[rgb(218,185,165)] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2 ml-1">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[rgb(218,185,165)] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 ml-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[rgb(218,185,165)] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 ml-1">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Sobre o que gostaria de falar?"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[rgb(218,185,165)] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 ml-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Digite sua mensagem aqui..."
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[rgb(218,185,165)] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400 text-gray-700"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-[rgb(218,185,165)] text-white rounded-2xl hover:bg-[rgb(198,165,145)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <span>Enviar Mensagem</span>
                    <Send
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="lucide lucide-send "
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
