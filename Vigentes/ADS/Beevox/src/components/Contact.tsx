import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Meu nome é *${formData.name}*.%0A%0ATelefone: ${formData.phone}%0AE-mail: ${formData.email}%0A%0AMensagem:%0A${formData.message}`;

    const whatsappUrl = `http://wa.me/5565999818250?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-[rgb(246,182,31)]">Contato</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco e agende sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      R. Gago Coutinho, 350 - Araés
                      <br />
                      Cuiabá - MT, 78005-730
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                    <p className="text-gray-600">
                      <a
                        href="tel:6536248823"
                        className="hover:text-[rgb(246,182,31)] transition-colors"
                      >
                        (65) 3624-8823
                      </a>
                      <br />
                      <a
                        href="http://wa.me/5565999818250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(246,182,31)] transition-colors"
                      >
                        (65) 99981-8250 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Redes Sociais</h4>
                    <p className="text-gray-600">
                      <a
                        href="https://www.instagram.com/beevox.cuiaba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(246,182,31)] transition-colors"
                      >
                        @beevox.cuiaba
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(246,182,31)]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[rgb(246,182,31)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 12h e 13h às 17h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(246,182,31)] focus:ring-2 focus:ring-[rgb(246,182,31)]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(246,182,31)] focus:ring-2 focus:ring-[rgb(246,182,31)]/20 outline-none transition-all"
                  placeholder="(65) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(246,182,31)] focus:ring-2 focus:ring-[rgb(246,182,31)]/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(246,182,31)] focus:ring-2 focus:ring-[rgb(246,182,31)]/20 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Enviar via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}