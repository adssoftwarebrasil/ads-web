import { Send, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Dúvidas ou <span className="text-red-600">Sugestões?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para oferecer um atendimento personalizado. Escolha o canal de sua preferência.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(62) 9 9999-9999"
                    className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Sua Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar você hoje?"
                  className="w-full px-5 py-4 rounded-2xl bg-white border-none shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 active:scale-[0.98]"
              >
                <Send className="lucide lucide-send w-5 h-5" width={24} height={24} />
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gray-900 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-3xl transition-colors group-hover:bg-red-600/20"></div>
              <h3 className="text-2xl font-bold mb-8">Canais Diretos</h3>
              <div className="space-y-6">
                <a href="tel:6293756868" className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-red-600 transition-colors">
                    <Phone className="lucide lucide-phone w-5 h-5 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Telefone</p>
                    <p className="text-lg font-medium">(62) 9375-6868</p>
                  </div>
                </a>
                <a href="mailto:contato@oticamoderna.com.br" className="flex items-start gap-4 group/item">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover/item:bg-red-600 transition-colors">
                    <Mail className="lucide lucide-mail w-5 h-5 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">E-mail</p>
                    <p className="text-lg font-medium break-all text-sm sm:text-lg">contato@oticamoderna.com.br</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="lucide lucide-map-pin w-5 h-5 text-white" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Endereço</p>
                    <p className="text-gray-200">R. 38, 513 - St. Marista, Goiânia - GO</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-4">Siga-nos</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/oticamodernago"
                    target="_blank"
                    className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <Instagram className="lucide lucide-instagram w-5 h-5" width={24} height={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <Facebook className="lucide lucide-facebook w-5 h-5" width={24} height={24} />
                  </a>
                  <a
                    href="https://wa.me/556293756868"
                    target="_blank"
                    className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                  >
                    <MessageCircle className="lucide lucide-message-circle w-5 h-5" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 h-[280px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3781744122187!2d-49.2704!3d-16.6974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef14f8c8b6713%3A0x6b772093e9a5d5a!2sR.%2038%2C%20513%20-%20St.%20Marista%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Localização"
                style={{ border: '0px', filter: 'grayscale(0.2)' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
