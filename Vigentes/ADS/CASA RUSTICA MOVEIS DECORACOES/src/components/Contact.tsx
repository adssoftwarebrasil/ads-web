import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_PLAIN } from '../shared';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.%0A` +
      `Email: ${email}%0A` +
      `Telefone: ${phone}%0A%0A` +
      `${message}`;
    window.open(`https://wa.me/553497264665?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(5,86,77)] mb-4">Venha Nos Visitar!</h2>
          <div className="w-24 h-1 bg-[rgb(248,177,1)] mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[rgb(5,86,77)] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(5,86,77)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">Av. Rondon Pacheco, 1915 - Lídice</p>
                    <p className="text-gray-600">Uberlândia - MG, 38400-242</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(248,177,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Telefone/WhatsApp</h4>
                    <a href={WHATSAPP_PLAIN} className="text-[rgb(5,86,77)] hover:text-[rgb(248,177,1)] transition-colors">
                      (34) 99726-4665
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(5,86,77)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:alessandrapsduraes@hotmail.com" className="text-[rgb(5,86,77)] hover:text-[rgb(248,177,1)] transition-colors">
                      alessandrapsduraes@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[rgb(248,177,1)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 15h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[rgb(5,86,77)] mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(5,86,77)] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(5,86,77)] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(5,86,77)] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(5,86,77)] focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[rgb(248,177,1)] text-white px-6 py-4 rounded-lg hover:bg-[rgb(228,157,0)] transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0860757780297!2d-48.2752649!3d-18.9275838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445d0dff9f53b%3A0x8c531094c3f37ae5!2sCasa%20R%C3%BAstica%20-%20M%C3%B3veis%20Decora%C3%A7%C3%B5es%20e%20Enxovais!5e0!3m2!1spt-PT!2sbr!4v1761224593075!5m2!1spt-PT!2sbr"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Casa Rústica Uberlândia"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
