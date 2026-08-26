import { useState } from 'react';
import { Phone, Mail, MessageSquare, User, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome}.\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5537999236447?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Entre em Contato
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Vamos Realizar Seu Sonho Juntos</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Preencha o formulário ao lado e nossa equipe entrará em contato pelo WhatsApp para oferecer o melhor atendimento personalizado.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/5537999236447"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    (37) 99923-6447
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">E-mail</h3>
                  <a href="mailto:l2.carross@gmail.com" className="text-gray-600 hover:text-red-600 transition-colors">
                    l2.carross@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="text-gray-600">Sábado: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/l2carros/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-xl hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063795782070"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-xl hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <User className="w-5 h-5 text-red-600" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all duration-300"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <MessageSquare className="w-5 h-5 text-red-600" />
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
