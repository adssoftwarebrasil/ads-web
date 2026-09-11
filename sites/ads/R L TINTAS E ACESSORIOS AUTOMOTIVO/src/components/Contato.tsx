import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    const url = `https://wa.me/5566984628134?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="bg-[#f9f9f9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-red-700 text-sm font-bold uppercase tracking-widest">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mt-2 mb-4">
            Venha Nos Visitar
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Estamos em Primavera do Leste - MT, prontos para atender você com qualidade e preço
            justo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-black mb-5">Informações de Contato</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="http://wa.me/5566984628134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-red-700/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/20 transition-colors">
                    <Phone className="lucide lucide-phone text-red-700" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      WhatsApp / Telefone
                    </p>
                    <p className="text-black font-semibold group-hover:text-red-700 transition-colors">
                      (66) 98462-8134
                    </p>
                  </div>
                </a>
                <a href="mailto:rltintas.automotivas@outlook.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-red-700/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-700/20 transition-colors">
                    <Mail className="lucide lucide-mail text-red-700" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">E-mail</p>
                    <p className="text-black font-semibold group-hover:text-red-700 transition-colors text-sm">
                      rltintas.automotivas@outlook.com
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-700/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin text-red-700" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Endereço</p>
                    <p className="text-black font-semibold text-sm">
                      Av. Florianópolis, 153 – Parque Eldorado
                      <br />
                      Primavera do Leste – MT, 78880-000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-700/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="lucide lucide-clock text-red-700" width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Horários</p>
                    <div className="flex flex-wrap gap-1 text-sm mb-0.5">
                      <span className="font-semibold text-black">Segunda a Sexta:</span>
                      <span className="text-gray-600">07:00 – 11:00 | 13:00 – 17:00</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm mb-0.5">
                      <span className="font-semibold text-black">Sábado:</span>
                      <span className="text-gray-600">07:00 – 11:00</span>
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm mb-0.5">
                      <span className="font-semibold text-black">Domingo:</span>
                      <span className="text-gray-600">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.6233093497503!2d-54.29493902487476!3d-15.558311585049589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937725c8066efe51%3A0x24f2c490aea7142f!2sRL%20Tintas%20e%20Acess%C3%B3rios%20Automotivos%3A%20tinta%20automotiva%20de%20qualidade!5e0!3m2!1spt-BR!2sbr!4v1771604590727!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RL Tintas no Google Maps"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-2">Envie uma Mensagem</h3>
            <p className="text-gray-500 text-sm mb-7">
              Preencha o formulário e entraremos em contato pelo WhatsApp.
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Seu Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="João da Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(66) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Como podemos ajudar?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Preciso de tinta automotiva para..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white font-bold py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-red-800/20"
              >
                Enviar pelo WhatsApp
                <Send className="lucide lucide-send " width={17} height={17} />
              </button>
              <p className="text-xs text-center text-gray-400">
                Você será redirecionado para o WhatsApp com sua mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
