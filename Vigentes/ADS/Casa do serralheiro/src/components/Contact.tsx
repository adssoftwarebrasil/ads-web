import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import {
  WHATSAPP_NUMBER,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../constants';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0A%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0AAssunto: ${form.subject}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-[rgb(197,199,196)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-lg text-gray-600">Dúvidas ou sugestões</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(122,21,25)] focus:border-[rgb(122,21,25)] outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(122,21,25)] focus:border-[rgb(122,21,25)] outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(122,21,25)] focus:border-[rgb(122,21,25)] outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(122,21,25)] focus:border-[rgb(122,21,25)] outline-none transition-all"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(122,21,25)] focus:border-[rgb(122,21,25)] outline-none transition-all resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(122,21,25)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(90,15,18)] transition-all duration-300 font-bold text-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[rgb(122,21,25)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua Ruy Barbosa 650, Vila Murad
                      <br />
                      Lavras, MG, 37200-042
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[rgb(122,21,25)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-gray-600 hover:text-[rgb(122,21,25)] transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[rgb(122,21,25)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-gray-600 hover:text-[rgb(122,21,25)] transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-[rgb(122,21,25)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[rgb(122,21,25)] transition-colors"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8!2d-45.0!3d-21.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAwLjAiUyA0NcKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casa do Serralheiro"
                style={{ border: '0px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
