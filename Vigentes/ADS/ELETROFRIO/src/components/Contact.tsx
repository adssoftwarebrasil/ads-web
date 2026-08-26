import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Nome: ${form.name}%0A` +
      `WhatsApp: ${form.whatsapp}%0A` +
      `E-mail: ${form.email}%0A` +
      `Assunto: ${form.subject}%0A` +
      `Mensagem: ${form.message}`;
    window.open(`http://wa.me/5564999368011?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[rgb(16,130,201)] font-semibold text-lg mb-3">Contato</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Dúvidas ou Sugestões</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você tem dúvidas ou sugestões, a nossa equipe está pronta para ouvir o que você tem a dizer.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[rgb(28,85,163)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[rgb(28,85,163)]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">R. 17, 1 - Setor São João</p>
                    <p className="text-gray-600">Mineiros - GO, 75890-000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[rgb(28,85,163)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[rgb(28,85,163)]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                    <a href="tel:+556436615151" className="text-gray-600 hover:text-[rgb(28,85,163)] transition-colors block">
                      (64) 3661-5151
                    </a>
                    <a
                      href="http://wa.me/5564999368011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(28,85,163)] transition-colors block"
                    >
                      (64) 99936-8011
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[rgb(28,85,163)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[rgb(28,85,163)]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <a href="mailto:eletro_frio@hotmail.com" className="text-gray-600 hover:text-[rgb(28,85,163)] transition-colors">
                      eletro_frio@hotmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.857374787139!2d-52.546727324831195!3d-17.56197588335527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93632f181d41965f%3A0x6ee0fd3e2b102524!2sEletro%20Frio%20Refrigera%C3%A7%C3%A3o%20Assist%C3%AAncia%20T%C3%A9cnica%20Autorizada%20WEG!5e0!3m2!1spt-BR!2sbr!4v1767700599533!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Mineiros Eletro Frio"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(28,85,163)] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(28,85,163)] focus:border-transparent outline-none transition-all"
                    placeholder="(64) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(28,85,163)] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(28,85,163)] focus:border-transparent outline-none transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(28,85,163)] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgb(28,85,163)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(16,130,201)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <Send size={20} className="mr-2" />
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
