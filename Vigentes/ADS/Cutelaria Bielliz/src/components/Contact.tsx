import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    if (email) text += `\nEmail: ${email}`;
    if (phone) text += `\nTelefone: ${phone}`;
    text += `\n\n${message}`;
    const url = `https://wa.me/5519992079201?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[rgb(245,241,220)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(84,10,1)] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            ENTRE EM CONTATO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[rgb(84,10,1)] mb-6">
            Estamos Aqui Para Ajudar
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Tem alguma dúvida sobre nossos produtos? Quer saber mais sobre personalização? Entre em
            contato conosco através do formulário ou WhatsApp.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-[rgb(84,10,1)] font-bold mb-2"
              >
                <User size={20} />
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[rgb(84,10,1)] focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-[rgb(84,10,1)] font-bold mb-2"
                >
                  <Mail size={20} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[rgb(84,10,1)] focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-[rgb(84,10,1)] font-bold mb-2"
                >
                  <Phone size={20} />
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[rgb(84,10,1)] focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-[rgb(84,10,1)] font-bold mb-2"
              >
                <MessageSquare size={20} />
                Mensagem *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[rgb(84,10,1)] focus:outline-none transition-colors resize-none"
                placeholder="Como podemos ajudar você?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(84,10,1)] text-white py-4 rounded-lg font-bold text-lg hover:bg-[rgb(120,30,20)] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Enviar via WhatsApp
              <Send size={20} />
            </button>
            <p className="text-center text-gray-600 text-sm mt-4">
              * Campos obrigatórios. Sua mensagem será enviada via WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
