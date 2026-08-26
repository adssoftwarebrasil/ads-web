import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

const PHONE = '5562992380432';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.name}.\nE-mail: ${form.email}\nTelefone: ${form.phone}\nMensagem: ${form.message}`;
    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/eletricamega%2Floja-ferramentas-jardinagem.webp")',
      }}
    >
      <div className="absolute inset-0 bg-[rgb(41,35,88)]/90"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-[rgb(236,33,40)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Preencha o formulário e entraremos em contato via WhatsApp
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(236,33,40)] focus:border-transparent outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(236,33,40)] focus:border-transparent outline-none transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(236,33,40)] focus:border-transparent outline-none transition-all"
                placeholder="(00) 0 0000-0000"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(236,33,40)] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Como podemos ajudá-lo?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(236,33,40)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(216,13,20)] transition-all transform hover:scale-105 font-medium text-lg shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>Enviar Mensagem</span>
              <Send className="lucide lucide-send" width={20} height={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
