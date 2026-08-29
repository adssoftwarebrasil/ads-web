import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_MAIN, WHATSAPP_CLICKART, openWhatsApp } from '../lib/whatsapp';

const serviceOptions = [
  'Canecas Personalizadas',
  'Copos Térmicos Stanley',
  'Garrafas Personalizadas',
  'Têxtil (Bonés, Camisetas)',
  'Brindes Corporativos',
  'Kits Personalizados',
  'Impressos',
  'Gravação a Laser',
  'Troféus e Premiações',
  'Carimbos',
  'Outros',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um orçamento.\n\n*Nome:* ${form.name}\n*E-mail:* ${form.email}\n*Telefone:* ${form.phone}\n*Serviço:* ${form.service}\n*Mensagem:* ${form.message}`;
    openWhatsApp(WHATSAPP_MAIN, text);
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-blue-800">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Pronto para criar algo incrível? Nossa equipe está pronta para atender você!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Envie sua Mensagem</h3>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Digite seu nome"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="(69) 99999-9999"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base outline-none bg-white"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Descreva o que você precisa..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-base outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Enviar via WhatsApp
                </button>
                <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Você será redirecionado para o WhatsApp
                </p>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-blue-200">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Copiadora Só Cópias
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:5569992097212"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-blue-600" />
                  <span className="text-base font-medium group-hover:underline">(69) 99209-7212</span>
                </a>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_MAIN)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:scale-[1.02] w-full bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
                <a
                  href="mailto:contato@socopiasportovelho.com.br"
                  className="flex items-start gap-3 text-gray-700 hover:text-blue-800 transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                  <span className="text-sm font-medium group-hover:underline break-all">
                    contato@socopiasportovelho.com.br
                  </span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-600" />
                  <div className="text-sm">
                    <p className="font-medium">R. Gonçalves Dias, 118 - Centro</p>
                    <p className="text-gray-600">Porto Velho - RO, 76801-076</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-orange-200">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-100">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    ClickArt's Gráfica Expressa
                  </h3>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:5569992696363"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-orange-500" />
                  <span className="text-base font-medium group-hover:underline">(69) 99269-6363</span>
                </a>
                <button
                  onClick={() => openWhatsApp(WHATSAPP_CLICKART)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:scale-[1.02] w-full bg-orange-50 text-orange-700 hover:bg-orange-100"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-500" />
                  <div className="text-sm">
                    <p className="font-medium">Av. Jatuarana, 5149 - C - Nova Floresta</p>
                    <p className="text-gray-600">Porto Velho - RO, 76807-441</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="text-xl font-bold">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Segunda a Sexta</span>
                  <span className="font-bold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sábado</span>
                  <span className="font-bold">8h às 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
