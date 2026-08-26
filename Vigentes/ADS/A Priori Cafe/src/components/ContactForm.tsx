import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, A Priori Café! Me chamo ${form.name}.\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/5519996561976?text=${text}`, '_blank');
  };

  return (
    <div className="bg-cream-light rounded-2xl p-7 border border-cream">
      <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">Envie uma Mensagem</h3>
      <p className="font-sans text-sm text-gray-500 mb-6">
        Preencha o formulário e seu WhatsApp será aberto com a mensagem pronta.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="font-sans text-sm font-medium text-gray-700 block mb-1.5">
            Seu nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Como podemos te chamar?"
            className="w-full font-sans text-sm bg-white border border-cream-dark rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-sans text-sm font-medium text-gray-700 block mb-1.5">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="w-full font-sans text-sm bg-white border border-cream-dark rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-sans text-sm font-medium text-gray-700 block mb-1.5">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Como podemos ajudar? Pedidos especiais, cestas, dúvidas..."
            className="w-full font-sans text-sm bg-white border border-cream-dark rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-200 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-burgundy text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg hover:-translate-y-0.5"
        >
          <Send size={16} />
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
