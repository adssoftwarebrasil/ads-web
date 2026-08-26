import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Nome: ${form.name}%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AAssunto: ${form.subject}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/556733265463?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(31,29,30)] mb-6">
              Dúvidas ou Sugestões
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(180,137,27)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(180,137,27)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(180,137,27)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(180,137,27)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Qual o motivo do contato?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(180,137,27)] focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(180,137,27)] text-white px-8 py-4 rounded-lg text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enviar
              </button>
            </form>
          </div>
          <div>
            <div className="mb-8">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.7944586!2d-54.64499!3d-20.44826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7c7c7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sRua%20Dr.%20Ant%C3%B4nio%20Alves%20Arantes%2C%20307%20-%20Ch%C3%A1cara%20Cachoeira%2C%20Campo%20Grande%20-%20MS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Bezerro de Ouro"
                  style={{ border: '0px' }}
                ></iframe>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(180,137,27)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <MapPin
                      width={24}
                      height={24}
                      className="lucide lucide-map-pin text-[rgb(180,137,27)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(31,29,30)] mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      Rua Dr. Antônio Alves Arantes, 307
                      <br />
                      Chácara Cachoeira, Campo Grande MS
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(180,137,27)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Phone
                      width={24}
                      height={24}
                      className="lucide lucide-phone text-[rgb(180,137,27)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(31,29,30)] mb-1">
                      Telefones
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+556733265463"
                        className="hover:text-[rgb(180,137,27)] transition-colors duration-300"
                      >
                        (67) 3326-5463
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgb(180,137,27)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Mail
                      width={24}
                      height={24}
                      className="lucide lucide-mail text-[rgb(180,137,27)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(31,29,30)] mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:bezerrodeouro@bezerrodeouro.com.br"
                        className="hover:text-[rgb(180,137,27)] transition-colors duration-300"
                      >
                        bezerrodeouro@bezerrodeouro.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
