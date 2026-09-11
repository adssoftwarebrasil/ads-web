import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/[0.04] rounded-full -translate-x-1/2 translate-y-1/3 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Fale Conosco
          </h2>
          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Pronto para melhorar a climatizacao do seu espaco? Entre em contato e receba um orcamento personalizado.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6 scroll-reveal-left">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-white/70 text-sm mb-10 leading-relaxed">
                Preencha o formulario ou entre em contato diretamente pelos canais abaixo.
              </p>
              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Telefone / WhatsApp</p>
                    <a
                      href="tel:+556699711471"
                      className="block font-medium text-sm hover:text-secondary transition-colors duration-300"
                    >
                      (66) 99971-1471
                    </a>
                    <a
                      href="tel:+556696001015"
                      className="block font-medium text-sm hover:text-secondary transition-colors duration-300"
                    >
                      (66) 99600-1015
                    </a>
                    <a
                      href="tel:+556635449604"
                      className="block font-medium text-sm hover:text-secondary transition-colors duration-300"
                    >
                      (66) 3544-9604
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:atendimento@climatecsorriso.com.br"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">E-mail</p>
                    <p className="font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                      atendimento@climatecsorriso.com.br
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Localizacao</p>
                    <p className="font-medium text-sm">Rua das Videiras, 654 - Sorriso/MT</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-0.5">Horario</p>
                    <p className="font-medium text-sm">Seg - Sex: 07:30 as 17:30</p>
                    <p className="font-medium text-sm">Sab: 07:30 as 12:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 mb-4">Atendemos toda a cidade de Sorriso - MT</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Sorriso - MT</span>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Todos os Bairros</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5075920968943!2d-55.721910799999996!3d-12.548746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b3adeb040021%3A0xcd027531b9c33c9a!2zQ0xJTUFURUMgLSBJbnN0YWxhw6fDo28gTWFudXRlbsOnw6NvIGUgTG9jYcOnw6NvIGRlIEFyIENvbmRpY2lvbmFkbw!5e0!3m2!1spt-BR!2sbr!4v1770907404025!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao Climatec"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <form className="lg:col-span-7 bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 p-8 sm:p-10 scroll-reveal-right">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                    placeholder="(66) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-200 text-gray-800 resize-none placeholder:text-gray-400"
                  placeholder="Descreva o servico que voce precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-dark text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 group"
              >
                <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                Enviar Mensagem
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
