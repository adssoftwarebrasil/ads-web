import { useState } from 'react';
import { Send, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', mensagem: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.nome}.%0A` +
      `Telefone: ${form.telefone}%0A` +
      `Email: ${form.email}%0A` +
      `Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5592984428836?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Entre em Contato</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">Fale com um especialista e receba um orçamento gratuito</p>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[rgb(255,163,1)] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[rgb(255,163,1)] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[rgb(255,163,1)] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[rgb(255,163,1)] focus:outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                  placeholder="Como podemos ajudá-lo?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgb(255,163,1)] to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send width={20} height={20} className="lucide lucide-send " />
                Enviar Mensagem via WhatsApp
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-[rgb(255,163,1)] to-amber-500 rounded-xl p-3 w-fit mb-4">
              <Clock width={24} height={24} className="lucide lucide-clock text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Horário</h4>
            <p className="text-sm text-gray-600">Seg-Sex: 8h-18h</p>
            <p className="text-sm text-gray-600">Sáb: 8h-12h</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-[#C41D1D] to-red-600 rounded-xl p-3 w-fit mb-4">
              <MapPin width={24} height={24} className="lucide lucide-map-pin text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Endereço</h4>
            <p className="text-sm text-gray-600">Av. Constantino Nery, 2348</p>
            <p className="text-sm text-gray-600">Chapada - Manaus/AM</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 w-fit mb-4">
              <Phone width={24} height={24} className="lucide lucide-phone text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Telefone</h4>
            <a
              href="tel:+5592984428836"
              className="text-sm text-gray-600 hover:text-[rgb(255,163,1)] transition-colors font-medium"
            >
              (92) 98442-8836
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-3 w-fit mb-4">
              <Mail width={24} height={24} className="lucide lucide-mail text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Email</h4>
            <a
              href="mailto:contato@casadasbombas.com.br"
              className="text-sm text-gray-600 hover:text-[rgb(255,163,1)] transition-colors font-medium break-words"
            >
              contato@exemplo.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
