import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../lib/site';

const equipmentOptions = [
  'Alisadora de Concreto',
  'Andaimes',
  'Betoneira',
  'Bomba de Mangote',
  'Compactador',
  'Cortador de Piso',
  'Outro',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    equipment: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Vim pelo site e gostaria de mais informações.',
      '',
      `Nome: ${form.name}`,
      `Telefone/WhatsApp: ${form.phone}`,
      `Email: ${form.email}`,
      `Equipamento de Interesse: ${form.equipment || 'Não informado'}`,
      `Mensagem: ${form.message}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[rgb(63,59,116)] mb-6">Entre em Contato</h3>
            <p className="text-gray-600 mb-8">
              Estamos prontos para atender você e fornecer os melhores equipamentos para sua obra.
              Entre em contato conosco!
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(13,133,77)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua Prefeito Napoleão José da Costa, nº 93, Ponte Nova, Várzea Grande
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(13,133,77)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <a
                    href="tel:6539274720"
                    className="text-gray-600 hover:text-[rgb(13,133,77)] transition-colors"
                  >
                    (65) 3927-4720
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircle className="lucide lucide-message-circle w-6 h-6 text-[rgb(13,133,77)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/5565992766111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[rgb(13,133,77)] transition-colors"
                  >
                    (65) 99276-6111
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(13,133,77)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a
                    href="mailto:vendas@amazonloc.com.br"
                    className="text-gray-600 hover:text-[rgb(13,133,77)] transition-colors"
                  >
                    vendas@amazonloc.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="lucide lucide-clock w-6 h-6 text-[rgb(13,133,77)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 07:00 - 11:00 e 13:00 - 17:00</p>
                  <p className="text-gray-600">Sábado: 07:00 - 11:00</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="font-semibold text-gray-800 mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[rgb(13,133,77)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="lucide lucide-facebook w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[rgb(13,133,77)] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="lucide lucide-instagram w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-[rgb(63,59,116)] mb-6">Envie sua Mensagem</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[rgb(63,59,116)] font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[rgb(13,133,77)] focus:ring-2 focus:ring-[rgb(13,133,77)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[rgb(63,59,116)] font-semibold mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[rgb(13,133,77)] focus:ring-2 focus:ring-[rgb(13,133,77)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[rgb(63,59,116)] font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[rgb(13,133,77)] focus:ring-2 focus:ring-[rgb(13,133,77)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="equipment"
                    className="block text-[rgb(63,59,116)] font-semibold mb-2"
                  >
                    Equipamento de Interesse
                  </label>
                  <select
                    id="equipment"
                    name="equipment"
                    value={form.equipment}
                    onChange={(e) => setForm({ ...form, equipment: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[rgb(13,133,77)] focus:ring-2 focus:ring-[rgb(13,133,77)]/20 outline-none transition-all"
                  >
                    <option value="">Selecione um equipamento</option>
                    {equipmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[rgb(63,59,116)] font-semibold mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[rgb(13,133,77)] focus:ring-2 focus:ring-[rgb(13,133,77)]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(13,133,77)] text-white px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg font-semibold text-lg"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
