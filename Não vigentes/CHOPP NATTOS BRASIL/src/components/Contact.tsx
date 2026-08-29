import { useState, FormEvent } from 'react';
import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { openWhatsApp } from '../lib/site';

const eventTypes = [
  'Festa particular',
  'Casamento',
  'Aniversário',
  'Evento corporativo',
  'Estabelecimento',
  'Outro',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.` +
      `\nTelefone: ${phone}` +
      (eventType ? `\nTipo de evento: ${eventType}` : '') +
      (message ? `\nMensagem: ${message}` : '');
    openWhatsApp(text);
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-white px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(40,44,115)] mb-4">Entre em Contato</h2>
              <p className="text-lg text-gray-600">Estamos prontos para atender você</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(176,146,71)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[rgb(176,146,71)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(40,44,115)]">WhatsApp</p>
                  <p className="text-gray-600">(62) 99224-2454</p>
                  <p className="text-gray-600">(62) 98504-9183</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(176,146,71)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[rgb(176,146,71)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(40,44,115)]">E-mail</p>
                  <p className="text-gray-600">choppnattosbrasil@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(176,146,71)]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-[rgb(176,146,71)]" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(40,44,115)]">Horário</p>
                  <p className="text-gray-600">Segunda a Domingo, 08:00 às 22:00</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-[rgb(40,44,115)] mb-4">Redes Sociais</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/nattosbeergoianiaii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[rgb(40,44,115)] flex items-center justify-center hover:bg-[rgb(176,146,71)] transition-colors duration-300"
                >
                  <Facebook size={24} className="text-white" />
                </a>
                <a
                  href="https://instagram.com/chopp_nattos_Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[rgb(40,44,115)] flex items-center justify-center hover:bg-[rgb(176,146,71)] transition-colors duration-300"
                >
                  <Instagram size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[rgb(245,247,250)] p-8 md:p-12 rounded-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nome completo"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[rgb(176,146,71)] focus:ring-2 focus:ring-[rgb(176,146,71)]/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[rgb(176,146,71)] focus:ring-2 focus:ring-[rgb(176,146,71)]/20 outline-none transition-all"
                />
              </div>
              <div>
                <select
                  required
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[rgb(176,146,71)] focus:ring-2 focus:ring-[rgb(176,146,71)]/20 outline-none transition-all"
                >
                  <option value="">Tipo de evento</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[rgb(176,146,71)] focus:ring-2 focus:ring-[rgb(176,146,71)]/20 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-[rgb(40,44,115)] text-white font-semibold rounded-lg hover:bg-[rgb(176,146,71)] transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
