import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\nWhatsApp: ${form.whatsapp}\nE-mail: ${form.email}\nAssunto: ${form.subject}\nMensagem: ${form.message}`;
    const url = `https://wa.me/5516992368763?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[rgb(130,116,187)]/10 rounded-full mb-6">
            <span className="text-[rgb(130,116,187)] font-semibold text-sm uppercase tracking-wide">
              Contato
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas ou Sugestões
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Entre em contato, a nossa equipe está pronta para te atender!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-xl flex items-center justify-center">
                  <Phone
                    width={24}
                    height={24}
                    className="lucide lucide-phone w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Telefone
                  </h3>
                  <a
                    href="tel:+5516992368763"
                    className="text-gray-600 hover:text-[rgb(88,171,218)] transition-colors"
                  >
                    16 99236-8763
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-xl flex items-center justify-center">
                  <Mail
                    width={24}
                    height={24}
                    className="lucide lucide-mail w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    E-mail
                  </h3>
                  <a
                    href="mailto:pharmafloris@gmail.com"
                    className="text-gray-600 hover:text-[rgb(88,171,218)] transition-colors break-all"
                  >
                    pharmafloris@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[rgb(88,171,218)] to-[rgb(130,116,187)] rounded-xl flex items-center justify-center">
                  <MapPin
                    width={24}
                    height={24}
                    className="lucide lucide-map-pin w-6 h-6 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    AV. REGIT ARAB 335, CIDADE ARACY SÃO CARLOS/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(88,171,218)] focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(88,171,218)] focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(88,171,218)] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(88,171,218)] focus:border-transparent transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(88,171,218)] focus:border-transparent transition-all resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[rgb(88,171,218)] to-[rgb(130,116,187)] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Send
                  width={24}
                  height={24}
                  className="lucide lucide-send w-5 h-5"
                />
                Enviar WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
