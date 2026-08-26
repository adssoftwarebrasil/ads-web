import { FormEvent, useState } from 'react';
import { Send, MessageCircle, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `Olá! Meu nome é ${formData.name}, email: ${formData.email}, telefone: ${formData.phone}. Gostaria de reservar de ${formData.checkin} até ${formData.checkout}. ${formData.message}`;

    window.open(`https://wa.me/5593991462057?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Reservas
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Faça Sua Reserva
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário e entraremos em contato via WhatsApp
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Glow effect atrás do card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-10"></div>
            
            {/* Card do formulário */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="space-y-6">
                {/* Nome */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <User size={16} className="text-blue-600" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                {/* Email e Telefone - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Mail size={16} className="text-blue-600" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white group-hover:border-gray-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Phone size={16} className="text-blue-600" />
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white group-hover:border-gray-300"
                      placeholder="(61) 99999-9999"
                    />
                  </div>
                </div>

                {/* Check-in e Check-out */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="checkin" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      Check-in
                    </label>
                    <input
                      type="date"
                      id="checkin"
                      name="checkin"
                      required
                      value={formData.checkin}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="checkout" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Calendar size={16} className="text-blue-600" />
                      Check-out
                    </label>
                    <input
                      type="date"
                      id="checkout"
                      name="checkout"
                      required
                      value={formData.checkout}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MessageSquare size={16} className="text-blue-600" />
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none bg-gray-50 focus:bg-white group-hover:border-gray-300"
                    placeholder="Alguma solicitação especial? (Ex: quarto com vista, andar alto, etc.)"
                  ></textarea>
                </div>

                {/* Botão de Envio */}
                <button
                  onClick={handleSubmit}
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-8"
                >
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  Enviar via WhatsApp
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                </button>

                {/* Info adicional */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pré-preenchida
                </p>
              </div>
            </div>
          </div>

          {/* Cards informativos abaixo do formulário */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="text-blue-600" size={20} />
              </div>
              <p className="text-xs font-semibold text-gray-900">Resposta Rápida</p>
              <p className="text-xs text-gray-500 mt-1">Em até 1 hora</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="text-blue-600" size={20} />
              </div>
              <p className="text-xs font-semibold text-gray-900">Melhor Preço</p>
              <p className="text-xs text-gray-500 mt-1">Garantia de tarifa</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="text-blue-600" size={20} />
              </div>
              <p className="text-xs font-semibold text-gray-900">Atendimento 24h</p>
              <p className="text-xs text-gray-500 mt-1">Sempre disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}