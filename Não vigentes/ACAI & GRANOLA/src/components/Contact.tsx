import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/whatsapp';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de entrar em contato.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*WhatsApp:* ${form.whatsapp}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Assunto:* ${form.subject}\n` +
      `*Mensagem:* ${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Dúvidas ou sugestões</h2>
          <p className="text-xl text-gray-600">Entre em contato conosco através do formulário abaixo</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-[rgb(6,173,244)]"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2">
                WhatsApp *
              </label>
              <input
                type="text"
                id="whatsapp"
                required
                maxLength={16}
                value={form.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-[rgb(6,173,244)]"
                placeholder="(83) 99999-9999"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-[rgb(6,173,244)]"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Assunto *
              </label>
              <input
                type="text"
                id="subject"
                required
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-[rgb(6,173,244)]"
                placeholder="Assunto da sua mensagem"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none border-gray-300 focus:ring-[rgb(6,173,244)]"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(6,173,244)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send size={20} className="lucide lucide-send " />
              <span>Enviar WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
