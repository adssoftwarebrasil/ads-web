import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Monta a mensagem para o WhatsApp
    const whatsappMessage = `*Nova solicitação de proposta*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A%0A*Mensagem:*%0A${formData.message || 'Gostaria de saber mais sobre os consórcios.'}`;

    // Redireciona para o WhatsApp
    const whatsappLink = `https://wa.me/5571982041655?text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');

    // Limpa o formulário
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Entre em Contato
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Coluna do Formulário */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Solicite sua Proposta</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition"
                      placeholder="(71) 98204-1655"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(87,168,45)] focus:border-transparent outline-none transition resize-none"
                      placeholder="Conte-nos sobre seu interesse em consórcio..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="w-full bg-gradient-to-r from-[rgb(87,168,45)] to-[rgb(253,192,20)] text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Enviar via WhatsApp
                  </button>

                  <p className="text-sm text-gray-500 text-center pt-2">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              </div>
            </div>

            {/* Coluna de Informações */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/5571982041655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition group"
                  >
                    <div className="w-12 h-12 bg-[rgb(87,168,45)] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Telefone/WhatsApp</p>
                      <p className="text-[rgb(87,168,45)] font-medium">(71) 98204-1655</p>
                    </div>
                  </a>

                  <a
                    href="mailto:acesar@acsbrasilbahia.com.br"
                    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition group"
                  >
                    <div className="w-12 h-12 bg-[rgb(253,192,20)] rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Email</p>
                      <p className="text-[rgb(253,192,20)] font-medium break-all">acesar@acsbrasilbahia.com.br</p>
                    </div>
                  </a>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Endereço</p>
                      <p className="text-gray-600">Shopping Ponto Verde - Loja 17</p>
                      <p className="text-gray-600">Av Santos Dumont, Est do Coco, 2774</p>
                      <p className="text-gray-600">Centro, Lauro de Freitas - BA</p>
                      <p className="text-gray-600">CEP: 42702-400</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</p>
                      <p className="text-gray-600">Segunda a Sexta: 08h às 17:40h</p>
                      <p className="text-gray-600">Sábado: Por agendamento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[rgb(87,168,45)] to-[rgb(253,192,20)] rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Atendimento Online</h3>
                <p className="mb-6 leading-relaxed">
                  Contrate o plano de consórcio ideal para você, sem sair de casa! Disponibilizamos atendimento online completo, com toda a comodidade e segurança que você merece.
                </p>
                <a
                  href="https://wa.me/5571982041655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[rgb(87,168,45)] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
                >
                  Fale Conosco pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}