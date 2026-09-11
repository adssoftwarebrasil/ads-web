import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
    ];
    if (email) lines.push(`E-mail: ${email}`);
    if (tipo) lines.push(`Tipo de Embreagem: ${tipo}`);
    lines.push(`Mensagem: ${message}`);
    const url = `https://wa.me/5516936265853?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(60,88,144)] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600">Solicite seu orçamento sem compromisso</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nome Completo*
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[rgb(60,88,144)] focus:outline-none transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Telefone/WhatsApp*
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[rgb(60,88,144)] focus:outline-none transition-colors"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[rgb(60,88,144)] focus:outline-none transition-colors"
              placeholder="seu@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="tipo" className="block text-gray-700 font-semibold mb-2">
              Tipo de Embreagem
            </label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[rgb(60,88,144)] focus:outline-none transition-colors"
            >
              <option value="">Selecione uma opção</option>
              <option value="Linha Leve">Linha Leve</option>
              <option value="Linha Pesada">Linha Pesada</option>
              <option value="Linha Agrícola">Linha Agrícola</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Mensagem*
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[rgb(60,88,144)] focus:outline-none transition-colors resize-none"
              placeholder="Descreva sua necessidade ou faça sua pergunta..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[rgb(240,178,121)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Enviar Mensagem</span>
          </button>
          <p className="text-center text-gray-600 mt-6">Responderemos em até 24 horas úteis</p>
        </form>
      </div>
    </section>
  );
}
