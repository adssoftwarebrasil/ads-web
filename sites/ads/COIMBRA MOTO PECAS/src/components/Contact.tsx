import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nMensagem: ${message}`;
    window.open(
      `http://wa.me/559591557077?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[rgb(246,252,255)] to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(2,73,137)] mb-4">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-[rgb(255,236,2)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estamos prontos para atender você! Visite nossa loja ou entre em
              contato
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[rgb(2,73,137)] mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(2,73,137)] rounded-lg p-3 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(2,73,137)] mb-1">
                        Endereço
                      </h4>
                      <p className="text-gray-700">
                        Avenida das Guianas, 911
                        <br />
                        13 de Setembro
                        <br />
                        Boa Vista - Roraima
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(2,73,137)] rounded-lg p-3 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(2,73,137)] mb-1">
                        Telefone/WhatsApp
                      </h4>
                      <a
                        href="http://wa.me/559591557077"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[rgb(2,73,137)] transition-colors"
                      >
                        (95) 99155-7077
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(2,73,137)] rounded-lg p-3 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(2,73,137)] mb-1">
                        E-mail
                      </h4>
                      <a
                        href="mailto:eborgescoimbra@gmail.com"
                        className="text-gray-700 hover:text-[rgb(2,73,137)] transition-colors"
                      >
                        eborgescoimbra@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgb(2,73,137)] rounded-lg p-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[rgb(2,73,137)] mb-1">
                        Horário de Funcionamento
                      </h4>
                      <p className="text-gray-700">
                        Segunda a Sexta
                        <br />
                        07:00 às 18:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-[rgb(2,73,137)] mb-4">
                    Siga-nos nas Redes Sociais
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/coimbra_motopecas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1ei2RYz1mv/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(2,73,137)] mb-6">
                Envie uma Mensagem
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[rgb(2,73,137)] mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(2,73,137)] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[rgb(2,73,137)] mb-2"
                  >
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(2,73,137)] focus:outline-none transition-colors"
                    placeholder="(95) 99999-9999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[rgb(2,73,137)] mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(2,73,137)] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(2,73,137)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(1,58,109)] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.0446185955743!2d-60.68429999999999!3d2.8030575999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93042c24db5703%3A0xfe0a730bd58e5927!2sCoimbra%20Moto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1766061976769!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Coimbra Moto Peças"
              style={{ border: '0px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
