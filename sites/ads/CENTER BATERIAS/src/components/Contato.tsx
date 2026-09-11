import { useState } from 'react';
import type { FormEvent } from 'react';
import { openWhatsApp } from '../lib/whatsapp';

const inputClass =
  'w-full px-4 py-4 border border-gray-300 rounded-lg text-base focus:border-[rgb(250,204,21)] focus:outline-none focus:ring-2 focus:ring-[rgb(250,204,21)] focus:ring-opacity-20 transition-all duration-300';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.\n` +
      `Assunto: ${form.subject}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n\n` +
      `${form.message}`;
    openWhatsApp(text);
  };

  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-12 md:mb-16 fade-in">
          Dúvidas ou Sugestões
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto fade-in">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="(62) 99685-7030"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className={inputClass}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputClass} mb-6`}
          />
          <input
            type="text"
            name="subject"
            placeholder="Assunto da mensagem"
            required
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={`${inputClass} mb-6`}
          />
          <textarea
            name="message"
            placeholder="Digite sua mensagem..."
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} mb-6 resize-vertical`}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[rgb(250,204,21)] text-black py-5 rounded-lg text-lg font-bold hover:brightness-110 transition-all duration-300 cursor-pointer shadow-lg"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
