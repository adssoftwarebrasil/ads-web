import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text =
      `Olá! Meu nome é ${name}.\n` +
      `Telefone: ${phone}\n` +
      (email ? `E-mail: ${email}\n` : '') +
      `Mensagem: ${message}`;
    window.open(`http://wa.me/558199266617?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[rgb(231,195,37)] uppercase tracking-wide mb-2">Contato</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[rgb(12,27,76)] mb-4">Fale Conosco</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Estamos prontos para atendê-lo. Entre em contato e tire suas dúvidas</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-[rgb(12,27,76)] mb-6">Informações de Contato</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(231,195,37)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="lucide lucide-map-pin w-6 h-6 text-[rgb(231,195,37)]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[rgb(12,27,76)] mb-1">Endereço</h5>
                    <p className="text-gray-600">R. Itacari, 334 - Imbiribeira<br />Recife - PE, 51200-080</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(231,195,37)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="lucide lucide-phone w-6 h-6 text-[rgb(231,195,37)]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[rgb(12,27,76)] mb-1">Telefone/WhatsApp</h5>
                    <a href="http://wa.me/558199266617" className="text-gray-600 hover:text-[rgb(231,195,37)] transition-colors">(81) 9 9926-6617</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(231,195,37)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="lucide lucide-mail w-6 h-6 text-[rgb(231,195,37)]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[rgb(12,27,76)] mb-1">E-mail</h5>
                    <a href="mailto:recifecomponentesvendas@gmail.com" className="text-gray-600 hover:text-[rgb(231,195,37)] transition-colors">recifecomponentesvendas@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[rgb(231,195,37)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="lucide lucide-clock w-6 h-6 text-[rgb(231,195,37)]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[rgb(12,27,76)] mb-1">Horário de Funcionamento</h5>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 17h<br />Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-[rgb(12,27,76)] mb-4">Envie Sua Mensagem</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(231,195,37)] focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(231,195,37)] focus:outline-none transition-colors"
                    placeholder="(81) 9 9999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(231,195,37)] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(231,195,37)] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="lucide lucide-send w-5 h-5" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.935004924556!2d-34.91728482499172!3d-8.10810079192096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f8cddd89e21%3A0x6c1f0ed0c605877e!2sRecife%20Componentes-%20Acessorios%20para%20esquadrias%20de%20aluminio%20e%20vidro!5e0!3m2!1spt-BR!2sbr!4v1770914680938!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Recife Componentes"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
