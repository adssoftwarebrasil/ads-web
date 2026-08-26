import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';
const WHATSAPP_FINANCEIRO = 'http://wa.me/5538998911494';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0ATelefone: ${phone}%0A%0A${message}`;
    window.open(`https://wa.me/5538999719665?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Estamos Prontos Para Atender Você
          </h2>
          <p className="text-lg text-gray-600">
            Visite nossa loja, entre em contato pelo WhatsApp ou preencha o formulário abaixo. Nossa
            equipe está pronta para ajudar!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                <p className="text-gray-600">R. Prof. Olímpio Gonzaga, 58 - Barroca</p>
                <p className="text-gray-600">Unaí - MG, 38616-062</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Telefone / WhatsApp</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Atendimento / Vendas:</p>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium block"
                    >
                      (38) 99971-9665
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Financeiro:</p>
                    <a
                      href={WHATSAPP_FINANCEIRO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium block"
                    >
                      (38) 99891-1494
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h3>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="font-bold text-xl mb-2">Atendimento Emergencial</h3>
              <p className="text-blue-100 mb-4">
                Para casos urgentes de oxigênio medicinal, entre em contato pelo WhatsApp a qualquer
                momento.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all font-semibold"
              >
                <Phone size={18} />
                Emergência WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h3>
              <p className="text-gray-600 mb-6">
                Preencha o formulário e entraremos em contato via WhatsApp
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Como podemos ajudar você?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
                >
                  <Send size={20} />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.1382475454843!2d-46.90555922485763!3d-16.36691848435658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9357abab6658cf6f%3A0x38b84417b4bc29d3!2sNoroeste%20Oxig%C3%AAnio!5e0!3m2!1spt-BR!2sbr!4v1768850342321!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Noroeste Oxigênio"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
