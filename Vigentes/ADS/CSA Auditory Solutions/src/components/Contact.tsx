import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const BG_URL =
  'https://storage.lucasmendes.dev/site-sp/csamanaus/Fale%20Conosco-paralax.png';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Nome: ${form.name}\nWhatsApp: ${form.whatsapp}\nE-mail: ${form.email}\nAssunto: ${form.subject}\nMensagem: ${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contato" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("${BG_URL}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            Contato
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Dúvidas ou sugestões</h3>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="(92) 99999-9999"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Send className="lucide lucide-send w-5 h-5 mr-2" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
