import { useState } from 'react';
import { User, Phone, Mail, MessageSquare, Send } from 'lucide-react';

const services = [
  'Troca de Óleo',
  'Freios e Sistema ABS',
  'Revisão Completa',
  'Remap e Reprogramação',
  'Serviço de Motor',
  'Suspensão',
  'Ar Condicionado',
  'Sistema Elétrico',
  'Injeção Eletrônica',
  'Alinhamento e Balanceamento',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Serviço de Interesse:* ${form.service}\n` +
      `*Mensagem:* ${form.message}`;
    window.open(`http://wa.me/5545998527494?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#f0e92c] font-semibold text-sm uppercase tracking-wider">Entre em Contato</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">Solicite Seu Orçamento Grátis</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Preencha o formulário e entraremos em contato via WhatsApp</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-[#0a0a0a] font-semibold mb-2">
                  <User className="lucide lucide-user text-[#f0e92c]" width={18} height={18} />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f0e92c] focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-[#0a0a0a] font-semibold mb-2">
                  <Phone className="lucide lucide-phone text-[#f0e92c]" width={18} height={18} />
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f0e92c] focus:outline-none transition-colors duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-[#0a0a0a] font-semibold mb-2">
                  <Mail className="lucide lucide-mail text-[#f0e92c]" width={18} height={18} />
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f0e92c] focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="flex items-center gap-2 text-[#0a0a0a] font-semibold mb-2">
                  <MessageSquare className="lucide lucide-message-square text-[#f0e92c]" width={18} height={18} />
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f0e92c] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-[#0a0a0a] font-semibold mb-2">
                  <MessageSquare className="lucide lucide-message-square text-[#f0e92c]" width={18} height={18} />
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#f0e92c] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Conte-nos mais sobre o que você precisa..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#f0e92c] text-[#0a0a0a] px-8 py-4 rounded-lg font-bold hover:bg-[#e0d91c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="lucide lucide-send" width={20} height={20} />
                Enviar via WhatsApp
              </button>
              <p className="text-center text-gray-500 text-sm">Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
