import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#FFA500] font-semibold text-sm uppercase tracking-wider">Contato</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Fale <span className="text-[#B87333]">Conosco</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para te ajudar! Entre em contato e tire suas dúvidas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <Phone size={24} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-2">Telefone</h3>
                <a
                  href="tel:5519998343932"
                  className="text-gray-700 hover:text-[#FFA500] transition-colors"
                >
                  (19) 99834-3932
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <Mail size={24} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-2">E-mail</h3>
                <a
                  href="mailto:pemaqlocacao@gmail.com"
                  className="text-gray-700 hover:text-[#FFA500] transition-colors"
                >
                  pemaqlocacao@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-[#FFA500]/10">
                <MapPin size={24} className="text-[#FFA500]" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-2">Endereço</h3>
                <p className="text-gray-700">
                  Rua Virginia Pratta Gregolin, 685
                  <br />
                  Bairro Parque São Matheus
                  <br />
                  CEP 13409-217
                </p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nome"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FFA500] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="WhatsApp"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FFA500] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FFA500] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Assunto"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FFA500] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                required
                rows={5}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FFA500] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
