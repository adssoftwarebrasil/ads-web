import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send } from 'lucide-react';

export default function Contato() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\n\n${message}`;
    window.open(`https://wa.me/5545999434290?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(61,61,67)] mb-4">
              Entre em <span className="text-[rgb(212,178,37)]">Contato</span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(212,86,96)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tem alguma dúvida ou quer fazer um pedido? Fale conosco!
            </p>
          </div>
          <div className="bg-gradient-to-br from-[rgb(61,61,67)] to-[rgb(61,61,67)] p-8 md:p-12 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-[rgb(212,178,37)] focus:outline-none transition-all duration-300"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-[rgb(212,178,37)] focus:outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-[rgb(212,178,37)] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[rgb(212,86,96)] hover:text-white transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-gray-300 text-sm">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ou fale diretamente pelo WhatsApp:</p>
            <a
              href="https://wa.me/5545999434290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(212,86,96)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[rgb(212,178,37)] hover:text-[rgb(61,61,67)] transition-all duration-300 shadow-lg"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
