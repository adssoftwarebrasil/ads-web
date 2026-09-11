import { useState, FormEvent } from 'react';
import { User, Phone, Mail, Calendar, MessageSquare, Send } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Gostaria de fazer uma reserva.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Data Desejada:* ${formData.date}\n` +
      `*Mensagem:* ${formData.message}`;
    window.open(
      `http://wa.me/5585986018954?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[rgb(255,254,252)] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(16,14,13)] mb-4">
            Faça Sua <span className="text-[rgb(202,25,27)]">Reserva</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(16,14,13)]/70 max-w-2xl mx-auto">
            Preencha o formulário e enviaremos suas informações via WhatsApp
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[rgb(16,14,13)] mb-2"
                >
                  Nome Completo
                </label>
                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgb(16,14,13)]/40"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[rgb(16,14,13)]/10 rounded-lg focus:border-[rgb(202,25,27)] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[rgb(16,14,13)] mb-2"
                >
                  Telefone
                </label>
                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgb(16,14,13)]/40"
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[rgb(16,14,13)]/10 rounded-lg focus:border-[rgb(202,25,27)] focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[rgb(16,14,13)] mb-2"
                >
                  E-mail
                </label>
                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgb(16,14,13)]/40"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[rgb(16,14,13)]/10 rounded-lg focus:border-[rgb(202,25,27)] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-[rgb(16,14,13)] mb-2"
                >
                  Data Desejada
                </label>
                <div className="relative">
                  <Calendar
                    size={20}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[rgb(16,14,13)]/40"
                  />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[rgb(16,14,13)]/10 rounded-lg focus:border-[rgb(202,25,27)] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[rgb(16,14,13)] mb-2"
              >
                Mensagem
              </label>
              <div className="relative">
                <MessageSquare
                  size={20}
                  className="absolute left-4 top-4 text-[rgb(16,14,13)]/40"
                />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-[rgb(16,14,13)]/10 rounded-lg focus:border-[rgb(202,25,27)] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre suas necessidades..."
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-[rgb(202,25,27)] text-[rgb(255,254,252)] px-8 py-4 rounded-xl hover:bg-[rgb(143,25,19)] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Send size={20} />
              <span>Enviar via WhatsApp</span>
            </button>
          </form>
        </div>
        <p className="text-center text-[rgb(16,14,13)]/60 mt-8 text-sm">
          Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas
        </p>
      </div>
    </section>
  );
}
