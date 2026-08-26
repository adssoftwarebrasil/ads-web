import { useState, type FormEvent } from 'react';
import { openWhatsApp } from '../lib/constants';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Comprar Celular');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `Telefone: ${phone}\n` +
      `Serviço desejado: ${service}\n` +
      `Mensagem: ${message}`;
    openWhatsApp(text);
  };

  return (
    <section id="contato" className="bg-[rgb(254,254,252)] py-16 md:py-24 px-4 md:px-8 lg:px-16 fade-in">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">Entre em Contato</h2>
        <p className="text-gray-600 text-center mb-12 text-lg">Preencha o formulário e fale conosco no WhatsApp</p>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(231,189,44)] transition-all border-gray-300"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(231,189,44)] transition-all border-gray-300"
              placeholder="(67) 98136-8931"
              maxLength={15}
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Serviço Desejado</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(231,189,44)] transition-all"
            >
              <option>Comprar Celular</option>
              <option>Assistência Técnica</option>
              <option>Acessórios</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(231,189,44)] transition-all resize-none border-gray-300"
              placeholder="Descreva o que você precisa..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(231,189,44)] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(241,199,54)] transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
