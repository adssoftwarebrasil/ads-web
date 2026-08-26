export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(51,58,114)] mb-4">
            CONTATO
          </h2>
          <p className="text-xl text-gray-600 mt-4">Dúvidas ou sugestões</p>
          <div className="w-24 h-1 bg-[rgb(251,246,199)] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[rgb(51,58,114)] focus:outline-none focus:ring-2 focus:ring-[rgb(51,58,114)]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp"
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[rgb(51,58,114)] focus:outline-none focus:ring-2 focus:ring-[rgb(51,58,114)]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[rgb(51,58,114)] focus:outline-none focus:ring-2 focus:ring-[rgb(51,58,114)]/20 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  required
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[rgb(51,58,114)] focus:outline-none focus:ring-2 focus:ring-[rgb(51,58,114)]/20 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensagem"
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[rgb(51,58,114)] focus:outline-none focus:ring-2 focus:ring-[rgb(51,58,114)]/20 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(51,58,114)] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[rgb(51,58,114)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.4594676655697!2d-49.246364!3d-16.703911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1f33c066243%3A0x33c1dcbb007d0017!2sGyn%20Suites!5e0!3m2!1spt-BR!2sus!4v1769797048695!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização GYN SUITES"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
