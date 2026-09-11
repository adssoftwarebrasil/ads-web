import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const reasons = [
  'Atendimento rápido e personalizado',
  'Produtos de qualidade garantida',
  'Preços competitivos',
  'Duas lojas em Indiara para melhor te atender',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${form.name}.%0A` +
      `Telefone: ${form.phone}%0A` +
      `E-mail: ${form.email}%0A%0A` +
      `${form.message}`;
    window.open(`http://wa.me/556481322676?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Entre em Contato</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Estamos Aqui Para <span className="text-[rgb(221,40,45)]">Ajudar Você</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas, faça sugestões ou entre em contato conosco. Responderemos o mais breve possível!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[rgb(221,40,45)] to-[rgb(200,30,35)] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <a href="tel:+556481322676" className="block">
                  <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="bg-[rgb(255,204,0)] p-3 rounded-lg flex-shrink-0">
                      <Phone size={24} className="text-[rgb(221,40,45)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-1">Telefone</p>
                      <p className="font-bold text-lg">(64) 8132-2676</p>
                    </div>
                  </div>
                </a>
                <a href="mailto:casadecarneconquista@hotmail.com" className="block">
                  <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="bg-[rgb(255,204,0)] p-3 rounded-lg flex-shrink-0">
                      <Mail size={24} className="text-[rgb(221,40,45)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-1">E-mail</p>
                      <p className="font-bold text-lg">casadecarneconquista@hotmail.com</p>
                    </div>
                  </div>
                </a>
                <a href="#locations" className="block">
                  <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="bg-[rgb(255,204,0)] p-3 rounded-lg flex-shrink-0">
                      <MapPin size={24} className="text-[rgb(221,40,45)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-1">Endereços</p>
                      <p className="font-bold text-lg">Indiara, GO - 2 Lojas</p>
                    </div>
                  </div>
                </a>
                <div>
                  <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="bg-[rgb(255,204,0)] p-3 rounded-lg flex-shrink-0">
                      <Clock size={24} className="text-[rgb(221,40,45)]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-1">Horário</p>
                      <p className="font-bold text-lg">Seg - Dom: 06:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Por que nos escolher?</h3>
              <ul className="space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[rgb(221,40,45)] rounded-full"></div>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(221,40,45)] focus:ring-2 focus:ring-[rgb(221,40,45)]/20 outline-none transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={form.phone}
                  onChange={handleChange('phone')}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(221,40,45)] focus:ring-2 focus:ring-[rgb(221,40,45)]/20 outline-none transition-all duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange('email')}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(221,40,45)] focus:ring-2 focus:ring-[rgb(221,40,45)]/20 outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[rgb(221,40,45)] focus:ring-2 focus:ring-[rgb(221,40,45)]/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(221,40,45)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(200,30,35)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Enviar via WhatsApp
              </button>
              <p className="text-sm text-gray-500 text-center">Ao enviar, você será redirecionado para o WhatsApp</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
