import { useState } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5511958136971';

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [message, setMessage] = useState('');
  const [acceptWhatsApp, setAcceptWhatsApp] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let text = `Olá! Meu nome é ${name}.`;
    text += `\nTelefone: ${phone}`;
    if (vehicle) text += `\nVeículo/Modelo: ${vehicle}`;
    if (message) text += `\nMensagem: ${message}`;
    text += `\n\nGostaria de solicitar um orçamento.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contato"
      className="py-12 md:py-20 bg-gradient-to-br from-primary-purple to-black"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-lg text-white/80">
              Preencha o formulário e entraremos em contato via WhatsApp
            </p>
          </div>
          <form
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-transparent focus:outline-none focus:border-primary-yellow transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={15}
                required
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-transparent focus:outline-none focus:border-primary-yellow transition-colors"
                placeholder="(11) 98765-4321"
              />
            </div>
            <div>
              <label htmlFor="vehicle" className="block text-white font-medium mb-2">
                Veículo/Modelo (opcional)
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-transparent focus:outline-none focus:border-primary-yellow transition-colors"
                placeholder="Ex: Gol 1.0 2020"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/90 border-2 border-transparent focus:outline-none focus:border-primary-yellow transition-colors resize-none"
                placeholder="Descreva suas necessidades..."
              ></textarea>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptWhatsApp"
                checked={acceptWhatsApp}
                onChange={(e) => setAcceptWhatsApp(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-white/30 text-primary-yellow focus:ring-primary-yellow"
              />
              <label htmlFor="acceptWhatsApp" className="text-white/90 text-sm">
                Concordo em receber contato via WhatsApp
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-yellow text-primary-purple px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} className="lucide lucide-message-circle " />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
