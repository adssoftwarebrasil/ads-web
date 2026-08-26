import { useState, type FormEvent } from 'react';
import { MapPin, Clock, Phone, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '556294205040';
const WHATSAPP_URL = 'https://wa.me/556294205040';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AEmail: ${form.email}%0ATelefone: ${form.phone}%0A%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-[rgb(229,198,99)] font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
            <div className="h-1 w-20 bg-[rgb(229,198,99)] mt-2 mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(3,101,84)] mb-6">
            Solicite seu Orçamento Gratuito
          </h2>
          <p className="text-lg text-gray-700">
            Estamos prontos para transformar suas ideias em embalagens incríveis.
            Entre em contato e receba uma proposta personalizada.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(3,101,84)] mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Zoroastro Artiaga
                    <br />
                    Cruzeiro do Sul
                    <br />
                    Aparecida de Goiânia - GO
                    <br />
                    CEP: 74917-196
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(3,101,84)] mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-600">
                    Segunda a Quinta: 8h às 18h
                    <br />
                    Sexta-feira: 8h às 17h
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[rgb(229,198,99)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[rgb(3,101,84)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(3,101,84)] mb-2">
                    Telefone/WhatsApp
                  </h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[rgb(3,101,84)] transition-colors"
                  >
                    (62) 9 94205-0040
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.329895180517!2d-49.2787341248492!3d-16.760254884023873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efb1cb8c4c543%3A0xf4edf4bdcdcb5a0!2sVip%20Designer%20e%20Embalagens!5e0!3m2!1spt-BR!2sbr!4v1765913621087!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[rgb(3,101,84)] mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,101,84)] focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[rgb(3,101,84)] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,101,84)] focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[rgb(3,101,84)] mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,101,84)] focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[rgb(3,101,84)] mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(3,101,84)] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(3,101,84)] text-white px-8 py-4 rounded-full hover:bg-[rgb(229,198,99)] hover:text-[rgb(3,101,84)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Enviar pelo WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
