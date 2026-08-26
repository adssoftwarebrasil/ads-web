import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

export default function Contact() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${name}`,
      `Telefone: ${phone}`,
    ];
    if (vehicle) lines.push(`Veículo: ${vehicle}`);
    if (message) lines.push(`Mensagem: ${message}`);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/557188114690?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[rgb(1,160,199)] font-semibold text-sm tracking-widest uppercase mb-3">
              ENTRE EM CONTATO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Estamos Prontos para Atender Você
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Preencha o formulário ou entre em contato pelos nossos canais. Respondemos rapidamente!
            </p>
            <div className="space-y-6">
              <div
                className={`bg-gray-50 p-6 rounded-xl border border-gray-200 flex gap-4 items-start transition-all duration-500 ${
                  shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[rgb(1,160,199)] rounded-lg flex items-center justify-center">
                  <Phone width={24} height={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Ligue para nós</p>
                  <a
                    href="tel:+557132583386"
                    className="text-lg font-semibold text-gray-900 hover:text-[rgb(1,160,199)] transition-colors"
                  >
                    (71) 3258-3386
                  </a>
                </div>
              </div>
              <div
                className={`bg-gray-50 p-6 rounded-xl border border-gray-200 flex gap-4 items-start transition-all duration-500 ${
                  shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[rgb(1,160,199)] rounded-lg flex items-center justify-center">
                  <MessageCircle width={24} height={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Chame no WhatsApp</p>
                  <a
                    href="http://wa.me/557188114690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 hover:text-[rgb(1,160,199)] transition-colors"
                  >
                    (71) 98811-4690
                  </a>
                </div>
              </div>
              <div
                className={`bg-gray-50 p-6 rounded-xl border border-gray-200 flex gap-4 items-start transition-all duration-500 ${
                  shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[rgb(1,160,199)] rounded-lg flex items-center justify-center">
                  <MapPin width={24} height={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Visite nossa loja</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Av. Barros Reis, 318 - Pau Miúdo, Salvador - BA, 40310-005
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`mt-8 bg-[rgb(1,160,199)]/10 p-6 rounded-xl transition-all duration-700 delay-500 ${
                shown ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-start gap-3">
                <Clock width={24} height={24} className="text-[rgb(1,160,199)] flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 mb-3">Horário de Atendimento</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Segunda a Sexta: 08:00 - 17:30</li>
                    <li>Sábado: 08:00 - 12:00</li>
                    <li>Domingo: Fechado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-300 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-[rgb(1,160,199)] focus:ring-2 focus:ring-[rgb(1,160,199)]/20 outline-none transition-all duration-200"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-[rgb(1,160,199)] focus:ring-2 focus:ring-[rgb(1,160,199)]/20 outline-none transition-all duration-200"
                    placeholder="(71) 99999-9999"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="vehicle" className="text-sm font-medium text-gray-700 mb-2 block">
                    Modelo do Veículo
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-[rgb(1,160,199)] focus:ring-2 focus:ring-[rgb(1,160,199)]/20 outline-none transition-all duration-200"
                    placeholder="Ex: Civic 2020"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-[rgb(1,160,199)] focus:ring-2 focus:ring-[rgb(1,160,199)]/20 outline-none transition-all duration-200 resize-none"
                    placeholder="Descreva o serviço que você precisa..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(1,160,199)] hover:bg-[rgb(1,140,179)] text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Enviar Mensagem
                  <Send width={20} height={20} />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Seus dados estão seguros. Não compartilhamos informações com terceiros.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
