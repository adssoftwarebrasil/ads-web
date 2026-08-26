import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Shop+Drika+Kids/@-7.2028784,-39.3154577,17z/data=!3m1!4b1!4m6!3m5!1s0x7a17f535ede465b:0x6f177cb2d243f1d1!8m2!3d-7.2028784!4d-39.3154577!16s%2Fg%2F11j7h8q9vd?entry=ttu';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (phone) text += `\nTelefone: ${phone}`;
    if (email) text += `\nE-mail: ${email}`;
    text += `\n\n${message}`;
    window.open(
      `https://wa.me/558888033252?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você! Envie sua mensagem ou visite nossa loja física
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <a
                  href="https://wa.me/558888033252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-pink-50 transition-colors group"
                >
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600 break-words">(88) 98803-3252</div>
                  </div>
                </a>
                <a
                  href="mailto:mundodododryka@hotmail.com"
                  className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-pink-50 transition-colors group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-rose-400 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-600 break-all sm:break-words">
                      mundodododryka@hotmail.com
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-3 sm:p-4 rounded-xl">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-400 p-3 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">Horário de Funcionamento</div>
                    <div className="text-gray-600">Segunda a Sábado</div>
                    <div className="text-gray-600">7:30 às 18:00</div>
                  </div>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 sm:p-4 rounded-xl hover:bg-pink-50 transition-colors group"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">Endereço</div>
                    <div className="text-gray-600">R. São Francisco, 499</div>
                    <div className="text-gray-600">Centro, Juazeiro do Norte - CE</div>
                    <div className="text-gray-600">63010-215</div>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="font-semibold text-gray-900 mb-4">Siga-nos nas redes sociais</div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/shopdrykakids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
                  >
                    <Instagram className="w-5 h-5 flex-shrink-0" />
                    <span className="truncate">@shopdrykakids</span>
                  </a>
                  <a
                    href="https://www.facebook.com/Drykakids"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform"
                  >
                    <Facebook className="w-5 h-5 flex-shrink-0" />
                    <span>Drykakids</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="(88) 98888-8888"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="whitespace-nowrap">Enviar via WhatsApp</span>
                <Send className="w-5 h-5 flex-shrink-0" />
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
