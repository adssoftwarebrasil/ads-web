import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AE-mail: ${form.email}%0ATelefone: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/5519982880081?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-[rgb(237,48,54)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Visite nossa loja ou entre em contato
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(61,61,147)] text-white p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">R. Dr. Quirino, 1234 - Centro</p>
                    <p className="text-gray-600">Campinas - SP, 13015-080</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(237,48,54)] text-white p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                    <p className="text-gray-600">WhatsApp: (19) 98288-0081</p>
                    <p className="text-gray-600">Fixo: (19) 3739-9090</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(61,61,147)] text-white p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 08:15 - 17:45</p>
                    <p className="text-gray-600">Sábado: 08:30 - 12:30</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[rgb(237,48,54)] text-white p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Redes Sociais</h4>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="https://www.instagram.com/papelaria.paulino/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[rgb(237,48,54)] transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://www.facebook.com/papelariapaulino/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[rgb(61,61,147)] transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[rgb(61,61,147)] to-[rgb(81,81,187)] p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Atendimento Personalizado</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Aceitamos Vale Cultura e temos estacionamento conveniado ao lado da loja para sua
                comodidade.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa!
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(61,61,147)] focus:border-transparent transition-all outline-none"
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(61,61,147)] focus:border-transparent transition-all outline-none"
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
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(61,61,147)] focus:border-transparent transition-all outline-none"
                  placeholder="(00) 00000-0000"
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
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(61,61,147)] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(237,48,54)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.253599913698!2d-47.061086024689594!3d-22.904015179257115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8b3542e4be9%3A0x75c92c4b7d29a30b!2sPapelaria%20Paulino!5e0!3m2!1spt-BR!2sbr!4v1767630268455!5m2!1spt-BR!2sbr"
            width="100%"
            height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Papelaria Paulino"
            style={{ border: '0px' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
