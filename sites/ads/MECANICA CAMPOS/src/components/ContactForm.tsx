import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Vim pelo site.
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5566996460016?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152755] mb-4">
            Solicite um Orçamento
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-[#152755] mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF6B35] focus:outline-none transition-colors text-lg"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-[#152755] mb-2">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF6B35] focus:outline-none transition-colors text-lg"
              placeholder="(66) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-lg font-semibold text-[#152755] mb-2">
              Tipo de serviço *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF6B35] focus:outline-none transition-colors text-lg"
            >
              <option value="">Selecione o serviço</option>
              <option value="Mecânica Pesada">Mecânica Pesada</option>
              <option value="Auto Peças">Auto Peças</option>
              <option value="Orçamento Geral">Orçamento Geral</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-[#152755] mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF6B35] focus:outline-none transition-colors text-lg resize-none"
              placeholder="Descreva o que você precisa..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e55a2a] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <Send className="mr-2" size={24} />
            Enviar via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
