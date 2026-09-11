import { useState, FormEvent } from 'react';
import { MapPin, Clock, Mail, MessageCircle } from './icons';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}. ${message}`;
    window.open(`https://wa.me/5511933943710?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#EE1E23] font-semibold text-sm uppercase tracking-widest mb-3">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Fale com a Gente
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Tire suas dúvidas, solicite orçamentos ou saiba mais sobre nossos produtos.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-[#EE1E23]/10 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-[#EE1E23]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Endereço</h4>
                <p className="text-gray-400 text-sm">Rua Sérgio Cardoso, 140</p>
                <p className="text-gray-400 text-sm">Jardim do Trevo, Jundiaí – SP</p>
                <p className="text-gray-400 text-sm">CEP 13.211-374</p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-[#EE1E23]/10 flex items-center justify-center shrink-0">
                <Clock size={22} className="text-[#EE1E23]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Horário de Funcionamento</h4>
                <p className="text-gray-400 text-sm">Segunda a Sexta: 07h às 17h</p>
                <p className="text-gray-400 text-sm">Sábado: 07h às 12h</p>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-[#EE1E23]/10 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-[#EE1E23]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">E-mail</h4>
                <p className="text-gray-400 text-sm">gessojundiai@gmail.com</p>
              </div>
            </div>
            <a
              href="https://wa.me/5511933943710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#EE1E23] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <MessageCircle size={22} />
              Chamar no WhatsApp
            </a>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Envie sua mensagem</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Seu nome</label>
                <input
                  type="text"
                  required
                  placeholder="Digite seu nome"
                  className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1E23] focus:border-transparent transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  O que você precisa?
                </label>
                <textarea
                  required
                  placeholder="Descreva os materiais que você precisa ou sua dúvida..."
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1E23] focus:border-transparent transition-all resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#EE1E23] hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] text-base"
              >
                <MessageCircle size={20} />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
