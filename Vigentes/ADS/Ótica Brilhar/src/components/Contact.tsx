import { useState } from 'react';
import { Phone, MessageSquare, User, Send } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0ATelefone: ${phone}.%0A${message}`;
    const encoded = text
      .split('%0A')
      .map((part) => encodeURIComponent(part))
      .join('%0A');
    window.open(`http://wa.me/556684469577?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Fale Conosco</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Tire suas dúvidas e <span className="text-[rgb(13,111,69)]">agende uma visita</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa equipe está pronta para ajudar você a encontrar o óculos ideal. Preencha o formulário e te
              responderemos pelo WhatsApp rapidinho!
            </p>
            <div className="space-y-4">
              <a
                href="tel:+556634237556"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[rgb(13,111,69)]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="lucide lucide-phone text-[rgb(197,46,52)]" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Telefone</div>
                  <div className="text-sm font-semibold text-gray-800">(66) 3423-7556</div>
                </div>
              </a>
              <a
                href="http://wa.me/556684469577"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[rgb(13,111,69)]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-[18px] h-[18px] text-[rgb(13,111,69)]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">WhatsApp</div>
                  <div className="text-sm font-semibold text-gray-800">(66) 98446-9577</div>
                </div>
              </a>
              <a
                href="mailto:oticabrilhar@gmail.com"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[rgb(13,111,69)]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="lucide lucide-message-square text-gray-500" width={18} height={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">E-mail</div>
                  <div className="text-sm font-semibold text-gray-800">oticabrilhar@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Seu nome</label>
                <div className="relative">
                  <User
                    className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    width={16}
                    height={16}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Como posso te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(13,111,69)]/40 focus:border-[rgb(13,111,69)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone / WhatsApp</label>
                <div className="relative">
                  <Phone
                    className="lucide lucide-phone absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    width={16}
                    height={16}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(66) 9 0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(13,111,69)]/40 focus:border-[rgb(13,111,69)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Diga o que você precisa. Ex: Quero fazer um exame, preciso de óculos solar..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(13,111,69)]/40 focus:border-[rgb(13,111,69)] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[rgb(13,111,69)] hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-green-200"
              >
                <Send className="lucide lucide-send" width={16} height={16} />
                Enviar pelo WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem pronta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
