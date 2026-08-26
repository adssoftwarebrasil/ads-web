import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nTelefone: ${phone}`;
    if (email) text += `\nE-mail: ${email}`;
    text += `\n\nMensagem: ${message}`;
    window.open(
      `https://wa.me/557736281005?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(173,132,84)] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,52,47)] mb-6">
            Estamos Prontos para Atender Você
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para ajudar com as melhores
            soluções para seu agronegócio
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-[rgb(1,52,47)]" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,52,47)] mb-3">
              Endereço
            </h3>
            <p className="text-gray-700 font-semibold mb-1">
              R. Juscelino Kubitscheck, 306
            </p>
            <p className="text-gray-600 text-sm">
              Jardim Paraiso Fase I, Luís Eduardo Magalhães - BA
            </p>
            <a
              href="https://goo.gl/maps/your-location"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[rgb(173,132,84)] hover:text-[rgb(1,52,47)] font-semibold text-sm transition-colors"
            >
              Clique aqui →
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-[rgb(1,52,47)]" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,52,47)] mb-3">
              Telefone
            </h3>
            <p className="text-gray-700 font-semibold mb-1">(77) 3628-1005</p>
            <p className="text-gray-600 text-sm">WhatsApp disponível</p>
            <a
              href="https://wa.me/557736281005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[rgb(173,132,84)] hover:text-[rgb(1,52,47)] font-semibold text-sm transition-colors"
            >
              Clique aqui →
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-[rgb(1,52,47)]" />
            </div>
            <h3 className="text-xl font-bold text-[rgb(1,52,47)] mb-3">
              Horário de Atendimento
            </h3>
            <p className="text-gray-700 font-semibold mb-1">
              Seg à Sex: 07:30 - 18:00
            </p>
            <p className="text-gray-600 text-sm">Sábado: 07:30 - 12:00</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[rgb(1,52,47)] mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(221,183,120)] focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(221,183,120)] focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(221,183,120)] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(221,183,120)] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-[rgb(1,52,47)] hover:bg-[rgb(1,52,47)]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Enviar via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-600 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua
                mensagem pré-preenchida.
              </p>
            </form>
          </div>
          <div className="h-full min-h-[400px] lg:min-h-[600px]">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3220039589264!2d-45.78377210000001!3d-12.0900944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934a7144e9fc2d29%3A0xcd976cc5f69c2a48!2zVHJhZGnDp8OjbyBQZcOnYXMgQWdyw61jb2xhcw!5e0!3m2!1spt-BR!2sbr!4v1768226861788!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tradição Peças Agrícolas"
                style={{ border: '0px', minHeight: '400px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
