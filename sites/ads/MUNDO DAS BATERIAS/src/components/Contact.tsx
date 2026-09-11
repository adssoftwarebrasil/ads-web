import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';

const contactCards = [
  {
    Icon: MapPin,
    title: 'Endereço',
    value: 'Rondonópolis - MT',
    href: null as string | null,
  },
  {
    Icon: Phone,
    title: 'WhatsApp',
    value: '(66) 99914-6648',
    href: 'https://wa.me/5566999146648',
  },
  {
    Icon: Mail,
    title: 'Email',
    value: 'mundodasbateriasroo@gmail.com',
    href: 'mailto:mundodasbateriasroo@gmail.com',
  },
  {
    Icon: Instagram,
    title: 'Instagram',
    value: '@mundodasbateriasroo',
    href: 'https://instagram.com/mundodasbateriasroo',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.%0AAssunto: ${service}%0ATelefone: ${phone}%0AMensagem: ${message}`;
    window.open(`https://wa.me/5566999146648?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(32,29,30)] mb-4">
            Vamos conversar?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato por um dos nossos canais ou preencha
            o formulário.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactCards.map(({ Icon, title, value, href }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-[rgb(234,29,34)] p-3 rounded-lg text-white shadow-md">
                    <Icon width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[rgb(32,29,30)] text-lg mb-1">{title}</h4>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[rgb(234,29,34)] transition-colors font-medium break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative pt-4">
              <div className="absolute inset-0 bg-[rgb(234,29,34)] opacity-5 rounded-2xl transform rotate-1"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Fcartao-visita-baterias.webp"
                alt="Cartão de Visita Mundo das Baterias"
                className="relative rounded-xl shadow-xl w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border-t-4 border-[rgb(234,29,34)]">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle width={32} height={32} className="text-[rgb(234,29,34)]" />
              <h3 className="text-2xl font-bold text-[rgb(32,29,30)]">Envie uma mensagem</h3>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[rgb(234,29,34)] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[rgb(234,29,34)] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[rgb(234,29,34)] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all"
                  >
                    <option value="">Selecione...</option>
                    <option value="Socorro Bateria">Socorro Bateria</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Orçamento">Orçamento</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Como podemos te ajudar?"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[rgb(234,29,34)] focus:ring-2 focus:ring-red-100 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(234,29,34)] text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Enviar via WhatsApp
                <Send
                  width={20}
                  height={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
