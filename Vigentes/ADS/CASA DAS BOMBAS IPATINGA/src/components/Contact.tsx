import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${form.name}.\n\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\nMensagem: ${form.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-[rgb(1,8,82)]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-[rgb(37,155,208)] mx-auto"></div>
          <p className="text-white/90 text-lg mt-4">Estamos prontos para atender você</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(37,155,208)] focus:ring-2 focus:ring-[rgb(37,155,208)] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(37,155,208)] focus:ring-2 focus:ring-[rgb(37,155,208)] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(37,155,208)] focus:ring-2 focus:ring-[rgb(37,155,208)] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="(31) 99999-9999"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(37,155,208)] focus:ring-2 focus:ring-[rgb(37,155,208)] focus:ring-opacity-50 transition-all duration-300 outline-none resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg uppercase hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(37,155,208)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Telefone</p>
                    <a
                      href="tel:+553138270221"
                      className="text-white/80 hover:text-white transition-colors duration-300"
                    >
                      (31) 3827-0221
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(37,155,208)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">E-mail</p>
                    <a
                      href="mailto:casadasbombas@hotmail.com.br"
                      className="text-white/80 hover:text-white transition-colors duration-300 break-all"
                    >
                      casadasbombas@hotmail.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(37,155,208)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Endereço</p>
                    <p className="text-white/80">
                      Rua Crisântemo 04
                      <br />
                      Esperança, Ipatinga/MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-3 text-[rgb(37,155,208)]" />
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-white/90">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
