export default function Contact() {
  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div
              className="h-64 md:h-full rounded-lg bg-cover bg-center mb-8 md:mb-0 min-h-[400px] relative"
              style={{
                backgroundImage:
                  'url("https://storage.lucasmendes.dev/site-sp/drviniciusortopedista%2FAgende%20sua%20Consulta.jpg")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex flex-col justify-end p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Agende Sua Consulta
                </h2>
                <p className="text-xl text-white mb-6">
                  Entre em contato e cuide da sua coluna com um especialista
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors">
                  <option value="Agendar Consulta">Agendar Consulta</option>
                  <option value="Dúvidas sobre Tratamento">Dúvidas sobre Tratamento</option>
                  <option value="Informações sobre Cirurgia">Informações sobre Cirurgia</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2563eb] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2563eb] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-all duration-300 hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
