import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    color: 'rgb(22, 126, 79)',
    title: 'Endereço',
    line1: 'R. Paiquerê, 1600 - Jardim Paiquere',
    line2: 'Valinhos - SP, 13271-600',
  },
  {
    icon: Phone,
    color: 'rgb(163, 206, 15)',
    title: 'Telefone',
    line1: '(19) 4117-1827',
    line2: 'Atendimento via telefone e WhatsApp',
  },
  {
    icon: Clock,
    color: 'rgb(227, 97, 222)',
    title: 'Horário',
    line1: 'Seg-Sex: 09:00 às 18:00',
    line2: 'Sáb: 09:00 às 14:00 | Dom: Fechado',
  },
  {
    icon: Mail,
    color: 'rgb(22, 126, 79)',
    title: 'Site',
    line1: 'amoorquideas.com.br',
    line2: 'Visite nosso site oficial',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0AE-mail: ${email}%0ATelefone: ${phone}%0A%0A${message}`;
    window.open(`http://wa.me/551941171827?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Visite nossa loja ou entre em contato
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: card.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-800 font-medium">{card.line1}</p>
                <p className="text-gray-600 text-sm mt-1">{card.line2}</p>
              </div>
            );
          })}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(22,126,79)] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(22,126,79)] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(22,126,79)] focus:outline-none transition-colors"
                    placeholder="(19) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[rgb(22,126,79)] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(22,126,79)] text-white py-4 rounded-xl hover:bg-[rgb(22,126,79)]/90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Enviar via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.181504851333!2d-47.02403042468752!3d-22.980352179203468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cc4c55dd15c1%3A0xf8932aa42b1c57c6!2zT3JxdWlkw6FyaW8gT3JxdcOtZGVhJkNpYQ!5e0!3m2!1spt-BR!2sbr!4v1769094463618!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Orquidário Orquídea&amp;Cia"
                style={{ border: '0px', minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
