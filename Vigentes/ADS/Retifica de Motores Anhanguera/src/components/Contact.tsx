import { useState } from 'react';
import { Phone, Mail, MessageSquare, User, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nTelefone: ${phone}`;
    if (email) {
      text += `\nE-mail: ${email}`;
    }
    text += `\n\nMensagem: ${message}`;
    const url = `https://wa.me/556235584336?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[rgb(167,20,42)]">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,20,42)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp para oferecer o melhor
            orçamento para o seu motor.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-[rgb(167,20,42)] to-red-700 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone width={24} height={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Telefone / WhatsApp</p>
                      <a
                        href="tel:+556235584336"
                        className="opacity-90 hover:opacity-100 transition-opacity"
                      >
                        (62) 3558-4336
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail width={24} height={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Horário de Atendimento</p>
                      <p className="opacity-90">Seg - Sex: 7:30-11:30</p>
                      <p className="opacity-90">13:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare width={24} height={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Resposta Rápida</p>
                      <p className="opacity-90">Retornamos seu contato em até 24 horas úteis</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Ao enviar o formulário, você será redirecionado para o WhatsApp com sua mensagem
                    pré-preenchida.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3 p-8 md:p-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center text-gray-700 font-semibold mb-2"
                    >
                      <User width={18} height={18} className="mr-2 text-[rgb(167,20,42)]" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(167,20,42)] focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center text-gray-700 font-semibold mb-2"
                    >
                      <Phone width={18} height={18} className="mr-2 text-[rgb(167,20,42)]" />
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(167,20,42)] focus:outline-none transition-colors"
                      placeholder="(62) 99999-9999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center text-gray-700 font-semibold mb-2"
                    >
                      <Mail width={18} height={18} className="mr-2 text-[rgb(167,20,42)]" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(167,20,42)] focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center text-gray-700 font-semibold mb-2"
                    >
                      <MessageSquare width={18} height={18} className="mr-2 text-[rgb(167,20,42)]" />
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(167,20,42)] focus:outline-none transition-colors resize-none"
                      placeholder="Descreva o serviço que você precisa ou tire suas dúvidas..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[rgb(167,20,42)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(147,15,37)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar para WhatsApp</span>
                    <Send width={20} height={20} />
                  </button>
                  <p className="text-sm text-gray-500 text-center">* Campos obrigatórios</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
