import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#D7282A] font-bold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00335F] mt-4 mb-6">Dúvidas ou Sugestões</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Entre em contato conosco e teremos prazer em atendê-lo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#D7282A]/10 rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#D7282A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#00335F] mb-2">Telefone</h3>
                <a href="tel:+5588996471212" className="text-gray-600 hover:text-[#D7282A] transition-colors">
                  (88) 99647-1212
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#2BA2CC]/10 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#2BA2CC]" />
              </div>
              <div>
                <h3 className="font-bold text-[#00335F] mb-2">E-mail</h3>
                <a
                  href="mailto:guiauto30horas@hotmail.com"
                  className="text-gray-600 hover:text-[#2BA2CC] transition-colors"
                >
                  guiauto30horas@hotmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#D7282A]/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#D7282A]" />
              </div>
              <div>
                <h3 className="font-bold text-[#00335F] mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Rua Sousa Aguiar, Nº 66
                  <br />
                  Cidade Gerardo Cristino de Menezes
                  <br />
                  Sobral-CE – CEP: 62.051-420
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.938905290443!2d-40.336885099999996!3d-3.7072393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac6debe65863b%3A0xad3deb3cb7b30457!2sGUIAUTO%20SERVI%C3%87OS%20E%20PE%C3%87AS%20-%20OFICINA%20MECANICA%2C%20AUTO%20PE%C3%87AS%2C%20ELETRICA%20E%20REBOQUE!5e0!3m2!1spt-BR!2sus!4v1770932425715!5m2!1spt-BR!2sus"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl p-8 shadow-xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#00335F] mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2BA2CC] focus:ring-2 focus:ring-[#2BA2CC]/20 outline-none transition-all duration-300"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-[#00335F] mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2BA2CC] focus:ring-2 focus:ring-[#2BA2CC]/20 outline-none transition-all duration-300"
                placeholder="(88) 99999-9999"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#00335F] mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2BA2CC] focus:ring-2 focus:ring-[#2BA2CC]/20 outline-none transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[#00335F] mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2BA2CC] focus:ring-2 focus:ring-[#2BA2CC]/20 outline-none transition-all duration-300"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#00335F] mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2BA2CC] focus:ring-2 focus:ring-[#2BA2CC]/20 outline-none transition-all duration-300 resize-none"
                placeholder="Descreva sua necessidade..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D7282A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b82228] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
