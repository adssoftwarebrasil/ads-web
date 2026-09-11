import { useState } from 'react';
import { Send } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export default function ContactFormSection() {
  const { openModal } = useWhatsAppModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Troca de para-brisas',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Meu nome é ${formData.name}, telefone ${formData.phone}.
Gostaria de solicitar um orçamento para ${formData.service} no meu ${formData.vehicle}.
${formData.message ? `Mensagem: ${formData.message}` : ''}`;

    openModal(whatsappMessage);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  return (
    <section id="contato" className="py-20 bg-[#012d78]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-xl text-[#66c2e8]">
            Responderemos via WhatsApp em instantes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#012d78] mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0298d2] focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#012d78] mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={15}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0298d2] focus:outline-none transition-colors"
                placeholder="(62) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-semibold text-[#012d78] mb-2">
                Tipo de veículo
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0298d2] focus:outline-none transition-colors"
                placeholder="Ex: Fiat Uno 2020"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-[#012d78] mb-2">
                Serviço desejado *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0298d2] focus:outline-none transition-colors bg-white"
              >
                <option value="Troca de para-brisas">Troca de para-brisas</option>
                <option value="Vidros de porta">Vidros de porta</option>
                <option value="Reparo de trincas">Reparo de trincas</option>
                <option value="Insulfilm">Insulfilm</option>
                <option value="Acessórios">Acessórios</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#012d78] mb-2">
                Mensagem adicional
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0298d2] focus:outline-none transition-colors resize-none"
                placeholder="Descreva detalhes do serviço que precisa..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0298d2] text-white px-8 py-4 rounded-lg hover:bg-[#66c2e8] transition-all duration-300 hover:scale-[1.02] font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={20} />
              Enviar pelo WhatsApp
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Ao enviar, você será redirecionado para o WhatsApp
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
