import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      `Olá! Meu nome é ${form.name}.`,
      `WhatsApp: ${form.whatsapp}`,
      `E-mail: ${form.email}`,
      `Assunto: ${form.subject}`,
      `Mensagem: ${form.message}`,
    ].join('\n');
    window.open(
      `https://wa.me/5562992978089?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dúvidas ou sugestões? Nossa equipe está pronta para ouvir o que você tem a dizer
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
                  <a href="tel:6235938870" className="text-gray-600 hover:text-primary transition-colors">
                    (62) 3593-8870
                  </a>
                  <br />
                  <a href="tel:62992978089" className="text-gray-600 hover:text-primary transition-colors">
                    (62) 99297-8089
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                  <a
                    href="mailto:contato@queirozmetais.com.br"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    contato@queirozmetais.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Trindade, nº 572, QD 02 LT 31<br />
                    SALA GALPÃO, Residencial Pilar dos Sonhos<br />
                    Goiânia/GO - CEP 74.494-251
                  </p>
                </div>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Conte-nos mais sobre o que você precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
